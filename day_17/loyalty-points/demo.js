// ============================================
// TeleBirr Shop - Loyalty Points Demo
// ============================================

const { createLoyalty } = require("./loyalty");

// ============================================
// DEMO 1: Normal Loyalty Card
// ============================================

console.log("===== NORMAL LOYALTY CARD =====");

const card = createLoyalty();

console.log("Starting balance:", card.balance());

// Spend 250 ETB
// 250 / 10 = 25 points
card.earn(250);

console.log("After spending 250 ETB:", card.balance(), "points");

// Redeem 10 points
card.redeem(10);

console.log("After redeeming 10 points:", card.balance(), "points");

// ============================================
// DEMO 2: Prevent Balance Below Zero
// ============================================

console.log("\n===== REDEEM TOO MANY POINTS =====");

card.redeem(100);

console.log("After trying to redeem 100 points:", card.balance(), "points");

// ============================================
// DEMO 3: Holiday Earn Rule
// ============================================

console.log("\n===== HOLIDAY EARN RULE =====");

// Normal rule:
// 1 point per 10 ETB
//
// Holiday rule:
// 2 points per 10 ETB
const holidayRule = (etb) => Math.floor(etb / 10) * 2;

const holidayCard = createLoyalty(holidayRule);

console.log("Holiday card starting balance:", holidayCard.balance());

// Spend 250 ETB
// Normal: 25 points
// Holiday: 50 points
holidayCard.earn(250);

console.log(
  "After spending 250 ETB during holiday:",
  holidayCard.balance(),
  "points",
);

// ============================================
// DEMO 4: Two Cards Have Independent Balances
// ============================================

console.log("\n===== INDEPENDENT CARDS =====");

const customer1 = createLoyalty();
const customer2 = createLoyalty();

customer1.earn(500); // 50 points
customer2.earn(100); // 10 points

console.log("Customer 1:", customer1.balance(), "points");
console.log("Customer 2:", customer2.balance(), "points");

// ============================================
// DEMO 5: Show That Points Are Not Directly
// Accessible
// ============================================

console.log("\n===== PRIVATE STATE =====");

console.log("card.points:", card.points);

console.log("The balance can only be accessed through card.balance().");
