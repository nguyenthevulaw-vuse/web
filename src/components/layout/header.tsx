"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PracticeIcon } from "@/components/ui/practice-icon";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/ntvlaw-logo.png"
            alt={siteConfig.name}
            width={809}
            height={651}
            priority
            className="h-14 w-auto"
          />
          <span className="hidden text-[11px] font-medium uppercase leading-tight tracking-wider text-primary-dark sm:block">
            {siteConfig.shortLegalName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;

            if (item.href === "/dich-vu") {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary-dark"
                        : "text-ink/70 hover:bg-ink/5 hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>

                  <div className="invisible absolute left-1/2 top-full z-20 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink/10 bg-white p-3 shadow-xl shadow-ink/10">
                      {practiceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/dich-vu/${area.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink/70 hover:bg-primary/5 hover:text-primary-dark"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-dark">
                            <PracticeIcon name={area.icon} className="h-4 w-4" />
                          </span>
                          {area.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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
