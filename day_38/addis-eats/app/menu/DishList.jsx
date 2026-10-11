export default async function DishList() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <ul>
      <li>Doro Wat</li>
      <li>Kitfo</li>
    </ul>
  );
}
