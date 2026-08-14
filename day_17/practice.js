// ============================================
// DAY 17 - JAVASCRIPT FUNCTIONS & CALLBACKS
// ============================================


// ============================================
// QUESTION 1: VAT FUNCTION
// ============================================

// Normal function with a default parameter
function vat(amount, rate = 0.15) {
    return amount + (amount * rate);
}

// Using the default rate of 15%
console.log("Q1 - VAT:", vat(1000));

// Using a custom rate of 20%
console.log("Q1 - VAT with 20%:", vat(1000, 0.20));


// Same logic using an arrow function
// The expression is returned automatically (implicit return)
const vatArrow = (amount, rate = 0.15) =>
    amount + (amount * rate);

console.log("Q1 - Arrow VAT:", vatArrow(1000));
console.log("Q1 - Arrow VAT with 20%:", vatArrow(1000, 0.20));


// ============================================
// QUESTION 2: CLOSURE - makeCounter
// ============================================

// makeCounter creates and returns a function.
// The count variable belongs only to this closure.
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

// Create a counter
const counter = makeCounter();

console.log("Q2 - Counter:", counter());
console.log("Q2 - Counter:", counter());
console.log("Q2 - Counter:", counter());
console.log("Q2 - Counter:", counter());

// count stays private because it is declared inside
// makeCounter(). Code outside the function cannot directly
// access count. Only the returned function can change it
// through the closure.


/*
Expected:

Q2 - Counter: 1
Q2 - Counter: 2
Q2 - Counter: 3
Q2 - Counter: 4
*/


// ============================================
// QUESTION 3: DISCOUNT FACTORY
// ============================================

// discountBy is a factory function.
// It receives a discount rate and returns a new function.
function discountBy(rate) {
    return function (price) {
        return price - (price * rate);
    };
}

// Create two different discount functions
const memberPrice = discountBy(0.10); // 10% discount
const salePrice = discountBy(0.30);   // 30% discount

// Apply both discounts to 1000 ETB
console.log("Q3 - Member price:", memberPrice(1000), "ETB");
console.log("Q3 - Sale price:", salePrice(1000), "ETB");


// ============================================
// QUESTION 4: HIGHER-ORDER FUNCTION
// ============================================

// applyToAll receives:
// 1. A list
// 2. A function
//
// It runs the function on every item in the list
// and returns the results.
function applyToAll(list, fn) {
    const results = [];

    for (const item of list) {
        results.push(fn(item));
    }

    return results;
}


// Array of prices
const prices = [100, 250, 500, 1000];

// Function that adds 15% VAT
const addVAT = (price) => price + (price * 0.15);

// Apply addVAT to every price
const pricesWithVAT = applyToAll(prices, addVAT);

console.log("Q4 - Original prices:", prices);
console.log("Q4 - Prices with VAT:", pricesWithVAT);


// ============================================
// QUESTION 5: forEach CALLBACK
// ============================================

// Array of Ethiopian cities
const cities = [
    "Addis Ababa",
    "Jimma",
    "Bahir Dar",
    "Hawassa",
    "Mekelle"
];

// forEach gives us:
// city  -> current city
// index -> position of the city
//
// index starts from 0, so we add 1 when printing.
cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});


// ============================================
// END OF DAY 17 PRACTICE
// ============================================