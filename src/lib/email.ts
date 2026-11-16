import { Resend } from "resend";
import { siteConfig } from "./site-config";
import type { ContactSubmission } from "./types";

/**
 * Xử lý email khi khách gửi form "Đặt lịch tư vấn":
 *   1. Gửi email THÔNG BÁO cho công ty (vunt@ntvlaw.vn) kèm thông tin khách.
 *   2. Gửi email CẢM ƠN/XÁC NHẬN tự động về cho chính khách hàng.
 *
 * Kênh gửi ưu tiên Microsoft Graph (hộp thư Microsoft 365 công ty, cấu hình
 * qua MS_GRAPH_*); nếu chưa cấu hình thì dùng Resend (RESEND_API_KEY). Việc
 * gửi là "best-effort": yêu cầu vẫn được lưu vào Supabase dù email có gửi
 * được hay không. Giá trị trả về `sent` phản ánh email THÔNG BÁO cho công ty
 * (email quan trọng nhất — để không bỏ lỡ khách).
 */
export async function sendContactNotification(submission: ContactSubmission) {
  const toNotify = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.contact.email;

  // Email thông báo cho công ty — Reply-To là email khách để bấm "Trả lời"
  // là phản hồi thẳng cho khách.
  const notify = await sendEmail({
    to: toNotify,
    replyTo: submission.email,
    subject: `Yêu cầu tư vấn mới từ website — ${submission.subject}`,
    html: buildNotificationHtml(submission),
  });

  // Email cảm ơn gửi về cho khách — Reply-To là email công ty để khách trả
  // lời là về đúng hộp thư công ty. Không chặn kết quả chung nếu lỗi.
  void sendEmail({
    to: submission.email,
    replyTo: siteConfig.contact.email,
    subject: `Cảm ơn bạn đã liên hệ ${siteConfig.name} — chúng tôi đã nhận được yêu cầu của bạn`,
    html: buildAcknowledgementHtml(submission),
  });

  return { sent: notify.sent };
}

type MailArgs = { to: string; replyTo: string; subject: string; html: string };

async function sendEmail(args: MailArgs) {
  if (isGraphConfigured()) {
    return sendViaGraph(args);
  }
  return sendViaResend(args);
}

function isGraphConfigured() {
  return Boolean(
    process.env.MS_GRAPH_TENANT_ID &&
      process.env.MS_GRAPH_CLIENT_ID &&
      process.env.MS_GRAPH_CLIENT_SECRET &&
      process.env.MS_GRAPH_SENDER_EMAIL,
  );
}

async function sendViaGraph(args: MailArgs) {
  const tenantId = process.env.MS_GRAPH_TENANT_ID!;
  const clientId = process.env.MS_GRAPH_CLIENT_ID!;
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET!;
  const senderEmail = process.env.MS_GRAPH_SENDER_EMAIL!;

  try {
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      },
    );

    if (!tokenRes.ok) {
      console.error(
        "[email] Lỗi khi lấy access token từ Microsoft Graph:",
        await tokenRes.text(),
      );
      return { sent: false };
    }

    const { access_token: accessToken } = (await tokenRes.json()) as { access_token: string };

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: args.subject,
            body: { contentType: "HTML", content: args.html },
            toRecipients: [{ emailAddress: { address: args.to } }],
            replyTo: [{ emailAddress: { address: args.replyTo } }],
          },
          saveToSentItems: true,
        }),
      },
    );

    if (!sendRes.ok) {
      console.error("[email] Lỗi khi gửi email qua Microsoft Graph:", await sendRes.text());
      return { sent: false };
    }

    return { sent: true };
  } catch (err) {
    console.error("[email] Lỗi không xác định khi gửi email qua Microsoft Graph:", err);
    return { sent: false };
  }
}

async function sendViaResend(args: MailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[email] Chưa cấu hình Microsoft Graph hay RESEND_API_KEY — bỏ qua gửi email.",
    );
    return { sent: false };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "NTVLaw Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: args.to,
      replyTo: args.replyTo,
      subject: args.subject,
      html: args.html,
    });

    if (error) {
      console.error("[email] Lỗi khi gửi email qua Resend:", error.message);
      return { sent: false };
    }

    return { sent: true };
  } catch (err) {
    console.error("[email] Lỗi không xác định khi gửi email qua Resend:", err);
    return { sent: false };
  }
}

/** Email thông báo nội bộ cho công ty khi có yêu cầu mới. */
function buildNotificationHtml({ name, email, phone, subject, message }: ContactSubmission) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #00142b; line-height: 1.6;">
      <h2 style="color: #007f3f; margin: 0 0 12px;">Yêu cầu tư vấn mới từ website ${siteConfig.name}</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        <tr><td><strong>Họ tên</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Số điện thoại</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Chủ đề</strong></td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <p style="margin-top: 16px;"><strong>Nội dung:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <p style="margin-top: 24px; color: #6b6b6d; font-size: 12px;">
        Email này được gửi tự động từ form Liên hệ trên website ${siteConfig.url}.
        Bấm "Trả lời" để phản hồi trực tiếp cho khách hàng.
      </p>
    </div>
  `;
}

/**
 * Email cảm ơn/xác nhận tự động gửi về cho khách hàng. Dùng bố cục bảng +
 * style nội tuyến để hiển thị ổn định trên mọi ứng dụng email (Outlook,
 * Gmail, điện thoại...).
 */
function buildAcknowledgementHtml({ name, subject, message }: ContactSubmission) {
  const hotlineTel = siteConfig.contact.hotline.replace(/\s/g, "");
  return `
  <div style="margin:0;padding:0;background-color:#f4f6f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f5;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 1px 4px rgba(0,20,43,0.08);font-family:Arial,Helvetica,sans-serif;">
            <!-- Dải thương hiệu -->
            <tr>
              <td style="background-color:#007f3f;padding:30px 32px;text-align:center;">
                <div style="color:#ffffff;font-size:24px;font-weight:bold;letter-spacing:2px;">NTVLaw</div>
                <div style="color:#d7f0e2;font-size:13px;margin-top:4px;">${siteConfig.shortLegalName}</div>
              </td>
            </tr>
            <tr><td style="background-color:#f27638;height:4px;line-height:4px;font-size:0;">&nbsp;</td></tr>

            <!-- Nội dung -->
            <tr>
              <td style="padding:36px 32px 8px;">
                <h1 style="margin:0 0 16px;font-size:22px;color:#00142b;">Cảm ơn bạn đã liên hệ!</h1>
                <p style="margin:0 0 14px;font-size:15px;color:#2b2b2c;line-height:1.7;">
                  Kính gửi <strong>${escapeHtml(name)}</strong>,
                </p>
                <p style="margin:0 0 20px;font-size:15px;color:#2b2b2c;line-height:1.7;">
                  ${siteConfig.name} đã nhận được yêu cầu tư vấn của bạn. Đội ngũ luật sư của chúng tôi
                  sẽ xem xét và phản hồi trong thời gian sớm nhất, thường trong vòng
                  <strong>24 giờ làm việc</strong>.
                </p>

                <!-- Hộp tóm tắt yêu cầu -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f9f4;border-left:4px solid #007f3f;border-radius:8px;margin:0 0 24px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#045c2e;font-weight:bold;margin-bottom:10px;">
                        Yêu cầu của bạn
                      </div>
                      <div style="font-size:14px;color:#00142b;margin-bottom:6px;">
                        <strong>Chủ đề:</strong> ${escapeHtml(subject)}
                      </div>
                      <div style="font-size:14px;color:#00142b;white-space:pre-wrap;line-height:1.6;">
                        <strong>Nội dung:</strong> ${escapeHtml(message)}
                      </div>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px;font-size:15px;color:#2b2b2c;line-height:1.7;">
                  Nếu cần hỗ trợ gấp, bạn có thể gọi trực tiếp tới hotline của chúng tôi:
                </p>

                <!-- Nút hotline -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                  <tr>
                    <td style="border-radius:8px;background-color:#007f3f;">
                      <a href="tel:${hotlineTel}" style="display:inline-block;padding:13px 26px;font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;">
                        &#9742;&nbsp; ${siteConfig.contact.hotline}
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 4px;font-size:15px;color:#2b2b2c;line-height:1.7;">
                  Trân trọng,
                </p>
                <p style="margin:0 0 28px;font-size:15px;color:#00142b;font-weight:bold;line-height:1.7;">
                  Đội ngũ ${siteConfig.name}
                </p>
              </td>
            </tr>

            <!-- Chân email -->
            <tr>
              <td style="background-color:#00142b;padding:26px 32px;">
                <div style="color:#ffffff;font-size:14px;font-weight:bold;margin-bottom:10px;">
                  ${siteConfig.fullName}
                </div>
                <div style="color:#aeb9c7;font-size:12px;line-height:1.8;">
                  &#128205; ${siteConfig.contact.address}<br/>
                  &#128222; ${siteConfig.contact.hotline} &nbsp;&nbsp; &#9993; ${siteConfig.contact.email}<br/>
                  &#128336; ${siteConfig.contact.workingHours}
                </div>
                <div style="color:#7f8a99;font-size:11px;line-height:1.7;margin-top:14px;border-top:1px solid #1c3350;padding-top:12px;">
                  GĐKHĐ số ${siteConfig.license.number} do ${siteConfig.license.issuer} cấp.<br/>
                  Bạn nhận được email này vì đã gửi yêu cầu tư vấn tại ${siteConfig.url}.
                  Bạn có thể trả lời email này để liên hệ với chúng tôi.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
