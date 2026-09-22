# Addis Eats — Day 34

A resilient and performance-focused React version of the Addis Eats application.

## Day 34 Goals

This day focused on making the application:

- More resilient when components fail
- Faster through lazy loading
- Easier to analyze with React Profiler
- More efficient by preventing unnecessary re-renders
- More interactive with a portal-based modal

## Features Implemented

### 1. Error Boundaries

Created an `ErrorBoundary` component using a React class component.

The menu and cart are protected separately so that an error in one part of the application does not crash the entire application.

The error boundary provides:

- Error fallback UI
- A Try Again button
- Error logging with `componentDidCatch`

### 2. Error Testing

A deliberate rendering error was added to a dish to verify the ErrorBoundary.

The test confirmed that:

- The dish area could fail safely
- The rest of the MenuPage remained available
- The error fallback was displayed

The test error was removed after verification.

### 3. Lazy Loading

Checkout and Receipt are loaded using React `lazy()`.

```js
const Checkout = lazy(() => import("./pages/Checkout"));
const Receipt = lazy(() => import("./pages/Receipt"));
```

`Suspense` displays a loading skeleton while these pages are being loaded.

### 4. Protected Checkout

The Checkout page remains protected by `RequireAuth`.

Unauthenticated users are redirected to the Sign In page before accessing Checkout.

### 5. React Profiler

React's Profiler API was used to measure rendering performance.

The profiling showed that adding an item to the cart caused multiple `Dish` components to render again.

### 6. Preventing Unnecessary Re-renders

`React.memo()` was added to the `Dish` component.

```js
export default memo(Dish);
```

This prevents a dish from re-rendering when its props have not changed.

The result is a more efficient menu when the cart is updated.

### 7. Dish Modal

Created a reusable `DishModal` component using:

```js
createPortal();
```

The modal is rendered directly into `document.body`.

The modal includes:

- Dish name
- Description
- Price
- Spicy status
- Close button
- Escape-to-close support
- Automatic focus when opened
- Focus returned to the Quick View button when closed

## Technologies

- React
- React Router
- Zustand
- React Context
- React `lazy`
- React `Suspense`
- React `Profiler`
- React `memo`
- React `createPortal`
- JavaScript
- Vite

## Project Structure

```text
src/
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── pages/
│   ├── CartPage.jsx
│   ├── Checkout.jsx
│   ├── DishPage.jsx
│   ├── Home.jsx
│   ├── MenuPage.jsx
│   ├── NotFound.jsx
│   ├── Receipt.jsx
│   └── SignIn.jsx
├── store/
│   └── cartStore.js
├── App.jsx
├── Dish.jsx
├── DishModal.jsx
├── ErrorBoundary.jsx
├── Layout.jsx
├── RequireAuth.jsx
└── RouteSkeleton.jsx
```

## What I Learned

Day 34 helped me understand how to make a React application more resilient and performant.

I learned how to:

- Catch rendering errors with Error Boundaries
- Test whether an Error Boundary works
- Lazy-load React routes
- Use `Suspense` for loading states
- Profile React rendering performance
- Identify unnecessary re-renders
- Use `React.memo()` to optimize components
- Render components outside their normal DOM hierarchy with portals
- Handle Escape-key interactions
- Manage keyboard focus when opening and closing modals
