const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51GPyDQDpTWyHvlvj6BrDld72vf1EX9lEuYl6JaDldufN1TZI6TrR4eHbFdZHRK4zaDruAojj6287bwQ0yMjF1TnT00SBURRu43"
);

// The price ID passed from the client
//   const {priceId} = req.body;
// const priceId = "{{PRICE_ID}}";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/stripe/create-checkout-session", async (req, res) => {
  const priceId = req.body["priceId"];
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cancelled",
  });

  res.redirect(303, session.url);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
