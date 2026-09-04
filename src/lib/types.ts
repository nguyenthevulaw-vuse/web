export type PracticeArea = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  icon: string;
  order: number;
};

export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  title: string;
  summary: string;
  bio: string;
  initials: string;
  order: number;
};

export type ArticleCategory =
  | "doanh-nghiep"
  | "dan-su"
  | "lao-dong"
  | "dat-dai"
  | "hon-nhan-gia-dinh"
  | "hinh-su";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  author: string;
  published_at: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: ArticleCategory | "chung";
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const categoryLabels: Record<ArticleCategory | "chung", string> = {
  "doanh-nghiep": "Doanh nghiệp",
  "dan-su": "Dân sự",
  "lao-dong": "Lao động",
  "dat-dai": "Đất đai - Bất động sản",
  "hon-nhan-gia-dinh": "Hôn nhân & Gia đình",
  "hinh-su": "Hình sự",
  chung: "Chung",
};
