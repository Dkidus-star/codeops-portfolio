# TeleBirr Transaction Report

## Project Description

This mini-project is a small TeleBirr transaction report generator for an Addis shop.

It processes an array of credit and debit transactions using modern JavaScript features including:

- `filter()`
- `map()`
- `reduce()`
- Object destructuring
- Spread syntax
- Template literals
- ES modules

The project is divided into separate modules so that the transaction data and report logic can be reused independently.

## Project Structure

```text
telebirr-transaction-report/
│
├── transactions.js
├── report.js
├── app.js
└── README.md
```

## Module Responsibilities

### `transactions.js`

Stores and exports the TeleBirr transaction data.

Each transaction contains:

- `id`
- `customer`
- `amount`
- `type`

The transaction type is either `credit` or `debit`.

### `report.js`

Contains the reusable functions for processing transactions.

It is responsible for:

- Separating credits and debits using `filter()`.
- Calculating transaction totals using `reduce()`.
- Building formatted receipt strings using `map()`.
- Creating updated transaction copies using spread syntax without mutating the original transaction.

### `app.js`

Imports the transaction data and report functions.

It is responsible for:

- Running the report functions.
- Calculating total credits and debits.
- Generating the receipt list.
- Demonstrating the transaction correction.
- Printing the final report to the console.

### `README.md`

Explains the project, what each module is responsible for, the JavaScript concepts used, how to run the project, and provides a sample report.

## JavaScript Concepts Practiced

### `filter()`

Used to separate transactions by their type:

```js
txns.filter((transaction) => transaction.type === type);
```

### `reduce()`

Used to calculate the total transaction amount:

```js
.reduce((sum, { amount }) => sum + amount, 0)
```

### `map()`

Used to create formatted receipt strings:

```js
txns.map(({ customer, amount }) => {
  return `Receipt: ${customer} - ${amount.toFixed(2)} ETB`;
});
```

### Destructuring

Transaction properties are destructured directly in function parameters:

```js
({ customer, amount });
```

### Spread Syntax

Spread creates a new transaction object without changing the original:

```js
{
  ...transaction,
  amount: newAmount,
}
```

### Template Literals

Template literals are used to create readable receipt strings:

```js
`Receipt: ${customer} - ${amount.toFixed(2)} ETB`;
```

## How to Run

From the `telebirr-transaction-report` directory, run:

```bash
node app.js
```

Sample Report
===== TELEBIRR TRANSACTION REPORT =====
Total Credits: 1900.00 ETB
Total Debits: 750.00 ETB

---

RECEIPTS:
Receipt: Almaz - 250.00 ETB
Receipt: Dawit - 600.00 ETB
Receipt: Tigist - 180.00 ETB
Receipt: Hana - 850.00 ETB
Receipt: Bereket - 320.00 ETB
Receipt: Selam - 450.00 ETB

---

TRANSACTION CORRECTION:
Original: { id: 1, customer: 'Almaz', amount: 250, type: 'debit' }
Corrected: { id: 1, customer: 'Almaz', amount: 300, type: 'debit' }

---

Original transaction was not mutated: { id: 1, customer: 'Almaz', amount: 250, type: 'debit'}

## Learning Objectives

This project demonstrates how to:

- Process arrays without manual counter loops.
- Separate credits and debits using `filter()`.
- Calculate totals using `reduce()`.
- Use destructuring in callbacks.
- Create formatted data with `map()`.
- Create updated objects with spread syntax.
- Avoid mutating the original transaction.
- Organize JavaScript code into reusable modules.
- Use `export` and `import`.
