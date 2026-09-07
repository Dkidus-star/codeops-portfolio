import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Dish({ dish }) {
  const { addToCart } = useCart();

  return (
    <article>
      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <Link to={`/menu/${dish.id}`}>View Dish</Link>

      <br />
      <br />

      <button onClick={() => addToCart(dish)}>Add to Cart</button>
    </article>
  );
}

export default Dish;
