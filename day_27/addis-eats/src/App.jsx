import { useState } from "react";
import Menu from "./Menu";
import menu from "./data";

function App() {
  const [category, setCategory] = useState("All");

  const filteredDishes =
    category === "All"
      ? menu
      : menu.filter((dish) => dish.category === category);

  return (
    <div>
      <h1>Addis Eats</h1>

      <div>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Main")}>Main</button>
        <button onClick={() => setCategory("Dessert")}>Dessert</button>
      </div>

      <Menu dishes={filteredDishes} />
    </div>
  );
}

export default App;
