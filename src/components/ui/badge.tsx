import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "accent" | "neutral";
}) {
  const tones = {
    primary: "bg-primary/10 text-primary-dark",
    accent: "bg-accent/10 text-accent",
    neutral: "bg-ink/5 text-ink/70",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
