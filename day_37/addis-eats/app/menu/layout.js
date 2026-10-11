"use client";
import { useState } from "react";
import Link from "next/link";

export default function MenuLayout({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div className="menu-layout">
      <aside className="menu-sidebar">
        <h2>Menu Categories</h2>

        <button onClick={() => setCount((c) => c + 1)}>Clicks: {count}</button>

        <nav className="menu-nav">
          <Link href="/menu/doro-wat">Doro Wat</Link>
          <Link href="/menu/kitfo">Kitfo</Link>
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
