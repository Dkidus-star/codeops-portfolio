import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="menu" element={<MenuPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
