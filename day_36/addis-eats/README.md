# Addis Eats - Next.js App Router

This project demonstrates file-system routing in Next.js using the App Router.

## Route Structure

| Route        | File Path               | Description          |
| :----------- | :---------------------- | :------------------- |
| `/`          | `app/page.js`           | Home page            |
| `/menu`      | `app/menu/page.js`      | Menu listing         |
| `/menu/[id]` | `app/menu/[id]/page.js` | Dynamic dish details |
| `/cart`      | `app/cart/page.js`      | Cart page            |
| `/checkout`  | `app/checkout/page.js`  | Checkout page        |

### State Handlers & Colocated Components

| File Path               | Purpose                             |
| :---------------------- | :---------------------------------- |
| `app/not-found.js`      | Global 404 fallback                 |
| `app/menu/loading.js`   | Loading UI for the menu segment     |
| `app/menu/error.js`     | Error boundary for the menu segment |
| `app/menu/DishList.jsx` | Colocated component                 |
