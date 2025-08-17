# Personal-website

Local dev and deploy guide.

## Run locally

- Install Node 20+
- Install deps: `npm install`
- Type-check: `npm run check`
- Dev (Vite + Express): `PORT=5174 npm run dev`
- Build: `npm run build`
- Prod serve: `PORT=5175 npm start`

## Deploy to Vercel

- Ensure Vercel CLI installed: `npm i -g vercel`
- Build output: `dist/public` (configured in `vercel.json`)
- API routes: serverless functions under `api/` (e.g., `api/contact.ts`)
- Deploy: `vercel` then `vercel --prod`

## Notes

- Node engine set to >=20 for consistency.
- Replit-only plugins gated to dev mode in `vite.config.ts`.
- Drizzle DB code is currently unused; storage uses in-memory store for contacts.
