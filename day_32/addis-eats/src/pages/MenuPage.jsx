import { useSearchParams } from "react-router-dom";
import Dish from "../Dish";
import dishes from "../data";

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const filteredDishes =
    category === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function handleCategory(categoryName) {
    if (categoryName === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryName });
    }
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <div>
        <button onClick={() => handleCategory("all")}>All</button>

        <button onClick={() => handleCategory("main")}>Main</button>

        <button onClick={() => handleCategory("drink")}>Drinks</button>
      </div>

      <p>Category: {category}</p>

      {filteredDishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </section>
  );
}

export default MenuPage;
