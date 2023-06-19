/**
 * Embed pricing table into website
 */
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function PricingTableScene() {
  return (
    <stripe-pricing-table
      pricing-table-id="prctbl_1NJyB6DpTWyHvlvjKqTimLqj"
      publishable-key="pk_test_NLj2El1Ie0mcO96Y8RXrYfdW00NNoyPSnj"
      customer-email="tranquan221b@gmail.com"
    ></stripe-pricing-table>
  );
}

export default PricingTableScene;
