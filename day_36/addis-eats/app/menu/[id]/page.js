import { notFound } from "next/navigation";

export default function DishPage({ params }) {
  // Trigger not-found.js for Exercise 7
  if (params.id === "unknown") {
    notFound();
  }

  return <div>Viewing Dish ID: {params.id}</div>;
}
