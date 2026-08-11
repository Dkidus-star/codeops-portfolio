// ==========================================
// TeleBirr / CBE Birr Tip & Split Calculator
// ==========================================

// 1. Read the bill and party size
const bill = Number(500);
const partySize = Number(4);

// 2. Determine the tip rate
//    Bill over 300 ETB  -> 10%
//    Bill 300 ETB or less -> 5%

let tipRate;

if (bill > 300) {
  tipRate = 0.1;
} else {
  tipRate = 0.05;
}

// 3. Calculate the tip amount
const tipAmount = bill * tipRate;

// 4. Calculate the total
const total = bill + tipAmount;

// 5. Calculate the amount per person
const perPerson = total / partySize;

// 6. Print the results
console.log("TeleBirr Tip & Split Calculator");
console.log("--------------------------------");
console.log(`Bill: ${bill.toFixed(2)} ETB`);
console.log(`Party size: ${partySize}`);
console.log(`Tip rate: ${(tipRate * 100).toFixed(0)}%`);
console.log(`Tip amount: ${tipAmount.toFixed(2)} ETB`);
console.log(`Total: ${total.toFixed(2)} ETB`);
console.log(`Amount per person: ${perPerson.toFixed(2)} ETB`);
console.log("Payment method: TeleBirr / CBE Birr");
console.log("Service fee: May apply.");
