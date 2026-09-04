import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    step: "01",
    title: "Tiếp nhận yêu cầu",
    description: "Khách hàng gửi yêu cầu tư vấn qua điện thoại, email hoặc form liên hệ trên website.",
  },
  {
    step: "02",
    title: "Phân tích hồ sơ",
    description: "Luật sư nghiên cứu, phân tích hồ sơ và đánh giá sơ bộ vấn đề pháp lý của khách hàng.",
  },
  {
    step: "03",
    title: "Đề xuất giải pháp",
    description: "Đưa ra phương án tư vấn, báo giá dịch vụ minh bạch và lộ trình xử lý cụ thể.",
  },
  {
    step: "04",
    title: "Triển khai & Đồng hành",
    description: "Thực hiện công việc, cập nhật tiến độ thường xuyên đến khi vụ việc hoàn tất.",
  },
];

export function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Quy trình làm việc"
          title="Đơn giản, minh bạch, hiệu quả"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-lg font-extrabold text-white">
                  {item.step}
                </span>
                {index < steps.length - 1 ? (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-ink/20 to-transparent lg:block" />
                ) : null}
              </div>
              <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
