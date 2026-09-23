import { notFound } from "next/navigation";

export default function DishPage({ params }) {
  const { id } = params;

  if (id === "trigger-error") {
    throw new Error("Simulated rendering error in the menu segment!");
  }

  const validDishes = ["kitfo", "doro-wot", "shiro"];
  if (!validDishes.includes(id)) {
    notFound();
  }

  return (
    <main>
      <h2>Dish Details: {id}</h2>
      <p>This is the dynamic page for {id}.</p>
    </main>
  );
}
