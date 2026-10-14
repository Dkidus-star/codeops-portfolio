import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/schema";
import { mockOrders } from "@/lib/data";

export async function POST(request) {
  const body = await request.json();
  const validation = orderSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { fieldErrors: validation.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const newOrder = { id: Date.now().toString(), ...validation.data };
  mockOrders.push(newOrder);

  return NextResponse.json(newOrder, { status: 201 });
}
