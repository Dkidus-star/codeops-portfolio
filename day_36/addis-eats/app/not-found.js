import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>404 - Page Not Found</h2>
      <p>We couldn't find the page or dish you were looking for.</p>
      <Link href="/">Return to Home</Link>
    </div>
  );
}
