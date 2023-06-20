import { Body, Controller, Get, Post, Request, Res } from '@nestjs/common';
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51GPyDQDpTWyHvlvj6BrDld72vf1EX9lEuYl6JaDldufN1TZI6TrR4eHbFdZHRK4zaDruAojj6287bwQ0yMjF1TnT00SBURRu43',
  {
    apiVersion: '2022-11-15',
  },
);

export abstract class CreateSubscriptionRequestDto {
  public abstract priceId: string;
}

@Controller('api/subscription')
export class SubscriptionController {
  @Get('/')
  list(): string {
    return 'list subscription';
  }

  @Post('/create-checkout-session')
  async createSubscription(
    @Request() request: Request,
    @Body() body: CreateSubscriptionRequestDto,
    @Res() res,
  ) {
    const priceId = body.priceId;
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
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
      success_url:
        'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancelled',
    });

    res.status(303).redirect(session.url);
  }

  // @Post('/create-checkout-session')
  // createTrial(
  //   @Request() requestContext: Request,
  //   @Body() request: CreateSubscriptionRequestDto,
  // ) {
  //   // TODO:
  // }
}
