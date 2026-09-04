import { articles as fallbackArticles, faqs as fallbackFaqs, practiceAreas as fallbackPracticeAreas, teamMembers as fallbackTeamMembers } from "./data";
import { createSupabaseServerClient } from "./supabase/server";
import type { Article, FaqItem, PracticeArea, TeamMember } from "./types";

/**
 * Lớp truy vấn dữ liệu dùng chung cho toàn bộ website.
 *
 * Mỗi hàm sẽ thử lấy dữ liệu từ Supabase trước; nếu Supabase chưa được
 * cấu hình hoặc truy vấn gặp lỗi, hàm sẽ trả về dữ liệu mẫu (fallback)
 * để trang luôn hiển thị được nội dung.
 */

export async function getPracticeAreas(): Promise<PracticeArea[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return fallbackPracticeAreas;

  const { data, error } = await supabase
    .from("practice_areas")
    .select("*")
    .order("order", { ascending: true });

  if (error || !data || data.length === 0) return fallbackPracticeAreas;
  return data as PracticeArea[];
}

export async function getPracticeArea(slug: string): Promise<PracticeArea | undefined> {
  const areas = await getPracticeAreas();
  return areas.find((a) => a.slug === slug);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return fallbackTeamMembers;

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("order", { ascending: true });

  if (error || !data || data.length === 0) return fallbackTeamMembers;
  return data as TeamMember[];
}

export async function getTeamMember(slug: string): Promise<TeamMember | undefined> {
  const members = await getTeamMembers();
  return members.find((m) => m.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return fallbackArticles;

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

  if (error || !data || data.length === 0) return fallbackArticles;
  return data as Article[];
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const items = await getArticles();
  return items.find((a) => a.slug === slug);
}

export async function getLatestArticles(limit = 3): Promise<Article[]> {
  const items = await getArticles();
  return items.slice(0, limit);
}

export async function getFaqs(): Promise<FaqItem[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return fallbackFaqs;

  const { data, error } = await supabase.from("faqs").select("*");

  if (error || !data || data.length === 0) return fallbackFaqs;
  return data as FaqItem[];
}
