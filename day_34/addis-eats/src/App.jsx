import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import DishPage from "./pages/DishPage";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

import RequireAuth from "./RequireAuth";
import RouteSkeleton from "./RouteSkeleton";

const Checkout = lazy(() => import("./pages/Checkout"));
const Receipt = lazy(() => import("./pages/Receipt"));

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="menu" element={<MenuPage />} />

            <Route path="menu/:id" element={<DishPage />} />

            <Route path="cart" element={<CartPage />} />

            <Route path="signin" element={<SignIn />} />

            <Route element={<RequireAuth />}>
              <Route
                path="checkout"
                element={
                  <Suspense fallback={<RouteSkeleton />}>
                    <Checkout />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="receipt"
              element={
                <Suspense fallback={<RouteSkeleton />}>
                  <Receipt />
                </Suspense>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
