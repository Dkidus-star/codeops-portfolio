// Ethiopian VAT = 15%
const VAT_RATE = 0.15;

// Add VAT to a given price
export function withVat(price) {
  return price * (1 + VAT_RATE);
}

// Format an amount as Ethiopian Birr
export function format(amount) {
  return `${amount.toFixed(2)} ETB`;
}

// Calculate the total of an array of items
export function total(items) {
  return items.reduce((sum, { price, qty }) => {
    return sum + price * qty;
  }, 0);
}
