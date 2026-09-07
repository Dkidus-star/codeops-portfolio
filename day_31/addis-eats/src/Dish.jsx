import { Link } from "react-router-dom";

function Dish({ dish }) {
  return (
    <article>
      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <Link to={`/menu/${dish.id}`}>View Dish</Link>
    </article>
  );
}

export default Dish;
