import { Resend } from "resend";
import { siteConfig } from "./site-config";
import type { ContactSubmission } from "./types";

/**
 * Gửi email thông báo cho công ty khi có khách hàng gửi yêu cầu tư vấn qua
 * website. Chỉ hoạt động khi đã cấu hình `RESEND_API_KEY` — nếu chưa, hàm
 * bỏ qua (yêu cầu vẫn được lưu vào Supabase như bình thường, chỉ là không
 * có email nhắc).
 *
 * Mặc định gửi từ `onboarding@resend.dev` (địa chỉ dùng thử của Resend,
 * gửi được ngay không cần xác minh tên miền). Khi đã xác minh tên miền
 * ntvlaw.vn trên Resend, đổi `RESEND_FROM_EMAIL` sang một địa chỉ thuộc
 * tên miền riêng (vd. "NTVLaw <noreply@ntvlaw.vn>") để tăng độ tin cậy khi
 * gửi và tránh bị đánh dấu spam.
 */
export async function sendContactNotification(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[email] Chưa cấu hình RESEND_API_KEY — bỏ qua gửi email thông báo yêu cầu liên hệ.",
    );
    return { sent: false };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "NTVLaw Website <onboarding@resend.dev>";
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.contact.email;

  const { name, email, phone, subject, message } = submission;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Yêu cầu tư vấn mới từ website — ${subject}`,
      html: `
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
      `,
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
