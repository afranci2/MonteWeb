import React from "react";
import Header from "../../sections/header/Header";
import Navbar2 from "../../sections/navbar/Navbar2";
import Events from "../../sections/events/Events";
const Baptism =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg";
import Michael2 from "./red2.jpg";

async function fetchEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-events`,
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

async function page() {
  const res = await fetchEvents();

  return (
    <div>
      <Navbar2 />
      <Header
        children={undefined}
        image={Baptism}
        headerText={"Eventos"}
        classChangeText={undefined}
        buttonColor={undefined}
        buttonLink={undefined}
        buttonText={undefined}
        contentPosition={"center"}
        video={undefined}
        subheadingText={"Descubre qué eventos están programados próximamente."}
        containerheight={undefined} show={undefined}      />
      <div className="md:w-3/4">
        <Events res={res} />
      </div>
    </div>
  );
}

export default page;
