import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { href: siteConfig.social.facebook, short: "FB", label: "Facebook" },
    { href: siteConfig.social.linkedin, short: "in", label: "LinkedIn" },
    { href: siteConfig.social.youtube, short: "YT", label: "YouTube" },
    { href: siteConfig.social.zalo, short: "Za", label: "Zalo" },
    { href: siteConfig.social.viber, short: "Vi", label: "Viber" },
    { href: siteConfig.social.whatsapp, short: "WA", label: "WhatsApp" },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-ink/10 bg-primary/5 text-ink/70">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/ntvlaw-logo.png"
              alt={siteConfig.name}
              width={809}
              height={651}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.description}</p>
          {socialLinks.length > 0 ? (
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ href, short, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/70 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <SocialIcon label={short} />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Dịch vụ pháp lý
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {practiceAreas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link href={`/dich-vu/${area.slug}`} className="hover:text-primary-dark">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Liên kết
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Thông tin liên hệ
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
              <span>{siteConfig.contact.hotline}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
              <span>{siteConfig.contact.email}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
          <div className="text-center sm:text-left">
            <p>
              © {year} {siteConfig.fullName}. Bảo lưu mọi quyền.
            </p>
            <p className="mt-1 text-ink/50">
              GĐKHĐ số {siteConfig.license.number} do {siteConfig.license.issuer} cấp
            </p>
          </div>
          <div className="flex items-center gap-5">
            {siteConfig.footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-dark">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
