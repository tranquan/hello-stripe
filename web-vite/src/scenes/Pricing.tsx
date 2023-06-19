import React from "react";

function PricingScene() {
  return (
    <form action="http://localhost:3030/api/stripe/create-checkout-session" method="POST">
      <input type="hidden" name="priceId" value="price_1NKgBIDpTWyHvlvjIGjpy9kD" />
      <button type="submit">Checkout</button>
    </form>
  );
}

export default PricingScene;
