import Link from "next/link";
import { getDishes } from "@/lib/data";
import { AddToCartButton } from "@/components/AddToCartButton";

export const revalidate = 3600;

export default async function MenuPage() {
  const dishes = await getDishes();
  return (
    <div>
      <h1>Menu</h1>
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        }}
      >
        {dishes.map((dish) => (
          <article
            key={dish.id}
            style={{
              border: "1px solid #eaeaea",
              borderRadius: "8px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>
                <Link
                  href={`/menu/${dish.id}`}
                  style={{ textDecoration: "none", color: "#1B4D8E" }}
                >
                  {dish.name}
                </Link>
              </h3>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                {dish.description}
              </p>
              <strong style={{ display: "block", margin: "0.5rem 0" }}>
                {dish.price} ETB
              </strong>
            </div>
            <AddToCartButton dish={dish} />
          </article>
        ))}
      </div>
    </div>
  );
}
