import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { PracticeIcon } from "@/components/ui/practice-icon";
import { getPracticeAreas } from "@/lib/queries";
import { cn } from "@/lib/utils";

// Icon nền màu đậm (không dùng tint mờ /10 nữa vì các màu tint nhìn quá
// giống nhau, thiếu nổi bật) luân phiên xanh lá - cam - xanh dương, kèm dải
// màu nhấn cùng tông phía trên mỗi thẻ để phân biệt trực quan hơn.
const ICON_BG = ["bg-primary text-white", "bg-secondary text-ink", "bg-accent text-white"];
const CARD_ACCENT = ["border-t-primary", "border-t-secondary", "border-t-accent"];

export const metadata: Metadata = {
  title: "Dịch vụ pháp lý",
  description:
    "Danh sách các lĩnh vực dịch vụ pháp lý mà chúng tôi cung cấp cho doanh nghiệp và cá nhân.",
};

export default async function ServicesPage() {
  const areas = await getPracticeAreas();

  return (
    <>
      <PageHero
        eyebrow="Lĩnh vực hành nghề"
        title="Dịch vụ pháp lý"
        description="Chúng tôi cung cấp dịch vụ tư vấn pháp lý chuyên sâu, đồng hành cùng khách hàng trong nhiều lĩnh vực khác nhau, từ doanh nghiệp, đầu tư đến dân sự, gia đình."
        breadcrumb="Dịch vụ pháp lý"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/dich-vu/${area.slug}`}
                className={cn(
                  "group rounded-2xl border border-t-4 border-ink/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10",
                  CARD_ACCENT[index % CARD_ACCENT.length],
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-105",
                    ICON_BG[index % ICON_BG.length],
                  )}
                >
                  <PracticeIcon name={area.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink">{area.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{area.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
                  Tìm hiểu thêm <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
