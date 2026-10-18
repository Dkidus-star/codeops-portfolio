# Day 40 - Addis Eats on Next.js (foundations project)

Rebuild of the Day 35 food-ordering app with file routing, nested layouts, a deliberate rendering strategy per route, server components that fetch their own data, one route handler family and a server action.

Deliverables in this folder: `STRATEGY.md`, `BOUNDARY.md`, this README. The capstone migration kit is in `../capstone-migration/`.

## Run (production build, not dev)

```bash
npm install
npm run build
npm start          # http://localhost:3000
```

## Routes

`/`, `/menu`, `/menu/[id]`, `/cart`, `/checkout` (+ `/orders`, `/kitchen`, `/api/dishes`, `/api/dishes/[id]`, `/api/orders`). Strategy per route: `STRATEGY.md`. Component boundary: `BOUNDARY.md`.

Folder tree (written before the code, per Part 2):

```
app/
  layout.js  page.js  not-found.js  actions.js
  menu/   layout.js  page.js  loading.js  error.js  [id]/page.js
  cart/page.js   checkout/page.js   orders/page.js   kitchen/page.js
  api/dishes/route.js  api/dishes/[id]/route.js  api/orders/route.js
components/  lib/  scripts/
```

## Requirements map

| Day | Where |
| --- | --- |
| 36 | Folder routing, `[id]`, `menu/loading.js`, `menu/error.js`, `not-found.js` |
| 37 | `app/layout.js`, `app/menu/layout.js`, `STRATEGY.md`, `generateStaticParams`, `revalidate` |
| 38 | `async` server pages, `FilterShell` + `children`, `Providers`, `BOUNDARY.md` |
| 39 | `app/api/orders/route.js` + `placeOrder` server action, same `lib/schema.js` |
| earlier | cart (`CartProvider`), form (`CheckoutForm`), guard (`/checkout` sign-in) |

## Verify (copy these results into your submission)

**Strategy** - paste `npm run build` here and check every marker against `STRATEGY.md` (`○` static, `●` prerendered from params, `ƒ` dynamic):

```
(paste the output of `npm run build` here)
```

**Endpoints**

```bash
curl -i localhost:3000/api/dishes/not-a-dish            # 404 + { "error": ... }
curl -i -X POST localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"name":"Almaz","phone":"0912"}'                   # 422 + fieldErrors.phone
```

**The six failure checks** (on `npm run build && npm start`)

| Do this | Expect | Result |
| --- | --- | --- |
| Throttle to Slow 3G, open `/menu` | `loading.js` skeleton, header and sidebar already there | |
| Click **Test error.js** on `/menu` | `error.js` renders, header and cart count survive | |
| Open `/menu/not-a-dish` | `not-found.js` | |
| Post an invalid phone at `/checkout` | 422 handled, message beside the field | |
| Disable JavaScript, submit (pick a dish in the form, no cart) | the server action still places the order | |
| `npm run scan` | `Clean: nothing sensitive in .next/static` | |

Also attack your own action: sign in as Almaz, place an order, sign in as Dawit, type Almaz's id into the test tool on `/orders` -> "Not yours".

## Bundle comparison

`npm run build` in Next.js 16 does not print First Load JS, so measure it with the included script on the running production server:

```bash
npm run first-load-js -- /menu
npm run analyze            # visual route summary (next experimental-analyze)
```

| | /menu First Load JS (kB gzip) |
| --- | --- |
| Day 35 (Vite, client-only) - measure the built page the same way | |
| Day 38 (server components, directive too high) | |
| Day 40 (final) | |

## Check yourself - answers to fill in your own words

- Do all markers match `STRATEGY.md`?
- How many client components, and why each? `npm run boundary` -> 10 files, justified in `BOUNDARY.md`.
- **Which part of the application calls `/api/dishes`?** None. The pages read the data directly. The handler exists for callers outside the site (the sheet's warning: don't build an endpoint your own server components would call).
- What did First Load JS for `/menu` do between Day 35 and today? (use the table above)
- Does checkout work with JavaScript disabled? Yes: the form posts to the server action. With JS off the cart (browser storage) is unavailable, so the form offers a single-dish order instead.
- Any secret in the downloaded JavaScript? `npm run scan`.
- Does the capstone build from a fresh clone? See `../capstone-migration/`.

## 8-minute walkthrough plan

0-1 what it does and which routes exist; 1-3 live on `npm start`; 3-5 `STRATEGY.md` and one route you changed your mind about (`/cart`); 5-7 `BOUNDARY.md` and the bundle before/after; 7-8 `curl` demo and questions.

## Next.js 16.4 notes

- Turbopack builds everything; Node.js 20.9+ is required.
- `params` is a Promise (`await params`) and `cookies()` is async.
- Cache Components are intentionally **off** (`next.config.mjs`): the sheets use `revalidate`, `dynamic` and `generateStaticParams`, which Cache Components rejects. `create-next-app` 16.4 turns them on by default.
- Commit `package-lock.json` after your first `npm install` so a fresh clone installs the same versions.
