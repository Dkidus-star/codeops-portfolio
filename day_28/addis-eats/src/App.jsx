import Dish from "./Dish";

function App() {
  return (
    <div>
      <h1>Addis Eats</h1>

      <Dish name="Doro Wat" price={240} spicy={true} />

      <Dish name="Shiro" price={120} spicy={false} />

      <Dish name="Tibs" price={280} spicy={true} />
    </div>
  );
}

export default App;
