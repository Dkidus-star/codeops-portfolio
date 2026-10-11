import { Suspense } from "react";
import DishList from "./DishList";

export const revalidate = 3600;

export default function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </div>
  );
}
