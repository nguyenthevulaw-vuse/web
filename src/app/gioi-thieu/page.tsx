import type { Metadata } from "next";
import { Compass, Eye, Target, ShieldCheck, Telescope, Rocket } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsStrip } from "@/components/home/stats-strip";
import { TeamPreview } from "@/components/home/team-preview";
import { siteConfig } from "@/lib/site-config";
import { getTeamMembers } from "@/lib/queries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Tìm hiểu về ${siteConfig.fullName} - sứ mệnh, tầm nhìn và giá trị cốt lõi.`,
};

// Nền icon luân phiên xanh lá - cam - xanh dương thay vì một màu cố định
// cho đỡ đơn điệu.
const ICON_BG = ["bg-primary text-white", "bg-secondary text-ink", "bg-accent text-white"];

const values = [
  {
    icon: ShieldCheck,
    title: "Chính trực",
    description: "Hành nghề trung thực, minh bạch, đặt đạo đức nghề nghiệp lên hàng đầu.",
  },
  {
    icon: Target,
    title: "Tận tâm",
    description: "Luôn đặt lợi ích và sự an tâm của khách hàng làm trọng tâm mọi hoạt động.",
  },
  {
    icon: Compass,
    title: "Chuyên nghiệp",
    description: "Không ngừng cập nhật kiến thức pháp luật, nâng cao chất lượng dịch vụ.",
  },
  {
    icon: Eye,
    title: "Minh bạch",
    description: "Thông tin, chi phí dịch vụ rõ ràng, không phát sinh ẩn trong quá trình hợp tác.",
  },
];

const visionMission = [
  {
    icon: Telescope,
    iconBg: "bg-primary text-white",
    title: "Tầm nhìn của chúng tôi",
    description:
      "Tầm nhìn của NTVLaw là thúc đẩy sự hiểu biết và năng lực pháp lý cho mọi khách hàng, giúp họ đưa ra các quyết định sáng suốt và mang tính chiến lược. Thông qua các dịch vụ của mình, chúng tôi hướng tới việc xây dựng một cộng đồng có nhận thức pháp lý tốt, có khả năng vận dụng pháp luật để mang lại lợi thế cho bản thân.",
  },
  {
    icon: Rocket,
    iconBg: "bg-accent text-white",
    title: "Sứ mệnh của chúng tôi",
    description:
      "Sứ mệnh của chúng tôi là mang đến những giải pháp pháp lý hiệu quả nhất, được thiết kế riêng theo nhu cầu của từng khách hàng. Bằng cách kết hợp chuyên môn pháp lý sâu rộng với phương châm lấy khách hàng làm trung tâm, chúng tôi nỗ lực giúp các cá nhân và doanh nghiệp vượt qua khó khăn một cách tự tin và hiệu quả.",
  },
];

const milestones = [
  {
    year: "25/7/2011",
    text: "LS. Nguyễn Thế Vũ được cấp Thẻ luật sư số 6396, gia nhập Đoàn Luật sư Thành phố Hồ Chí Minh.",
  },
  {
    year: "14/10/2011",
    text: "Được Sở Tư pháp Thành phố Hồ Chí Minh cấp Giấy đăng ký hoạt động số 79.2011.02.1589/TP/ĐKHĐ, chính thức thành lập.",
  },
  {
    year: "12/11/2025",
    text: "Giấy đăng ký hoạt động được cập nhật, thay đổi lần thứ 4, tiếp tục hoạt động dưới tên giao dịch NTVLaw.",
  },
];

export default async function AboutPage() {
  const members = await getTeamMembers();

  return (
    <>
      <PageHero
        eyebrow="Về chúng tôi"
        title="Giới thiệu"
        description={siteConfig.description}
        breadcrumb="Giới thiệu"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Câu chuyện" title="Hành trình phát triển" />
              <p className="prose-legal mt-6 text-base">
                {siteConfig.fullName} được thành lập với mong muốn trở thành đối tác pháp
                lý tin cậy cho doanh nghiệp và cá nhân tại Việt Nam. Trải qua nhiều năm hoạt
                động, chúng tôi không ngừng mở rộng đội ngũ, nâng cao chuyên môn để đáp ứng
                nhu cầu tư vấn pháp lý ngày càng đa dạng của khách hàng.
              </p>
              <p className="prose-legal mt-4 text-base">
                Bên cạnh hoạt động tư vấn, chúng tôi chú trọng chia sẻ kiến thức pháp luật
                đến cộng đồng thông qua các bài viết, hướng dẫn thực tiễn — giúp khách hàng
                chủ động hơn trong việc bảo vệ quyền và lợi ích hợp pháp của mình.
              </p>

              <div className="mt-6 rounded-2xl border border-ink/10 bg-primary-dark/[0.03] p-5 text-sm text-ink/70">
                <p>
                  <span className="font-semibold text-ink">Giấy đăng ký hoạt động:</span> Số{" "}
                  {siteConfig.license.number} do {siteConfig.license.issuer} cấp lần đầu ngày{" "}
                  {siteConfig.license.issuedFirstDate}, thay đổi lần gần nhất ngày{" "}
                  {siteConfig.license.lastAmendedDate}.
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-ink">Người đại diện theo pháp luật:</span>{" "}
                  LS. {siteConfig.director.name} — {siteConfig.director.title}, Thẻ luật sư số{" "}
                  {siteConfig.director.barCardNumber} (cấp {siteConfig.director.barCardDate}),
                  thành viên {siteConfig.director.barAssociation}.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4">
                  <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary-dark">
                    {m.year}
                  </span>
                  <p className="pt-2.5 text-sm leading-relaxed text-ink/70">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary/5 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Định hướng"
            title="Tầm nhìn & Sứ mệnh"
            description="Kim chỉ nam cho mọi hoạt động tư vấn và đồng hành cùng khách hàng của chúng tôi."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {visionMission.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10"
              >
                <span
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl",
                    item.iconBg,
                  )}
                >
                  <item.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{item.title}</h3>
                <p className="prose-legal mt-4 text-justify text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatsStrip />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Giá trị cốt lõi"
            title="Điều làm nên sự khác biệt"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink/10 p-6 text-center"
              >
                <span
                  className={cn(
                    "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl",
                    ICON_BG[index % ICON_BG.length],
                  )}
                >
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamPreview members={members} />
    </>
  );
}
