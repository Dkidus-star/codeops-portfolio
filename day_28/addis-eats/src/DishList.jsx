import Dish from "./Dish";

function DishList({ dishes }) {
  return (
    <div>
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

export default DishList;
