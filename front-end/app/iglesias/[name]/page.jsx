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
    const res = await fetch(`http://localhost:8000/iglesias2/${id}`, {
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

export default async function page({ params }) {
  const res = await fetchChurches(params.name);
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
            image={res.images.main}
            headerText={res.name}
            classChangeText={undefined}
            contentPosition={undefined}
            subheadingText={res.description}
            direction={res.address}
            mapLink={res.mapLink}
          />
        ) : (
          <div className="h-full w-full text-center flex justify-center m-auto items-center">
            Loading...
          </div>
        )}
      </div>
      {res ? (
        <div className="bg-[#f7f7f7]">
          <IglesiaTab res={res} />{" "}
        </div>
      ) : null}
      {res ? (
        <div>
          <BodySectionImageLeft
            headingText="Nosotros"
            buttonText="Leer Mas"
            subheadingText={res.description}
            image={res.images.main}
            buttonLink={"/"}
          />
          <Lideres />
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
