import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ArticleCard } from "@/components/news/article-card";
import { getArticles } from "@/lib/queries";
import { categoryLabels, type ArticleCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kiến thức pháp luật",
  description: "Cập nhật tin tức, kiến thức pháp lý hữu ích dành cho khách hàng và cộng đồng.",
};

export default async function NewsListPage({
  searchParams,
}: {
  searchParams: Promise<{ danh_muc?: string }>;
}) {
  const { danh_muc } = await searchParams;
  const articles = await getArticles();

  const categories = Object.keys(categoryLabels).filter(
    (key) => key !== "chung",
  ) as ArticleCategory[];

  const filtered = danh_muc ? articles.filter((a) => a.category === danh_muc) : articles;

  return (
    <>
      <PageHero
        eyebrow="Chia sẻ kiến thức"
        title="Kiến thức pháp luật"
        description="Những bài viết pháp lý được luật sư của chúng tôi biên soạn nhằm giúp khách hàng nắm rõ quyền lợi và quy định pháp luật liên quan."
        breadcrumb="Kiến thức pháp luật"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/kien-thuc-phap-luat"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                !danh_muc ? "bg-primary text-ink" : "bg-ink/5 text-ink/70 hover:bg-ink/10",
              )}
            >
              Tất cả
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/kien-thuc-phap-luat?danh_muc=${cat}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  danh_muc === cat
                    ? "bg-primary text-ink"
                    : "bg-ink/5 text-ink/70 hover:bg-ink/10",
                )}
              >
                {categoryLabels[cat]}
              </Link>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-ink/60">
              Chưa có bài viết nào trong danh mục này.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
