import { CheckCircle2, Clock3, ShieldCheck, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Nền icon luân phiên xanh lá - cam - xanh dương thay vì một màu cố định
// cho đỡ đơn điệu.
const ICON_BG = ["bg-primary text-white", "bg-secondary text-ink", "bg-accent text-white"];

const reasons = [
  {
    icon: Users2,
    title: "Đội ngũ luật sư chuyên môn cao",
    description:
      "Luật sư và chuyên viên pháp lý được đào tạo bài bản, nhiều năm kinh nghiệm thực tiễn trong từng lĩnh vực.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật & Đạo đức nghề nghiệp",
    description:
      "Cam kết bảo mật tuyệt đối thông tin khách hàng, tuân thủ nghiêm ngặt quy tắc đạo đức hành nghề luật sư.",
  },
  {
    icon: Clock3,
    title: "Phản hồi nhanh chóng",
    description:
      "Tiếp nhận và phản hồi yêu cầu tư vấn trong thời gian sớm nhất, đồng hành cùng khách hàng đến khi vụ việc kết thúc.",
  },
  {
    icon: CheckCircle2,
    title: "Chi phí minh bạch",
    description:
      "Báo giá dịch vụ rõ ràng, minh bạch ngay từ đầu, không phát sinh chi phí ẩn trong quá trình thực hiện.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-primary-dark/[0.03] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Vì sao chọn chúng tôi"
          title="Đối tác pháp lý đáng tin cậy"
          description="Chúng tôi đặt lợi ích của khách hàng làm trọng tâm trong mọi tư vấn và giải pháp pháp lý."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-ink/5"
            >
              <span
                className={cn(
                  "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl",
                  ICON_BG[index % ICON_BG.length],
                )}
              >
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
