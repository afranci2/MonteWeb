import React from "react";
import Image from "next/image";
import { TertiaryButton } from "../../../components";
import Donation from "../../../sections/body/giving/Donation";
const Logo =
  "https://assets-global.website-files.com/5f6a31379c9e2712518b8d6c/61fbe41d8e639d18d7c516b7_Logomark.svg";
const Appstorespanish =
  "https://monte-assets.s3.amazonaws.com/img/Disponible-en-app-store.png";
const Googlestorespanish =
  "https://monte-assets.s3.amazonaws.com/img/Google_Play_Store_badge_FR.svg.png";

const Giving = () => {
  return (
    <div className=" w-full py-12  flex flex-col ">
      <div className="flex  flex-col mx-auto justify-center align-center">
        <p className=" text-center font-regular">Dar </p>

        <p className=" text-center text-3xl font-semibold">
          En Linea{" "}
        </p>
        <p className=" text-center text-xs w-10/12 m-auto pt-4 font-regular">Secure online giving. Enter an amount and provide billing information. </p>

      </div>
      <Donation />
    </div>
  );
};

export default Giving;
