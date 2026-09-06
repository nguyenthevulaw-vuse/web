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
    summary: "Người sáng lập và Giám đốc NTVLaw.",
    bio: "Luật sư Nguyễn Thế Vũ là người sáng lập và Giám đốc NTVLaw. Luật sư có nhiều năm kinh nghiệm tư vấn pháp lý doanh nghiệp, tái cấu trúc, quản trị rủi ro và tố tụng tranh chấp. Trải qua các vị trí tư vấn và quản lý pháp chế tại những thương hiệu lớn như Trung Nguyên Coffee, Giấy Sài Gòn, Tập đoàn Xây dựng Hòa Bình và Quỹ ASIF Foundation, ông sở hữu am hiểu sâu sắc về vận hành nội bộ, hoạt động đầu tư, xây dựng dự án cũng như cơ chế quản trị của các tổ chức xã hội phi lợi nhuận.",
    initials: "NTV",
    order: 1,
    image: "/doi-ngu/nguyen-the-vu.jpg",
    highlights: [
      {
        title: "Tận tâm",
        description:
          "Luôn đồng hành, lắng nghe và đặt lợi ích hợp pháp cùng sự an toàn của khách hàng làm trọng tâm trong mọi tư vấn pháp lý.",
      },
      {
        title: "Minh bạch",
        description:
          "Rõ ràng về phương án, quy trình, rủi ro pháp lý và chi phí dịch vụ, mang lại sự tin tưởng tuyệt đối cho đối tác và khách hàng.",
      },
      {
        title: "Thực chiến & Toàn diện",
        description:
          "Kết hợp giữa lý luận pháp lý vững chắc và kinh nghiệm quản trị thực tế từ các tập đoàn đa ngành.",
      },
    ],
    expertise: [
      "Tư vấn Pháp lý Doanh nghiệp, Đầu tư & M&A",
      "Luật Bất động sản, Xây dựng & Dự án",
      "Tố tụng & Giải quyết Tranh chấp Thương mại / Đất đai",
      "Cố vấn Pháp lý & Quản trị cho các Tổ chức Xã hội, Doanh nghiệp Xã hội (DNXH)",
    ],
  },
  {
    id: "2",
    slug: "vo-thi-phuong-vy",
    name: "Võ Thị Phương Vy",
    title: "Chuyên viên Pháp lý",
    summary: "Hơn 5 năm kinh nghiệm pháp chế doanh nghiệp và hành chính nhân sự.",
    bio: "Võ Thị Phương Vy là Cử nhân Luật Kinh tế, hiện đang tham gia khóa đào tạo nghề Luật sư. Với hơn 5 năm kinh nghiệm ở vị trí pháp chế kiêm hành chính nhân sự tại nhiều doanh nghiệp, chị phụ trách soạn thảo và rà soát hợp đồng, thủ tục đăng ký doanh nghiệp và cấp phép ngành nghề có điều kiện, tư vấn tuân thủ pháp luật lao động - bảo hiểm xã hội, đồng thời hỗ trợ xử lý khiếu nại, tranh chấp và làm việc với các cơ quan nhà nước có thẩm quyền.",
    initials: "VTPV",
    order: 2,
    image: "/doi-ngu/vo-thi-phuong-vy.jpg",
    highlights: [
      {
        title: "Cẩn trọng & Tuân thủ",
        description:
          "Đề cao sự cẩn trọng, trách nhiệm và tính tuân thủ trong từng hồ sơ, văn bản pháp lý được giao xử lý.",
      },
      {
        title: "Chủ động nhận diện rủi ro",
        description:
          "Không chỉ xử lý vấn đề khi phát sinh mà chủ động rà soát, nhận diện và kiểm soát rủi ro pháp lý cho doanh nghiệp.",
      },
      {
        title: "Am hiểu đa lĩnh vực",
        description:
          "Kết hợp kinh nghiệm pháp chế doanh nghiệp với hành chính nhân sự, xử lý công việc toàn diện và hiệu quả.",
      },
    ],
    expertise: [
      "Soạn thảo, rà soát hợp đồng & hồ sơ pháp lý doanh nghiệp",
      "Tư vấn thành lập, thay đổi đăng ký doanh nghiệp & cấp phép ngành nghề có điều kiện",
      "Pháp luật lao động, tiền lương & bảo hiểm xã hội",
      "Quản trị rủi ro pháp lý & tuân thủ nội bộ",
    ],
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
    image: "/lao-dong/lao-dong.jpg",
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
  {
    id: "7",
    slug: "quy-dinh-moi-ve-ma-so-thue-2026",
    title: "Từ 1/7/2026: Quy định mới về mã số thuế người dân, doanh nghiệp cần biết",
    excerpt:
      "Thông tư 90/2026/TT-BTC thay thế Thông tư 86/2024/TT-BTC từ 1/7/2026, tổ chức lại toàn bộ cơ chế đăng ký thuế theo mô hình hai cấp và số hóa toàn trình.",
    content:
      "Thông tư 90/2026/TT-BTC của Bộ Tài chính thiết lập lại toàn bộ cơ chế quản lý đăng ký thuế theo ba trục thay đổi lớn: cơ quan thuế tổ chức theo mô hình hai cấp (Thuế tỉnh, thành phố và Thuế cơ sở) thay cho cấp chi cục cũ; kết quả đăng ký thuế được số hóa gần như toàn trình, cấp bản điện tử có ký số qua Cổng Dịch vụ công quốc gia hoặc VNeID với thời hạn xử lý phổ biến 3 ngày làm việc; và mã số thuế được gắn chặt với dữ liệu định danh cá nhân, đi kèm cơ chế quản lý rủi ro cho phép cơ quan thuế chủ động chuyển trạng thái mã số thuế sang diện chờ xác minh. Mã số thuế được phân thành hai loại 10 số (đơn vị độc lập, cá nhân) và 13 số (đơn vị phụ thuộc, mã số nộp thay). Người dân và doanh nghiệp nên chủ động tra cứu, đối chiếu thông tin đăng ký thuế với Cơ sở dữ liệu quốc gia về dân cư để tránh bị đưa vào diện xác minh, gây gián đoạn hoạt động kinh doanh.",
    category: "thue",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-25",
    image: "/thue/thue.jpg",
  },
  {
    id: "8",
    slug: "xu-ly-ma-so-thue-khi-sap-nhap-doanh-nghiep",
    title: "Sáp nhập, đổi loại hình, chuyển trụ sở: Doanh nghiệp xử lý mã số thuế thế nào?",
    excerpt:
      "Hướng dẫn nguyên tắc giữ, cấp mới hay chấm dứt mã số thuế khi doanh nghiệp tái cấu trúc theo Thông tư 90/2026/TT-BTC.",
    content:
      "Thông tư 90/2026/TT-BTC quy định rõ số phận mã số thuế theo từng hình thức tổ chức lại doanh nghiệp: khi chia, bên bị chia chấm dứt mã số thuế và các đơn vị mới được cấp mã mới; khi tách, bên bị tách giữ nguyên mã số thuế còn đơn vị được tách nhận mã mới; khi sáp nhập, bên nhận giữ nguyên mã số còn bên bị sáp nhập chấm dứt; khi hợp nhất, các bên bị hợp nhất chấm dứt và tổ chức mới được cấp mã mới; riêng chuyển đổi loại hình doanh nghiệp chỉ cần thông báo thay đổi thông tin, giữ nguyên mã số thuế. Khi chuyển trụ sở sang tỉnh, thành phố khác, doanh nghiệp phải nộp hồ sơ tại nơi chuyển đi trước, chờ thông báo chuyển địa điểm rồi mới đăng ký tại nơi chuyển đến trong 10 ngày làm việc — làm sai trình tự này là nguyên nhân phổ biến khiến mã số thuế bị treo. Trước khi giải thể hoặc chấm dứt hoạt động, doanh nghiệp phải hoàn thành đầy đủ nghĩa vụ hóa đơn, khai thuế và nộp thuế.",
    category: "thue",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-26",
    image: "/thue/thue.jpg",
  },
  {
    id: "9",
    slug: "ho-kinh-doanh-ma-so-thue-bi-khoa",
    title: "Hộ kinh doanh: Vì sao mã số thuế có thể bị khóa dù vẫn đang buôn bán bình thường?",
    excerpt:
      "Thông tư 90/2026/TT-BTC dành hẳn một chương cho hộ kinh doanh, đơn giản hóa thủ tục nhưng siết chặt cơ chế xác minh 'không hoạt động tại địa chỉ'.",
    content:
      "Lần đầu tiên hộ kinh doanh, hộ gia đình và cá nhân kinh doanh có một chương riêng trong quy định đăng ký thuế. Rủi ro lớn nhất là bị chuyển sang trạng thái 'chờ xác minh' khi có dấu hiệu như không nộp hồ sơ khai thuế dù đã nhắc, hoặc thư của cơ quan thuế bị trả lại vì không có người nhận; nếu trong 5 ngày làm việc hộ không giải trình được, cơ quan thuế sẽ xác minh thực tế và có thể chuyển mã số thuế sang trạng thái 'không hoạt động tại địa chỉ', ảnh hưởng trực tiếp đến việc xuất hóa đơn. Khi nhận được thông báo qua tài khoản thuế điện tử, EtaxMobile hoặc VNeID, hộ kinh doanh cần nộp hồ sơ còn thiếu hoặc giải trình ngay để được khôi phục nhanh chóng, thay vì chờ bị khóa rồi mới xử lý. Một điểm cần lưu ý: khi mã số thuế kinh doanh của hộ chấm dứt, mã số thuế cá nhân của chủ hộ vẫn được giữ nguyên cho các nghĩa vụ thuế thu nhập cá nhân khác.",
    category: "thue",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-27",
    image: "/thue/thue.jpg",
  },
  {
    id: "10",
    slug: "ma-so-thue-nop-thay-tmdt-xuyen-bien-gioi",
    title: "Sàn thương mại điện tử, nhà cung cấp nước ngoài và 'mã số thuế nộp thay'",
    excerpt:
      "Thông tư 90/2026/TT-BTC lần đầu thiết lập cơ chế mã số thuế riêng cho nền kinh tế số: sàn TMĐT khấu trừ nộp thay, nhà cung cấp nước ngoài và thuế tối thiểu toàn cầu.",
    content:
      "Thông tư 90/2026/TT-BTC lần đầu đưa vào hệ thống mã số thuế dành riêng cho hoạt động số và xuyên biên giới. Chủ sàn thương mại điện tử trong nước có chức năng đặt hàng và thanh toán trực tuyến nay thuộc diện khấu trừ, nộp thay thuế cho nhà cung cấp nước ngoài và cá nhân kinh doanh trên nền tảng, được cấp một mã số thuế nộp thay riêng (10 chữ số). Nhà cung cấp nước ngoài phát sinh doanh thu tại Việt Nam qua nền tảng số đăng ký thuế trực tiếp qua Hệ thống thông tin quản lý thuế, nhưng được miễn đăng ký nếu toàn bộ doanh thu đã được bên khác khấu trừ, nộp thay đầy đủ. Đây cũng là lần đầu tiên quy định thuế tối thiểu toàn cầu được nối vào quy trình đăng ký thuế trong nước, áp dụng cho các tập đoàn đa quốc gia. Doanh nghiệp vận hành sàn cần theo dõi sát nghĩa vụ khấu trừ nộp thay để không gián đoạn giao dịch của hàng nghìn người bán trên nền tảng.",
    category: "thue",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-08-28",
    image: "/thue/thue.jpg",
  },
  {
    id: "11",
    slug: "giao-ket-hop-dong-lao-dong-dien-tu",
    title: "Giao kết hợp đồng lao động và hợp đồng lao động điện tử: Những điều doanh nghiệp phải làm đúng",
    excerpt:
      "Hợp đồng ký sai loại, thiếu nội dung hay giao kết không đúng hình thức khiến doanh nghiệp mất lợi thế khi tranh chấp và có thể bị xử phạt — kể cả khi giao kết qua phương tiện điện tử.",
    content:
      "Dù hai bên đặt tên hợp đồng khác đi (hợp đồng dịch vụ, cộng tác viên, khoán việc...), nếu nội dung thể hiện việc làm có trả công và có sự quản lý, điều hành, giám sát thì vẫn được coi là hợp đồng lao động, doanh nghiệp không thể né tránh nghĩa vụ bảo hiểm, trợ cấp bằng cách đổi tên hợp đồng; pháp luật cũng chỉ cho phép 2 loại hợp đồng là không xác định thời hạn và xác định thời hạn tối đa 36 tháng, hợp đồng xác định thời hạn chỉ được ký thêm tối đa 1 lần, quá 30 ngày kể từ khi hết hạn mà không ký hợp đồng mới thì đương nhiên trở thành không xác định thời hạn, và phụ lục hợp đồng không được dùng để sửa thời hạn. Hợp đồng phải giao kết trước khi người lao động vào làm việc, có đủ nội dung chủ yếu về công việc, tiền lương, bảo hiểm theo quy định, có thể giao kết bằng văn bản, lời nói (dưới 1 tháng) hoặc qua phương tiện điện tử — hợp đồng điện tử có giá trị như văn bản nếu bảo đảm dữ liệu toàn vẹn, chữ ký điện tử hợp lệ (ưu tiên chữ ký số) và lưu trữ, kết xuất được khi cơ quan có thẩm quyền yêu cầu. Doanh nghiệp bị nghiêm cấm giữ giấy tờ tùy thân, văn bằng hoặc buộc người lao động đặt cọc tiền, tài sản; về thử việc, chỉ được thử 1 lần cho một công việc, thời hạn tối đa từ 6 đến 180 ngày tùy vị trí, lương thử việc ít nhất 85% lương chính thức. Theo Nghị định 283/2026/NĐ-CP (hiệu lực từ 10/9/2026, thay Nghị định 12/2022/NĐ-CP), giao kết hợp đồng sai loại hoặc thiếu nội dung bị phạt 2-25 triệu đồng, giữ giấy tờ hoặc buộc đặt cọc bị phạt 20-25 triệu đồng, vi phạm về thử việc bị phạt 0,5-5 triệu đồng — mức phạt đối với doanh nghiệp gấp đôi mức cá nhân, kèm theo buộc khắc phục hậu quả thường lớn hơn cả tiền phạt.",
    category: "lao-dong",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-09-01",
    image: "/lao-dong/lao-dong.jpg",
  },
  {
    id: "12",
    slug: "xu-ly-ky-luat-lao-dong-dung-quy-dinh",
    title: "Xử lý kỷ luật lao động đúng quy định: Trình tự, thủ tục và những sai lầm khiến doanh nghiệp thua kiện",
    excerpt:
      "Phần lớn quyết định kỷ luật, sa thải bị tòa tuyên trái pháp luật không phải vì thiếu lý do chính đáng, mà vì làm sai trình tự, sai thời hiệu hoặc kỷ luật hành vi chưa được quy định trong nội quy lao động.",
    content:
      "Xử lý kỷ luật lao động phải tuân thủ 4 nguyên tắc bắt buộc: doanh nghiệp có nghĩa vụ chứng minh lỗi của người lao động, phải có sự tham gia của tổ chức đại diện người lao động, người lao động có quyền có mặt và tự bào chữa, và việc xử lý phải được lập biên bản; không được kỷ luật khi người lao động đang nghỉ ốm đau, điều dưỡng, bị tạm giữ tạm giam, chờ kết quả điều tra, hoặc là lao động nữ mang thai, nghỉ thai sản, nuôi con dưới 12 tháng tuổi. Pháp luật chỉ cho phép 4 hình thức kỷ luật là khiển trách, kéo dài thời hạn nâng lương không quá 6 tháng, cách chức và sa thải, nghiêm cấm phạt tiền hoặc cắt lương thay cho kỷ luật; sa thải — hình thức nặng nhất — chỉ được áp dụng trong 4 trường hợp luật định (trộm cắp, tham ô, tiết lộ bí mật kinh doanh gây thiệt hại nghiêm trọng, tái phạm khi chưa xóa kỷ luật, tự ý bỏ việc 5 ngày cộng dồn/30 ngày hoặc 20 ngày/365 ngày), và trừ nhóm hành vi nghiêm trọng nhất, các căn cứ sa thải khác đều phải được quy định cụ thể trong nội quy lao động. Thời hiệu xử lý kỷ luật là 6 tháng kể từ ngày vi phạm (12 tháng với hành vi liên quan tài chính, tài sản, bí mật kinh doanh), có thể kéo dài thêm tối đa 60 ngày trong một số trường hợp; trình tự chuẩn gồm 5 bước: lập biên bản vi phạm, thông báo họp trước ít nhất 5 ngày làm việc, tổ chức họp, lập biên bản họp và ra quyết định kỷ luật trong thời hiệu. Khi cần thiết, doanh nghiệp có thể tạm đình chỉ công việc tối đa 15 ngày (90 ngày trường hợp đặc biệt) nhưng phải tạm ứng 50% lương và hoàn trả đủ nếu người lao động không bị kỷ luật. Theo Nghị định 283/2026/NĐ-CP, kỷ luật sai trình tự, thủ tục, thời hiệu bị phạt 5-10 triệu đồng, còn xâm phạm sức khỏe/danh dự, phạt tiền thay kỷ luật hoặc kỷ luật hành vi không có trong nội quy bị phạt 20-40 triệu đồng (gấp đôi với doanh nghiệp), kèm theo buộc nhận lại người lao động và trả đủ lương những ngày nghỉ việc nếu sa thải bị tuyên trái luật.",
    category: "lao-dong",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-09-02",
    image: "/lao-dong/lao-dong.jpg",
  },
  {
    id: "13",
    slug: "noi-quy-lao-dong-va-thu-tuc-dang-ky",
    title: "Nội quy lao động và thủ tục đăng ký: Hướng dẫn doanh nghiệp làm đúng ngay từ đầu",
    excerpt:
      "Không có nội quy lao động hợp lệ, đã đăng ký và còn hiệu lực, mọi quyết định kỷ luật của doanh nghiệp — đặc biệt là sa thải — đều có nguy cơ bị tuyên trái pháp luật.",
    content:
      "Mọi doanh nghiệp sử dụng lao động đều phải ban hành nội quy lao động; doanh nghiệp từ 10 người lao động trở lên bắt buộc phải có nội quy bằng văn bản, dưới 10 người thì thỏa thuận nội dung kỷ luật và trách nhiệm vật chất ngay trong hợp đồng lao động. Nội quy phải bao gồm đủ 9 nhóm nội dung theo quy định: thời giờ làm việc - nghỉ ngơi, trật tự nơi làm việc, an toàn vệ sinh lao động, phòng chống quấy rối tình dục, bảo vệ tài sản và bí mật kinh doanh, các trường hợp chuyển người lao động làm việc khác, hành vi vi phạm kỷ luật và hình thức xử lý tương ứng, trách nhiệm vật chất, và người có thẩm quyền xử lý kỷ luật — trong đó danh mục hành vi vi phạm cần liệt kê cụ thể, quy định chung chung như 'vi phạm nghiêm trọng' thường không đủ căn cứ khi ra tòa. Trước khi ban hành hoặc sửa đổi nội quy, doanh nghiệp bắt buộc phải tham khảo ý kiến tổ chức đại diện người lao động tại cơ sở; hồ sơ đăng ký gồm văn bản đề nghị, nội quy lao động và văn bản góp ý, phải nộp trong 10 ngày kể từ ngày ban hành tại cơ quan chuyên môn về lao động thuộc UBND cấp tỉnh nơi đăng ký kinh doanh — từ 1/3/2025 là Sở Nội vụ (thay Sở Lao động - Thương binh và Xã hội), và từ 1/7/2025 không còn ủy quyền cho cấp huyện do mô hình chính quyền 2 cấp. Nội quy có hiệu lực sau 15 ngày kể từ khi cơ quan có thẩm quyền nhận đủ hồ sơ, và sau khi ban hành phải được thông báo đến toàn bộ người lao động, niêm yết tại nơi làm việc. Theo Nghị định 283/2026/NĐ-CP, không thông báo hoặc không niêm yết nội quy bị phạt 1-3 triệu đồng, không có nội quy bằng văn bản, không đăng ký, không tham khảo ý kiến tổ chức đại diện người lao động hoặc dùng nội quy hết hiệu lực bị phạt 5-10 triệu đồng (gấp đôi với doanh nghiệp) — và nghiêm trọng hơn, kỷ luật dựa trên nội quy chưa có hiệu lực còn khiến quyết định kỷ luật có nguy cơ bị tuyên trái pháp luật, buộc nhận lại người lao động và bồi thường.",
    category: "lao-dong",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-09-03",
    image: "/lao-dong/lao-dong.jpg",
  },
  {
    id: "14",
    slug: "hanh-vi-de-bi-xu-phat-nghi-dinh-283-2026",
    title: "Những hành vi doanh nghiệp dễ bị xử phạt về lao động và mức phạt theo Nghị định 283/2026/NĐ-CP",
    excerpt:
      "Từ 10/9/2026, Nghị định 283/2026/NĐ-CP thay thế Nghị định 12/2022/NĐ-CP, quy định lại toàn bộ mức xử phạt vi phạm hành chính trong lĩnh vực lao động — mức phạt đối với doanh nghiệp gấp đôi cá nhân.",
    content:
      "Nguyên tắc quan trọng nhất cần nhớ: mọi mức phạt tiền trong Nghị định 283/2026/NĐ-CP là mức áp dụng cho cá nhân, đối với tổ chức và doanh nghiệp mức phạt gấp 2 lần. Nhóm vi phạm về hợp đồng lao động (giao kết sai loại, thiếu nội dung, giữ giấy tờ, vi phạm thử việc, không trả đủ trợ cấp thôi việc) bị phạt từ 0,5 đến 25 triệu đồng tùy hành vi và số lượng người lao động; nhóm vi phạm về tiền lương (không công khai thang bảng lương, trả lương không đúng hạn/không đủ, trả dưới mức lương tối thiểu vùng) bị phạt 5-75 triệu đồng, kèm buộc trả đủ tiền lương còn thiếu cộng lãi — khoản này thường lớn hơn cả tiền phạt; nhóm vi phạm về thời giờ làm việc, nghỉ ngơi (huy động làm thêm giờ vượt mức cho phép, không bảo đảm nghỉ hằng tuần/hằng năm) bị phạt 2-75 triệu đồng. Nhóm vi phạm về kỷ luật lao động và nội quy bị phạt 1-40 triệu đồng; nhóm vi phạm về bảo hiểm xã hội gồm chậm đóng và trốn đóng bảo hiểm xã hội bắt buộc, bảo hiểm thất nghiệp — hành vi trốn đóng bị xử lý nghiêm khắc và có thể kèm trách nhiệm hình sự trong trường hợp nghiêm trọng; nhóm vi phạm về công đoàn và lao động nước ngoài gồm chậm/không đóng kinh phí công đoàn (phạt 12-20% số phải đóng, tối đa 75 triệu đồng), cản trở hoạt động công đoàn (3-75 triệu đồng) và sử dụng lao động nước ngoài không phép hoặc giấy phép hết hạn (mức phạt cao, có thể kèm trục xuất, đình chỉ hoạt động). Luật sư khuyến nghị doanh nghiệp tự rà soát tuân thủ (compliance audit) định kỳ tối thiểu mỗi năm một lần theo đúng 6 nhóm nêu trên, ưu tiên xử lý các lỗi 'đắt tiền' nhất là trả lương dưới mức tối thiểu, trốn/chậm đóng bảo hiểm xã hội và kinh phí công đoàn, đồng thời cập nhật toàn bộ quy trình nội bộ theo Nghị định 283/2026/NĐ-CP thay vì Nghị định 12/2022/NĐ-CP cũ.",
    category: "lao-dong",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-09-04",
    image: "/lao-dong/lao-dong.jpg",
  },
  {
    id: "15",
    slug: "he-thong-toa-an-nhan-dan-sau-cai-cach-2025",
    title:
      "Hệ thống Toà án nhân dân Việt Nam sau cải cách 2025: Cẩm nang hiểu đúng cho người dân và doanh nghiệp",
    excerpt:
      "Từ 1/7/2025, không còn Toà án nhân dân cấp huyện và cấp cao — thay vào đó là mô hình toà án gọn hơn với Toà án nhân dân khu vực mới, ảnh hưởng trực tiếp đến việc bạn nên nộp đơn khởi kiện ở đâu.",
    content:
      "Theo Luật Tổ chức Toà án nhân dân (Văn bản hợp nhất số 82/VBHN-VPQH), Toà án nhân dân là cơ quan duy nhất nhân danh Nhà nước phán xử đúng - sai, có tội - vô tội trong một tranh chấp; hệ thống hiện nay gồm 4 nhóm: Toà án nhân dân tối cao, Toà án nhân dân cấp tỉnh, Toà án nhân dân khu vực (thay thế Toà án nhân dân cấp huyện đã bị xoá bỏ từ 1/7/2025 theo Luật số 81/2025/QH15), cùng Toà án chuyên biệt tại Trung tâm tài chính quốc tế và các Toà án quân sự. Toà án nhân dân khu vực là 'cửa vào' gần dân nhất, giải quyết sơ thẩm phần lớn tranh chấp hợp đồng, dân sự, lao động, kinh doanh - thương mại, và tại một số nơi còn có Toà Phục hồi - phá sản, Toà Sở hữu trí tuệ chuyên trách; Toà án nhân dân cấp tỉnh xét xử sơ thẩm các vụ án hình sự nghiêm trọng và phúc thẩm bản án của Toà án khu vực bị kháng cáo, kháng nghị; Toà án nhân dân tối cao là 'trạm cuối' giám đốc thẩm, tái thẩm và phát triển án lệ để bảo đảm áp dụng thống nhất pháp luật. Một vụ án thường trải qua 3 chặng dễ nhầm lẫn: sơ thẩm (lần xét xử đầu tiên), phúc thẩm (khi có kháng cáo, kháng nghị trong thời hạn luật định, thường 15 ngày, nếu không thì bản án sơ thẩm có hiệu lực ngay), và giám đốc thẩm/tái thẩm — không phải cấp xét xử thứ ba mà là thủ tục đặc biệt xét lại bản án đã có hiệu lực, chỉ người có thẩm quyền (như Chánh án Toà án nhân dân tối cao, cấp tỉnh) mới được kháng nghị chứ không phải quyền đương nhiên của người dân. Thẩm phán nay chỉ còn 2 ngạch (Thẩm phán Toà án nhân dân tối cao và Thẩm phán Toà án nhân dân), xét xử độc lập chỉ tuân theo pháp luật; Hội thẩm đại diện cho nhân dân và ngang quyền biểu quyết với Thẩm phán khi xét xử sơ thẩm; nguyên tắc bảo đảm tranh tụng cho phép các bên trình bày, đưa chứng cứ và tranh luận công khai tại phiên toà. Hệ thống cũng đang chuyển dần sang toà án điện tử (số hoá hồ sơ, xét xử trực tuyến, công khai bản án) và coi trọng án lệ để các vụ việc tương tự được xử thống nhất. Với người dân và doanh nghiệp, thay đổi quan trọng nhất cần ghi nhớ là: không còn 'toà án quận/huyện' như trước — trước khi khởi kiện, cần xác định đúng Toà án nhân dân khu vực hoặc cấp tỉnh có thẩm quyền để tránh nộp nhầm nơi, mất thời gian và có thể lỡ thời hiệu khởi kiện.",
    category: "toa-an",
    author: "LS. Nguyễn Thế Vũ",
    published_at: "2026-09-05",
    image: "/toa-an/toa-an.jpg",
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
