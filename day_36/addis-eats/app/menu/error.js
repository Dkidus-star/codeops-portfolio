"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ color: "red", border: "1px solid red", padding: "1rem" }}>
      <h2>Something went wrong in the Menu!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
