import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function CartPage() {
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.remove);
  const clear = useCartStore((state) => state.clear);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <section>
        <h2>Your Cart</h2>

        <p>Your cart is empty.</p>

        <Link to="/menu">Go to Menu</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Your Cart</h2>

      {items.map((item) => (
        <article key={item.id}>
          <h3>{item.name}</h3>

          <p>
            {item.quantity} × {item.price} ETB
          </p>

          <p>Subtotal: {item.quantity * item.price} ETB</p>

          <button onClick={() => remove(item.id)}>Remove</button>
        </article>
      ))}

      <h3>Total: {total} ETB</h3>

      <button onClick={clear}>Clear Cart</button>

      <br />
      <br />

      <Link to="/menu">Continue Shopping</Link>
    </section>
  );
}

export default CartPage;
