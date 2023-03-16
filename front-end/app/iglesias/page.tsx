import React from "react";
import Link from "next/link";
import Navbar2 from "../../sections/navbar/Navbar2";
import Footer from "../../sections/footer/Footer";
import IglesiasMapList from "../../sections/body/iglesiasMap/iglesiasListLeft/IglesiasMapListLeft";
import IglesiasMapRight from "../../sections/body/iglesiasMap/iglesiasMapRight/IglesiasMapRight";

console.log(process.env.NEXT_PUBLIC_SERVER_URL);

async function fetchChurches() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/iglesias`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await res.json();
    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  // Fetch the list of churches from the server
  const res = await fetchChurches();
  return (
    <div>
      <Navbar2 />

      <div className="hidden md:flex md:min-w-[380px] md:w-1/4 overflow-hidden">
        <IglesiasMapList churches={res} />
      </div>
      <IglesiasMapRight churches={res} />
      <div className="md:hidden ">
        <IglesiasMapList churches={res} />
      </div>

      <Footer />
    </div>
  );
}
