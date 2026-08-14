// Ethiopian VAT rate
export const VAT = 0.15;

// Add VAT to an amount
export function addVat(amount) {
  return amount * (1 + VAT);
}
