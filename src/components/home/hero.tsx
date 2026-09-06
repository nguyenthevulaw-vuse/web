import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="relative z-0">
              {/* Nền hình chữ nhật bo góc làm điểm nhấn phía sau đoạn trích dẫn —
                  hình ô van khó bao trọn một khối văn bản chữ nhật ở các góc,
                  nên dùng khung chữ nhật bo góc để chứa đủ toàn bộ đoạn văn. */}
              <div
                aria-hidden
                className="absolute -inset-x-6 -inset-y-5 -z-10 rounded-3xl border border-ink/10 bg-white shadow-lg shadow-primary/10 sm:-inset-x-8 sm:-inset-y-6"
              />
              <p className="max-w-xl text-center text-lg leading-relaxed text-balance text-ink/60">
                <span aria-hidden className="mr-1 font-serif text-3xl font-bold text-secondary">
                  “
                </span>
                {siteConfig.description} Chúng tôi giúp bạn hiểu rõ quyền lợi và
                đưa ra quyết định đúng đắn trong mọi vấn đề pháp lý.
                <span aria-hidden className="ml-1 font-serif text-3xl font-bold text-secondary">
                  ”
                </span>
              </p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/lien-he" size="lg">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/dich-vu" size="lg" variant="outline">
                Xem dịch vụ pháp lý
              </Button>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {siteConfig.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-ink/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-ink/10 bg-white/80 p-8 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Đội ngũ luật sư giàu kinh nghiệm</p>
                  <p className="text-xs text-ink/50">Chuyên môn sâu trong nhiều lĩnh vực</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-accent/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Đồng hành cùng khách hàng</p>
                  <p className="text-xs text-ink/50">Hỗ trợ xuyên suốt quá trình xử lý vụ việc</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-secondary/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-ink">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Bảo mật thông tin tuyệt đối</p>
                  <p className="text-xs text-ink/50">Tuân thủ nghiêm ngặt đạo đức nghề luật</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
