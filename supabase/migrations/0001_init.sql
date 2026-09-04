-- ============================================================================
-- NTVLaw — Khởi tạo cơ sở dữ liệu
--
-- Chạy file này trong Supabase SQL Editor (hoặc `supabase db push` nếu dùng
-- Supabase CLI) để tạo các bảng, ràng buộc và chính sách bảo mật (RLS) cần
-- thiết cho website.
-- ============================================================================

-- Lĩnh vực dịch vụ pháp lý -----------------------------------------------------
create table if not exists public.practice_areas (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  content text not null,
  icon text not null default 'Scale',
  "order" integer not null default 0,
  created_at timestamptz not null default now()
);

-- Luật sư / thành viên đội ngũ -------------------------------------------------
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  title text not null,
  summary text not null,
  bio text not null,
  initials text not null,
  "order" integer not null default 0,
  created_at timestamptz not null default now()
);

-- Bài viết kiến thức pháp luật --------------------------------------------------
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  category text not null check (
    category in ('doanh-nghiep', 'dan-su', 'lao-dong', 'dat-dai', 'hon-nhan-gia-dinh', 'hinh-su')
  ),
  author text not null,
  published_at date not null default current_date,
  created_at timestamptz not null default now()
);

-- Câu hỏi thường gặp ------------------------------------------------------------
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null unique,
  answer text not null,
  category text not null default 'chung',
  created_at timestamptz not null default now()
);

-- Yêu cầu liên hệ từ khách hàng (gửi từ form trên website) ----------------------
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- Row Level Security
-- ============================================================================

alter table public.practice_areas enable row level security;
alter table public.team_members enable row level security;
alter table public.articles enable row level security;
alter table public.faqs enable row level security;
alter table public.contact_submissions enable row level security;

-- Nội dung công khai (dịch vụ, đội ngũ, bài viết, hỏi đáp): ai cũng đọc được.
create policy "Public can read practice_areas"
  on public.practice_areas for select
  using (true);

create policy "Public can read team_members"
  on public.team_members for select
  using (true);

create policy "Public can read articles"
  on public.articles for select
  using (true);

create policy "Public can read faqs"
  on public.faqs for select
  using (true);

-- Form liên hệ: cho phép bất kỳ ai (kể cả khách chưa đăng nhập) GỬI yêu cầu,
-- nhưng KHÔNG ai được đọc lại danh sách yêu cầu liên hệ qua API công khai —
-- chỉ xem được trong Supabase Dashboard hoặc qua service role key.
create policy "Anyone can submit a contact request"
  on public.contact_submissions for insert
  with check (true);

-- ============================================================================
-- Index phục vụ truy vấn thường dùng
-- ============================================================================
create index if not exists practice_areas_order_idx on public.practice_areas ("order");
create index if not exists team_members_order_idx on public.team_members ("order");
create index if not exists articles_published_at_idx on public.articles (published_at desc);
create index if not exists articles_category_idx on public.articles (category);
