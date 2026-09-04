import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 140% at 85% 0%, var(--color-primary-dark) 0%, var(--color-ink) 55%)",
        }}
      />
      <Container className="relative">
        <nav className="flex items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="hover:text-white">
            Trang chủ
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/80">{breadcrumb}</span>
        </nav>
        {eyebrow ? (
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
