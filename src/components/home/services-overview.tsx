import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PracticeIcon } from "@/components/ui/practice-icon";
import type { PracticeArea } from "@/lib/types";

export function ServicesOverview({ areas }: { areas: PracticeArea[] }) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Lĩnh vực hành nghề"
            title="Dịch vụ pháp lý toàn diện"
            description="Chúng tôi cung cấp dịch vụ tư vấn pháp lý chuyên sâu, đồng hành cùng khách hàng trong nhiều lĩnh vực khác nhau."
          />
          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-ink"
          >
            Xem tất cả dịch vụ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.slice(0, 8).map((area) => (
            <Link
              key={area.slug}
              href={`/dich-vu/${area.slug}`}
              className="group rounded-2xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-dark transition-colors group-hover:bg-primary group-hover:text-ink">
                <PracticeIcon name={area.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{area.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
                Tìm hiểu thêm <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
