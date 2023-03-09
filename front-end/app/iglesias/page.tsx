"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../sections/navbar/Navbar";
import Footer from "../../sections/navbar/Navbar";
import IglesiasMapList from "../../sections/body/iglesiasMap/iglesiasListLeft/IglesiasMapListLeft";
import IglesiasMapRight from "../../sections/body/iglesiasMap/iglesiasMapRight/IglesiasMapRight";

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
    setFact(data.fact);
  }
  // Fetch the list of churches from the server

  return (
    <div>
      <Navbar />
      <IglesiasMapList />
      <IglesiasMapRight />
      <Footer />
    </div>
  );
}
