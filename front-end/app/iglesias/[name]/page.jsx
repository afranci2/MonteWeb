import React from "react";
import Navbar2 from "../../../sections/navbar/Navbar2";
import Banner2 from "../../../components/banner/Banner2";
import BodySectionImageLeft from "../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import Lideres from "../../../sections/lideres/Lideres";
import IglesiaTab from "../../../sections/body/homeTab/IglesiaTab.tsx/IglesiaTab";

import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../../../sections/footer/Footer";
import ChurchHeader from "../../../sections/header/ChurchHeader";

async function fetchChurches(id) {
  try {
    const res = await fetch(`http://localhost:8000/get-church/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await res.json();
    console.log(data);

    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

async function fetchChurchesImages(id) {
  try {
    const res = await fetch(`http:localhost:8000/get-church-images/${id}`, {
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

async function fetchChurchesServices(id) {
  try {
    const res = await fetch(`http:localhost:8000/get-church-services/${id}`, {
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

async function fetchChurchesSocials(id) {
  try {
    const res = await fetch(`http:localhost:8000/get-church-socials/${id}`, {
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

export default async function page({ params }) {
  const res = await fetchChurches(1);
  const res2 = await fetchChurchesImages(1);
  const res3 = await fetchChurchesServices(1);
  const res4 = await fetchChurchesSocials(1);

  const mainImage = res2?.find((image) => image.is_main === 1);

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-16"></div>

      <div className="contain">
        <Banner2 position={"absolute"}>
          <div className="content align-center items-center h-16 justify-center flex gap-2 text-xs">
            <div className=" h-full  my-auto flex pt-6">
              <FaMapMarkerAlt size={12} />
            </div>
            <div>
              <p className="">{res ? res.location : "Loading"}</p>
            </div>
          </div>
        </Banner2>
        {res ? (
          <ChurchHeader
            image={mainImage}
            headerText={res.name}
            classChangeText={undefined}
            contentPosition={undefined}
            subheadingText={res.description}
            direction={res.address}
            mapLink={"https://facebook.com"}
          />
        ) : (
          <div className="h-full w-full text-center flex justify-center m-auto items-center">
            Loading...
          </div>
        )}
      </div>
      {res ? (
        <div className="bg-[#f7f7f7]">
          <IglesiaTab social={res4} services={res3} />{" "}
        </div>
      ) : null}
      {res ? (
        <div>
          <BodySectionImageLeft
            headingText="Nosotros"
            buttonText="Leer Mas"
            subheadingText={res.description}
            image={mainImage}
            buttonLink={"/"}
          />
          <Lideres />
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
