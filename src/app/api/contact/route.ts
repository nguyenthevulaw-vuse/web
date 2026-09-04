import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(100),
  email: z.string().trim().email("Email không hợp lệ"),
  phone: z
    .string()
    .trim()
    .min(9, "Số điện thoại không hợp lệ")
    .max(15)
    .regex(/^[0-9+\s()-]+$/, "Số điện thoại không hợp lệ"),
  subject: z.string().trim().min(2, "Vui lòng nhập chủ đề").max(150),
  message: z.string().trim().min(10, "Nội dung cần ít nhất 10 ký tự").max(2000),
  // Honeypot chống spam bot — trường ẩn, người dùng thật sẽ không điền.
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dữ liệu chưa hợp lệ.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot bị điền → coi như spam, phản hồi thành công giả để không lộ cơ chế chống spam.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, subject, message } = parsed.data;
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    console.warn(
      "[contact] Supabase chưa được cấu hình — yêu cầu liên hệ chỉ được ghi log, chưa được lưu trữ:",
      { name, email, phone, subject },
    );
    return NextResponse.json({ success: true, persisted: false });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone,
    subject,
    message,
  });

  if (error) {
    console.error("[contact] Lỗi khi lưu yêu cầu liên hệ vào Supabase:", error.message);
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, persisted: true });
}
