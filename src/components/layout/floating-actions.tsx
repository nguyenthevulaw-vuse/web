"use client";

import { useEffect, useState, type ComponentType } from "react";
import { CalendarCheck, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ZaloIcon } from "@/components/icons/zalo-icon";

type ActionItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  className: string;
  // Chọn màu icon theo độ sáng của nền để đủ tương phản: nền cam (secondary)
  // dùng icon tối (text-ink), nền xanh lá (primary) dùng icon trắng. Mỗi nút
  // một màu khác nhau (cam/xanh lá) thay vì cùng một tông cho đỡ đơn điệu;
  // riêng Zalo dùng luôn icon thương hiệu tự tô màu xanh dương của Zalo, nên
  // không cần className nền riêng.
  iconClassName: string;
  external?: boolean;
};

const actions: ActionItem[] = [
  {
    label: "Gọi ngay",
    href: `tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`,
    icon: Phone,
    className: "bg-secondary hover:bg-secondary/90",
    iconClassName: "text-ink",
  },
  {
    label: "Chat Zalo",
    href: siteConfig.social.zalo,
    icon: ZaloIcon,
    className: "",
    iconClassName: "",
    external: true,
  },
  {
    label: "Đặt lịch tư vấn",
    href: "/lien-he",
    icon: CalendarCheck,
    className: "bg-primary hover:brightness-95",
    iconClassName: "text-white",
  },
].filter((action) => action.href);

/**
 * Thanh nút hành động nhanh nổi cố định góc dưới bên phải — gọi điện,
 * chat Zalo, đặt lịch tư vấn, và cuộn lên đầu trang. Hiển thị trên mọi
 * trang (đặt trong layout gốc).
 */
export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 480);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-center gap-3 sm:right-6">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          aria-label={action.label}
          className="group flex flex-col items-center gap-1 transition-transform hover:-translate-y-0.5"
        >
          <span
            className={cn(
              "flex h-12 w-12 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-ink/20 ring-2 ring-white transition-colors",
              action.className,
              action.iconClassName,
            )}
          >
            <action.icon className={action.className ? "h-5 w-5" : "h-12 w-12"} />
          </span>
          <span className="hidden rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-ink shadow-sm sm:block">
            {action.label}
          </span>
        </a>
      ))}

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Lên đầu trang"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg shadow-ink/20 ring-1 ring-ink/10 transition-all",
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
