import Link from "next/link";

export default function Cart() {
  return (
    <main>
      <h1>Your Cart</h1>
      <Link href="/checkout">Proceed to Checkout</Link>
    </main>
  );
}
