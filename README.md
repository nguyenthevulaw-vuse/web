# NTVLaw — Website Công ty Luật

Website hiện đại cho **Công ty Luật TNHH Một thành viên Nguyễn Thế Vũ
(NTVLaw)**, giúp khách hàng tra cứu thông tin và tiếp cận kiến thức pháp lý.
Xây dựng bằng **Next.js (App Router) + TypeScript + Tailwind CSS**, dữ liệu
lưu trên **Supabase**, phát triển qua **GitHub** và triển khai trên
**Vercel**.

Tên công ty, địa chỉ, số điện thoại, email, Zalo, tên miền (`www.ntvlaw.vn`)
và số Giấy đăng ký hoạt động (79.2011.02.1589/TP/ĐKHĐ) đã được cập nhật theo
thông tin thật.

> ⚠️ **Còn thiếu**: Facebook, LinkedIn, YouTube chưa có link chính thức nên
> đang để trống (tự ẩn khỏi Footer cho đến khi có link thật). Cập nhật vào
> `social` trong `src/lib/site-config.ts` khi có — xem mục
> [Tùy chỉnh nội dung](#tùy-chỉnh-nội-dung) bên dưới.

## Công nghệ sử dụng

- **Next.js 16** (App Router, React Server Components) + TypeScript
- **Tailwind CSS v4** — theme màu theo bộ nhận diện thương hiệu
- **Supabase** (Postgres + RLS) — lưu trữ dịch vụ pháp lý, đội ngũ luật sư,
  bài viết kiến thức pháp luật, câu hỏi thường gặp và yêu cầu liên hệ từ
  khách hàng
- **Vercel** — hosting & CI/CD tự động từ GitHub

Website vẫn chạy được đầy đủ ngay cả khi **chưa cấu hình Supabase** — mọi
trang sẽ tự động dùng dữ liệu mẫu trong `src/lib/data.ts`, rất tiện để phát
triển hoặc xem trước (preview) trước khi kết nối backend thật.

## Bắt đầu (local development)

```bash
npm install
cp .env.example .env.local   # điền thông tin Supabase nếu đã có (không bắt buộc)
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

Các lệnh khác:

```bash
npm run lint    # kiểm tra ESLint
npm run build   # build production, có kiểm tra kiểu TypeScript
npm run start   # chạy bản build production
```

## Thiết lập Supabase

1. Tạo project mới tại [supabase.com](https://supabase.com).
2. Vào **SQL Editor**, chạy lần lượt hai file trong thư mục `supabase/`:
   - `supabase/migrations/0001_init.sql` — tạo bảng và chính sách bảo mật (RLS).
   - `supabase/seed.sql` — nạp dữ liệu mẫu (dịch vụ, đội ngũ, bài viết, FAQ).
3. Vào **Project Settings → API**, lấy `Project URL` và `anon public key`.
4. Điền hai giá trị đó vào `.env.local` (local) hoặc **Environment
   Variables** trên Vercel (production/preview):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx...
   ```

### Các bảng dữ liệu

| Bảng                  | Mục đích                                          |
| --------------------- | -------------------------------------------------- |
| `practice_areas`      | Danh sách lĩnh vực dịch vụ pháp lý                  |
| `team_members`        | Đội ngũ luật sư                                     |
| `articles`             | Bài viết kiến thức pháp luật                        |
| `faqs`                | Câu hỏi thường gặp                                  |
| `contact_submissions` | Yêu cầu tư vấn gửi từ form Liên hệ trên website      |

Nội dung công khai (4 bảng đầu) cho phép **đọc công khai** qua RLS để trang
web hiển thị được mà không cần đăng nhập. Bảng `contact_submissions` chỉ cho
phép **ghi** (khách gửi form), không ai đọc lại được qua API công khai — chỉ
xem trong Supabase Dashboard hoặc bằng service role key.

Muốn cập nhật nội dung (thêm bài viết mới, sửa dịch vụ...), chỉnh sửa trực
tiếp trong **Supabase Table Editor** — không cần sửa code hay deploy lại.

## Thiết lập email thông báo (Resend)

Mặc định, yêu cầu tư vấn từ form Liên hệ chỉ được lưu vào Supabase — bạn
phải chủ động vào Table Editor để xem. Để **tự động nhận email mỗi khi có
khách hàng gửi yêu cầu**:

1. Tạo tài khoản miễn phí tại [resend.com](https://resend.com) (gói miễn
   phí: 100 email/ngày — đủ dùng cho form liên hệ của một website).
2. Vào **API Keys**, tạo key mới, copy lại.
3. Điền vào `.env.local` hoặc Environment Variables trên Vercel:

   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```

4. (Tuỳ chọn) Nếu đã xác minh tên miền `ntvlaw.vn` trên Resend (mục
   **Domains**), đổi người gửi sang địa chỉ thuộc tên miền riêng để tăng độ
   tin cậy khi gửi:

   ```
   RESEND_FROM_EMAIL=NTVLaw <noreply@ntvlaw.vn>
   ```

   Nếu để trống, email được gửi từ `onboarding@resend.dev` (địa chỉ dùng
   thử của Resend) — vẫn gửi được bình thường, chỉ là tên người gửi chưa
   phải tên miền riêng của công ty.

5. (Tuỳ chọn) Muốn nhận thông báo ở một email khác thay vì
   `contact.email` trong `site-config.ts`:

   ```
   CONTACT_NOTIFICATION_EMAIL=vunt@ntvlaw.vn
   ```

Nếu không cấu hình `RESEND_API_KEY`, website vẫn hoạt động bình thường —
yêu cầu liên hệ chỉ được lưu vào Supabase, không gửi email.

## Triển khai trên Vercel

1. Đẩy code lên GitHub (repo này).
2. Vào [vercel.com/new](https://vercel.com/new), import repository từ GitHub.
   Vercel sẽ tự nhận diện đây là dự án Next.js.
3. Trong bước cấu hình, thêm các **Environment Variables** giống
   `.env.local` ở trên: bắt buộc `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`; tuỳ chọn `RESEND_API_KEY` (và
   `RESEND_FROM_EMAIL`, `CONTACT_NOTIFICATION_EMAIL` nếu cần) để nhận email
   thông báo liên hệ.
4. Nhấn **Deploy**. Từ lần deploy sau, mỗi lần push lên nhánh chính, Vercel
   sẽ tự động build & deploy lại (CI/CD); mỗi Pull Request sẽ có một bản
   preview riêng.

## Quy trình phát triển với GitHub

- Nhánh `main` là nhánh triển khai chính thức (production).
- Tạo nhánh mới cho mỗi tính năng/thay đổi, mở Pull Request để review.
- GitHub Actions (`.github/workflows/ci.yml`) tự động chạy lint + build trên
  mỗi Pull Request để phát hiện lỗi sớm.
- Vercel tự tạo bản xem trước (preview deployment) cho mỗi Pull Request.

## Tùy chỉnh nội dung

| Muốn thay đổi...                                   | Sửa ở đâu                                        |
| --------------------------------------------------- | ------------------------------------------------- |
| Tên công ty, hotline, email, địa chỉ, mạng xã hội    | `src/lib/site-config.ts`                          |
| Màu sắc thương hiệu                                  | `src/app/globals.css` (biến `--color-*`)          |
| Dịch vụ pháp lý, đội ngũ luật sư, bài viết, FAQ       | Supabase Table Editor (khuyến nghị) hoặc `src/lib/data.ts` (dữ liệu mẫu / fallback) |
| Nội dung trang Giới thiệu, Chính sách bảo mật...      | Các file trong `src/app/*/page.tsx`               |

## Cấu trúc thư mục

```
src/
  app/                 # Các trang (App Router) — routing theo tên thư mục
  components/
    layout/            # Header, Footer, TopBar
    home/               # Các section trên trang chủ
    ui/                 # Component dùng chung (Button, Container, Badge...)
    team/, news/, faq/, contact/
  lib/
    site-config.ts      # Cấu hình chung (tên công ty, liên hệ, menu...)
    data.ts             # Dữ liệu mẫu / fallback
    queries.ts          # Lớp truy vấn dữ liệu (ưu tiên Supabase, fallback data.ts)
    supabase/            # Supabase client (server)
    email.ts             # Gửi email thông báo yêu cầu liên hệ (Resend)
    types.ts             # Kiểu dữ liệu dùng chung
supabase/
  migrations/0001_init.sql   # Schema + RLS
  seed.sql                    # Dữ liệu mẫu nạp vào Supabase
```

## Tính năng chính

- Trang chủ giới thiệu tổng quan công ty, dịch vụ, đội ngũ, tin tức, cam kết dịch vụ
- Danh sách & chi tiết dịch vụ pháp lý
- Danh sách & chi tiết đội ngũ luật sư
- Kiến thức pháp luật: danh sách bài viết có lọc theo danh mục + trang chi tiết
- Hỏi đáp pháp luật (FAQ dạng accordion)
- Trang Liên hệ với form gửi yêu cầu tư vấn (lưu vào Supabase + gửi email thông báo qua Resend), có chống spam (honeypot)
- Trang Chính sách bảo mật, Điều khoản sử dụng
- SEO: metadata động, `sitemap.xml`, `robots.txt`
- Responsive, tối ưu cho di động
