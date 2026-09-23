import Link from "next/link";

const dishes = [
  { id: "kitfo", name: "Kitfo" },
  { id: "doro-wot", name: "Doro Wot" },
  { id: "shiro", name: "Shiro" },
  { id: "trigger-error", name: "Trigger Error Boundary" },
];

export default function DishList() {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Link href={`/menu/${dish.id}`}>{dish.name}</Link>
        </li>
      ))}
    </ul>
  );
}
