import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [total, setTotal] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  function handleAdd(price) {
    setTotal(total + price);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const phoneIsValid = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  return (
    <div>
      <h1>Addis Eats</h1>

      <Menu onAdd={handleAdd} />

      <h2>Order Total: {total} ETB</h2>

      <h2>Delivery Details</h2>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="TeleBirr Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Delivery Area"
          value={form.area}
          onChange={handleChange}
        />

        <button type="submit" disabled={!phoneIsValid}>
          Order with TeleBirr
        </button>
      </form>
    </div>
  );
}

export default App;
