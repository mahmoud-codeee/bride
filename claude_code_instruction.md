Remove the RSVP section entirely. Replace it with a new section called "Couple" (positioned between Details and Footer).

Scrap the bride/groom silhouette illustration idea — instead, design an elegant circular (or arched) monogram emblem as the centerpiece of this section, in the same SVG line-art style as the existing floral ornaments:

- A thin gold circular or arch-shaped frame (matching the antique gold used elsewhere).
- Inside the frame, the initials of the groom and bride in elegant Arabic calligraphy (م and غ), interlaced/combined as a monogram, using the "Aref Ruqaa" font styling for that classic calligraphic feel.
- A small decorative divider between the two initials (a thin heart, dot, or flourish — not a plain "&").
- Delicate rose/vine SVG flourishes wrapping around the outside of the frame, consistent with the FloralOrnament component already used elsewhere on the site.
- Keep the color palette strictly to antique gold and pale blush rose — no photographs, no realistic figures.

Below the monogram, show the groom's and bride's full names with generous spacing between them, separated by a small decorative symbol.

Also increase the spacing between the two names in the Hero section — they currently sit too close together.

---

## Readability Fix

Increase the contrast for the Bismillah and the poetry verses in the Hero section — the current light antique-gold text on the ivory background is hard to read, especially on mobile screens in bright sunlight. Fix this by either darkening the gold shade used specifically for this text (a richer, deeper gold — not the lighter tone used for decorative ornaments) or increasing the font-weight to semibold. Do not change the color of the decorative SVG ornaments, only the verse/Bismillah text.

## Countdown Animation

Add a subtle digit-change animation to the Countdown component. When a digit changes (seconds/minutes/hours/days), animate the transition (flip, scale-fade, or slide) using Framer Motion's `AnimatePresence` keyed on the digit's value. Keep the animation quick and subtle (around 200–300ms), not distracting.

## Dress Code Section

Add a small "Dress Code" note within or right after the Details section, indicating that modest, respectful attire is requested for guests. Style it consistently with the existing Details cards.

## Scroll Effects

- Add a subtle parallax effect on scroll (e.g. background ornaments or hero elements moving at a different speed than the foreground content), implemented using Framer Motion's `useScroll` and `useTransform` hooks. Do NOT add GSAP as a second animation library — Framer Motion is already used throughout the project, and adding another animation library would increase bundle size unnecessarily.
- Continue using Framer Motion's `whileInView` fade + slide-up reveal pattern for every section, including the new Couple and Dress Code sections.
- Respect the `prefers-reduced-motion` media query for all scroll and parallax animations.

## Wedding Hashtag

Add the hashtag "#Mohamed_Ghada2026" somewhere tasteful — e.g. in the Footer, styled in a subtle italic gold font — so guests can use it when posting about the wedding on social media.

## Ambient Petal Animation

Add a lightweight, purely decorative falling flower petals effect in the background: a small number of drifting SVG petal shapes (8–12 max) looping slowly down the screen, implemented with Framer Motion or plain CSS animations. Keep the element count low so it doesn't affect scroll performance, and respect `prefers-reduced-motion` to disable it for users who prefer less motion.

## Favicon

Create a favicon based on the same couple monogram emblem used in the Couple section (the م/غ monogram), in the site's color palette (antique gold on an ivory or transparent background), exported as a simple SVG/ICO favicon.

## Open Graph Preview Image

Add a static Open Graph preview image (1200x630px) featuring the couple's names, the wedding date, and the site's romantic color palette/ornament style, along with the proper meta tags in `index.html` (`og:title`, `og:description`, `og:image`, `twitter:card`) so that sharing the invitation link on WhatsApp or Facebook shows an attractive preview card instead of a bare link.

Note: this preview will only render correctly once the site is deployed to a public URL (e.g. Vercel or Netlify) — it will not show up properly when only running locally.
