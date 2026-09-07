import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>

        <nav>
          <Link to="/">Home</Link> <Link to="/menu">Menu</Link>{" "}
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
