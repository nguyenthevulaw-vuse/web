import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "./env";

/**
 * Tạo Supabase client dùng ở phía server (Server Components, Route Handlers,
 * kể cả `generateStaticParams` chạy lúc build).
 *
 * Website này không có đăng nhập/phiên người dùng — mọi nội dung (dịch vụ,
 * đội ngũ, bài viết, FAQ) đọc công khai qua RLS, và form liên hệ chỉ ghi —
 * nên client KHÔNG cần đọc cookie theo từng request. Cố tình không dùng
 * `@supabase/ssr` (client SSR gắn với cookie) ở đây: `cookies()` của
 * Next.js không dùng được trong `generateStaticParams` (chạy lúc build,
 * không có request), gọi vào sẽ làm build lỗi.
 *
 * Trả về `null` nếu chưa cấu hình biến môi trường — nơi gọi cần tự xử lý
 * bằng cách dùng dữ liệu mẫu thay thế (xem `lib/queries.ts`).
 */
export async function createSupabaseServerClient() {
  if (!isSupabaseConfigured()) return null;

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
