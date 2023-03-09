"use client";

import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_1AXziSFrubdLvwUJtpued2HQ00Jh0EcJoo");

function Donation() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  const [serverRes, setServerRes] = useState();


  async function submitData() {
    console.log("submitted", info);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod?.paymentMethod?.id,
          nameof,
          priceId,
          amount,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      setServerRes("Unable to process request. Try again later.");
    }
  }

  function changeHandler(e) {
    setInfo(e.target.value);
  }

  async function submitHandler() {
    setLoading(true);
    const data = await submitData();
    setServerRes(data.response);
    console.log(serverRes);
    setLoading(false);
  }

  return (
    <div>
      {" "}
      <form className=" m-auto p-12 flex flex-col gap-4 ">
        <label className="m-auto" htmlFor="donation">
          Amount:
        </label>
        <input
          className="p-4 flex m-auto w-full h-10 rounded-lg placeholder:px-14"
          onChange={changeHandler}
          id=" donation"
          type="number"
          step="0.01"
          min="0"
          placeholder="100.42"
        />
      </form>
      <form>
        <CardElement />
      </form>{" "}
      <div className="flex m-auto justify-center w-full pb-8">
        <button
          onClick={submitHandler}
          className="p-4 px-10 rounded-lg bg-yellow-400"
        >
          {loading ? "    ...   " : `${info ? `Dar $${info}` : `Dar Ahora`}`}
        </button>
      </div>
      <p className="flex m-auto justify-center"> {serverRes}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Donation;
