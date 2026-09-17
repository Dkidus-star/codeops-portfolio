# Addis Eats React Routing Project

A React food ordering application built during CodeOps Day 31 to practice React Router, dynamic routes, query parameters, protected routes, and shared cart state.

## 🚀 Features

- Home page
- Menu page
- Individual dish pages
- Dynamic dish routes using `useParams`
- Category filtering using URL query parameters
- Shopping cart
- Cart state preserved while navigating
- Sign-in page
- Protected checkout route
- Redirect back to checkout after sign-in
- 404 Not Found page
- Shared layout with navigation

## 🛠️ Technologies

- React
- React Router DOM
- Vite
- JavaScript
- CSS
- Local Storage

## 📁 Main Structure

```text
src/
├── pages/
│   ├── Home.jsx
│   ├── MenuPage.jsx
│   ├── DishPage.jsx
│   ├── CartPage.jsx
│   ├── SignIn.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── Layout.jsx
├── CartContext.jsx
├── RequireAuth.jsx
├── Dish.jsx
├── data.js
├── App.css
├── index.css
└── main.jsx
```

## 🧭 Routes

| Route                  | Purpose            |
| ---------------------- | ------------------ |
| `/`                    | Home               |
| `/menu`                | Menu               |
| `/menu/:id`            | Individual dish    |
| `/menu?category=main`  | Main dishes        |
| `/menu?category=drink` | Drinks             |
| `/cart`                | Shopping cart      |
| `/signin`              | Sign in            |
| `/checkout`            | Protected checkout |
| `*`                    | 404 page           |

## 🔐 Authentication

Checkout is protected using `RequireAuth`.

If the user is not signed in:

```text
/checkout
     ↓
/signin
     ↓
Sign In
     ↓
/checkout
```

Authentication is simulated using `localStorage`.

## 🛒 Cart

The cart is managed with React Context.

Users can:

- Add dishes
- Increase quantities
- Remove dishes
- View subtotals
- View the total order price

The cart remains available while navigating between pages.

## 🎯 What I Learned

This project helped me practice:

- `BrowserRouter`
- `Routes` and `Route`
- Nested routes
- `Outlet`
- `Link`
- `Navigate`
- `useNavigate`
- `useLocation`
- `useParams`
- `useSearchParams`
- Protected routes
- React Context
- Shared state
- URL-based application state

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

## 📌 Project

**Project:** Addis Eats
**Module:** React
**Day:** 31
**Topic:** React Router and Application Routing
