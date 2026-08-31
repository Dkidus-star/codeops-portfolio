import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <div className="dish">
      <h3>{name}</h3>
      <p>
        {price} {currency}
      </p>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
};

export default Dish;
