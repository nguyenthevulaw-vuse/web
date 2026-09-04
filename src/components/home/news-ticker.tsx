"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { Article } from "@/lib/types";

/**
 * Thanh tin tức chạy — hiển thị lần lượt tiêu đề các bài viết mới nhất,
 * chuyển bằng nút mũi tên trái/phải hoặc tự động sau vài giây.
 */
export function NewsTicker({ articles }: { articles: Article[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || articles.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, articles.length]);

  if (articles.length === 0) return null;

  const current = articles[index];

  function goTo(delta: number) {
    setIndex((i) => (i + delta + articles.length) % articles.length);
  }

  return (
    <div
      className="border-b border-ink/10 bg-primary/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container className="flex items-center gap-3 py-2.5">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white sm:flex">
          <Megaphone className="h-3.5 w-3.5" />
          Tin mới
        </span>

        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Tin trước"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-primary-dark hover:text-primary-dark"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="min-w-0 flex-1 overflow-hidden text-center">
          <Link
            key={current.slug}
            href={`/kien-thuc-phap-luat/${current.slug}`}
            className="inline-block truncate text-sm font-medium text-ink/80 transition-colors hover:text-primary-dark"
          >
            {current.title}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Tin tiếp theo"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-primary-dark hover:text-primary-dark"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </Container>
    </div>
  );
}
