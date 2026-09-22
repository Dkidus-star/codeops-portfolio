import { Link } from "react-router-dom";
import { Profiler, memo } from "react";
import useCartStore from "./store/cartStore";

function onDishRender(id, phase, actualDuration) {
  console.log(`${id} ${phase}: ${actualDuration.toFixed(2)}ms`);
}
function Dish({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Profiler id={`Dish-${dish.id}`} onRender={onDishRender}>
      <article>
        <h3>{dish.name}</h3>

        <p>{dish.price} ETB</p>

        {dish.spicy && <p>🌶️ Spicy</p>}

        <Link to={`/menu/${dish.id}`}>View Dish</Link>

        <br />

        <button onClick={() => addItem(dish)}>Add to Cart</button>
      </article>
    </Profiler>
  );
}
export default memo(Dish);
