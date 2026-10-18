# Capstone migration: Vite -> Next.js

I built the project folder but I do not have your capstone code, so this is the checklist and starter files to apply to it. Follow it one screen at a time and keep `npm run build` passing after each commit.

## Steps

1. **Scaffold beside the old project**: `npx create-next-app@latest capstone-next` (App Router: yes, Tailwind: yes if you used it; then make sure `cacheComponents` is NOT enabled in `next.config`, see Day 40 README). Or copy `day_40/addis-eats` config files (`package.json`, `jsconfig.json`, `next.config.mjs`, `tailwind.config.js`, `postcss.config.js`).
2. **Route map as empty folders**: for each `<Route path=...>` in your Day 35 `App.jsx` create `app/<path>/page.js` returning a placeholder `export default function Page() {...}`.

   | React Router | Next.js |
   | --- | --- |
   | `path="/"` | `app/page.js` |
   | `path="menu"` | `app/menu/page.js` |
   | `path="menu/:id"` | `app/menu/[id]/page.js` |
   | `path="*"` | `app/not-found.js` |
   | `<Outlet />` layout route | `layout.js` in that folder |
   | `<Suspense fallback>` | `loading.js` |
   | `<ErrorBoundary>` | `error.js` (`"use client"`) |
3. **Layout and providers**: copy `starter/app/layout.js` and `starter/components/Providers.jsx`; move your shell into the layout and your context providers into `Providers.jsx`.
4. **One screen at a time**: copy the component, replace `Link to=` with `Link href=`, `useNavigate` with `useRouter` from `next/navigation`, `useParams` with the `params` prop. Anything using hooks or handlers needs `"use client"` - on the smallest leaf. Delete the `useFetch` hook on at least one screen and `await` the data in an async server component.
5. **Special files** per segment: `loading.js`, `error.js`, `not-found.js`.
6. **Docs**: fill `STRATEGY.md` and `BOUNDARY.md` (templates here).

## Common failures

| Symptom | Cause |
| --- | --- |
| "needs useState" everywhere | a hook in a component left on the server |
| bundle barely smaller | `"use client"` at the top of a page |
| "Functions cannot be passed" | callback prop crossing server -> client |
| hydration mismatch | date/random rendered in JSX |
| every route dynamic | cookie/header read in a shared helper |
| 404 on a route that exists | missing or non-default export |

## Submission check

- Every route from your Day 35 map reachable
- Layout in `app/layout.js`, providers in a client file
- At least one screen converted to a server component with its fetching hook deleted
- `STRATEGY.md` and `BOUNDARY.md` written
- `git clone` into a fresh folder, `npm install`, `npm run build`, `npm start` works
