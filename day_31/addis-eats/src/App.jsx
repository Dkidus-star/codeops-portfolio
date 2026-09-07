import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import { CartProvider } from "./CartContext";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import DishPage from "./pages/DishPage";
import CartPage from "./pages/CartPage";
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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
