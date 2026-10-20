export const DISHES = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    category: "stews",
    price: 450,
    description: "Slow-cooked chicken in berbere sauce with injera.",
  },
  {
    id: "special-tibs",
    name: "Special Tibs",
    category: "meat",
    price: 380,
    description: "Sautéed beef with rosemary, onions, and jalapeños.",
  },
  {
    id: "kitfo",
    name: "Kitfo",
    category: "meat",
    price: 420,
    description: "Minced beef seasoned with mitmita and niter kibbeh.",
  },
  {
    id: "shiro-wat",
    name: "Shiro Wat",
    category: "vegetarian",
    price: 220,
    description: "Simmered chickpea flour stew served in an earthenware pot.",
  },
];

export async function getDishes() {
  return DISHES;
}

export async function getDishById(id) {
  return DISHES.find((d) => d.id === id) || null;
}
