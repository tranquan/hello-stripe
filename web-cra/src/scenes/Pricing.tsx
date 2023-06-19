import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function PricingScene() {
  return (
    <form action="http://localhost:3030/api/stripe/create-checkout-session" method="POST">
      <input type="hidden" name="priceId" value="price_1NKgBIDpTWyHvlvjIGjpy9kD" />
      <button type="submit">Checkout</button>
    </form>
  );
}

export default PricingScene;
