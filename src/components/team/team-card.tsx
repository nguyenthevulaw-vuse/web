import Link from "next/link";
import { Scale } from "lucide-react";
import type { TeamMember } from "@/lib/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/doi-ngu/${member.slug}`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <span className="text-4xl font-extrabold tracking-wide text-white/90">
          {member.initials}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-ink group-hover:text-primary-dark">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{member.summary}</p>
        <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/50">
          <Scale className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
