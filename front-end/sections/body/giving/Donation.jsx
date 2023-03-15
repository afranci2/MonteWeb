"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_1AXziSFrubdLvwUJtpued2HQ00Jh0EcJoo");

function Donation() {
  return (
    <div className="w-1/2 m-auto max-w-[400px]">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </div>
  );
}

export default Donation;
