"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { use, useState } from "react";

function CheckoutForm() {
  // collect data from the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };


  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  // main function
  const createSubscription = async () => {
    setLoading(true);
    try {
      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });
      console.log(paymentMethod);
      // call the backend to create subscription
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: paymentMethod?.paymentMethod?.id,
            name,
            email,
            amount,
          }),
        }
      ).then((res) => res.json());

      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );

      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
        console.log(confirmPayment.error.message);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="grid gap-4 m-auto py-12">
      <div className="amount py-8">
        <label className="pl-2" htmlFor="donation">
          Cantidad:
        </label>
        <input
          className="p-4 flex m-auto w-full h-16 rounded-lg placeholder:mx-auto"
          onChange={(e) => setAmount(e.target.value)}
          id=" donation"
          type="number"
          step="0.01"
          min="0"
          placeholder="100.42"
        />
      </div>
      <div className="name">
        <label className="pl-2" htmlFor="name">
          Nombre:
        </label>
        <input
          className="p-4 flex m-auto w-full h-10 rounded-lg placeholder:mx-auto"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="details">
        <label className="pl-2" htmlFor="email">
          Correo Electronico:
        </label>
        <input
          className="p-4 flex m-auto w-full h-10 rounded-lg placeholder:mx-auto"
          onChange={(e) => setEmail(e.target.value)}
          id=" email"
          type="text"
        />
      </div>

      {/*
      <div className="payment=method flex gap-4 py-8">
        <label className="pl-2" htmlFor="method">
          Payment Method:
        </label>
        <label>
          <input
            type="radio"
            value="Bank"
            checked={method === "Bank"}
            onChange={onOptionChange}
          />
          <p className="px-2 inline-block">Bank</p>{" "}
        </label>
        <label>
          <input
            type="radio"
            value="Card"
            checked={method === "Card"}
            onChange={onOptionChange}
          />
          <p className="px-2 inline-block">Card</p>{" "}
        </label>
      </div>
      <label className="pl-2" htmlFor="card">
        Card Details:
      </label>
  */}
      <CardElement
        id="card-element"
        options={cardStyle}
        className="p-4 bg-white rounded-lg"
      />
      <div className="flex m-auto justify-center w-full pt-8">
        <button
          onClick={createSubscription}
          disabled={!stripe}
          className="font-bold text-sm p-4 px-10 rounded-lg bg-yellow-400"
        >
          {loading
            ? "    ...   "
            : `${amount ? `Dar $${amount}` : `Dar Ahora`}`}
        </button>
      </div>
      {success ? (
        <p className="flex m-auto justify-center">
          {" "}
          Success! Check your email for the invoice.{" "}
        </p>
      ) : null}
    </div>
  );
}

export default CheckoutForm;
