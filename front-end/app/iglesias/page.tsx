import React from "react";
import Link from "next/link";
import Navbar2 from "../../sections/navbar/Navbar2";
import Footer from "../../sections/footer/Footer";
import IglesiasMapList from "../../sections/body/iglesiasMap/iglesiasListLeft/IglesiasMapListLeft";
import IglesiasMapRight from "../../sections/body/iglesiasMap/iglesiasMapRight/IglesiasMapRight";
import IglesiasChurchSection from "../../sections/body/iglesiaschurchsection/IglesiasChurchSection";

console.log(process.env.NEXT_PUBLIC_SERVER_URL);

async function fetchChurches() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-churches`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const data = await res.json();
    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  // Fetch the list of churches from the server
  const churches = await fetchChurches();

  return (
    <div className="contain">
      <Navbar2 />

      {churches ? (
        <IglesiasChurchSection churches={churches} />
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
}
