import { useRef, useState } from "react";
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
  const [submitError, setSubmitError] = useState("");

  // References to our form fields
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);
  const notesRef = useRef(null);

  const fieldRefs = {
    name: nameRef,
    phone: phoneRef,
    area: areaRef,
    notes: notesRef,
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Derive errors on every render
  const errors = validate(form);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    // Remove the server error when the user starts editing again
    setSubmitError("");
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  }

  function focusFirstError(currentErrors) {
    const firstErrorField = Object.keys(currentErrors)[0];

    if (firstErrorField) {
      fieldRefs[firstErrorField]?.current?.focus();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Check validation before submitting
    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        phone: true,
        area: true,
        notes: true,
      });

      focusFirstError(errors);

      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      // Simulate a failed request
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(
            new Error(
              "We couldn't place your order. The checkout service is unavailable.",
            ),
          );
        }, 2000);
      });

      console.log("Order submitted:", form);
    } catch (error) {
      // Show why the request failed
      setSubmitError(error.message);

      // Keep the form values and focus the first field
      // so the user knows where to continue.
      const currentErrors = validate(form);

      if (Object.keys(currentErrors).length > 0) {
        setTouched({
          name: true,
          phone: true,
          area: true,
          notes: true,
        });

        focusFirstError(currentErrors);
      } else {
        nameRef.current?.focus();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section>
      <h2>Checkout</h2>

      {submitError && <p role="alert">{submitError}</p>}

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="name">Full Name</label>

          <input
            ref={nameRef}
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
            ref={phoneRef}
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
            ref={areaRef}
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
            ref={notesRef}
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
