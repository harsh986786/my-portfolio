# Developer portfolio

Single-page portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS 3**, **Lucide** icons, and **Framer Motion**. The UI is dark and minimal, with a violet/cyan glow that follows the cursor across cards.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Make it yours

Everything editable lives in **`lib/data.ts`**: name, email, headline, socials, skills, experiments, and the three projects (tags, metric, demo and GitHub links).

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` so Open Graph URLs resolve correctly in production.

## Structure

```
app/
  layout.tsx            fonts (Geist), metadata, reduced-motion provider
  page.tsx              page composition
  globals.css           base styles, focus ring, selection colour
components/
  hero.tsx              status pill, headline, CTAs (staggered load-in)
  skills.tsx            4-card bento grid
  projects.tsx          flagship project cards
  mockups.tsx           code-drawn previews (swap for next/image screenshots)
  footer.tsx            contact + socials
  spotlight-card.tsx    cursor-tracking glow card primitive
  copy-email-button.tsx clipboard button with fallback + a11y announcement
lib/
  data.ts  use-copy.ts  utils.ts
```

## Notes

- Colours are tokens in `tailwind.config.ts`: `ink` #050505, `card` #0f0f11, `raised` #151518, `line` #26262a.
- Motion respects `prefers-reduced-motion` via `MotionConfig`, and the ping animations use `motion-safe:`.
- Deploy to Vercel with zero config.
