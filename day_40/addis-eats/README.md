# Addis Eats - Next.js App Router

A food-ordering application built with the Next.js App Router, demonstrating Server Components, Client Components, dynamic routes, and Server Actions.

## Application Routes

- `/` - `app/page.js`
- `/menu` - `app/menu/page.js`
- `/menu/[id]` - `app/menu/[id]/page.js`
- `/cart` - `app/cart/page.js`
- `/checkout` - `app/checkout/page.js`

## Production Build Output

```text
Route (app)            Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├ ƒ /api/orders
├ ○ /cart
├ ○ /checkout
├ ○ /menu                      1h      1y
└   /menu/[id]
  ├ ● /menu/doro-wat
  ├ ● /menu/kitfo
  ├ ● /menu/shiro-wat
  └ ● [+3 more paths]

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
