import DishList from "./DishList";

export default async function Menu() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main>
      <h1>Our Menu</h1>
      <DishList />
    </main>
  );
}
