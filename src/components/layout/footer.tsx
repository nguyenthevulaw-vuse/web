import Link from "next/link";
import { MapPin, Phone, Mail, Scale } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <Scale className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { href: siteConfig.social.facebook, short: "FB", label: "Facebook" },
              { href: siteConfig.social.linkedin, short: "in", label: "LinkedIn" },
              { href: siteConfig.social.youtube, short: "YT", label: "YouTube" },
              { href: siteConfig.social.zalo, short: "Za", label: "Zalo" },
            ].map(({ href, short, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
              >
                <SocialIcon label={short} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Dịch vụ pháp lý
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {practiceAreas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link href={`/dich-vu/${area.slug}`} className="hover:text-primary">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Liên kết
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Thông tin liên hệ
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{siteConfig.contact.hotline}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{siteConfig.contact.email}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-5">
            {siteConfig.footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
