"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../sections/navbar/Navbar";
import IglesiasCard from "../../components/IglesiasCard/IglesiasCard";

async function fetchChurch() {
  const res = await fetch("https://catfact.ninja/fact?max_length=140");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function page() {
  const [fact, setFact] = useState(null);

  async function clickHandler() {
    console.log("hey");
    const data = await fetchChurch();
    console.log(data.fact);
    setFact(data.fact)
  }
  // Fetch the list of churches from the server

  return (
    <div>
      <button
        onClick={clickHandler}
        className="bg-red-800 p-8 rounded-lg flex justify-center m-auto align-center"
      >
        Hello
      </button>
      <p>{fact}</p>
    </div>
  );
}
