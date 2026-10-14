import { notFound } from "next/navigation";
import { dishes } from "@/lib/data";

export async function generateStaticParams() {
  // Tells Next.js to pre-build all 6 dish pages instead of just 2
  return dishes.map((dish) => ({ id: dish.id }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  // Look up the actual dish data
  const dish = dishes.find((d) => d.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <div>
      <h2>{dish.name}</h2>
      <p>
        <strong>Price:</strong> ${dish.price}
      </p>
      <p>
        <strong>Category:</strong> {dish.category}
      </p>
    </div>
  );
}
