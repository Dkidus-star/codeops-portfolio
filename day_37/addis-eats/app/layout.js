import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="root-header">
          <nav>Addis Eats Header</nav>
        </header>

        <div className="root-main">{children}</div>

        <footer className="root-footer">© 2026 Addis Eats Footer</footer>
      </body>
    </html>
  );
}
