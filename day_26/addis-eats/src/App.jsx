import Header from "./Header";
import Dish from "./Dish";

const menu = [
  {
    id: 1,
    name: "Doro Wat",
    price: 240,
  },
  {
    id: 2,
    name: "Shiro",
    price: 120,
  },
  {
    id: 3,
    name: "Tibs",
    price: 280,
  },
  {
    id: 4,
    name: "Kitfo",
    price: 350,
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Our Menu</h2>

        <div className="menu">
          {menu.map((dish) => (
            <Dish key={dish.id} name={dish.name} price={dish.price} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
