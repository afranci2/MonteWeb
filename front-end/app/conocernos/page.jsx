import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageLeft from "../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import IglesiasChurchSection from "../../sections/body/iglesiaschurchsection/IglesiasChurchSection";
import { AiOutlineSearch } from "react-icons/ai";

import Footer from "../../sections/footer/Footer";
import Banner2 from "../../components/banner/Banner2";

const ConocernosVideo = "https://monte-assets.s3.amazonaws.com/video/promo.mp4";
const CreenciasImage = "https://monte-assets.s3.amazonaws.com/img/bible.jpg";
const ConocernosHero = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const churchImage =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Couple/274685981_7121899154548825_4616241431371263813_n.jpg";
const Javier = "https://monte-assets.s3.amazonaws.com/img/javier.jpg";
import CreenciasFundamentales from "../../sections/body/creeniasFundamentales/CreenciasFundamentales";
import Lideres from "../../sections/lideres/Lideres";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = "https://monte-assets.s3.amazonaws.com/img/becky.jpg";
const Pastora =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/274605267_7121837261221681_6242282331205613768_n.jpg";
const Anthony =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Mens/305628064_8245683625503700_961665000343553299_n.jpg";
const otherOne =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Mens/312465605_8245751052163624_6268065564327914459_n.jpg";
const anniversary =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";

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
  function zipSubmit() {
    console.log("hey");
  }

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
      last_name: "Delaroca",
      first_name: "Flor",
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
        <Navbar2 id="top" />
        <div className="">
          <Header
            image={ConocernosHero}
            headerText="Conocernos"
            children={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={undefined}
            video={undefined}
            subheadingText={"Conoce quiénes somos y lo que representamos"}
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
            <a href={"#mensaje-m"}>
              <li key={5}>
                <p>Un Mensaje de la Presidente</p>{" "}
              </li>
            </a>
            <a href="#historia-h">
              <li key={2}>
                <p>Historia</p>{" "}
              </li>
            </a>

            <a href="#lideres">
              <li key={4}>
                <p>Lideres</p>{" "}
              </li>
            </a>
            <a href={"#iglesias-i"}>
              <li key={3}>
                <p>Iglesias</p>{" "}
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
            headerText="Un Mensaje de la  Vicepresidente"
            subheadingText={
              <div>
                <p className="">
                  "Su propósito es presentarte a un Dios que todo lo puede,
                  aunque hayan cosas imposibles para los hombres, para Dios todo
                  es posible."
                </p>
              </div>
            }
            buttonText="Leer Ahora"
            children={undefined}
            image={undefined}
            buttonColor="bg-red-800"
            classChangeText={undefined}
            buttonLink={"/conocernos/mensaje"}
            containerheight={"h-screen"}
          ></Header>
        </div>
        <section>
          <div id="historia-h">
            <BodySectionImageRight
              image={anniversary}
              headingText="50 Años de Historia"
              subheadingText={
                " Descubre cómo comenzamos y cómo hemos crecido como comunidad.​"
              }
              buttonColor="bg-red-800"
              buttonText={"Historia"}
              buttonLink="/historia"
            ></BodySectionImageRight>
          </div>
        </section>
        <div id="lideres">
          <Lideres pastors={lidereslist} />
        </div>
      </div>

      <section className="pt-4">
        <div className="md:hidden">
          <Header
            image={otherOne}
            headerText="Conectate con Nosotros"
            children={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={undefined}
            video={undefined}
            subheadingText={
              "Descubre cómo puedes formar parte de nuestra familia de fe"
            }
            containerheight={"h-60"}
          />
        </div>
        <div className="bg-gray-100 text-black hidden px-20 p-14 justify-between md:flex">
          <div>
            <p className=" font-semibold font-serif text-4xl  ">
              Un Mision Global
            </p>
            <p>Conectate con Nosotros</p>
          </div>
          <form className="h-8 text-sm my-auto flex gap-2">
            <input
              placeholder="02939"
              className="rounded-lg px-2 bg-gray-200"
              id="zip"
            ></input>
            <AiOutlineSearch
              color={"fffff"}
              onClick={zipSubmit()}
              className="pl-2 m-auto cursor-pointer"
              size={30}
            />
          </form>
        </div>
        <IglesiasChurchSection churches={res} conocernos={"Wrg"} />
      </section>

      <Footer />
    </div>
  );
};

export default page;
