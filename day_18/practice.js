// ==========================================
// QUESTION 1
// map + filter + reduce
// ==========================================

const prices = [100, 250, 500, 800, 950, 1200];

// Add 15% VAT to every price
const pricesWithVat = prices.map((price) => {
  return price * 1.15;
});

// Keep only prices under 1000 ETB
const under1000 = pricesWithVat.filter((price) => {
  return price < 1000;
});

// Calculate the grand total
const grandTotal = under1000.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log("Prices with VAT:", pricesWithVat);
console.log("Prices under 1000 ETB:", under1000);
console.log("Grand total:", grandTotal.toFixed(2), "ETB");

// ==========================================
// QUESTION 2
// Object.entries + for...of
// ==========================================

const customer = {
  name: "Abebe",
  city: "Addis Ababa",
  balance: 2500,
};

for (const [key, value] of Object.entries(customer)) {
  console.log(`${key}: ${value}`);
}

// ==========================================
// QUESTION 3
// Object destructuring + parameter destructuring
// ==========================================

const { name, city } = customer;

console.log("Customer name:", name);
console.log("Customer city:", city);

function greet({ name }) {
  console.log(`Hello, ${name}! Welcome to Addis Market.`);
}

greet(customer);

// ==========================================
// QUESTION 4
// Spread syntax without mutation
// ==========================================

const updatedCustomer = {
  ...customer,
  city: "Bole",
  phone: "0911223344",
};

console.log("Original customer:", customer);
console.log("Updated customer:", updatedCustomer);
