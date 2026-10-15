import "./globals.css";
import Providers from "./Providers";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="root-header">
            <nav style={{ display: "flex", gap: "1rem", fontWeight: "bold" }}>
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </header>

          <div className="root-main">{children}</div>

          <footer className="root-footer">© 2026 Addis Eats Footer</footer>
        </Providers>
      </body>
    </html>
  );
}
