import { Suspense } from "react";
import DishList from "./DishList";
import FilterShell from "./FilterShell";

export const revalidate = 3600;

export default async function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <FilterShell>
        <Suspense fallback={<p>Loading dishes...</p>}>
          <DishList />
        </Suspense>
      </FilterShell>
    </div>
  );
}
