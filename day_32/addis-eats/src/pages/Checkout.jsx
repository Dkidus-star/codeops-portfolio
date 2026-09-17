import useCartStore from "../store/cartStore";

function Checkout() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function handlePlaceOrder() {
    alert("Order placed successfully!");
    clear();
  }

  return (
    <section>
      <h2>Checkout</h2>

      <h3>Order Summary</h3>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity}
        </p>
      ))}

      <h3>Total: {total} ETB</h3>

      <button onClick={handlePlaceOrder}>Place Order</button>
    </section>
  );
}

export default Checkout;
