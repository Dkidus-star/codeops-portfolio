import Dish from "../Dish";
import dishes from "../data";

function MenuPage() {
  return (
    <section>
      <h2>Our Menu</h2>

      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </section>
  );
}

export default MenuPage;
