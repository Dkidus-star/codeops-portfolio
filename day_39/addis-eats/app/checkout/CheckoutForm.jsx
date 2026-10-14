"use client";
import { useActionState } from "react";
import { placeOrder } from "../actions";

export default function CheckoutForm() {
  const [state, formAction, isPending] = useActionState(placeOrder, {});

  if (state?.success) {
    return <p className="text-green-600">Order placed successfully!</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-sm">
      <div>
        <label>Dish ID</label>
        <input
          name="dishId"
          defaultValue="doro-wat"
          className="border p-1 w-full"
        />
        {state?.fieldErrors?.dishId && (
          <span className="text-red-500">{state.fieldErrors.dishId[0]}</span>
        )}
      </div>

      <div>
        <label>Phone Number</label>
        <input name="phone" className="border p-1 w-full" />
        {state?.fieldErrors?.phone && (
          <span className="text-red-500">{state.fieldErrors.phone[0]}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
      >
        {isPending ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
}
