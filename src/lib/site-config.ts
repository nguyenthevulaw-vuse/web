/**
 * Cấu hình chung của website.
 *
 * File này là nơi DUY NHẤT bạn cần chỉnh sửa để thay đổi tên công ty, thông
 * tin liên hệ, mạng xã hội... Toàn bộ website sẽ tự động cập nhật theo.
 *
 * ⚠️ Đây là thông tin MẪU (placeholder) — hãy thay bằng thông tin thật của
 * công ty luật của bạn trước khi đưa website vào sử dụng chính thức.
 */
export const siteConfig = {
  name: "An Tín Law",
  fullName: "Công ty Luật TNHH An Tín",
  shortName: "An Tín",
  tagline: "Đồng hành pháp lý cùng doanh nghiệp và cá nhân",
  description:
    "An Tín Law là công ty luật cung cấp dịch vụ tư vấn pháp lý toàn diện cho doanh nghiệp và cá nhân, đồng thời chia sẻ kiến thức pháp luật hữu ích tới cộng đồng.",
  url: "https://example.com",
  locale: "vi_VN",

  contact: {
    hotline: "1900 6868",
    phone: "+84 28 1234 5678",
    email: "contact@antinlaw.vn",
    address: "Tầng 12, Tòa nhà ATLAW, 123 Nguyễn Huệ, Phường Bến Nghé, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:30 | Thứ 7: 8:00 - 12:00",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.399!2d106.7009!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1svi!2s!4v1700000000000",
  },

  social: {
    facebook: "https://facebook.com/antinlaw",
    linkedin: "https://linkedin.com/company/antinlaw",
    youtube: "https://youtube.com/@antinlaw",
    zalo: "https://zalo.me/antinlaw",
  },

  nav: [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Dịch vụ pháp lý", href: "/dich-vu" },
    { label: "Đội ngũ luật sư", href: "/doi-ngu" },
    { label: "Kiến thức pháp luật", href: "/kien-thuc-phap-luat" },
    { label: "Hỏi đáp", href: "/hoi-dap" },
    { label: "Liên hệ", href: "/lien-he" },
  ],

  footerLegalLinks: [
    { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    { label: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" },
  ],

  stats: [
    { label: "Năm kinh nghiệm", value: "15+" },
    { label: "Khách hàng đã phục vụ", value: "1.200+" },
    { label: "Vụ việc thành công", value: "3.500+" },
    { label: "Luật sư & chuyên viên", value: "40+" },
  ],
};

export type SiteConfig = typeof siteConfig;
