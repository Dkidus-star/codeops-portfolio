import { withVat, format, total } from "./pricing.js";
import orders from "./orders.js";

// Calculate the total for each order
const orderTotals = orders.map((order) => {
  const subtotal = total(order.items);

  return {
    ...order,
    subtotal,
    total: withVat(subtotal),
  };
});

// Find orders with a total greater than 500 ETB
const largeOrders = orderTotals.filter((order) => order.total > 500);

// Calculate grand total
const grandTotal = orderTotals.reduce((sum, order) => {
  return sum + order.total;
}, 0);

// Print formatted summary
console.log("===== ADDIS MARKET ORDER SUMMARY =====");

orderTotals.forEach((order) => {
  console.log(`Order #${order.id} - ${order.customer}: ${format(order.total)}`);
});

console.log("--------------------------------------");

console.log(`Orders over 500 ETB: ${largeOrders.length}`);

largeOrders.forEach((order) => {
  console.log(`Order #${order.id} - ${order.customer}: ${format(order.total)}`);
});

console.log("--------------------------------------");

console.log(`GRAND TOTAL: ${format(grandTotal)}`);
