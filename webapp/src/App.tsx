import React from "react";
import logo from "./logo.svg";
import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function App() {
  return (
    // <stripe-pricing-table
    //   pricing-table-id="prctbl_1NJyB6DpTWyHvlvjKqTimLqj"
    //   publishable-key="pk_test_NLj2El1Ie0mcO96Y8RXrYfdW00NNoyPSnj"
    //   customer-email="tranquan221b@gmail.com"
    // ></stripe-pricing-table>
    <form action="http://localhost:3030/api/stripe/create-checkout-session" method="POST">
      <input type="hidden" name="priceId" value="price_1NKgBIDpTWyHvlvjIGjpy9kD" />
      <button type="submit">Checkout</button>
    </form>
  );
}

export default App;
