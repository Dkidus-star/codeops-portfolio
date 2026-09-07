export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter((item) => item.cartId !== action.payload);

    case "clear":
      return [];

    default:
      return state;
  }
}
