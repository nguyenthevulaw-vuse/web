import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function StatsStrip() {
  return (
    <section className="border-b border-ink/5 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-primary-dark sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
