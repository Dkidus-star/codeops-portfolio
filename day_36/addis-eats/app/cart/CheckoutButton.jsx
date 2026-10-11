"use client";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/checkout")}
      className="p-2 bg-blue-600 text-white rounded"
    >
      Proceed to Checkout
    </button>
  );
}
