// Calculate the total amount for a specific transaction type
export const totalByType = (txns, type) =>
  txns
    .filter((transaction) => transaction.type === type)
    .reduce((sum, { amount }) => sum + amount, 0);

// Build formatted receipt strings
export const formatReceipts = (txns) =>
  txns.map(({ customer, amount }) => {
    return `Receipt: ${customer} - ${amount.toFixed(2)} ETB`;
  });

// Create an updated copy of a transaction without mutating the original
export const correctTransaction = (transaction, newAmount) => {
  return {
    ...transaction,
    amount: newAmount,
  };
};
