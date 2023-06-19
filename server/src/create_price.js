const stripe = require("stripe")(
  "sk_test_51M6vsiGGpKB6icgt89WzTRt5qXrdgEgUxdrxHbRW7JttgUY9QNyVub0l7LLS32vpCgrRbHC41J0ow6jIkC7DdlbT00MiJdxsQR"
);

stripe.products
  .create({
    name: "Starter Subscription",
    description: "$12/Month subscription",
  })
  .then((product) => {
    stripe.prices
      .create({
        unit_amount: 1200,
        currency: "usd",
        recurring: {
          interval: "month",
        },
        product: product.id,
      })
      .then((price) => {
        console.log("Success! Here is your starter subscription product id: " + product.id);
        console.log("Success! Here is your premium subscription price id: " + price.id);
      });
  });

/**
 * basic: prod_O6tv6eDAUu6bzx / price: price_1NKgBIDpTWyHvlvjIGjpy9kD
 * premium: prod_O6tvml3IZXLiLL / price: price_1NKgBgDpTWyHvlvjcMIrS4Vv
 */
