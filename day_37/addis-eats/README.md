# Addis Eats - Next.js Layouts & Caching (Day 37)

This project is a continuation of the Addis Eats mini-project, demonstrating modern Next.js 16 rendering, nested layouts, UI streaming, and global styling.

## 🚀 Concepts Demonstrated

- **Nested Layouts:** Implemented a persistent root layout (Header/Footer) and a nested menu layout (Sidebar) that preserves UI state across route changes.
- **Global Styling:** Applied a cohesive CSS design system with responsive grids, hero sections, and component styling.
- **Modern Caching:** Enabled Next.js 16 `cacheComponents` to mix static, cached, and dynamically rendered content within the same route.
- **Dynamic Routing & Static Params:** Used asynchronous `params` and `generateStaticParams()` to pre-build known dish routes (`/menu/kitfo`, `/menu/pizza`).
- **UI Streaming:** Implemented `loading.js` with CSS skeleton animations to provide instant fallback UI while route segments prepare.

## 📂 Route Structure

| Route        | File Path               | Description                                |
| :----------- | :---------------------- | :----------------------------------------- |
| `/`          | `app/page.js`           | Home page with Hero section                |
| `/menu`      | `app/menu/page.js`      | Menu list, wrapped by `menu/layout.js`     |
| `/menu/[id]` | `app/menu/[id]/page.js` | Dynamic dish details (e.g., `/menu/kitfo`) |
| `/cart`      | `app/cart/page.js`      | Static cart layout                         |
| `/checkout`  | `app/checkout/page.js`  | Static checkout layout                     |

## 🛠️ State & Layout Handlers

- `app/layout.js`: Global HTML shell, Header, and Footer.
- `app/menu/layout.js`: Nested sidebar for category navigation.
- `app/menu/loading.js`: Skeleton loading UI for the menu segment.
- `components/DishSkeleton.js`: Reusable loading state component.
