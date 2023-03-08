"use client";
import React, { useState } from "react";
import { TertiaryButton } from "../../../components";

const Donation = () => {
  const [info, setInfo] = useState();

  function changeHandler(e) {
    setInfo(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log("submitted", info);
    const response = await fetch("http://localhost:8000/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: info,
      }),
    });
    console.log(response)
    const data =await response.json();
    console.log(data.message)
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
      <div className="flex m-auto justify-center w-full pb-8">
        <button
          onClick={submitHandler}
          className="p-4 px-10 rounded-lg bg-yellow-400"
        >
          {info ? `Dar $${info}` : `Dar Ahora`}
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
    const serverUrl = process.env.SERVER_URL || "http://localhost:8000";
    return {
      props: { serverUrl }
    }
  }

export default Donation;
