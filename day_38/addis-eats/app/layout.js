import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="root-header">
            <nav>Addis Eats Header</nav>
          </header>

          <div className="root-main">{children}</div>

          <footer className="root-footer">© 2026 Addis Eats Footer</footer>
        </Providers>
      </body>
    </html>
  );
}
