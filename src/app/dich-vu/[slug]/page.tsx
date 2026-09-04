import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PracticeIcon } from "@/components/ui/practice-icon";
import { getPracticeArea, getPracticeAreas } from "@/lib/queries";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  const areas = await getPracticeAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await getPracticeArea(slug);
  if (!area) return {};
  return { title: area.title, description: area.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [area, allAreas] = await Promise.all([getPracticeArea(slug), getPracticeAreas()]);

  if (!area) notFound();

  const otherAreas = allAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow="Dịch vụ pháp lý"
        title={area.title}
        description={area.summary}
        breadcrumb={area.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <article>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <PracticeIcon name={area.icon} className="h-7 w-7" />
              </span>
              <div className="prose-legal mt-6 text-base">
                <p>{area.content}</p>
              </div>

              <div className="mt-10 rounded-2xl bg-primary-dark/[0.04] p-6 sm:p-8">
                <h2 className="text-lg font-bold text-ink">
                  Cần tư vấn về {area.title.toLowerCase()}?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Liên hệ với đội ngũ luật sư của {siteConfig.name} để được tư vấn cụ thể
                  cho trường hợp của bạn.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href="/lien-he">
                    Đặt lịch tư vấn
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
                    variant="ghost"
                    className="ring-1 ring-ink/10"
                  >
                    <PhoneCall className="h-4 w-4" />
                    {siteConfig.contact.hotline}
                  </Button>
                </div>
              </div>
            </article>

            <aside>
              <div className="rounded-2xl border border-ink/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
                  Dịch vụ khác
                </h3>
                <ul className="mt-4 space-y-1">
                  {otherAreas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/dich-vu/${a.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink/70 hover:bg-primary/5 hover:text-primary-dark"
                      >
                        {a.title}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
