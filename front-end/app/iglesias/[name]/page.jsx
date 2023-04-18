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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church/${id}`,
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

async function fetchChurchesImages(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church-images/${id}`,
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

async function fetchChurchesServices(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church-services/${id}`,
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

async function fetchChurchesSocials(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church-socials/${id}`,
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

async function fetchChurchesPastors(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church-pastors/${id}`,
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

export default async function page({ params }) {
  const res = await fetchChurches(parseInt(params.name));
  const res2 = await fetchChurchesImages(parseInt(params.name));
  const res3 = await fetchChurchesServices(parseInt(params.name));
  const res4 = await fetchChurchesSocials(parseInt(params.name));
  const res5 = await fetchChurchesPastors(parseInt(params.name));

  const mainImage = res2?.find((image) => image.is_main === 1).source;

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-16"></div>

      <div className="">
        <div>
          <Banner2 color="bg-white" position={"absolute"}>
            <div className="content align-center items-center h-16 justify-center flex gap-2 text-xs">
              <div className=" h-full  my-auto flex pt-6">
                <FaMapMarkerAlt size={12} />
              </div>
              <div>
                <p className="">{res ? res[0].location : "Loading"}</p>
              </div>
            </div>
          </Banner2>
        </div>
        {res ? (
          <ChurchHeader
            image={mainImage}
            headerText={res[0].name}
            classChangeText={undefined}
            contentPosition={undefined}
            subheadingText={res[0].description}
            direction={res[0].address}
            mapLink={res[0].map_link}
          />
        ) : (
          <div className="h-full w-full text-center flex justify-center m-auto items-center">
            Loading...
          </div>
        )}
      </div>
      {res ? (
        <div className="bg-[#f7f7f7]">
          <IglesiaTab
            socials={res4}
            services={res3}
            images={res2}
            mainImage={mainImage}
          />{" "}
        </div>
      ) : null}
      {res5 ? (
        <div>
          <BodySectionImageLeft
            headingText="Nosotros"
            buttonText="Leer Mas"
            subheadingText={res[0].description}
            image={res2[0].source}
            buttonLink={"/"}
          />
          <Lideres pastors={res5} />
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
