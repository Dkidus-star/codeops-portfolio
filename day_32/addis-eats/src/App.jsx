import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import { CartProvider } from "./CartContext";
import RequireAuth from "./RequireAuth";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import DishPage from "./pages/DishPage";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="menu" element={<MenuPage />} />

          <Route path="menu/:id" element={<DishPage />} />

          <Route path="cart" element={<CartPage />} />

          <Route path="signin" element={<SignIn />} />

          <Route element={<RequireAuth />}>
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
