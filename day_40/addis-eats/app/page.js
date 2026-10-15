import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1>Welcome to Addis Eats</h1>
      <Link href="/menu">Go to Menu</Link>
    </main>
  );
}
