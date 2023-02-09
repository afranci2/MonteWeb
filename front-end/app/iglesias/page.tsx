"use on client"

import React from "react";
import Link from "next/link";
import IglesiasCard from "../../components/IglesiasCard/IglesiasCard";

export default async function page() {
  // Fetch the list of churches from the server
  const res = await fetch(`http://localhost:8000/iglesias/pawtucket`);
  if (res.status >= 200 && res.status <= 299) {
    const churchesInfo = await res.json();
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
  } else {
    // Handle errors
    console.log(res.status, res.statusText);
  }

}
