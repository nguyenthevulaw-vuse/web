/**
 * Cấu hình chung của website.
 *
 * File này là nơi DUY NHẤT bạn cần chỉnh sửa để thay đổi tên công ty, thông
 * tin liên hệ, mạng xã hội... Toàn bộ website sẽ tự động cập nhật theo.
 *
 * Thông tin công ty, luật sư và số Giấy đăng ký hoạt động lấy theo
 * "Giấy đăng ký hoạt động của văn phòng luật sư/công ty luật TNHH một
 * thành viên" số 79.2011.02.1589/TP/ĐKHĐ do Sở Tư pháp TP. Hồ Chí Minh cấp
 * (cấp lần đầu 14/10/2011, thay đổi lần thứ 4 ngày 12/11/2025).
 *
 * ⚠️ Email, website và mạng xã hội KHÔNG có trong hồ sơ đăng ký nên chưa
 * điền — hãy cập nhật lại giá trị thật ở các trường tương ứng bên dưới.
 */
export const siteConfig = {
  name: "NTVLaw",
  fullName: "Công ty Luật Trách nhiệm hữu hạn Một thành viên Nguyễn Thế Vũ",
  // Tên rút gọn theo cách viết tắt pháp lý phổ biến (TNHH MTV) — dùng ở
  // những chỗ không đủ chỗ hiển thị tên đầy đủ (ví dụ dòng phụ đề ở Header).
  shortLegalName: "Công ty Luật TNHH MTV Nguyễn Thế Vũ",
  shortName: "NTVLaw",
  tradingName: "NTV LAW",
  tagline: "Your Trusted Legal Partner",
  description:
    "NTVLaw là công ty luật cung cấp dịch vụ tư vấn pháp lý, tham gia tố tụng và đại diện ngoài tố tụng cho doanh nghiệp và cá nhân, đồng thời chia sẻ kiến thức pháp luật hữu ích tới cộng đồng.",
  url: "https://ntvlaw.vn",
  locale: "vi_VN",

  // Thông tin đăng ký hoạt động — hiển thị ở Footer/Giới thiệu để tăng độ tin cậy.
  license: {
    number: "79.2011.02.1589/TP/ĐKHĐ",
    issuer: "Sở Tư pháp Thành phố Hồ Chí Minh",
    issuedFirstDate: "14/10/2011",
    lastAmendedDate: "12/11/2025",
  },

  // Người đại diện theo pháp luật.
  director: {
    name: "Nguyễn Thế Vũ",
    title: "Giám đốc",
    barCardNumber: "6396",
    barCardDate: "25/7/2011",
    barAssociation: "Đoàn Luật sư Thành phố Hồ Chí Minh",
  },

  // Phạm vi hành nghề theo Giấy đăng ký hoạt động.
  practiceScope: [
    "Tham gia tố tụng theo quy định của pháp luật",
    "Tư vấn pháp luật",
    "Đại diện ngoài tố tụng để thực hiện các công việc có liên quan đến pháp luật",
    "Thực hiện các dịch vụ pháp lý khác theo quy định pháp luật",
  ],

  contact: {
    hotline: "0938 676 864",
    email: "vunt@ntvlaw.vn",
    address: "52/1 Quốc lộ 1, Phường Tăng Nhơn Phú, Thành phố Hồ Chí Minh",
    workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:30 | Thứ 7: 8:00 - 12:00",
    mapEmbedUrl:
      "https://www.google.com/maps?q=52%2F1+Qu%E1%BB%91c+l%E1%BB%99+1%2C+Ph%C6%B0%E1%BB%9Dng+T%C4%83ng+Nh%C6%A1n+Ph%C3%BA%2C+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh&output=embed",
  },

  // Chưa có thông tin mạng xã hội chính thức trong hồ sơ — điền link thật vào
  // đây khi có, mục nào để trống ("") sẽ tự động ẩn khỏi Footer.
  social: {
    facebook: "",
    linkedin: "",
    youtube: "",
    zalo: "",
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

  // Chỉ đưa vào những số liệu có thể xác thực từ hồ sơ đăng ký — không dùng
  // số liệu ước lượng (số khách hàng, số vụ việc...) khi chưa có dữ liệu thật.
  stats: [
    { label: "Năm kinh nghiệm hành nghề", value: "15+" },
    { label: "Năm thành lập", value: "2011" },
    { label: "Lĩnh vực hành nghề", value: "04" },
    { label: "Bảo mật thông tin khách hàng", value: "100%" },
  ],
};

export type SiteConfig = typeof siteConfig;
