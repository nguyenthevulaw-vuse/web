import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getTeamMember, getTeamMembers } from "@/lib/queries";

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
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark lg:aspect-square">
              <span className="text-5xl font-extrabold tracking-wide text-white/90">
                {member.initials}
              </span>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Giới thiệu</h2>
              <p className="prose-legal mt-4 text-base">{member.bio}</p>

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
