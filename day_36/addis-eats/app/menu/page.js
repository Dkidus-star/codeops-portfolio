export default async function Menu() {
  // Artificial delay to force loading.js to appear for Exercise 6
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Uncomment the line below to force error.js to appear for Exercise 6
  // throw new Error("Failed to load menu items");

  return <div>Menu Page</div>;
}
