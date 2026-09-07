import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(dish) {
    setCart((currentCart) => {
      const existingDish = currentCart.find((item) => item.id === dish.id);

      if (existingDish) {
        return currentCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...dish, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
