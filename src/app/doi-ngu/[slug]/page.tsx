import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getTeamMember, getTeamMembers } from "@/lib/queries";
import { cn } from "@/lib/utils";

// Nền icon luân phiên xanh lá - cam - xanh dương thay vì một màu cố định
// cho đỡ đơn điệu.
const ICON_BG = ["bg-primary text-white", "bg-secondary text-ink", "bg-accent text-white"];

export async function generateStaticParams() {
  const members = await getTeamMembers();
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMember(slug);
  if (!member) return {};
  return { title: member.name, description: member.summary };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMember(slug);
  if (!member) notFound();

  return (
    <>
      <PageHero eyebrow={member.title} title={member.name} breadcrumb={member.name} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            {member.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 320px, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark lg:aspect-square">
                <span className="text-5xl font-extrabold tracking-wide text-white/90">
                  {member.initials}
                </span>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-ink">Giới thiệu</h2>
              <p className="prose-legal mt-4 text-base">{member.bio}</p>

              {member.highlights && member.highlights.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-ink">Ưu điểm nổi bật</h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {member.highlights.map((highlight, index) => (
                      <div
                        key={highlight.title}
                        className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
                      >
                        <span
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl",
                            ICON_BG[index % ICON_BG.length],
                          )}
                        >
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-base font-bold text-ink">{highlight.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {member.expertise && member.expertise.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-ink">Lĩnh vực chuyên sâu</h2>
                  <ul className="mt-5 space-y-3">
                    {member.expertise.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
                        <span className="text-sm leading-relaxed text-ink/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10 rounded-2xl bg-primary-dark/[0.04] p-6 sm:p-8">
                <h3 className="text-lg font-bold text-ink">
                  Muốn được {member.name} tư vấn trực tiếp?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Đặt lịch hẹn để trao đổi cụ thể về vấn đề pháp lý bạn đang gặp phải.
                </p>
                <div className="mt-5">
                  <Button href="/lien-he">
                    Đặt lịch tư vấn
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
