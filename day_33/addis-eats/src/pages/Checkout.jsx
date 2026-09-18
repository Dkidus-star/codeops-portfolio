import { useState } from "react";
import useCartStore from "../store/cartStore";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!/^(?:\+251|0)9\d{8}$/.test(form.phone.trim())) {
    errors.phone =
      "Enter a valid TeleBirr phone number, for example 0912345678.";
  }

  if (!form.area.trim()) {
    errors.area = "Delivery area is required.";
  }

  return errors;
}

function Checkout() {
  const items = useCartStore((state) => state.items);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const [touched, setTouched] = useState({});

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const errors = validate(form);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted:", form);
    console.log("Validation errors:", errors);
  }

  return (
    <section>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.name && errors.name && <p>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">TeleBirr Phone</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="09XXXXXXXX"
          />

          {touched.phone && errors.phone && <p>{errors.phone}</p>}
        </div>

        {/* Delivery Area */}
        <div>
          <label htmlFor="area">Delivery Area</label>

          <input
            id="area"
            name="area"
            type="text"
            value={form.area}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.area && errors.area && <p>{errors.area}</p>}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes">Notes (optional)</label>

          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <button type="submit">Place Order — {total} ETB</button>
      </form>
    </section>
  );
}

export default Checkout;
