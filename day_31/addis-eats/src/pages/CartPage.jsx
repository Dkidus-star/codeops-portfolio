import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
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

      {cart.map((item) => (
        <article key={item.id}>
          <h3>{item.name}</h3>

          <p>
            {item.quantity} × {item.price} ETB
          </p>

          <p>Subtotal: {item.quantity * item.price} ETB</p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </article>
      ))}

      <h3>Total: {total} ETB</h3>

      <Link to="/menu">Continue Shopping</Link>
    </section>
  );
}

export default CartPage;
