import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { getFaqs } from "@/lib/queries";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hỏi đáp pháp luật",
  description: "Giải đáp những câu hỏi pháp lý thường gặp từ khách hàng.",
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <>
      <PageHero
        eyebrow="Giải đáp thắc mắc"
        title="Câu hỏi thường gặp"
        description="Tổng hợp các câu hỏi pháp lý khách hàng thường quan tâm. Nếu chưa tìm thấy câu trả lời phù hợp, hãy liên hệ trực tiếp để được luật sư tư vấn."
        breadcrumb="Hỏi đáp"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={faqs} />

            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-primary-dark/[0.04] px-6 py-10 text-center">
              <h2 className="text-lg font-bold text-ink">Không tìm thấy câu trả lời bạn cần?</h2>
              <p className="max-w-md text-sm text-ink/60">
                Đặt câu hỏi trực tiếp cho luật sư của chúng tôi, hoàn toàn miễn phí cho lần tư
                vấn đầu tiên.
              </p>
              <Button href="/lien-he">
                Đặt câu hỏi ngay
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
