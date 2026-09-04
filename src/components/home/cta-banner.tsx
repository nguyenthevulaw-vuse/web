import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-primary/25 via-white to-secondary/20 px-8 py-14 text-center sm:px-16">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-secondary/25 blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
              Bạn đang gặp vấn đề pháp lý cần tư vấn?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Đội ngũ luật sư của {siteConfig.name} sẵn sàng lắng nghe và đồng hành cùng
              bạn tìm ra giải pháp pháp lý tối ưu nhất.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/lien-he" size="lg" variant="secondary">
                Liên hệ ngay
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
                size="lg"
                variant="outline"
              >
                <PhoneCall className="h-4 w-4" />
                {siteConfig.contact.hotline}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
