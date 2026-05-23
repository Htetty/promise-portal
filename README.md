# Promise Portal

Promise Portal is a centralized dashboard for the **Promise Scholars Program** at Skyline College, part of SMCCD. It gives promise scholars one place to review program progress, upcoming PSP events, important announcements, and commonly used resources.

This repository is intended for internal team development and maintenance.

---

## What It Does

- **Google sign-in for SMCCD students**: Authentication is restricted to `@my.smccd.edu` accounts.
- **Enrollment verification**: Dashboard access is limited to students found in the `Student_Data` table.
- **Student dashboard**: Gives enrolled students a personalized view of their PSP status, including:
  - **Profile details**: Shows student information such support level, counselor, and upcoming appointments.
  - **Progress tracking**: Shows counselor appointment, PEO, and overall standing indicators.
  - **PEO event calendar**: Lists upcoming promise engagements events with Google Calendar export.
  - **Canvas announcements**: Pulls course announcements from Canvas LMS.
- **Resources hub**: Provides PSP FAQs, guides, and links to tools such as OneLogin, DegreeWorks, and Canvas.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) App Router with TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), [HeroUI](https://heroui.com), [Material UI](https://mui.com) |
| Animation and UI Effects | [Framer Motion](https://www.framer.com/motion/) |
| Database and Auth | [Supabase](https://supabase.com) PostgreSQL + Google OAuth |
| External APIs | Canvas LMS REST API |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) and Speed Insights |
| Deployment | [Vercel](https://vercel.com) |

---

## Local Setup

### Prerequisites

- Node.js 18 or newer
- Access to the team Supabase project
- Access to the relevant Canvas course and API token
- Google OAuth credentials configured for SMCCD student accounts

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root. **Do not commit this file**.

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

# Canvas LMS
CANVAS_TOKEN=your_canvas_api_bearer_token

# App
SITE_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

The local app runs at `http://localhost:3000`.

### Common Commands

```bash
npm run dev       # Start the development server
npm run build     # Build for production
npm start         # Start the production server
npm run lint      # Run ESLint
```

---

## Project Structure

```text
src/
├── app/
│   ├── login/              # Google sign-in flow
│   ├── dashboard/          # Protected student dashboard
│   │   ├── components/     # Dashboard widgets
│   │   └── actions.ts      # Server actions for Supabase data
│   ├── resources/          # Resources and FAQ hub
│   ├── api/
│   │   └── announcements/  # Canvas announcements API route
│   └── shared/             # Shared components and constants
├── lib/
│   ├── supabase/           # Supabase browser and server clients
│   └── canvas/             # Canvas API integration
└── middleware.ts           # Auth, domain, and enrollment checks
```

---

## Data and Access Notes

- Treat all student records as sensitive. Student data is actively maintained through Google Sheets synced with Supabase.
- Dashboard access depends on a matching `smccd_email` value in the `Student_Data` table.
- PEO events are read from the `PEO` table and ordered by date.
- Keep environment variables in local, Vercel, or Supabase-managed secret storage only.

---

## Team Workflow

This project is maintained by the internal PSP development team.

1. Create a branch from the current main branch.
2. Keep changes focused and aligned with the existing app structure.
3. Run `npm run lint` before opening a pull request.
4. Include a short PR description covering what changed, why it changed, and how it was tested.
5. Request review from a teammate familiar with the affected area.

### Code Guidelines

- Use TypeScript for application code.
- Follow the existing formatting style: double quotes and semicolons.
- Avoid `any` unless there is a clear reason.
- Prefer server components and server actions when data does not need to be fetched on the client.
- Keep shared UI in `src/app/shared/` and shared service logic in `src/lib/`.
- Avoid exposing implementation details, tokens, student identifiers, or internal program data in client-visible code.

---

## Deployment

Production deployment is handled through Vercel.

Before deploying:

- Confirm required environment variables are set in Vercel.
- Run `npm run build` locally when making changes to routing, middleware, auth, or data fetching.
- Verify login, dashboard access, Canvas announcements, PEO events, and resources after deployment.

---

## Internal Use

This repository is maintained for the Promise Scholars Program team. Do not redistribute the code, credentials, student data, or internal configuration outside the authorized team without approval.
