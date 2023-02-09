"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import IglesiasCard from "../../components/IglesiasCard/IglesiasCard";

export default function page() {
  const [churchesInfo, setChurchesInfo] = useState([])
  // Fetch the list of churches from the server
  useEffect(() => {
    async function fetchChurch() {
      const res = await fetch("http://localhost:8000/iglesias/pawtucket");
      const data = await res.json();
      setChurchesInfo(data)
    }

    fetchChurch();
  }, []);

  return (
    <div className="bg-red-800">
      <p>Some</p>
      {churchesInfo.map((church) => (
        <IglesiasCard
          name={church.name}
          location={church.location}
          description={church.description}
        />
      ))}
    </div>
  );
}
