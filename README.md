# TJ HOSA landing page

Single-file static landing page for the HOSA–Future Health Professionals chapter at
Thomas Jefferson High School for Science and Technology, launching 2026–27.

```
index.html      the whole site — inline CSS, no JS, no dependencies, no build step
og-image.png    1200×630 link preview image (already rendered)
og-image.svg    source for the above, if you want to edit it
README.md       this file
```

Drop the folder on GitHub Pages as-is. Nothing to install, nothing to compile.

---

## ⚠️ Fill these in before you post the link

Every one of these is a literal `[TOKEN]` in `index.html`. Find-and-replace each.
Nothing here was guessed — if it's bracketed, it's because only you know it.

**Sanity check when you're done — this should print nothing:**

```bash
grep -n '\[[A-Z_]*\]' index.html
```

### Must fix or the page is broken

| Token | Appears | What goes there |
|---|---|---|
| `[INTEREST_FORM_URL]` | ×2 (hero button, footer button) | Full URL to your Google Form / Airtable. **Both buttons are dead links until you do this.** |
| `[SITE_URL]` | ×3 (OG + Twitter meta) | Absolute base URL, no trailing slash, e.g. `https://yourname.github.io/tjhosa`. Link previews won't render an image without it. |

### Logistics section

| Token | What goes there |
|---|---|
| `[FIRST_MEETING_DATE]` | e.g. `Thursday, September 10, 2026` |
| `[MEETING_DAY]` | e.g. `Wednesdays` |
| `[MEETING_TIME]` | e.g. `8th period` |
| `[MEETING_ROOM]` | e.g. `Room 4103` |
| `[MEETING_CADENCE]` | e.g. `Every other week during 8th period` |
| `[TIME_COMMITMENT]` | Appears **twice** — Logistics and FAQ #4. Keep the wording identical. e.g. `~1 hour every other week` |
| `[DUES_AMOUNT]` | Appears **twice** — Logistics and FAQ #7. e.g. `$25`. See "Dues" below. |
| `[FINANCIAL_AID_NOTE]` | Your actual policy for students who can't pay. Write something real here or delete the sentence — a vague promise is worse than nothing. |
| `[ADVISOR_NAME]` | Faculty advisor |
| `[ADVISOR_DEPARTMENT]` | e.g. `Biology` |

### Contact / social (footer)

| Token | What goes there |
|---|---|
| `[CHAPTER_EMAIL]` | ×2 (mailto href + visible text) |
| `[INSTAGRAM_HANDLE]` | ×2 (URL + visible `@handle`) — handle only, no `@` in the token |

### Conference dates (in the progression graphic)

| Token | What goes there |
|---|---|
| `[REGIONAL_DATE]` | Northern Virginia Regional Leadership Conference date. Not published for 2026–27 yet — ask the state advisor, or write `Date TBA`. |
| `[VA_SLC_DATE]` | Virginia State Leadership Conference date. Not published for 2026–27 yet. For reference, 2026's was March 20–22 at the Hotel Roanoke. Write `Spring 2027` until you know. |

The ILC line is **not** a placeholder — HOSA has published 2027 as June 22–25 at the
Pennsylvania Convention Center in Philadelphia. That one is real and you can say it.

### Also decide (not a token, but check it)

- **Chapter name.** The page says "TJ HOSA" throughout, plus `<title>` and the OG image.
  If Virginia HOSA charters you under a different official name, update `index.html`,
  `og-image.svg`, and re-render the PNG (see below).
- **Every `[BRACKET]` is visible to visitors.** They render as literal text on the page.
  That's deliberate so you can't miss one, but don't share the link half-filled.

---

## Facts on the page and where they came from

Everything factual was checked against hosa.org and Virginia HOSA. Nothing was estimated.

| Claim on the page | Source |
|---|---|
| "225,000+ members" | hosa.org homepage: "an international student-led organization with over 225,000 members" |
| "51 chartered associations" + D.C., Puerto Rico, American Samoa, Canada, Germany, Italy | hosa.org/about |
| Recognized by the U.S. Dept. of Education; is a CTSO | hosa.org/about |
| Founded 1976 | hosa.org |
| Mission statement (quoted) | hosa.org |
| Six event categories + all named events | hosa.org 2026–27 Competitive Event Guidelines |
| Category descriptions (exams / clinical skills / etc.) | hosa.org, "Choosing the Right Competitive Event for You" |
| Secondary division eligibility — no health science class required | hosa.org membership pages |
| Affiliation opens Aug 1, 2026, closes **Dec 18, 2026** | virginiahosa.org homepage |
| ILC 2027: June 22–25, Pennsylvania Convention Center, Philadelphia | hosa.org/ilc |
| Northern Virginia Regional Leadership Conference exists | Virginia HOSA regional structure; 2025 NoVA RLC was held at Alexandria City HS |

**One correction worth knowing:** the brief said ~250k members. hosa.org's own number is
**"over 225,000."** (An older hosa.org/about page still says "over 200,000," and a 2016
press release marks the 200k milestone.) The page uses 225,000+ because that's the highest
figure HOSA currently publishes about itself. If you find a newer official number, it's in
two places: the hero paragraph and the stat block.

### Things deliberately NOT on the page

- **Dues.** National + Virginia HOSA affiliation dues per member weren't published anywhere
  I could verify for 2026–27. Get the number from the Virginia state advisor
  (contact is listed on hosa.org/state-conferences) and put your all-in figure in
  `[DUES_AMOUNT]`. Don't publish a guess.
- **The state advisor's name and email.** They're public on hosa.org, but putting a staff
  member's direct email on a student-facing flyer page invites traffic they didn't ask for.
  Use `[CHAPTER_EMAIL]` instead.
- **ILC attendance numbers.** Widely repeated as "12,000+" but I couldn't confirm it on
  hosa.org, so the page says "thousands of members."

---

## Design

Two-colour print job: black ink and one red (`#A32319`) on uncoated stock. No third
colour anywhere, no gradients, no drop shadows, no icon set. If you add a colour, you
break the premise.

**Body copy is set in a serif** (Iowan Old Style on iOS, Georgia everywhere else), with
monospace reserved strictly for data: labels, dates, event lists, the spec table. That
inversion is most of why it doesn't read like a template. Landing pages default to
sans-everything; documents people actually read don't.

Layout is deliberately uneven. Section padding varies section to section rather than
snapping to one rhythm, and the shapes differ on purpose: running prose in one, a
hanging index list in the next, a spec table, a stepped ladder. Nothing is a card grid.

On screens ≥900px the page goes asymmetric — section labels hang in a 150px left margin
column beside the text instead of stacking above it, with the measure held to 63
characters. Breakpoints: 560px and 900px only.

No webfonts, no JS, no external requests of any kind. It paints instantly off an
Instagram tap.

### If you want to change things

All colours are CSS custom properties in the `:root` block at the top of the `<style>`
tag. **Re-check contrast if you change the red** — white on `#A32319` is currently 7.6:1,
so you have room to go darker but not lighter.

Section padding lives in the `.s-what` / `.s-who` / `.s-events` … rules. The unevenness
is intentional; if you normalise them all to the same value the page will start looking
generated again.

The favicon is an inline SVG data URI in the `<link rel="icon">` tag — a serif H
reversed out of a red square. Edit it there if you change the accent.

### Accessibility

- Semantic landmarks, one `<h1>`, no skipped heading levels
- Skip-to-content link
- Body text 7.2:1 against the paper; nothing on the page is below AA
- FAQ uses native `<details>`/`<summary>` — keyboard and screen-reader accessible, no JS
- Visible focus rings, 52px CTA height
- `prefers-reduced-motion` respected

### Re-rendering the OG image

Edit `og-image.svg`, then on a Mac:

```bash
python3 -c "s=open('og-image.svg').read();b=s.split('>',1)[1].rsplit('</svg>',1)[0];open('/tmp/sq.svg','w').write('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"1200\" viewBox=\"0 0 1200 1200\"><rect width=\"1200\" height=\"1200\" fill=\"#F4F1EA\"/><g transform=\"translate(0,285)\">'+b+'</g></svg>')" && qlmanage -t -s 1200 -o /tmp /tmp/sq.svg >/dev/null 2>&1 && sips -c 630 1200 /tmp/sq.svg.png --out og-image.png
```

(The square-then-crop dance is because `qlmanage` renders SVGs into a square canvas.)

### Testing it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. To check the link preview before you post,
paste the live GitHub Pages URL into opengraph.xyz or Slack.
