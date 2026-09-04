import type { Metadata } from "next";
import { Compass, Eye, Target, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsStrip } from "@/components/home/stats-strip";
import { TeamPreview } from "@/components/home/team-preview";
import { siteConfig } from "@/lib/site-config";
import { getTeamMembers } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Tìm hiểu về ${siteConfig.fullName} - sứ mệnh, tầm nhìn và giá trị cốt lõi.`,
};

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

const milestones = [
  { year: "2011", text: "Thành lập văn phòng luật sư, tiền thân của An Tín Law." },
  { year: "2015", text: "Mở rộng quy mô, chuyển đổi thành Công ty Luật TNHH An Tín." },
  { year: "2019", text: "Thành lập bộ phận chuyên trách Đầu tư nước ngoài & Sở hữu trí tuệ." },
  { year: "2023", text: "Đạt mốc 1.000 khách hàng doanh nghiệp và cá nhân được phục vụ." },
  { year: "2026", text: "Ra mắt nền tảng tư vấn pháp lý trực tuyến, mở rộng tiếp cận khách hàng." },
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
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink/10 p-6 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
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
