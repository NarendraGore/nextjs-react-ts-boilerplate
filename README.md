# Next.js Tailwind Boilerplate (Production Baseline)

A hardened starter for Next.js App Router projects with Tailwind CSS, TypeScript, Zustand, Axios, and React Query.

## What's Included

- Next.js 16 + React 19 + TypeScript strict mode
- Tailwind CSS v4
- Auth starter flow (login/register pages + guarded dashboard route)
- API client setup (Axios) with credentials, timeout, and basic 401 handling
- React Query provider and shared query client defaults
- Health endpoint for uptime checks
- CI workflow for lint, typecheck, and build
- Security headers in Next.js config

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Use these keys in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Scripts

- `npm run dev`: Start development server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Auto-fix lint issues
- `npm run typecheck`: Run TypeScript checks
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run check`: Run lint + typecheck + build

## Production Readiness Checklist

- Replace auth placeholder/API assumptions with your backend contracts
- Verify token strategy (httpOnly cookie, refresh token rotation, session invalidation)
- Add rate limiting + brute-force protection for auth endpoints
- Add CSRF strategy if cookie-based auth is used cross-site
- Add request/response validation for all API routes
- Add unit/integration/e2e tests for critical flows
- Enable observability (error tracking, logging, tracing)
- Review dependency vulnerabilities regularly (`npm audit`)

## CI

GitHub Actions workflow is defined in `.github/workflows/ci.yml` and runs on pushes/PRs for:

- Lint
- Typecheck
- Build

## Health Endpoint

- `GET /api/health`
- Returns service status and timestamp
