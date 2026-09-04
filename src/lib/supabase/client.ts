import { createBrowserClient } from "@supabase/ssr";
import { isSupabaseConfigured } from "./env";

/**
 * Tạo Supabase client dùng ở phía trình duyệt (Client Components).
 * Trả về `null` nếu chưa cấu hình biến môi trường.
 */
export function createSupabaseBrowserClient() {
  if (!isSupabaseConfigured()) return null;

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
