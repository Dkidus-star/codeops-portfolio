# Addis Eats Zustand State Management

A routed React food-ordering application updated during Day 32 to practice Zustand state management, narrow selectors, Context separation, authentication, and persistent cart state.

## 🚀 Features

- React Router navigation
- Home, Menu, Dish, Cart, Sign In, and Checkout pages
- Dynamic dish routes
- Category filtering with URL query parameters
- Protected checkout route
- Separate Auth and Theme providers
- Zustand cart store
- Narrow Zustand selectors
- Add, remove, and clear cart actions
- Persistent cart using Zustand `persist`
- Cart survives browser refresh
- React DevTools re-render investigation

## 🛠️ Technologies

- React
- React Router DOM
- Zustand
- Vite
- JavaScript
- CSS
- Local Storage

## 📁 Main Structure

```text
src/
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── MenuPage.jsx
│   ├── DishPage.jsx
│   ├── CartPage.jsx
│   ├── SignIn.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
│
├── store/
│   └── cartStore.js
│
├── App.jsx
├── Layout.jsx
├── RequireAuth.jsx
├── Dish.jsx
├── data.js
├── index.css
└── main.jsx
```

## 🛒 Zustand Cart Store

The cart was migrated from React Context to a Zustand store.

The store contains:

```text
items
addItem
remove
clear
```

Components use narrow selectors instead of subscribing to the entire store.

Example:

```jsx
const items = useCartStore((state) => state.items);
```

Another component can select only an action:

```jsx
const addItem = useCartStore((state) => state.addItem);
```

## 💾 Persistent Cart

The Zustand `persist` middleware stores the cart in Local Storage.

```text
Add item
   ↓
Zustand Store
   ↓
Local Storage
   ↓
Browser Refresh
   ↓
Cart remains
```

The persistence key is:

```text
addis-eats-cart
```

## 🔐 Authentication

Authentication remains in its own React Context.

```text
AuthProvider
    ↓
useAuth()
    ↓
RequireAuth
    ↓
Protected Checkout
```

Unauthenticated users are redirected to Sign In and returned to their original destination after signing in.

## 🎨 Theme

Theme state is also separated into its own provider:

```text
ThemeProvider
    ↓
useTheme()
```

This keeps authentication, theme, and cart state independent.

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

## 🔍 React DevTools

React DevTools was used to observe component rendering while adding dishes to the cart.

Three dishes were added to the cart to investigate which components re-render when Zustand state changes.

Narrow selectors were used to reduce unnecessary subscriptions to store state.

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
**Day:** 32
**Topic:** Zustand State Management
