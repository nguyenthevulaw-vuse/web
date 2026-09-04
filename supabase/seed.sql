-- ============================================================================
-- An Tín Law — Dữ liệu mẫu
--
-- Nạp dữ liệu mẫu (tương ứng với `src/lib/data.ts`) vào các bảng đã tạo ở
-- `migrations/0001_init.sql`. Chạy sau khi đã chạy migration.
--
-- Có thể chạy lại an toàn nhiều lần nhờ `on conflict ... do update`.
-- ============================================================================

insert into public.practice_areas (slug, title, summary, content, icon, "order") values
  ('tu-van-doanh-nghiep', 'Tư vấn Doanh nghiệp', 'Thành lập doanh nghiệp, quản trị nội bộ, mua bán & sáp nhập (M&A), tái cấu trúc.', 'Chúng tôi tư vấn toàn diện cho doanh nghiệp từ giai đoạn thành lập, xây dựng điều lệ, quy chế quản trị nội bộ, đến các giao dịch mua bán - sáp nhập (M&A), tái cấu trúc doanh nghiệp và tuân thủ pháp luật trong suốt quá trình hoạt động.', 'Building2', 1),
  ('dau-tu-nuoc-ngoai', 'Đầu tư nước ngoài', 'Tư vấn thủ tục đầu tư, giấy phép đầu tư, hợp tác kinh doanh xuyên biên giới.', 'Hỗ trợ nhà đầu tư nước ngoài xin cấp Giấy chứng nhận đăng ký đầu tư, Giấy chứng nhận đăng ký doanh nghiệp, tư vấn cơ cấu đầu tư tối ưu và các vấn đề pháp lý liên quan đến hoạt động đầu tư tại Việt Nam.', 'Globe2', 2),
  ('so-huu-tri-tue', 'Sở hữu trí tuệ', 'Đăng ký nhãn hiệu, bản quyền, xử lý xâm phạm quyền sở hữu trí tuệ.', 'Đại diện khách hàng thực hiện thủ tục đăng ký, bảo hộ nhãn hiệu, kiểu dáng công nghiệp, quyền tác giả; tư vấn chiến lược khai thác tài sản trí tuệ và xử lý các hành vi xâm phạm.', 'Lightbulb', 3),
  ('dat-dai-bat-dong-san', 'Đất đai - Bất động sản', 'Tư vấn giao dịch, tranh chấp đất đai, pháp lý dự án bất động sản.', 'Tư vấn pháp lý cho các giao dịch chuyển nhượng, cho thuê bất động sản, thẩm định pháp lý dự án, hỗ trợ giải quyết tranh chấp đất đai và các thủ tục hành chính liên quan.', 'Landmark', 4),
  ('hon-nhan-gia-dinh', 'Hôn nhân & Gia đình', 'Ly hôn, phân chia tài sản, quyền nuôi con, thừa kế.', 'Tư vấn và đại diện khách hàng trong các vụ việc ly hôn, phân chia tài sản chung, tranh chấp quyền nuôi con, cấp dưỡng và các vấn đề thừa kế trong gia đình.', 'HeartHandshake', 5),
  ('lao-dong', 'Lao động', 'Hợp đồng lao động, kỷ luật lao động, giải quyết tranh chấp lao động.', 'Tư vấn xây dựng nội quy lao động, hợp đồng lao động, xử lý kỷ luật, chấm dứt hợp đồng lao động đúng quy định và đại diện giải quyết tranh chấp lao động cho cả người lao động và người sử dụng lao động.', 'Briefcase', 6),
  ('tranh-tung-giai-quyet-tranh-chap', 'Tranh tụng & Giải quyết tranh chấp', 'Đại diện tham gia tố tụng tại Tòa án, Trọng tài thương mại.', 'Đội ngũ luật sư tranh tụng giàu kinh nghiệm đại diện, bảo vệ quyền và lợi ích hợp pháp của khách hàng tại Tòa án các cấp và các Trung tâm Trọng tài thương mại.', 'Scale', 7),
  ('hop-dong', 'Soạn thảo & Rà soát Hợp đồng', 'Soạn thảo, rà soát, đàm phán hợp đồng thương mại, dân sự.', 'Soạn thảo, rà soát và tư vấn đàm phán các loại hợp đồng thương mại, dân sự, hợp đồng lao động nhằm giảm thiểu rủi ro pháp lý cho khách hàng trước khi ký kết.', 'FileSignature', 8)
on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  content = excluded.content,
  icon = excluded.icon,
  "order" = excluded."order";

insert into public.team_members (slug, name, title, summary, bio, initials, "order") values
  ('nguyen-van-an', 'LS. Nguyễn Văn An', 'Luật sư điều hành', 'Hơn 20 năm kinh nghiệm trong lĩnh vực doanh nghiệp và M&A.', 'Luật sư Nguyễn Văn An là người sáng lập An Tín Law, có hơn 20 năm kinh nghiệm tư vấn cho các tập đoàn trong và ngoài nước về đầu tư, doanh nghiệp và mua bán - sáp nhập.', 'AN', 1),
  ('tran-thi-bich', 'LS. Trần Thị Bích', 'Luật sư thành viên - Trưởng bộ phận Tranh tụng', 'Chuyên sâu tố tụng dân sự, kinh doanh thương mại.', 'Luật sư Trần Thị Bích có hơn 15 năm kinh nghiệm tranh tụng tại Tòa án và Trọng tài, từng đại diện thành công cho nhiều khách hàng doanh nghiệp trong các vụ tranh chấp phức tạp.', 'TB', 2),
  ('le-minh-cuong', 'LS. Lê Minh Cường', 'Luật sư thành viên - Trưởng bộ phận Đầu tư', 'Chuyên tư vấn đầu tư nước ngoài, giấy phép đầu tư.', 'Luật sư Lê Minh Cường chuyên tư vấn thủ tục đầu tư cho các nhà đầu tư nước ngoài tại Việt Nam, với kinh nghiệm thực hiện hàng trăm dự án đầu tư đa ngành.', 'LC', 3),
  ('pham-thu-ha', 'LS. Phạm Thu Hà', 'Luật sư thành viên - Trưởng bộ phận Sở hữu trí tuệ', 'Chuyên đăng ký và bảo hộ nhãn hiệu, quyền tác giả.', 'Luật sư Phạm Thu Hà có nhiều năm kinh nghiệm trong lĩnh vực sở hữu trí tuệ, tư vấn chiến lược bảo hộ thương hiệu cho các doanh nghiệp trong nhiều lĩnh vực.', 'PH', 4)
on conflict (slug) do update set
  name = excluded.name,
  title = excluded.title,
  summary = excluded.summary,
  bio = excluded.bio,
  initials = excluded.initials,
  "order" = excluded."order";

insert into public.articles (slug, title, excerpt, content, category, author, published_at) values
  ('diem-moi-luat-doanh-nghiep', 'Những điểm cần lưu ý khi thành lập doanh nghiệp năm 2026', 'Tổng hợp các quy định mới nhất về trình tự, thủ tục thành lập doanh nghiệp mà nhà đầu tư cần nắm rõ.', 'Bài viết tổng hợp các quy định hiện hành về trình tự, thủ tục thành lập doanh nghiệp, hồ sơ đăng ký kinh doanh, các loại hình doanh nghiệp phổ biến và những lưu ý quan trọng giúp nhà đầu tư tránh sai sót trong quá trình khởi nghiệp.', 'doanh-nghiep', 'LS. Nguyễn Văn An', '2026-08-20'),
  ('quy-dinh-hop-dong-lao-dong', '5 điều khoản không thể thiếu trong hợp đồng lao động', 'Hợp đồng lao động cần đảm bảo những nội dung nào để bảo vệ quyền lợi của cả người lao động và doanh nghiệp?', 'Bài viết phân tích các điều khoản bắt buộc trong hợp đồng lao động theo quy định pháp luật hiện hành, giúp doanh nghiệp và người lao động hiểu rõ quyền, nghĩa vụ của mình khi giao kết hợp đồng.', 'lao-dong', 'LS. Trần Thị Bích', '2026-08-12'),
  ('thu-tuc-ly-hon-thuan-tinh', 'Hướng dẫn thủ tục ly hôn thuận tình mới nhất', 'Quy trình, hồ sơ và thời gian giải quyết ly hôn thuận tình tại Tòa án.', 'Bài viết hướng dẫn chi tiết hồ sơ, trình tự nộp đơn và thời gian giải quyết yêu cầu công nhận thuận tình ly hôn tại Tòa án nhân dân có thẩm quyền.', 'hon-nhan-gia-dinh', 'LS. Trần Thị Bích', '2026-07-28'),
  ('quy-dinh-cap-giay-chung-nhan-quyen-su-dung-dat', 'Điều kiện và hồ sơ cấp Giấy chứng nhận quyền sử dụng đất', 'Những điều kiện cần đáp ứng và hồ sơ cần chuẩn bị khi làm sổ đỏ, sổ hồng.', 'Bài viết cung cấp thông tin về điều kiện, thành phần hồ sơ và trình tự thủ tục xin cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất.', 'dat-dai', 'LS. Lê Minh Cường', '2026-07-15'),
  ('dang-ky-bao-ho-nhan-hieu', 'Quy trình đăng ký bảo hộ nhãn hiệu cho doanh nghiệp', 'Các bước cần thực hiện để bảo hộ thương hiệu, tránh bị xâm phạm quyền sở hữu trí tuệ.', 'Bài viết trình bày quy trình tra cứu, nộp đơn và theo dõi hồ sơ đăng ký bảo hộ nhãn hiệu tại Cục Sở hữu trí tuệ, cùng những lưu ý giúp tăng khả năng đơn đăng ký được chấp thuận.', 'doanh-nghiep', 'LS. Phạm Thu Hà', '2026-06-30'),
  ('trach-nhiem-hinh-su-phap-nhan', 'Trách nhiệm hình sự của pháp nhân thương mại: Những điều cần biết', 'Doanh nghiệp có thể phải chịu trách nhiệm hình sự trong những trường hợp nào?', 'Bài viết phân tích các quy định về trách nhiệm hình sự của pháp nhân thương mại, các tội danh pháp nhân có thể bị truy cứu và biện pháp phòng ngừa rủi ro pháp lý cho doanh nghiệp.', 'hinh-su', 'LS. Nguyễn Văn An', '2026-06-18')
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content = excluded.content,
  category = excluded.category,
  author = excluded.author,
  published_at = excluded.published_at;

insert into public.faqs (question, answer, category) values
  ('Chi phí tư vấn pháp lý ban đầu có mất phí không?', 'An Tín Law cung cấp buổi tư vấn sơ bộ ban đầu miễn phí để đánh giá tổng quan vụ việc. Chi phí dịch vụ cụ thể sẽ được báo giá minh bạch sau khi luật sư nắm rõ yêu cầu và phạm vi công việc của khách hàng.', 'chung'),
  ('Thời gian giải quyết một vụ việc tranh chấp thường mất bao lâu?', 'Thời gian giải quyết phụ thuộc vào tính chất, mức độ phức tạp của từng vụ việc và trình tự tố tụng áp dụng. Luật sư sẽ tư vấn cụ thể về lộ trình và thời gian dự kiến ngay từ buổi làm việc đầu tiên.', 'chung'),
  ('Doanh nghiệp nước ngoài có thể thành lập công ty 100% vốn tại Việt Nam không?', 'Tùy theo ngành nghề kinh doanh, pháp luật Việt Nam cho phép nhà đầu tư nước ngoài thành lập doanh nghiệp 100% vốn đầu tư nước ngoài trong nhiều lĩnh vực. Một số ngành nghề có điều kiện về tỷ lệ sở hữu vốn hoặc hình thức đầu tư.', 'doanh-nghiep'),
  ('Khi ly hôn, tài sản hình thành trong thời kỳ hôn nhân được chia như thế nào?', 'Về nguyên tắc, tài sản chung của vợ chồng được chia đôi nhưng có tính đến các yếu tố như công sức đóng góp, hoàn cảnh của mỗi bên, lợi ích chính đáng của mỗi bên trong sản xuất, kinh doanh và lỗi của mỗi bên (nếu có).', 'hon-nhan-gia-dinh'),
  ('Người sử dụng lao động có được đơn phương chấm dứt hợp đồng lao động không?', 'Người sử dụng lao động chỉ được đơn phương chấm dứt hợp đồng lao động trong các trường hợp pháp luật quy định và phải tuân thủ đúng thời hạn báo trước, nếu không sẽ phải bồi thường theo quy định pháp luật.', 'lao-dong')
on conflict (question) do update set
  answer = excluded.answer,
  category = excluded.category;
