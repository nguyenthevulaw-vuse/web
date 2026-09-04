import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { TeamCard } from "@/components/team/team-card";
import { getTeamMembers } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Đội ngũ luật sư",
  description: "Gặp gỡ đội ngũ luật sư giàu kinh nghiệm, chuyên môn sâu của chúng tôi.",
};

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <>
      <PageHero
        eyebrow="Con người"
        title="Đội ngũ luật sư"
        description="Đội ngũ luật sư và chuyên viên pháp lý giàu kinh nghiệm, chuyên môn sâu, luôn sẵn sàng đồng hành và bảo vệ quyền lợi hợp pháp của khách hàng."
        breadcrumb="Đội ngũ luật sư"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
