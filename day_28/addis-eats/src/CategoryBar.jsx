function CategoryBar({ category, setCategory }) {
  return (
    <div>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Main")}>Main</button>
      <button onClick={() => setCategory("Dessert")}>Dessert</button>
    </div>
  );
}

export default CategoryBar;
