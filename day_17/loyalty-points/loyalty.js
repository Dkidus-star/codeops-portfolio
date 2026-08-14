// ============================================
// TeleBirr Shop - Loyalty Points Module
// ============================================

// Default earn rule:
// Customer earns 1 point for every 10 ETB spent.
const defaultEarnRule = (etb) => Math.floor(etb / 10);

// Factory function
function createLoyalty(earnRule = defaultEarnRule) {
  // Private state
  // This variable cannot be accessed directly from outside.
  let points = 0;

  // Return only the operations we want to expose
  return {
    // Add points based on the selected earn rule
    earn(etb) {
      points += earnRule(etb);
    },

    // Redeem points
    // Math.max prevents the balance from going below zero.
    redeem(amount) {
      points = Math.max(0, points - amount);
    },

    // Getter for the current balance
    balance() {
      return points;
    },
  };
}

// Export the factory so demo.js can use it
module.exports = { createLoyalty };
