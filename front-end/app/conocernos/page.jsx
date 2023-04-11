import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageLeft from "../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import IglesiasChurchSection from "../../sections/body/iglesiaschurchsection/IglesiasChurchSection";

import Footer from "../../sections/footer/Footer";
import Banner2 from "../../components/banner/Banner2";

const ConocernosVideo = "https://monte-assets.s3.amazonaws.com/video/promo.mp4";
const CreenciasImage = "https://monte-assets.s3.amazonaws.com/img/bible.jpg";
const ConocernosHero = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const Javier = "https://monte-assets.s3.amazonaws.com/img/javier.jpg";
import CreenciasFundamentales from "../../sections/body/creeniasFundamentales/CreenciasFundamentales";
import Lideres from "../../sections/lideres/Lideres";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = "https://monte-assets.s3.amazonaws.com/img/becky.jpg";
const Pastora = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const Anthony = "https://monte-assets.s3.amazonaws.com/img/anthony.jpg";

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

const page = async () => {
  const res = await fetchChurches();
  const lidereslist = [
    {
      id: 0,
      image: Pastor,
      title: "Rev.",
      position: "Presidente",
      last_name: "Francisco",
      first_name: "Samuel",
    },
    {
      id: 1,
      image: Pastora,
      title: "Rev.",
      position: "Vice Presidente",
      last_name: "Francisco",
      first_name: "Isabel",
    },
    {
      id: 2,
      image: Becky,
      title: "",
      position: "Secretaria",
      last_name: "Ramos",
      first_name: "Rebecca",
    },
    {
      id: 3,

      image: Anthony,
      title: "Dr.",
      position: "Tesorero",
      last_name: "Francisco",
      first_name: "Anthony",
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <Navbar2 />
        <div className="">
          <Header
            image={ConocernosHero}
            headerText="Conocernos
"
            children={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={undefined}
            video={undefined}
            subheadingText={
              "EDIT THIS Para más información sobre diezmos y donaciones, seguridad y privacidad, impuestos, etc., póngase en contacto con nosotros"
            }
          />
        </div>
        <Banner2 position={"bg-slate-100"}>
          <ul className="hidden gap-8 text-black text-md font-medium p-8 md:flex text-sm">
            {/*use dropdown component             <Dropdown />
             */}
            <a href="#creencias">
              <li key={1}>
                <p>Creencias Fundamentales</p>
              </li>
            </a>
            <a href="#historia-h">
              <li key={1}>
                <p>Historia</p>{" "}
              </li>
            </a>
            <a href={"#iglesias-i"}>
              <li key={1}>
                <p>Iglesias</p>{" "}
              </li>
            </a>
            <a href="#lideres">
              <li key={1}>
                <p>Lideres</p>{" "}
              </li>
            </a>
            <a href={"#mensaje-m"}>
              <li key={1}>
                <p>Un Mensaje Del Presidente</p>{" "}
              </li>
            </a>
          </ul>
        </Banner2>
        <BodySectionImageLeft
          backgroundColor={"bg-white"}
          image={Javier}
          headingText="Nuestra Misión
        "
          subheadingText={
            "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
          }
        ></BodySectionImageLeft>
        <div className="div" id="creencias">
          <Header
            children={undefined}
            image={CreenciasImage}
            headerText={"Creencias Fundamentales"}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={undefined}
            video={undefined}
            subheadingText={undefined}
            containerheight={"h-screen"}
          />
        </div>
        <div className="h-full w-full">
          <CreenciasFundamentales />
        </div>
        <div id="mensaje-m">
          <Header
            video={ConocernosVideo}
            contentPosition="center"
            headerText="Un Mensaje del Presidente"
            subheadingText={
              <div>
                <p>
                  A lo largo de este movimiento, el fuego seguirá ardiendo en
                  cada corazón como en el día de Pentecostés.
                </p>
                <br></br>
                <p className="font-light">
                  Deja que Dios encienda el fuego dentro de ti.
                </p>
              </div>
            }
            buttonText="Historia"
            children={undefined}
            image={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            containerheight={"h-screen"}
          ></Header>
        </div>
        <section>
          <div id="historia-h">
            <BodySectionImageRight
              image={Javier}
              headingText="50 anos de historia"
              subheadingText={
                "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
              }
              buttonColor="bg-yellow-400"
              buttonText={"Historia"}
              buttonLink="/historia"
            ></BodySectionImageRight>
          </div>
        </section>
        <div id="lideres">
          <Lideres pastors={lidereslist} />
        </div>
      </div>

      <section>
        <Header
          image={ConocernosHero}
          headerText="Find your Church"
          children={undefined}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={undefined}
          video={undefined}
          subheadingText={
            "EDIT THIS Para más información sobre diezmos y donaciones, , etc., póngase en contacto con nosotros"
          }
          containerheight={"h-96"}
        />
        <IglesiasChurchSection churches={res} conocernos={"Wrg"} />
      </section>

      <Footer />
    </div>
  );
};

export default page;
