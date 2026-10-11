import Link from "next/link";
import Counter from "./Counter";

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <h2>Menu Categories</h2>

        <Counter />

        <nav className="menu-nav">
          <Link href="/menu/doro-wat">Doro Wat</Link>
          <Link href="/menu/kitfo">Kitfo</Link>
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
