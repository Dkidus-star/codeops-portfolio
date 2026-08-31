import { useState } from "react";
import Menu from "./Menu";
import menu from "./data";

function App() {
  const [total, setTotal] = useState(0);

  function handleAdd(price) {
    setTotal(total + price);
  }

  return (
    <div>
      <h1>Addis Eats</h1>

      <Menu dishes={menu} onAdd={handleAdd} />

      <h2>Order Total: {total} ETB</h2>
    </div>
  );
}

export default App;
