import { useCart } from "../CartContext";

function Checkout() {
  const { cart, total } = useCart();

  return (
    <section>
      <h2>Checkout</h2>

      <h3>Order Summary</h3>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity}
        </p>
      ))}

      <h3>Total: {total} ETB</h3>

      <button>Place Order</button>
    </section>
  );
}

export default Checkout;
