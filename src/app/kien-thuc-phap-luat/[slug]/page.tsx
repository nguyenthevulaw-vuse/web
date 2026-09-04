import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/news/article-card";
import { getArticle, getArticles } from "@/lib/queries";
import { categoryLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([getArticle(slug), getArticles()]);
  if (!article) notFound();

  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={categoryLabels[article.category]}
        title={article.title}
        breadcrumb={article.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 text-xs text-ink/50">
              <Badge tone="primary">{categoryLabels[article.category]}</Badge>
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(article.published_at)}
              </span>
            </div>

            <p className="mt-6 text-lg font-medium leading-relaxed text-ink/80">
              {article.excerpt}
            </p>

            <div className="prose-legal mt-6 border-t border-ink/10 pt-6 text-base">
              <p>{article.content}</p>
            </div>

            <div className="mt-10 rounded-2xl border border-ink/10 bg-primary-dark/[0.03] p-6 text-sm leading-relaxed text-ink/60">
              <strong className="text-ink">Lưu ý:</strong> Nội dung bài viết chỉ mang tính
              chất tham khảo, không thay thế cho ý kiến tư vấn pháp lý chính thức. Vui lòng
              liên hệ với luật sư của chúng tôi để được tư vấn cụ thể cho từng trường hợp.
            </div>

            <Link
              href="/kien-thuc-phap-luat"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại danh sách bài viết
            </Link>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-16 max-w-5xl border-t border-ink/10 pt-12">
              <h2 className="text-xl font-bold text-ink">Bài viết liên quan</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a, index) => (
                  <ArticleCard key={a.slug} article={a} index={index} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
