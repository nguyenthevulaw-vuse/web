import { NewsTicker } from "@/components/home/news-ticker";
import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Process } from "@/components/home/process";
import { TeamPreview } from "@/components/home/team-preview";
import { LatestNews } from "@/components/home/latest-news";
import { Commitments } from "@/components/home/commitments";
import { CtaBanner } from "@/components/home/cta-banner";
import { getLatestArticles, getPracticeAreas, getTeamMembers } from "@/lib/queries";

export default async function HomePage() {
  const [areas, members, articles] = await Promise.all([
    getPracticeAreas(),
    getTeamMembers(),
    getLatestArticles(6),
  ]);

  return (
    <>
      <NewsTicker articles={articles} />
      <Hero />
      <StatsStrip />
      <ServicesOverview areas={areas} />
      <WhyChooseUs />
      <Process />
      <TeamPreview members={members} />
      <LatestNews articles={articles.slice(0, 3)} />
      <Commitments />
      <CtaBanner />
    </>
  );
}
