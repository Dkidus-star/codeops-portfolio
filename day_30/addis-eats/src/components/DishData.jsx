import useFetch from "../hooks/useFetch";

function DishData() {
  const { data, loading, error } = useFetch("/dishes.json");

  if (loading) {
    return <p>Loading dish data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Number of dishes: {data.length}</h2>
    </div>
  );
}

export default DishData;
