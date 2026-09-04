import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "Đội ngũ luật sư tư vấn rất tận tâm, giải thích rõ ràng và hỗ trợ công ty chúng tôi xử lý gọn gàng thủ tục đầu tư trong thời gian ngắn.",
    name: "Anh Hoàng Minh",
    role: "Giám đốc, Công ty TNHH Thương mại Phú Gia",
  },
  {
    quote:
      "Tôi đánh giá cao sự chuyên nghiệp và bảo mật thông tin trong suốt quá trình luật sư hỗ trợ vụ việc gia đình của mình.",
    name: "Chị Thu Trang",
    role: "Khách hàng cá nhân",
  },
  {
    quote:
      "Chi phí minh bạch, luật sư phản hồi nhanh và luôn cập nhật tiến độ vụ việc rõ ràng. Rất hài lòng với dịch vụ.",
    name: "Anh Đức Thịnh",
    role: "Chủ doanh nghiệp, ngành xây dựng",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Khách hàng nói gì"
          title="Sự hài lòng của khách hàng là ưu tiên hàng đầu"
          align="center"
          tone="dark"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
