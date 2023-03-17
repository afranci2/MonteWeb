import React from "react";
import Header from "../../sections/header/Header";
import Navbar from "../../sections/navbar/Navbar";
import Events from '../../sections/events/Events'
const Baptism = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg"
import Tab from '../../components/tab/Tab'

async function fetchEvents() {
  try {
    const res = await fetch(`http://localhost:8000/eventos`, {
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


export default async function page ()  {
  const res = await fetchEvents();
  return (
    <div>
      <Navbar />
      <Header
        children={undefined}
        image={Baptism}
        headerText={"Eventos"}
        classChangeText={undefined}
        buttonColor={undefined}
        buttonLink={undefined}
        buttonText={undefined}
        contentPosition={undefined}
        video={undefined}
        subheadingText={"Excepteur sint occaeuiecat cupidatat."}
        containerheight={undefined}
      />
      <Events res={res}/>
    </div>
  );
};

