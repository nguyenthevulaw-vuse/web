"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
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
    <header className="sticky top-0 z-50">
      {/* Dải màu chủ đạo: logo, tên công ty cỡ lớn, thông tin liên hệ */}
      <div className="bg-primary">
        <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/brand/ntvlaw-logo.png"
              alt={siteConfig.name}
              width={809}
              height={651}
              priority
              className="h-12 w-auto shrink-0 sm:h-14"
            />
            <span className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-ink/70 sm:text-xs">
                {siteConfig.shortLegalName}
              </span>
              <span className="block text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
                {siteConfig.name}
              </span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm font-semibold text-ink/80">
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.hotline}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden items-center gap-1.5 hover:text-ink sm:flex"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock className="h-4 w-4" />
              {siteConfig.contact.workingHours}
            </span>
          </div>
        </Container>
      </div>

      {/* Thanh menu: chữ đậm, cỡ lớn, rõ ràng */}
      <div className="border-b border-ink/10 bg-white shadow-sm">
        <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;

              if (item.href === "/dich-vu") {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-[15px] font-bold uppercase tracking-wide transition-colors",
                        active
                          ? "text-primary-dark"
                          : "text-ink/80 hover:text-primary-dark",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-20 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink/10 bg-white p-3 shadow-xl shadow-ink/10">
                        {practiceAreas.map((area) => (
                          <Link
                            key={area.slug}
                            href={`/dich-vu/${area.slug}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-primary/5 hover:text-primary-dark"
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
                    "rounded-lg px-3.5 py-2.5 text-[15px] font-bold uppercase tracking-wide transition-colors",
                    active ? "text-primary-dark" : "text-ink/80 hover:text-primary-dark",
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
      </div>

      {open ? (
        <div className="border-b border-ink/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-bold uppercase tracking-wide",
                    active ? "bg-primary/10 text-primary-dark" : "text-ink/80",
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
