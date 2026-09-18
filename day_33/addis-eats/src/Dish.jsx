import { Link } from "react-router-dom";
import useCartStore from "./store/cartStore";

function Dish({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article>
      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <Link to={`/menu/${dish.id}`}>View Dish</Link>

      <br />

      <button onClick={() => addItem(dish)}>Add to Cart</button>
    </article>
  );
}

export default Dish;
