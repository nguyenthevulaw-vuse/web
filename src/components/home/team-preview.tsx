import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/team/team-card";
import type { TeamMember } from "@/lib/types";

export function TeamPreview({ members }: { members: TeamMember[] }) {
  return (
    <section className="bg-primary-dark/[0.03] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Đội ngũ luật sư"
            title="Gặp gỡ những luật sư đồng hành cùng bạn"
            description="Đội ngũ luật sư giàu kinh nghiệm, chuyên môn sâu, luôn sẵn sàng bảo vệ quyền và lợi ích hợp pháp của khách hàng."
          />
          <Link
            href="/doi-ngu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-primary"
          >
            Xem toàn bộ đội ngũ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.slice(0, 4).map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
