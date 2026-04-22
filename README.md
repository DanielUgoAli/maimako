# Maimako2026 - NUASA Campaign Site

Bold, modern campaign landing page for NUASA student union elections, built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Run Locally

1. Install dependencies:

```bash
npm install
```

1. Create `.env.local` from this template:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

1. Start the dev server:

```bash
npm run dev
```

## Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com).
1. Open the SQL editor and run:

```sql
create table pledges (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  department text not null,
  level text not null,
  email text not null,
  message text,
  created_at timestamp with time zone default now()
);
```

1. Copy your project URL and anon key into `.env.local` as shown above.
1. `lib/supabaseClient.ts` reads these variables and initializes the client.

## Vercel Deployment Notes

- Import this repo in Vercel.
- Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Project Settings > Environment Variables.
- `next/image` works out of the box on Vercel.
- You can optionally enable Vercel Analytics.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  admin/page.tsx
components/
  Hero.tsx
  Navbar.tsx
  About.tsx
  Manifesto.tsx
  Gallery.tsx
  SupportForm.tsx
  Footer.tsx
lib/
  supabaseClient.ts
public/
  maimako.png
  inspo.png
```
