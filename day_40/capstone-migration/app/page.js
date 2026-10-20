import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Today&apos;s Specials at Addis Eats</h1>
      <p>Authentic Ethiopian dishes delivered fresh across the city.</p>
      <Link
        href="/menu"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#1B4D8E",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        View Full Menu
      </Link>
    </div>
  );
}
