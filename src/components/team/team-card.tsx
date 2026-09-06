import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import type { TeamMember } from "@/lib/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/doi-ngu/${member.slug}`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      {member.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-accent/15">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-accent/15">
          <span className="text-4xl font-extrabold tracking-wide text-ink">
            {member.initials}
          </span>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-base font-bold text-ink group-hover:text-primary-dark">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary-dark">{member.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{member.summary}</p>
        <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/50">
          <Scale className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
