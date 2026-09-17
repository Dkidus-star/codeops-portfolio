import { Link, useParams } from "react-router-dom";
import dishes from "../data";

function DishPage() {
  const { id } = useParams();

  const dish = dishes.find((dish) => dish.id === Number(id));

  if (!dish) {
    return (
      <section>
        <h2>Dish Not Found</h2>
        <Link to="/menu">Back to Menu</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{dish.name}</h2>

      <p>{dish.description}</p>

      <p>Price: {dish.price} ETB</p>

      <p>Category: {dish.category}</p>

      {dish.spicy && <p>🌶️ This dish is spicy.</p>}

      <Link to="/menu">← Back to Menu</Link>
    </section>
  );
}

export default DishPage;
