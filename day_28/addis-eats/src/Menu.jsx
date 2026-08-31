import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <div>
      <CategoryBar category={category} setCategory={setCategory} />

      <DishList dishes={filteredDishes} />
    </div>
  );
}

export default Menu;
