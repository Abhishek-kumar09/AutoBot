import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

export default function StripeCheckout({ price }) {

  const publishableKey = 'pk_test_51HOs9cKX8WRW8f8bt8d4J45v89HuWteDQcavhZcIkTQHTUakaaqH8T8t1AijEKq9PrQTYvaazifgQ0se28qIHB9d00VTmTEkuP';

  const stripePromise = loadStripe(publishableKey)

  const handleStripeCheckout = () => {

    stripePromise.then(stripe => {
      stripe.redirectToCheckout({
        lineItems: [
          // Replace with the ID of your price
          { price: 'price_1ILvxFKX8WRW8f8bojsUZV5L', quantity: 1 }
        ],
        mode: 'payment',
        successUrl: `https://${window.location.hostname}/success`,
        cancelUrl: `https://${window.location.hostname}/canceled`
      })
        .then(function (result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    });
  }

  return (
    <button className="block round accent" onClick={handleStripeCheckout}>
      Premium
    </button>
  )
}