import type { Article, FaqItem, PracticeArea, TeamMember } from "./types";

/**
 * Dữ liệu mẫu (fallback data).
 *
 * Website sẽ ưu tiên lấy dữ liệu từ Supabase. Nếu chưa cấu hình Supabase
 * (chưa có biến môi trường) hoặc truy vấn lỗi, website sẽ tự động dùng dữ
 * liệu mẫu bên dưới để trang vẫn hiển thị đầy đủ nội dung — tiện cho việc
 * phát triển và xem trước (preview) trên Vercel trước khi kết nối Supabase.
 *
 * Dữ liệu này cũng chính là nội dung được nạp vào Supabase thông qua
 * file `supabase/seed.sql`.
 */

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    slug: "tu-van-doanh-nghiep",
    title: "Tư vấn Doanh nghiệp",
    summary:
      "Thành lập doanh nghiệp, quản trị nội bộ, mua bán & sáp nhập (M&A), tái cấu trúc.",
    content:
      "Chúng tôi tư vấn toàn diện cho doanh nghiệp từ giai đoạn thành lập, xây dựng điều lệ, quy chế quản trị nội bộ, đến các giao dịch mua bán - sáp nhập (M&A), tái cấu trúc doanh nghiệp và tuân thủ pháp luật trong suốt quá trình hoạt động.",
    icon: "Building2",
    order: 1,
  },
  {
    id: "2",
    slug: "dau-tu-nuoc-ngoai",
    title: "Đầu tư nước ngoài",
    summary: "Tư vấn thủ tục đầu tư, giấy phép đầu tư, hợp tác kinh doanh xuyên biên giới.",
    content:
      "Hỗ trợ nhà đầu tư nước ngoài xin cấp Giấy chứng nhận đăng ký đầu tư, Giấy chứng nhận đăng ký doanh nghiệp, tư vấn cơ cấu đầu tư tối ưu và các vấn đề pháp lý liên quan đến hoạt động đầu tư tại Việt Nam.",
    icon: "Globe2",
    order: 2,
  },
  {
    id: "3",
    slug: "so-huu-tri-tue",
    title: "Sở hữu trí tuệ",
    summary: "Đăng ký nhãn hiệu, bản quyền, xử lý xâm phạm quyền sở hữu trí tuệ.",
    content:
      "Đại diện khách hàng thực hiện thủ tục đăng ký, bảo hộ nhãn hiệu, kiểu dáng công nghiệp, quyền tác giả; tư vấn chiến lược khai thác tài sản trí tuệ và xử lý các hành vi xâm phạm.",
    icon: "Lightbulb",
    order: 3,
  },
  {
    id: "4",
    slug: "dat-dai-bat-dong-san",
    title: "Đất đai - Bất động sản",
    summary: "Tư vấn giao dịch, tranh chấp đất đai, pháp lý dự án bất động sản.",
    content:
      "Tư vấn pháp lý cho các giao dịch chuyển nhượng, cho thuê bất động sản, thẩm định pháp lý dự án, hỗ trợ giải quyết tranh chấp đất đai và các thủ tục hành chính liên quan.",
    icon: "Landmark",
    order: 4,
  },
  {
    id: "5",
    slug: "hon-nhan-gia-dinh",
    title: "Hôn nhân & Gia đình",
    summary: "Ly hôn, phân chia tài sản, quyền nuôi con, thừa kế.",
    content:
      "Tư vấn và đại diện khách hàng trong các vụ việc ly hôn, phân chia tài sản chung, tranh chấp quyền nuôi con, cấp dưỡng và các vấn đề thừa kế trong gia đình.",
    icon: "HeartHandshake",
    order: 5,
  },
  {
    id: "6",
    slug: "lao-dong",
    title: "Lao động",
    summary: "Hợp đồng lao động, kỷ luật lao động, giải quyết tranh chấp lao động.",
    content:
      "Tư vấn xây dựng nội quy lao động, hợp đồng lao động, xử lý kỷ luật, chấm dứt hợp đồng lao động đúng quy định và đại diện giải quyết tranh chấp lao động cho cả người lao động và người sử dụng lao động.",
    icon: "Briefcase",
    order: 6,
  },
  {
    id: "7",
    slug: "tranh-tung-giai-quyet-tranh-chap",
    title: "Tranh tụng & Giải quyết tranh chấp",
    summary: "Đại diện tham gia tố tụng tại Tòa án, Trọng tài thương mại.",
    content:
      "Luật sư giàu kinh nghiệm tranh tụng, trực tiếp đại diện và bảo vệ quyền, lợi ích hợp pháp của khách hàng tại Tòa án các cấp và các Trung tâm Trọng tài thương mại.",
    icon: "Scale",
    order: 7,
  },
  {
    id: "8",
    slug: "hop-dong",
    title: "Soạn thảo & Rà soát Hợp đồng",
    summary: "Soạn thảo, rà soát, đàm phán hợp đồng thương mại, dân sự.",
    content:
      "Soạn thảo, rà soát và tư vấn đàm phán các loại hợp đồng thương mại, dân sự, hợp đồng lao động nhằm giảm thiểu rủi ro pháp lý cho khách hàng trước khi ký kết.",
    icon: "FileSignature",
    order: 8,
  },
];

// Đội ngũ hiện tại theo Giấy đăng ký hoạt động: NTVLaw là công ty luật TNHH
// một thành viên do LS. Nguyễn Thế Vũ làm chủ sở hữu kiêm Giám đốc, đồng thời
// là người đại diện theo pháp luật. Khi công ty có thêm luật sư/chuyên viên,
// thêm hồ sơ mới vào đây (hoặc qua Supabase Table Editor).
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "nguyen-the-vu",
    name: "LS. Nguyễn Thế Vũ",
    title: "Giám đốc",
    summary: "Thẻ luật sư số 6396 — Thành viên Đoàn Luật sư TP. Hồ Chí Minh.",
    bio: "Luật sư Nguyễn Thế Vũ là người sáng lập và Giám đốc NTVLaw, được cấp Thẻ luật sư số 6396 ngày 25/7/2011, thành viên Đoàn Luật sư Thành phố Hồ Chí Minh. Luật sư trực tiếp phụ trách tư vấn pháp luật, tham gia tố tụng và đại diện ngoài tố tụng cho khách hàng là doanh nghiệp và cá nhân.",
    initials: "NTV",
    order: 1,
  },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "diem-moi-luat-doanh-nghiep",
    title: "Những điểm cần lưu ý khi thành lập doanh nghiệp năm 2026",
    excerpt:
      "Tổng hợp các quy định mới nhất về trình tự, thủ tục thành lập doanh nghiệp mà nhà đầu tư cần nắm rõ.",
    content:
      "Bài viết tổng hợp các quy định hiện hành về trình tự, thủ tục thành lập doanh nghiệp, hồ sơ đăng ký kinh doanh, các loại hình doanh nghiệp phổ biến và những lưu ý quan trọng giúp nhà đầu tư tránh sai sót trong quá trình khởi nghiệp.",
    category: "doanh-nghiep",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-20",
  },
  {
    id: "2",
    slug: "quy-dinh-hop-dong-lao-dong",
    title: "5 điều khoản không thể thiếu trong hợp đồng lao động",
    excerpt:
      "Hợp đồng lao động cần đảm bảo những nội dung nào để bảo vệ quyền lợi của cả người lao động và doanh nghiệp?",
    content:
      "Bài viết phân tích các điều khoản bắt buộc trong hợp đồng lao động theo quy định pháp luật hiện hành, giúp doanh nghiệp và người lao động hiểu rõ quyền, nghĩa vụ của mình khi giao kết hợp đồng.",
    category: "lao-dong",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-12",
  },
  {
    id: "3",
    slug: "thu-tuc-ly-hon-thuan-tinh",
    title: "Hướng dẫn thủ tục ly hôn thuận tình mới nhất",
    excerpt: "Quy trình, hồ sơ và thời gian giải quyết ly hôn thuận tình tại Tòa án.",
    content:
      "Bài viết hướng dẫn chi tiết hồ sơ, trình tự nộp đơn và thời gian giải quyết yêu cầu công nhận thuận tình ly hôn tại Tòa án nhân dân có thẩm quyền.",
    category: "hon-nhan-gia-dinh",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-07-28",
  },
  {
    id: "4",
    slug: "quy-dinh-cap-giay-chung-nhan-quyen-su-dung-dat",
    title: "Điều kiện và hồ sơ cấp Giấy chứng nhận quyền sử dụng đất",
    excerpt: "Những điều kiện cần đáp ứng và hồ sơ cần chuẩn bị khi làm sổ đỏ, sổ hồng.",
    content:
      "Bài viết cung cấp thông tin về điều kiện, thành phần hồ sơ và trình tự thủ tục xin cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất.",
    category: "dat-dai",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-07-15",
  },
  {
    id: "5",
    slug: "dang-ky-bao-ho-nhan-hieu",
    title: "Quy trình đăng ký bảo hộ nhãn hiệu cho doanh nghiệp",
    excerpt: "Các bước cần thực hiện để bảo hộ thương hiệu, tránh bị xâm phạm quyền sở hữu trí tuệ.",
    content:
      "Bài viết trình bày quy trình tra cứu, nộp đơn và theo dõi hồ sơ đăng ký bảo hộ nhãn hiệu tại Cục Sở hữu trí tuệ, cùng những lưu ý giúp tăng khả năng đơn đăng ký được chấp thuận.",
    category: "doanh-nghiep",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-06-30",
  },
  {
    id: "6",
    slug: "trach-nhiem-hinh-su-phap-nhan",
    title: "Trách nhiệm hình sự của pháp nhân thương mại: Những điều cần biết",
    excerpt: "Doanh nghiệp có thể phải chịu trách nhiệm hình sự trong những trường hợp nào?",
    content:
      "Bài viết phân tích các quy định về trách nhiệm hình sự của pháp nhân thương mại, các tội danh pháp nhân có thể bị truy cứu và biện pháp phòng ngừa rủi ro pháp lý cho doanh nghiệp.",
    category: "hinh-su",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-06-18",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "1",
    question: "Chi phí tư vấn pháp lý ban đầu có mất phí không?",
    answer:
      "NTVLaw cung cấp buổi tư vấn sơ bộ ban đầu miễn phí để đánh giá tổng quan vụ việc. Chi phí dịch vụ cụ thể sẽ được báo giá minh bạch sau khi luật sư nắm rõ yêu cầu và phạm vi công việc của khách hàng.",
    category: "chung",
  },
  {
    id: "2",
    question: "Thời gian giải quyết một vụ việc tranh chấp thường mất bao lâu?",
    answer:
      "Thời gian giải quyết phụ thuộc vào tính chất, mức độ phức tạp của từng vụ việc và trình tự tố tụng áp dụng. Luật sư sẽ tư vấn cụ thể về lộ trình và thời gian dự kiến ngay từ buổi làm việc đầu tiên.",
    category: "chung",
  },
  {
    id: "3",
    question: "Doanh nghiệp nước ngoài có thể thành lập công ty 100% vốn tại Việt Nam không?",
    answer:
      "Tùy theo ngành nghề kinh doanh, pháp luật Việt Nam cho phép nhà đầu tư nước ngoài thành lập doanh nghiệp 100% vốn đầu tư nước ngoài trong nhiều lĩnh vực. Một số ngành nghề có điều kiện về tỷ lệ sở hữu vốn hoặc hình thức đầu tư.",
    category: "doanh-nghiep",
  },
  {
    id: "4",
    question: "Khi ly hôn, tài sản hình thành trong thời kỳ hôn nhân được chia như thế nào?",
    answer:
      "Về nguyên tắc, tài sản chung của vợ chồng được chia đôi nhưng có tính đến các yếu tố như công sức đóng góp, hoàn cảnh của mỗi bên, lợi ích chính đáng của mỗi bên trong sản xuất, kinh doanh và lỗi của mỗi bên (nếu có).",
    category: "hon-nhan-gia-dinh",
  },
  {
    id: "5",
    question: "Người sử dụng lao động có được đơn phương chấm dứt hợp đồng lao động không?",
    answer:
      "Người sử dụng lao động chỉ được đơn phương chấm dứt hợp đồng lao động trong các trường hợp pháp luật quy định và phải tuân thủ đúng thời hạn báo trước, nếu không sẽ phải bồi thường theo quy định pháp luật.",
    category: "lao-dong",
  },
];
