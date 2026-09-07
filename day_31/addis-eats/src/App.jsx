import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function Home() {
  return <h2>Welcome to Addis Eats</h2>;
}

function Menu() {
  return <h2>Our Menu</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
