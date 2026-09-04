import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/types";
import { categoryLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/kien-thuc-phap-luat/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/25 to-secondary/25 px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-ink">
          {categoryLabels[article.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge tone="primary">{categoryLabels[article.category]}</Badge>
        <h3 className="mt-3 line-clamp-2 text-base font-bold text-ink group-hover:text-primary-dark">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/60">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-4 text-xs text-ink/50">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(article.published_at)}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
            Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
