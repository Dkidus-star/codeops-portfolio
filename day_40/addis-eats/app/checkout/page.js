import { placeOrder } from "../actions";

export default function CheckoutPage() {
  return (
    <section>
      <h2>Checkout</h2>
      <form
        action={placeOrder}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required className="border p-1 w-full" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            required
            className="border p-1 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2">
          Place Order
        </button>
      </form>
    </section>
  );
}
