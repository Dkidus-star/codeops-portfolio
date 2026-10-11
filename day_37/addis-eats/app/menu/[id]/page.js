import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ id: "doro-wat" }, { id: "kitfo" }];
}

export default async function DishPage({ params }) {
  const { id } = await params;

  if (id === "unknown") {
    notFound();
  }

  return <div>Viewing Dish ID: {id}</div>;
}
