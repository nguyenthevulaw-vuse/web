"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Scale, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Scale className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-ink">{siteConfig.name}</span>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-primary-dark">
              {siteConfig.fullName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-primary/10 text-primary-dark" : "text-ink/70 hover:bg-ink/5 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/lien-he" size="md">
            Đặt lịch tư vấn
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-ink/5 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium",
                    active ? "bg-primary/10 text-primary-dark" : "text-ink/70",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/lien-he" size="md" className="mt-2 justify-center">
              Đặt lịch tư vấn
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
