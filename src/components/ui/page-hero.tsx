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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/5" />
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <Container className="relative">
        <nav className="flex items-center gap-1.5 text-xs text-ink/50">
          <Link href="/" className="hover:text-primary-dark">
            Trang chủ
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink/80">{breadcrumb}</span>
        </nav>
        {eyebrow ? (
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
