import { useState } from "react";
import useCartStore from "../store/cartStore";

function Checkout() {
  const items = useCartStore((state) => state.items);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted:", form);
  }

  return (
    <section>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">TeleBirr Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="09XXXXXXXX"
          />
        </div>

        <div>
          <label htmlFor="area">Delivery Area</label>
          <input
            id="area"
            name="area"
            type="text"
            value={form.area}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="notes">Notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Place Order — {total} ETB</button>
      </form>
    </section>
  );
}

export default Checkout;
