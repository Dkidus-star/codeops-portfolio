import PropTypes from "prop-types";
import Card from "./Card";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <Card>
      <div className="dish">
        <h3>
          {name} {spicy && <span>🌶️ Spicy</span>}
        </h3>

        <p>
          {price} {currency}
        </p>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
};

export default Dish;
