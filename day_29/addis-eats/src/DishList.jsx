import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  return (
    <div>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default DishList;
