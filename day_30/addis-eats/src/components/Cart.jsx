import { useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

function Cart() {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    dispatch({
      type: "add",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "remove",
      payload: id,
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

      <button
        onClick={() =>
          addItem({
            id: Date.now(),
            name: "Doro Wat",
            price: 240,
          })
        }
      >
        Add Doro Wat
      </button>

      <button
        onClick={() => {
          if (items.length > 0) {
            removeItem(items[0].id);
          }
        }}
      >
        Remove First Item
      </button>

      <button onClick={clearCart}>Clear Cart</button>

      <p>Items: {items.length}</p>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} - {item.price} ETB
        </p>
      ))}
    </div>
  );
}

export default Cart;
