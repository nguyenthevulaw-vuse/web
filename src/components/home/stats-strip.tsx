import { Award, Calendar, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Icon tương ứng theo đúng thứ tự 4 mục trong siteConfig.stats.
const STAT_ICONS = [Award, Calendar, Layers, ShieldCheck];

// Mỗi icon một màu luân phiên theo bảng nhận diện (xanh lá - cam - xanh
// dương) thay vì cùng một màu cho đỡ đơn điệu.
const ICON_STYLE = [
  "border-primary-dark/40 text-primary-dark",
  "border-secondary/40 text-secondary",
  "border-accent/40 text-accent",
];

export function StatsStrip() {
  return (
    <section className="border-b border-ink/5 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {siteConfig.stats.map((stat, index) => {
          const Icon = STAT_ICONS[index] ?? Award;
          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full border-2",
                  ICON_STYLE[index % ICON_STYLE.length],
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
