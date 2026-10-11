# Addis Eats Rendering Strategy

- **`/` (Home)**: Static - The homepage rarely changes, so static generation ensures the fastest initial load.
- **`/menu`**: ISR (`revalidate: 3600`) - Menu availability changes occasionally; this provides static speed with fresh data hourly.
- **`/menu/[id]`**: Static (SSG) - Using `generateStaticParams` pre-builds known dishes to serve them instantly.
- **`/cart`**: Static - The shell is static; actual cart data will be populated client-side.
- **`/checkout`**: Dynamic - Reading `cookies()` to check active session/cart state forces this to run on every request.
