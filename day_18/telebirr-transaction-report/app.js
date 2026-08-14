import { transactions } from "./transactions.js";

import { totalByType, formatReceipts, correctTransaction } from "./report.js";

// Calculate credit and debit totals
const totalCredits = totalByType(transactions, "credit");
const totalDebits = totalByType(transactions, "debit");

// Create formatted receipt strings
const receipts = formatReceipts(transactions);

// Correct one transaction without changing the original
const originalTransaction = transactions[0];

const correctedTransaction = correctTransaction(originalTransaction, 300);

// Print report
console.log("===== TELEBIRR TRANSACTION REPORT =====");

console.log(`Total Credits: ${totalCredits.toFixed(2)} ETB`);
console.log(`Total Debits: ${totalDebits.toFixed(2)} ETB`);

console.log("--------------------------------------");

console.log("RECEIPTS:");

receipts.forEach((receipt) => {
  console.log(receipt);
});

console.log("--------------------------------------");

console.log("TRANSACTION CORRECTION:");

console.log("Original:", originalTransaction);

console.log("Corrected:", correctedTransaction);

console.log("--------------------------------------");

console.log("Original transaction was not mutated:", originalTransaction);
