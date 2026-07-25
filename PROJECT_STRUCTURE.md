# CYAFSF — Frontend Project Structure

Frontend-only scaffold for the Canadian Youth and Family Support Foundation
website, aligned with `CYAFSF_Static_Website_Mockup.docx` (Section 2 —
Proposed Sitemap, Section 6 — Draft Page Copy and Content Requirements).

## Navbar — verified against mockup

Mockup header nav (Section 2):
`About | Programs | Family Support | Events | Resources | Get Involved | Donate`

Implemented in `src/components/layout/SiteHeader.jsx` via
`src/data/navigation.js`:

| Nav item | Route | Status |
|---|---|---|
| About | `/about` | ✅ in `NAV_ITEMS` |
| Programs | `/programs` | ✅ in `NAV_ITEMS` |
| Family Support | `/family-support` | ✅ in `NAV_ITEMS` |
| Events | `/events` | ✅ in `NAV_ITEMS` |
| Resources | `/resources` | ✅ in `NAV_ITEMS` |
| Get Involved | `/get-involved` | ✅ in `NAV_ITEMS` |
| Donate | `/donate` | ✅ separate CTA button (top-right, coral) — matches mockup's visual emphasis on the donate action |

No changes were needed — the existing header already matches the mockup's
proposed sitemap. `News` and `Contact` are routed in `App.jsx` and reachable
from the homepage / footer, same as the mockup's footer navigation pattern
(they are intentionally not primary nav items, per the mockup's "keep
navigation compact" direction).

## Page → component mapping (one folder per page)

Every route in `src/pages/` now composes its own section components from a
matching folder in `src/components/`, the same pattern already used by
`Home`, `About`, and `Programs`.

```
src/
├── pages/
│   ├── Home.jsx            → components/home/*
│   ├── About.jsx           → components/about/*
│   ├── Programs.jsx        → components/programs/*
│   ├── FamilySupport.jsx   → components/familySupport/*   (new)
│   ├── Events.jsx          → components/events/*          (new)
│   ├── Resources.jsx       → components/resources/*       (new)
│   ├── GetInvolved.jsx     → components/getInvolved/*     (new)
│   ├── News.jsx            → components/news/*            (new)
│   ├── Contact.jsx         → components/contact/*         (new)
│   ├── Donate.jsx          → components/donate/*          (new)
│   └── NotFound.jsx        → components/notFound/*        (new)
│
├── components/
│   ├── layout/        SiteHeader.jsx (navbar), SiteFooter.jsx
│   ├── home/           HomeHero, HomeAudience, HomeProgram, HomeMission, HomeImpact, HomeNews, HomeCTA
│   ├── about/           AboutHero, AboutMission, AboutValues, AboutStory, AboutLeaderShip, AboutServiceArea, AboutGovernnance, AboutCTA
│   ├── programs/        ProgramsHero, ProgramsFilter, ProgramsGrid, ProgramsCard, ProgramsCTA
│   ├── familySupport/   FamilySupportHero, FamilySupportServices, FamilySupportCTA
│   ├── events/          EventsHero, EventsFilter, EventsGrid, EventsCTA
│   ├── resources/       ResourcesHero, ResourcesCategories, ResourcesCTA
│   ├── getInvolved/     GetInvolvedHero, GetInvolvedVolunteer, GetInvolvedPartner, GetInvolvedDonate, GetInvolvedCTA
│   ├── news/             NewsHero, NewsGrid, NewsCTA
│   ├── contact/         ContactHero, ContactForm, ContactInfo
│   ├── donate/           DonateHero, DonateOptions, DonateImpact, DonateCTA
│   ├── notFound/        NotFoundContent
│   ├── shared/           AnimatedCard, ScrollIndicator, SectionTitle
│   └── ui/               Button, Card
│
├── data/navigation.js   NAV_ITEMS used by SiteHeader
├── hooks/useContactForm.js
├── lib/api.js
├── context/SiteContext.jsx
└── styles/global.css
```

## Status of the new (skeleton) components

The 8 newly-split pages — `FamilySupport`, `Events`, `Resources`,
`GetInvolved`, `News`, `Contact`, `Donate`, `NotFound` — were broken into
their section components as **empty skeletons only**:

```jsx
export default function DonateHero() {
  return (
    <section className="container py-16">
      {/* TODO: build this section per the mockup blueprint */}
    </section>
  );
}
```

No copy, no styling beyond a `container py-16` wrapper, no logic — each
file has a `// TODO:` comment noting what belongs there, taken from the
mockup's Section 6 content requirements (e.g. `ContactForm.jsx` notes
`Name / Email-Phone / Reason / Message / consent`). `Home`, `About`, and
`Programs` were left untouched since they're already fully built.

Note: `Contact.jsx` previously had a working form wired to
`useContactForm.js`. That hook is untouched and still available at
`src/hooks/useContactForm.js` — reconnect it inside `ContactForm.jsx` when
you build out that section.

## Explicitly out of scope

Only the frontend (`frontend/`) was touched. No backend/API work, no
content/copy was written (per the mockup, real copy still needs CYAFSF
approval — Section 9), and no design tokens were changed.
