import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB", onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(price);
  }

  return (
    <div className="dish">
      <h3>
        {name} {spicy && <span>🌶️ Spicy</span>}
      </h3>

      <p>
        {price} {currency}
      </p>

      <p>Added: {count}</p>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  onAdd: PropTypes.func.isRequired,
};

export default Dish;
