import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Home</Link> | <Link href="/menu">Menu</Link> |{" "}
          <Link href="/cart">Cart</Link>
        </nav>
        <div style={{ padding: "1rem" }}>{children}</div>
      </body>
    </html>
  );
}
