import { dishes } from "@/lib/data";

export default async function DishList() {
  // Simulate fetch delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <ul style={{ lineHeight: "2" }}>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <strong>{dish.name}</strong> - ${dish.price} ({dish.category})
        </li>
      ))}
    </ul>
  );
}
