# Addis Eats — Full Stack Next.js Food Ordering Platform

A food ordering application built on Next.js App Router featuring server-side rendering strategies, clean boundary isolation, SWR live data polling, and debounced search[cite: 1, 9, 13].

---

## 1. Production Build Output

Verified via `npm run build`[cite: 2, 4]:

```text
Route (app)               Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├ ƒ /api/dishes
├ ƒ /api/dishes/[id]
├ ƒ /api/orders
├ ○ /cart
├ ○ /checkout
├ ○ /menu                         1h      1y
└   /menu/[id]
  ├ ● /menu/doro-wat
  ├ ● /menu/special-tibs
  ├ ● /menu/kitfo
  └ ● /menu/shiro-wat


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
