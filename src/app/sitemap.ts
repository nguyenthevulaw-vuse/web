import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getArticles, getPracticeAreas, getTeamMembers } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [areas, members, articles] = await Promise.all([
    getPracticeAreas(),
    getTeamMembers(),
    getArticles(),
  ]);

  const staticRoutes = [
    "",
    "/gioi-thieu",
    "/dich-vu",
    "/doi-ngu",
    "/kien-thuc-phap-luat",
    "/hoi-dap",
    "/lien-he",
    "/chinh-sach-bao-mat",
    "/dieu-khoan-su-dung",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = areas.map((area) => ({
    url: `${siteConfig.url}/dich-vu/${area.slug}`,
    lastModified: new Date(),
  }));

  const teamRoutes = members.map((member) => ({
    url: `${siteConfig.url}/doi-ngu/${member.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/kien-thuc-phap-luat/${article.slug}`,
    lastModified: new Date(article.published_at),
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes, ...articleRoutes];
}
