import Dish from "./Dish";

function Menu({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes found in this category.</p>;
  }

  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
        />
      ))}
    </div>
  );
}

export default Menu;
