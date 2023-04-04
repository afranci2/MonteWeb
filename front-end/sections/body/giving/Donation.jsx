"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_1AXziSFrubdLvwUJtpued2HQ00Jh0EcJoo", {
  locale: "es",
});

function Donation() {
  return (
    <div className="w-full m-auto max-w-[400px] md:w-1/2">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <p className="text-sm m-auto flex justify-center">
        **No almacenamos información financiera.*
      </p>{" "}
    </div>
  );
}

export default Donation;
