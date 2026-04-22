# Project: Maimako2026 — NUASA Student Union Campaign Site

## Overview
Build a campaign/portfolio-style landing page for a student running for office in NUASA (Nile University Accounting Students Association). The site is called **Maimako2026** and should feel bold, modern, and professional — inspired by a portfolio landing page aesthetic (inspo reference attached). The candidate's transparent PNG (maimako.png) should be a central hero visual element.

---

## Tech Stack
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Backend/DB: Supabase (auth, database, realtime)
- Deployment: Vercel
- Image handling: next/image (optimized)

---

## Folder Structure
Scaffold a standard Next.js App Router project:
```
/app
  layout.tsx
  page.tsx         ← landing page
  /admin           ← optional: protected dashboard
/components
  Hero.tsx
  Navbar.tsx
  About.tsx
  Manifesto.tsx
  Gallery.tsx
  SupportForm.tsx  ← Supabase-connected pledge/support form
  Footer.tsx
/lib
  supabaseClient.ts  ← initialize Supabase client
/public
  maimako.png        ← transparent candidate image (user will drop this in)
  inspo.png          ← design reference (user will drop this in)
```

---

## Pages & Sections

### 1. Navbar
- Logo/wordmark: "Maimako2026" in bold, left-aligned
- Nav links: Home, About, Manifesto, Support
- Sticky, minimal — transparent over hero, solid background on scroll
- Mobile hamburger menu

### 2. Hero Section
- Full-viewport height
- Heading: "Maimako2026" — large, impactful typography
- Subheading: "Your Vote. Our Future. NUASA 2026."
- maimako.png placed prominently (right or center) using next/image with priority loading — transparent bg blends into the hero gradient/color
- CTA button: "Support the Campaign" → scrolls to support form
- Background: bold solid color or subtle geometric pattern (match inspo aesthetic — avoid stock-photo backgrounds)

### 3. About Section
- Short bio paragraph (placeholder lorem for now)
- 3 stat/highlight cards: e.g., "3rd Year Accounting", "NUASA Member since 2022", "Vision: Student Voice"
- Clean card layout, subtle border

### 4. Manifesto Section
- 3–5 campaign pillars with icons (e.g., Academic Excellence, Financial Literacy Outreach, Student Welfare)
- Each pillar: icon + heading + 2-sentence description
- Grid layout (2-col desktop, 1-col mobile)

### 5. Support / Pledge Form (Supabase-connected)
- Fields: Full Name, Department, Level (100–500), Email, Message (optional)
- On submit: insert row into Supabase `pledges` table
- Show success toast on completion
- Supabase table schema:
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

### 6. Gallery / Social Proof (Optional)
- Placeholder image grid (3–6 images)
- Can be populated later via Supabase Storage

### 7. Footer
- "Maimako2026 | NUASA — Nile University"
- Social links (placeholder hrefs)
- "Authorised by the Maimako2026 Campaign Team"

---

## Design Direction
- Reference the inspo.png for layout feel: bold hero, clean sections, strong typography hierarchy
- Color palette: pick 2 primary campaign colors (suggest deep navy + gold OR green + white — ask user to confirm)
- Font: Use Google Fonts — e.g., "Space Grotesk" for headings, "Inter" for body
- No gradients — flat, confident colors
- maimako.png must always be crisp with transparent bg preserved (use next/image, no white box)

---

## Supabase Setup Instructions (add as README section)
1. Create a Supabase project at supabase.com
2. Run the `pledges` table SQL above in the Supabase SQL editor
3. Copy Project URL and anon public key into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
4. The `supabaseClient.ts` file should initialize with these env vars

---

## Vercel Deployment Notes
- Add the two env vars above in Vercel project settings → Environment Variables
- next/image is fully supported on Vercel — no extra config needed
- Enable Vercel Analytics (optional) for visitor tracking

---

## Do NOT
- Do not use React class components — hooks only
- Do not use the Pages Router — App Router only
- Do not hardcode Supabase credentials — always use env vars
- Do not use `` tags — always use `next/image`

---

## Assets
- `public/maimako.png` — transparent PNG of the candidate (user will provide)
- `public/inspo.png` — design reference screenshot (user will provide)
- Use `next/image` with `fill` or explicit `width/height` props for both
    