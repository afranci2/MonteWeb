import React from "react";
import Image from "next/image";
import { TertiaryButton } from "../../../components";
const Logo =
  "https://assets-global.website-files.com/5f6a31379c9e2712518b8d6c/61fbe41d8e639d18d7c516b7_Logomark.svg";
const Appstorespanish =
  "https://monte-assets.s3.amazonaws.com/img/Disponible-en-app-store.png";
const Googlestorespanish =
  "https://monte-assets.s3.amazonaws.com/img/Google_Play_Store_badge_FR.svg.png";
const Giving = () => {
  return (
    <div className=" w-full py-12 mt-8 flex flex-col ">
      <div className="flex flex-col mx-auto justify-center align-center">
        <p className=" text-center font-regular">Dar Usando</p>

        <Image
          className="mx-auto"
          width={200}
          height={1000}
          alt="ewrf"
          src={Logo}
        />
        <p className="p-8 pb-12 text-center font-regular text-xs">
          Nota: Tithe.ly se lleva un porcentaje de cada donación
        </p>
        <div className="flex m-auto justify-center w-full pb-8">
          <TertiaryButton
            text={"Dar Ahora"}
            buttonColor={"bg-yellow-400"}
            buttonLink={"https://www.efewf.com"}
          />
        </div>
        <div className="flex gap-4 p-12">
          <a href="https://www.facebook.com">
            <Image
              className="flex m-auto "
              width={120}
              height={100}
              alt="ewrf"
              src={Appstorespanish}
            />
          </a>
          <a href="https://www.facebook.com">
            <Image
              className=" m-auto flex justify-between"
              width={140}
              height={70}
              alt="ewrf"
              src={Googlestorespanish}
            />
          </a>
        </div>
        <p className="font-centerm m-auto">
          Busca: Iglesia Pentecostal Monte Sinai
        </p>
      </div>
    </div>
  );
};

export default Giving;
