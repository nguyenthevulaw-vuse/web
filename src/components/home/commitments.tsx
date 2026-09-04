import { HandHeart, Lock, MessageSquareText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Nền icon luân phiên xanh lá - cam - xanh dương thay vì một màu cố định
// cho đỡ đơn điệu.
const ICON_BG = ["bg-primary text-white", "bg-secondary text-ink", "bg-accent text-white"];

/**
 * Cam kết dịch vụ — thay cho mục "đánh giá khách hàng" trước đây, vốn dùng
 * lời chứng thực gán cho khách hàng hư cấu. Vì đây là website chính thức
 * của một công ty luật thật, mục này chỉ nêu cam kết của công ty (không gán
 * phát ngôn cho cá nhân/khách hàng cụ thể nào chưa được xác nhận) — công ty
 * có thể thay bằng đánh giá thật của khách hàng (kèm sự đồng ý của họ) khi
 * có sẵn.
 */
const commitments = [
  {
    icon: MessageSquareText,
    title: "Tư vấn rõ ràng, dễ hiểu",
    description:
      "Luật sư giải thích quy định pháp luật và phương án xử lý bằng ngôn ngữ dễ hiểu, giúp khách hàng nắm rõ quyền lợi trước khi quyết định.",
  },
  {
    icon: Lock,
    title: "Bảo mật thông tin khách hàng",
    description:
      "Mọi thông tin, hồ sơ vụ việc của khách hàng được bảo mật tuyệt đối theo quy tắc đạo đức và ứng xử nghề nghiệp luật sư.",
  },
  {
    icon: HandHeart,
    title: "Đồng hành đến khi hoàn tất",
    description:
      "Luật sư trực tiếp theo sát, cập nhật tiến độ vụ việc thường xuyên cho khách hàng đến khi công việc được giải quyết xong.",
  },
];

export function Commitments() {
  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cam kết dịch vụ"
          title="Điều khách hàng có thể tin tưởng ở chúng tôi"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {commitments.map((c, index) => (
            <div
              key={c.title}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  ICON_BG[index % ICON_BG.length],
                )}
              >
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
