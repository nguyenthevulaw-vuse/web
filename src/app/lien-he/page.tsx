import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ với ${siteConfig.fullName} để được tư vấn pháp lý miễn phí.`,
};

const contactItems = [
  { icon: MapPin, label: "Địa chỉ văn phòng", value: siteConfig.contact.address },
  { icon: Phone, label: "Hotline", value: siteConfig.contact.hotline },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: Clock, label: "Giờ làm việc", value: siteConfig.contact.workingHours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kết nối với chúng tôi"
        title="Liên hệ"
        description="Để lại thông tin, đội ngũ luật sư sẽ liên hệ tư vấn miễn phí trong thời gian sớm nhất."
        breadcrumb="Liên hệ"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-xl font-bold text-ink">Thông tin liên hệ</h2>
              <div className="mt-6 space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.label}</p>
                      <p className="mt-0.5 text-sm text-ink/60">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  className="h-64 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ văn phòng"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-ink">Gửi yêu cầu tư vấn</h2>
              <p className="mt-2 text-sm text-ink/60">
                Điền thông tin bên dưới, chúng tôi cam kết bảo mật thông tin của bạn.
              </p>
              <div className="relative mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
