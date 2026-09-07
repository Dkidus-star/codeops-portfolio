const categories = ["All", "Main", "Dessert"];

function CategoryBar({ category, setCategory }) {
  return (
    <div>
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={category === item ? "active" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
