import { Clock, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function TopBar() {
  return (
    <div className="hidden bg-ink text-white/80 md:block">
      <Container className="flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            Hotline: {siteConfig.contact.hotline}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-primary" />
          {siteConfig.contact.workingHours}
        </div>
      </Container>
    </div>
  );
}
