import useFetch from "../hooks/useFetch";

function Menu() {
  const { data: dishes, loading, error } = useFetch("/dishes.json");

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Menu</h2>

      {dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.price} ETB</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
