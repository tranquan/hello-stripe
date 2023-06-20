import React from "react";

function PricingScene() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Stripe checkout</h1>
      <br />
      <div className="grid grid-cols-3 gap-4">
        <div className="border">
          <h2>Free trial</h2>
          <br />
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
            href="https://storage.googleapis.com/astrid-production/static/astrid-assistant-app/latest-installer/Astrid%20Assistant.pkg"
          >
            Download
          </a>
        </div>
        {/* <div className="border">
          <h2>Single user</h2>
          <br />
          <form action="http://localhost:3030/api/stripe/create-checkout-session" method="POST">
            <input type="hidden" name="priceId" value="price_1NKgBIDpTWyHvlvjIGjpy9kD" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2" type="submit">
              Checkout
            </button>
          </form>
        </div> */}
        <div className="border">
          <h2>Single user</h2>
          <br />
          <form action="http://localhost:3030/api/subscription/create-checkout-session" method="POST">
            <input type="hidden" name="priceId" value="price_1NKgBIDpTWyHvlvjIGjpy9kD" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2" type="submit">
              Checkout
            </button>
          </form>
        </div>
        <div className="border">
          <h2 className="text-xl">Enterprise</h2>
          <br />
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
            href="mailto:support@withastrid.com"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingScene;
