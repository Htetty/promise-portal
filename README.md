# Promise Portal

A student engagement and progress tracking platform for the **Promise Scholars Program (PSP)** at Skyline College (SMCCD). Promise Portal gives enrolled students a personalized dashboard to monitor their program requirements, browse upcoming events, read Canvas announcements, and access program resources — all in one place.

---

## Features

- **Secure Authentication** — Google Sign-In restricted to `@my.smccd.edu` accounts with enrollment verification
- **Personalized Dashboard** — View your student profile, support level, and program progress at a glance
- **Progress Tracking** — Visual ring charts for counselor appointments, PEO completions, and overall standing
- **Event Calendar** — Browse upcoming PSP workshops and PEOs with one-click Google Calendar export
- **Canvas Announcements** — Live course announcements pulled directly from Canvas LMS
- **Resources Hub** — Filterable FAQ, guides, and quick links to key tools (OneLogin, DegreeWorks, etc.)
- **PEO Credit Forms** — Submit attendance forms for Professional & Educational Opportunities

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) with TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), [HeroUI](https://heroui.com), [Material UI](https://mui.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/), [canvas-confetti](https://github.com/catdad/canvas-confetti) |
| Database & Auth | [Supabase](https://supabase.com) (PostgreSQL + Google OAuth) |
| External APIs | Canvas LMS REST API |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) & Speed Insights |
| Deployment | [Vercel](https://vercel.com) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project with the `Student_Data` and `PEO` tables set up
- A Canvas API token with access to the relevant course
- Google OAuth credentials (configured for the `@my.smccd.edu` domain)

### Installation

```bash
git clone https://github.com/Htetty/promise-portal.git
cd promise-portal
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# Canvas LMS
CANVAS_TOKEN=your_canvas_api_bearer_token

# App
SITE_URL=http://localhost:3000
```

### Running Locally

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

---

## Project Structure

```
src/
├── app/
│   ├── login/              # Authentication page (Google Sign-In)
│   ├── dashboard/          # Protected student dashboard
│   │   ├── components/     # Dashboard widgets (Progress, Calendar, etc.)
│   │   └── actions.ts      # Server actions for data fetching
│   ├── resources/          # Public resources & FAQ hub
│   ├── api/
│   │   └── announcements/  # Canvas announcements API route
│   └── shared/             # Shared components & constants
├── lib/
│   ├── supabase/           # Supabase client (browser + server)
│   └── canvas/             # Canvas API integration
└── middleware.ts            # Auth & routing middleware
```

---

## Contributing

Contributions are welcome! Whether it's a bug fix, a UI improvement, or a new feature — feel free to open an issue or submit a pull request.

### How to Contribute

1. **Fork** the repository and create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes**, following the code style below.
3. **Test** your changes locally with `npm run dev`.
4. **Lint** your code before committing:
   ```bash
   npm run lint
   ```
5. **Open a Pull Request** with a clear description of what you changed and why.

### Code Style

This project uses ESLint with the Next.js recommended config. A few conventions to follow:

- Use **double quotes** for strings
- Always include **semicolons**
- TypeScript strict mode is enabled — avoid `any` types
- Prefer **server components** and **server actions** over client-side data fetching where possible
- Keep components small and focused; place shared logic in `src/app/shared/` or `src/lib/`

### Reporting Bugs

Open a [GitHub Issue](https://github.com/Htetty/promise-portal/issues) with:
- A clear description of the bug
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable (no sensitive student data, please)

---

## License

[MIT](LICENSE) © 2025 Htet Htwe
