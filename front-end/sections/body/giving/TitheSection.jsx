"use client";
import React, { useState } from "react";
import TithelyGiving from "./Giving";
import StripeGiving from "./Stripegiving";
const Giving = "https://monte-assets.s3.amazonaws.com/icon/give-money.png";
import Image from "next/image";
import { MainButton } from "../../../components";
const Mailbox = "https://monte-assets.s3.amazonaws.com/icon/icon-mailbox.png";
const Logo =
  "https://assets-global.website-files.com/5f6a31379c9e2712518b8d6c/61fbe41d8e639d18d7c516b7_Logomark.svg";
import logo3 from "./tithe.png";

import logo2 from "./tithe2.jpg";
import "./tithesection.css";

const TitheSection = () => {
  function clickHandler(e) {
    setOption(e.currentTarget.getAttribute("value"));
  }

  const [option, setOption] = useState("Tithely");

  return (
    <div>
      <div className="hidden md:flex">
        <div className="m-auto min-h-screen w-screen flex justify-center">
          <div className="w-full grid tithingsection ">
            <section className="w-full">
              <div className="p-8 py-16">
                <div className="flex  flex-col">
                  <p className="p-4 py-8 font-semibold">Options to choose from</p>

                  <a
                    value="Tithely"
                    onClick={clickHandler}
                    className={` ${
                      option == "Tithely" ? "bg-gray-100" : ""
                    } p-8 border-b-2  hover:font-bold `}
                  >
                    <div className="flex gap-2">
                      {option == "Tithely" ? (
                        <Image src={logo3} width={30} height={30} />
                      ) : (
                        <Image src={logo2} width={25} height={25} />
                      )}

                      <p className="my-auto">Tithe.ly</p>
                    </div>
                  </a>
                  <a
                    value="Online"
                    onClick={clickHandler}
                    className={` ${
                      option == "Online" ? "bg-gray-100 font-bold" : ""
                    } p-8 border-b-2  hover:font-bold hover:bg-gray-100`}
                  >
                    <p className=" m-auto ">En Linea</p>
                  </a>
                  <a
                    value="Person"
                    onClick={clickHandler}
                    className={` ${
                      option == "Person" ? "bg-gray-100 font-bold" : ""
                    } p-8 border-b-2  hover:font-bold hover:bg-gray-100`}
                  >
                    <p className="m-auto ">En Persona</p>
                  </a>
                  <a
                    value="Envios"
                    onClick={clickHandler}
                    className={` ${
                      option == "Envios" ? "bg-gray-100 font-bold" : ""
                    } p-8 border-b-2  hover:font-bold hover:bg-gray-100`}
                  >
                    <p className="m-auto  ">Envios</p>
                  </a>
                </div>
              </div>
            </section>
            <section className="bg-gray-100">
              {option == "Tithely" ? (
                <TithelyGiving />
              ) : option == "Online" ? (
                <StripeGiving />
              ) : option == "Person" ? (
                <div className=" text-center m-auto  py-28 flex flex-col gap-16 ">
                  <div className="heading-text w-8/12 m-auto">
                    <p className="font-semibold text-3xl p-2">
                      Otra formas de dar
                    </p>
                    <p>
                      Dar en línea (web, texto o aplicación móvil) es la forma
                      más segura, sencilla y eficiente de dar. Pero si esto no
                      es posible, siga estas opciones
                    </p>
                  </div>
                  <div className="images grid grid-cols-2 w-10/12 m-auto">
                    <div className="1st  text-center">
                      <Image
                        className="mx-auto"
                        src={Giving}
                        alt="giving icon"
                        width={50}
                        height={50}
                      />
                      <p className="font-bold">Dar en Persona</p>
                      <p>
                        Puedes donar en persona con cualquier iglesia durante la
                        experienca de adoracion del fin de semana
                      </p>
                    </div>
                    <div className="2nd text-center">
                      <Image
                        className="mx-auto"
                        src={Mailbox}
                        alt="giving icon"
                        width={50}
                        height={50}
                      />
                      <p className="font-bold">Envie un regalo</p>
                      <p>Attn: Tesoreria</p>
                      <p>Movimiento Pentecostal Monte Sinai</p>
                      <p>155 Power Rd.</p>
                      <p>Pawtucket, RI, 02860</p>
                    </div>{" "}
                  </div>
                </div>
              ) : option == "Envios" ? (
                <div className="section  p-28">
                  <div className="contain flex flex-col gap-8 justify-center m-auto p-8">
                    <p className="font-bold text-center m-auto">
                      Para más información sobre diezmos y donaciones, seguridad
                      y privacidad, impuestos, etc., póngase en contacto con
                      nosotros
                    </p>
                    <MainButton
                      buttonColor={"bg-yellow-400"}
                      buttonPosition={"center"}
                      buttonLink={"/"}
                      text={"Contacto"}
                    />
                  </div>
                </div>
              ) : null}
            </section>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div>
          <section className=" m-auto items-center justify-center flex ">
            <div className="py-16">
              <div className="p-4">
                <p className="m-auto flex justify-center pb-8 ">
                  Safe and secure checkout with
                </p>
              </div>

              <div className="grid  grid-cols-2">
                <a
                  href="#tithely"
                  value="Tithely"
                  onClick={clickHandler}
                  className={` ${
                    option == "Tithely" ? "bg-gray-100 font-bold shadow-sm" : ""
                  } p-8 rounded-lg hover:font-bold hover:bg-gray-100`}
                >
                  <Image src={Logo} width={100} height={100} />
                </a>
                <a
                  href="#online"
                  value="Online"
                  onClick={clickHandler}
                  className={` ${
                    option == "Online" ? "bg-gray-100 font-bold shadow-sm" : ""
                  } p-8 rounded-lg hover:font-bold hover:bg-gray-100`}
                >
                  {" "}
                  <p className="text-center m-auto ">En Linea</p>
                </a>
                <a
                  href="#person"
                  value="Person"
                  onClick={clickHandler}
                  className={` ${
                    option == "Person" ? "bg-gray-100 font-bold shadow-sm" : ""
                  } p-8 rounded-lg hover:font-bold hover:bg-gray-100`}
                >
                  {" "}
                  <p className="m-auto text-center">En Persona</p>
                </a>
                <a
                  href="#envios"
                  value="Envios"
                  onClick={clickHandler}
                  className={` ${
                    option == "Envios" ? "bg-gray-100 font-bold shadow-sm" : ""
                  } p-8 rounded-lg hover:font-bold hover:bg-gray-100`}
                >
                  {" "}
                  <p className="m-auto  text-center  ">Envios</p>
                </a>
              </div>
            </div>
          </section>
          <section>
            <div id="tithely">
              <TithelyGiving />
            </div>
            <div id="online">
              <StripeGiving />
            </div>
            <div
              id="person"
              className=" text-center m-auto w-full py-28 flex flex-col gap-16 md:w-9/12"
            >
              <div className="heading-text w-8/12 m-auto">
                <p className="font-semibold text-3xl p-2">Otra formas de dar</p>
                <p>
                  Dar en línea (web, texto o aplicación móvil) es la forma más
                  segura, sencilla y eficiente de dar. Pero si esto no es
                  posible, siga estas opciones
                </p>
              </div>
              <div className="images grid grid-cols-2 w-10/12 m-auto">
                <div className="1st  text-center">
                  <Image
                    className="mx-auto"
                    src={Giving}
                    alt="giving icon"
                    width={50}
                    height={50}
                  />
                  <p className="font-bold">Dar en Persona</p>
                  <p>
                    Puedes donar en persona con cualquier iglesia durante la
                    experienca de adoracion del fin de semana
                  </p>
                </div>
                <div className="bg-white/50 2nd text-center">
                  <Image
                    className="mx-auto"
                    src={Mailbox}
                    alt="giving icon"
                    width={50}
                    height={50}
                  />
                  <p className="font-bold">Envie un regalo</p>
                  <p>Attn: Tesoreria</p>
                  <p>Movimiento Pentecostal Monte Sinai</p>
                  <p>155 Power Rd.</p>
                  <p>Pawtucket, RI, 02860</p>
                </div>{" "}
              </div>
            </div>
            <div id="envios" className="section bg-gray-200 p-28">
              <div className="contain flex flex-col gap-8 justify-center m-auto p-8">
                <p className="font-bold text-center m-auto">
                  Para más información sobre diezmos y donaciones, seguridad y
                  privacidad, impuestos, etc., póngase en contacto con nosotros
                </p>
                <MainButton
                  buttonColor={"bg-yellow-400"}
                  buttonPosition={"center"}
                  buttonLink={"/"}
                  text={"Contacto"}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TitheSection;
