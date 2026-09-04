/**
 * Kiểm tra xem biến môi trường Supabase đã được cấu hình hay chưa.
 *
 * Khi chưa cấu hình (ví dụ: bản preview mới clone repo, chưa tạo dự án
 * Supabase), các hàm truy vấn trong `lib/queries.ts` sẽ tự động dùng dữ
 * liệu mẫu trong `lib/data.ts` thay vì gọi Supabase — giúp website luôn
 * chạy được ngay cả khi chưa kết nối backend.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
