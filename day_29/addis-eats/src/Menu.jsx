import { useEffect, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ onAdd }) {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDishes() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/dishes.json");

        if (!response.ok) {
          throw new Error("Failed to load the menu.");
        }

        const data = await response.json();
        setDishes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadDishes();
  }, [category]);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
