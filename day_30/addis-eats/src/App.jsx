import { useCallback, useState } from "react";
import Menu from "./components/Menu";
import DishData from "./components/DishData";
import Cart from "./components/Cart";
import ProfileMenu from "./components/ProfileMenu";

function App() {
  const [count, setCount] = useState(0);

  const handleLogout = useCallback(() => {
    console.log("User logged out");
  }, []);

  return (
    <div>
      <h1>Day 30 Hooks Deep Dive</h1>

      <button onClick={() => setCount(count + 1)}>App Count: {count}</button>

      <Menu />

      <DishData />

      <Cart />

      <ProfileMenu name="Kidus" onLogout={handleLogout} />
    </div>
  );
}

export default App;
