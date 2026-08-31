import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes, onAdd }) {
  const [category, setCategory] = useState("All");

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <div>
      <CategoryBar category={category} setCategory={setCategory} />

      <DishList dishes={filteredDishes} onAdd={onAdd} />
    </div>
  );
}

export default Menu;
