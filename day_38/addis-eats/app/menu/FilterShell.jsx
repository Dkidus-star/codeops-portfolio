"use client";
import { useState } from "react";

export default function FilterShell({ children }) {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Spicy</option>
          <option>Veggie</option>
        </select>
      </div>
      {/* The server-rendered DishList will be injected here without being converted to a client component */}
      {children}
    </div>
  );
}
