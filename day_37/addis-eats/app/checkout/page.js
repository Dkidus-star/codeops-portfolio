import { cookies } from "next/headers";

export default async function Checkout() {
  // In modern Next.js, cookies() is a Promise that must be awaited
  const cookieStore = await cookies();

  return <div>Checkout Screen (Forced Dynamic)</div>;
}
