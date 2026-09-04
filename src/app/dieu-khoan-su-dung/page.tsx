import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description: `Điều khoản sử dụng website của ${siteConfig.fullName}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Điều khoản sử dụng" breadcrumb="Điều khoản sử dụng" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-legal mx-auto max-w-3xl text-base">
            <p>
              Khi truy cập và sử dụng website của {siteConfig.fullName}, bạn đồng ý tuân thủ
              các điều khoản sử dụng dưới đây.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">1. Mục đích thông tin</h2>
            <p>
              Nội dung trên website này, bao gồm các bài viết trong mục &quot;Kiến thức pháp
              luật&quot; và &quot;Hỏi đáp&quot;, chỉ mang tính chất cung cấp thông tin tham
              khảo chung, không cấu thành ý kiến tư vấn pháp lý chính thức cho bất kỳ trường
              hợp cụ thể nào. Để được tư vấn cho tình huống cụ thể, vui lòng liên hệ trực
              tiếp với luật sư của chúng tôi.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">2. Quyền sở hữu trí tuệ</h2>
            <p>
              Toàn bộ nội dung, hình ảnh, logo và thiết kế trên website thuộc quyền sở hữu
              của {siteConfig.fullName}, trừ khi có ghi chú khác. Nghiêm cấm sao chép, phân
              phối lại nội dung khi chưa được sự đồng ý bằng văn bản.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">3. Giới hạn trách nhiệm</h2>
            <p>
              Chúng tôi nỗ lực đảm bảo thông tin trên website chính xác tại thời điểm đăng
              tải, tuy nhiên quy định pháp luật có thể thay đổi theo thời gian. Chúng tôi
              không chịu trách nhiệm đối với các quyết định được đưa ra chỉ dựa trên thông
              tin từ website mà không có ý kiến tư vấn trực tiếp từ luật sư.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">4. Liên hệ</h2>
            <p>
              Mọi thắc mắc liên quan đến điều khoản sử dụng, vui lòng liên hệ qua email{" "}
              {siteConfig.contact.email}.
            </p>
            <p className="mt-8 text-sm text-ink/50">Cập nhật lần cuối: 04/09/2026</p>
          </div>
        </Container>
      </section>
    </>
  );
}
