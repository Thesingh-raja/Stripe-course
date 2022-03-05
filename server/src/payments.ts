import { stripe } from './';


export async function createPaymentIntent(amount: number) {

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'inr',
      });

      return paymentIntent;
}


export async function createPaymentIntentAndCharge(amount: number, customer: string, payment_method: string) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    customer,
    payment_method,
    currency: 'inr',
    off_session: true,
    confirm: true,
  });

  return paymentIntent;

}


