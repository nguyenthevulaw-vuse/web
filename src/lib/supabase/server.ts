import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { isSupabaseConfigured } from "./env";

/**
 * Tạo Supabase client dùng ở phía server (Server Components, Route Handlers).
 * Trả về `null` nếu chưa cấu hình biến môi trường — nơi gọi cần tự xử lý
 * bằng cách dùng dữ liệu mẫu thay thế (xem `lib/queries.ts`).
 */
export async function createSupabaseServerClient() {
  if (!isSupabaseConfigured()) return null;

  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Bỏ qua khi được gọi từ Server Component (không thể set cookie).
          }
        },
      },
    },
  );
}
