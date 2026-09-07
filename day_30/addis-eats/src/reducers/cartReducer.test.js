import { cartReducer } from "./cartReducer";

const initialState = [];

const item1 = {
  id: 1,
  name: "Doro Wat",
  price: 240,
};

const item2 = {
  id: 2,
  name: "Shiro",
  price: 120,
};

const stateAfterAdd = cartReducer(initialState, {
  type: "add",
  payload: item1,
});

console.log("After add:", stateAfterAdd);

const stateAfterSecondAdd = cartReducer(stateAfterAdd, {
  type: "add",
  payload: item2,
});

console.log("After second add:", stateAfterSecondAdd);

// Test REMOVE
const stateAfterRemove = cartReducer(stateAfterSecondAdd, {
  type: "remove",
  payload: 1,
});

console.log("After remove:", stateAfterRemove);

// Test CLEAR
const stateAfterClear = cartReducer(stateAfterRemove, {
  type: "clear",
});

console.log("After clear:", stateAfterClear);
