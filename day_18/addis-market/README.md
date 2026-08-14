# Addis Market Order Summary

## Project Description

This project is a small **Addis Market order-summary module** built with JavaScript ES modules.

It processes customer orders, calculates item subtotals, adds **15% Ethiopian VAT**, identifies orders over **500 ETB**, and calculates the grand total of all orders.

The project is designed to practice JavaScript **array methods, destructuring, spread syntax, and ES modules**.

---

## Project Structure

```text
addis-market/
│
├── orders.js
├── pricing.js
├── summary.js
├── package.json
└── README.md
```

### `orders.js`

Contains the Addis Market customer order data.

Each order contains:

- Order ID
- Customer name
- Items
- Item price
- Item quantity

### `pricing.js`

Contains reusable pricing functions:

- `withVat()` — adds 15% VAT
- `format()` — formats amounts as Ethiopian Birr
- `total()` — calculates the subtotal of an order

### `summary.js`

Processes the orders and:

- Calculates each order's subtotal
- Adds VAT
- Uses `map()` and spread syntax
- Finds orders over 500 ETB using `filter()`
- Calculates the grand total using `reduce()`
- Prints the order summary

### `package.json`

Configures Node.js to use ES modules.

---

## JavaScript Concepts Practiced

### 1. `reduce()`

Used to calculate the total cost of items:

```js
items.reduce((sum, { price, qty }) => {
  return sum + price * qty;
}, 0);
```

The `{ price, qty }` part uses object destructuring.

---

### 2. Destructuring

Instead of accessing:

```js
item.price;
item.qty;
```

the code directly extracts the properties:

```js
{
  (price, qty);
}
```

This makes the calculation shorter and easier to read.

---

### 3. `map()`

`map()` is used to create a new array containing the original orders plus calculated subtotal and total values.

```js
const orderTotals = orders.map((order) => {
  const subtotal = total(order.items);

  return {
    ...order,
    subtotal,
    total: withVat(subtotal),
  };
});
```

---

### 4. Spread Syntax

The spread operator:

```js
...order
```

copies the existing order properties into a new object.

The calculated values are then added:

```js
{
  ...order,
  subtotal,
  total: withVat(subtotal),
}
```

---

### 5. `filter()`

`filter()` is used to find orders whose VAT-inclusive total is greater than 500 ETB:

```js
const largeOrders = orderTotals.filter((order) => order.total > 500);
```

---

### 6. `forEach()`

`forEach()` is used to display each order in the console:

```js
orderTotals.forEach((order) => {
  console.log(`Order #${order.id} - ${order.customer}: ${format(order.total)}`);
});
```

---

### 7. ES Modules

The project uses `import` and `export`.

For example:

```js
export function withVat(price) {
  return price * 1.15;
}
```

And the function can be imported with:

```js
import { withVat } from "./pricing.js";
```

---

## VAT Calculation

The project uses a **15% VAT rate**:

```js
const VAT_RATE = 0.15;
```

For example, if an order subtotal is:

```text
590 ETB
```

VAT is:

```text
590 × 15% = 88.50 ETB
```

The final total is:

```text
590 + 88.50 = 678.50 ETB
```

---

## How to Run

Make sure Node.js is installed.

From inside the `addis-market` folder, run:

```bash
node summary.js
```

---

## Expected Output

```text
===== ADDIS MARKET ORDER SUMMARY =====
Order #1 - Abebe: 678.50 ETB
Order #2 - Mekdes: 471.50 ETB
Order #3 - Dawit: 759.00 ETB
Order #4 - Hana: 506.00 ETB
--------------------------------------
Orders over 500 ETB: 3
Order #1 - Abebe: 678.50 ETB
Order #3 - Dawit: 759.00 ETB
Order #4 - Hana: 506.00 ETB
--------------------------------------
GRAND TOTAL: 2415.00 ETB
```

---

## Results

Based on the provided order data:

- **Total orders:** 4
- **Orders over 500 ETB:** 3
- **Grand total:** 2,415.00 ETB

---

## Learning Objectives

By completing this project, I practiced:

- JavaScript ES modules
- `map()`
- `filter()`
- `reduce()`
- `forEach()`
- Object destructuring
- Spread syntax
- Functions
- Array processing
- VAT calculations
- Formatting currency values
- Importing and exporting JavaScript modules
