import React from "react";
import StripeCheckoutButton from "react-stripe-checkout";

export default function StripeCheckout({ price }) {
  const publishableKey =
    "pk_test_51HOs9cKX8WRW8f8bt8d4J45v89HuWteDQcavhZcIkTQHTUakaaqH8T8t1AijEKq9PrQTYvaazifgQ0se28qIHB9d00VTmTEkuP";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckoutButton
      label="Pay Now"
      name="Auto Bot"
      billingAddress
      shippingAddress
      image="https://cdn.worldvectorlogo.com/logos/transformers-autobot.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
