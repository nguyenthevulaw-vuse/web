"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/slides/doanh-nghiep.jpg",
    alt: "Tư vấn pháp lý doanh nghiệp",
    title: "Tư vấn pháp lý doanh nghiệp",
    description: "Đồng hành cùng doanh nghiệp trong mọi hoạt động kinh doanh, đầu tư.",
  },
  {
    src: "/slides/thue.jpg",
    alt: "Tư vấn pháp luật thuế",
    title: "Tư vấn pháp luật thuế",
    description: "Hỗ trợ tuân thủ và xử lý các vấn đề pháp lý liên quan đến thuế.",
  },
  {
    src: "/slides/hop-dong.jpg",
    alt: "Soạn thảo, rà soát hợp đồng",
    title: "Soạn thảo, rà soát hợp đồng",
    description: "Đảm bảo quyền lợi, giảm thiểu rủi ro pháp lý trong từng điều khoản.",
  },
  {
    src: "/slides/phap-ly-nha-dat.jpg",
    alt: "Pháp lý nhà đất, bất động sản",
    title: "Pháp lý nhà đất, bất động sản",
    description: "Tư vấn giao dịch, thủ tục pháp lý nhà đất an toàn, minh bạch.",
  },
  {
    src: "/slides/to-tung-tai-toa.jpg",
    alt: "Tố tụng, đại diện tại Tòa án",
    title: "Tố tụng, đại diện tại Tòa án",
    description: "Đại diện, bảo vệ quyền và lợi ích hợp pháp của khách hàng.",
  },
];

/**
 * Slide ảnh chuyển động mượt mà bên dưới Header — điều hướng bằng nút mũi
 * tên tròn "<" ">" hai bên, tự động chuyển sau vài giây, dừng khi rê chuột.
 */
export function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  function goTo(delta: number) {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }

  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div
          className="group relative overflow-hidden rounded-3xl border border-ink/10 shadow-lg shadow-ink/5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="relative h-[240px] w-full shrink-0 sm:h-[340px] lg:h-[440px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-2xl">
                {slides[index].title}
              </h3>
              <p className="mt-1 max-w-lg text-sm text-white/80 sm:text-base">
                {slides[index].description}
              </p>
            </div>
            <div className="pointer-events-auto flex items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Chuyển đến ảnh ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80",
                  )}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Ảnh trước"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-white sm:left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Ảnh tiếp theo"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-white sm:right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
