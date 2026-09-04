import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 120% at 15% 0%, var(--color-primary-dark) 0%, var(--color-ink) 55%)",
        }}
      />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              {siteConfig.fullName}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Tư vấn pháp lý{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                tận tâm, chính xác
              </span>{" "}
              cho doanh nghiệp và cá nhân
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {siteConfig.description} Chúng tôi giúp bạn hiểu rõ quyền lợi và
              đưa ra quyết định đúng đắn trong mọi vấn đề pháp lý.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/lien-he" size="lg">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/dich-vu" size="lg" variant="outline">
                Xem dịch vụ pháp lý
              </Button>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {siteConfig.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Đội ngũ luật sư giàu kinh nghiệm</p>
                  <p className="text-xs text-white/60">Chuyên môn sâu trong nhiều lĩnh vực</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Đồng hành cùng khách hàng</p>
                  <p className="text-xs text-white/60">Hỗ trợ xuyên suốt quá trình xử lý vụ việc</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Bảo mật thông tin tuyệt đối</p>
                  <p className="text-xs text-white/60">Tuân thủ nghiêm ngặt đạo đức nghề luật</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
