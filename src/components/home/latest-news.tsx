import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/news/article-card";
import type { Article } from "@/lib/types";

export function LatestNews({ articles }: { articles: Article[] }) {
  // Không đặt padding-top riêng — mục này luôn nằm ngay sau ServicesOverview
  // (cũng nền trắng, đã có padding-bottom py-20/24), đặt thêm padding-top sẽ
  // cộng dồn thành khoảng trắng quá lớn giữa 2 mục.
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Kiến thức pháp luật"
            title="Cập nhật tin tức & kiến thức pháp lý"
            description="Chia sẻ những thông tin pháp luật hữu ích, cập nhật quy định mới nhất tới khách hàng và cộng đồng."
          />
          <Link
            href="/kien-thuc-phap-luat"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-ink"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
