import { NextResponse } from "next/server";
import { dishes } from "@/lib/data";

export async function GET(request, { params }) {
  const { id } = await params;
  const dish = dishes.find((d) => d.id === id);

  if (!dish) {
    return NextResponse.json(
      { error: "Dish not found", code: "NOT_FOUND" },
      { status: 404 },
    );
  }

  return NextResponse.json(dish);
}
