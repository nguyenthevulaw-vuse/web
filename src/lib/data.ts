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
    image: "/thue/mst-thay-doi-2026.jpg",
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
    image: "/thue/sap-nhap-doi-loai-hinh.jpg",
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
    image: "/thue/ho-kinh-doanh-khoa-mst.jpg",
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
    image: "/thue/tmdt-xuyen-bien-gioi.jpg",
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
