import Link from "next/link";
import Counter from "./Counter";
import { dishes } from "@/lib/data"; // Import your new data

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <h2>Menu Categories</h2>

        <Counter />

        <nav className="menu-nav">
          {/* Dynamically render all 6 dishes */}
          {dishes.map((dish) => (
            <Link key={dish.id} href={`/menu/${dish.id}`}>
              {dish.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
