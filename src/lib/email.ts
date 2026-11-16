import { Resend } from "resend";
import { siteConfig } from "./site-config";
import type { ContactSubmission } from "./types";

/**
 * Gửi email thông báo cho công ty khi có khách hàng gửi yêu cầu tư vấn qua
 * website. Yêu cầu vẫn được lưu vào Supabase như bình thường dù email có
 * gửi được hay không — đây là kênh thông báo độc lập.
 *
 * Ưu tiên gửi qua Microsoft Graph (hộp thư Microsoft 365 sẵn có của công ty,
 * cấu hình qua MS_GRAPH_*) nếu đã cấu hình đủ biến môi trường. Nếu chưa,
 * dùng Resend (RESEND_API_KEY) làm phương án dự phòng.
 */
export async function sendContactNotification(submission: ContactSubmission) {
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.contact.email;
  const subjectLine = `Yêu cầu tư vấn mới từ website — ${submission.subject}`;
  const html = buildEmailHtml(submission);

  if (isGraphConfigured()) {
    return sendViaGraph({ toEmail, subjectLine, html, replyTo: submission.email });
  }

  return sendViaResend({ toEmail, subjectLine, html, replyTo: submission.email });
}

function isGraphConfigured() {
  return Boolean(
    process.env.MS_GRAPH_TENANT_ID &&
      process.env.MS_GRAPH_CLIENT_ID &&
      process.env.MS_GRAPH_CLIENT_SECRET &&
      process.env.MS_GRAPH_SENDER_EMAIL,
  );
}

async function sendViaGraph(args: {
  toEmail: string;
  subjectLine: string;
  html: string;
  replyTo: string;
}) {
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
            subject: args.subjectLine,
            body: { contentType: "HTML", content: args.html },
            toRecipients: [{ emailAddress: { address: args.toEmail } }],
            replyTo: [{ emailAddress: { address: args.replyTo } }],
          },
          saveToSentItems: true,
        }),
      },
    );

    if (!sendRes.ok) {
      console.error("[email] Lỗi khi gửi email thông báo qua Microsoft Graph:", await sendRes.text());
      return { sent: false };
    }

    return { sent: true };
  } catch (err) {
    console.error("[email] Lỗi không xác định khi gửi email qua Microsoft Graph:", err);
    return { sent: false };
  }
}

async function sendViaResend(args: {
  toEmail: string;
  subjectLine: string;
  html: string;
  replyTo: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[email] Chưa cấu hình Microsoft Graph hay RESEND_API_KEY — bỏ qua gửi email thông báo yêu cầu liên hệ.",
    );
    return { sent: false };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "NTVLaw Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: args.toEmail,
      replyTo: args.replyTo,
      subject: args.subjectLine,
      html: args.html,
    });

    if (error) {
      console.error("[email] Lỗi khi gửi email thông báo qua Resend:", error.message);
      return { sent: false };
    }

    return { sent: true };
  } catch (err) {
    console.error("[email] Lỗi không xác định khi gửi email thông báo:", err);
    return { sent: false };
  }
}

function buildEmailHtml({ name, email, phone, subject, message }: ContactSubmission) {
  return `
    <div style="font-family: sans-serif; font-size: 14px; color: #2b2b2c; line-height: 1.6;">
      <h2 style="color: #8B0000;">Yêu cầu tư vấn mới từ website ${siteConfig.name}</h2>
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
