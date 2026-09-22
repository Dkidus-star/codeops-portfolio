import { Link } from "react-router-dom";

function Receipt() {
  return (
    <section>
      <h2>Order Receipt</h2>

      <p>Your order has been received.</p>

      <Link to="/menu">Back to Menu</Link>
    </section>
  );
}

export default Receipt;
