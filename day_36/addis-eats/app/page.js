import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Addis Eats</h1>
      <Link href="/menu">Browse our Menu</Link>
    </main>
  );
}
