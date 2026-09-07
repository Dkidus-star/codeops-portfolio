import { useContext } from "react";
import { CartContext } from "../context/CartContext";

let nextCartId = 1;

function Cart() {
  const { items, dispatch, total } = useContext(CartContext);

  const dishes = [
    {
      id: 1,
      name: "Doro Wat",
      price: 240,
    },
    {
      id: 2,
      name: "Shiro",
      price: 120,
    },
    {
      id: 3,
      name: "Tibs",
      price: 280,
    },
    {
      id: 4,
      name: "Kitfo",
      price: 350,
    },
    {
      id: 5,
      name: "Baklava",
      price: 100,
    },
  ];

  const addItem = (dish) => {
    dispatch({
      type: "add",
      payload: {
        ...dish,
        cartId: nextCartId++,
      },
    });
  };

  const removeItem = (cartId) => {
    dispatch({
      type: "remove",
      payload: cartId,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div>
      <h2>Cart</h2>

      <h3>Menu</h3>

      {dishes.map((dish) => (
        <div key={dish.id}>
          <span>
            {dish.name} - {dish.price} ETB
          </span>

          <button onClick={() => addItem(dish)}>Add</button>
        </div>
      ))}

      <hr />

      <h3>Cart Items: {items.length}</h3>

      {items.map((item) => (
        <div key={item.cartId}>
          <span>
            {item.name} - {item.price} ETB
          </span>

          <button onClick={() => removeItem(item.cartId)}>Remove</button>
        </div>
      ))}

      <h3>Total: {total} ETB</h3>

      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
