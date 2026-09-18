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
  const [submitting, setSubmitting] = useState(false);

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

  async function handleSubmit(event) {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        phone: true,
        area: true,
        notes: true,
      });

      return;
    }

    setSubmitting(true);

    // Simulate sending the order
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log("Order submitted:", form);
    setSubmitting(false);
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
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={
              touched.name && errors.name ? "name-error" : undefined
            }
          />

          {touched.name && errors.name && (
            <p id="name-error" role="alert">
              {errors.name}
            </p>
          )}
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
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-describedby={
              touched.phone && errors.phone ? "phone-error" : undefined
            }
          />

          {touched.phone && errors.phone && (
            <p id="phone-error" role="alert">
              {errors.phone}
            </p>
          )}
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
            aria-invalid={Boolean(touched.area && errors.area)}
            aria-describedby={
              touched.area && errors.area ? "area-error" : undefined
            }
          />

          {touched.area && errors.area && (
            <p id="area-error" role="alert">
              {errors.area}
            </p>
          )}
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

        <button type="submit" disabled={submitting}>
          {submitting ? "Placing Order..." : `Place Order — ${total} ETB`}
        </button>
      </form>
    </section>
  );
}

export default Checkout;
