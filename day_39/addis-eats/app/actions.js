"use server";
import { orderSchema } from "@/lib/schema";
import { mockOrders } from "@/lib/data";
import { revalidatePath } from "next/cache";

export async function placeOrder(prevState, formData) {
  const data = {
    phone: formData.get("phone"),
    dishId: formData.get("dishId"),
  };

  const validation = orderSchema.safeParse(data);

  if (!validation.success) {
    return { fieldErrors: validation.error.flatten().fieldErrors };
  }

  // Simulate writing to DB
  mockOrders.push({ id: Date.now().toString(), ...validation.data });

  // Revalidate cache
  revalidatePath("/orders");
  revalidatePath("/checkout");

  return { success: true };
}

export async function cancelOrder(orderId, userId) {
  // Verifying both the session and the ownership of the record
  const mockSessionUserId = "user_123";

  if (!mockSessionUserId || mockSessionUserId !== userId) {
    throw new Error("Unauthorized: You do not own this record.");
  }

  // Simulate deletion
  return { success: true, message: "Order cancelled" };
}
