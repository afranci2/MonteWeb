import React from "react";
import Navbar from "../../sections/navbar/Navbar";
import Header from "../../sections/header/Header";
import BodySectionImageLeft from "../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";

import Banner from "../../components/banner/Banner";
import Footer from "../../sections/footer/Footer";
import Banner2 from "../../components/banner/Banner2";
import SocialMedia from "../../components/tab/sideTab/SocialMedia";
import DefaultBody from "../../sections/body/defaultBody/DefaultBody";
import MobileCard from "../../components/mobileCard/MobileCard";
import SideTab from "../../components/tab/sideTab/SideTab";
import TextLeftTab from "../../components/tab/textLeftTab/TextLeftTab";
import TextRightTab from "../../components/tab/textRightTab/TextRightTab";
const ConocernosVideo = "https://monte-assets.s3.amazonaws.com/video/promo.mp4";
import Link from "next/link";
const CreenciasImage = "https://monte-assets.s3.amazonaws.com/img/bible.jpg";
const ConocernosHero = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const Javier = "https://monte-assets.s3.amazonaws.com/img/javier.jpg";
import CreenciasFundamentales from "../../sections/body/creeniasFundamentales/CreenciasFundamentales";
import Lideres from "../../sections/lideres/Lideres";

const HeroVideo =
  "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4";
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png";

const page = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <Navbar />
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
            <Link href={"/"}>
              <li key={1}>
                <p>Creencias Fundamentales</p>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li key={1}>
                <p>Historia</p>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li key={1}>
                <p>Iglesias</p>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li key={1}>
                <p>Lideres</p>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li key={1}>
                <p>Un Mensaje Del Presidente</p>{" "}
              </li>
            </Link>
          </ul>
        </Banner2>
        <BodySectionImageLeft
          image={Javier}
          headingText="Nuestra Misión
        "
          subheadingText={
            "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
          }
          buttonText={"fewfe"}
        ></BodySectionImageLeft>

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
          containerheight={"h-96"}
        />
        <div className="h-full w-full">
          <CreenciasFundamentales />
        </div>
        <Header
          video={ConocernosVideo}
          contentPosition="center"
          headerText="Un Mensaje del Presidente"
          subheadingText={
            <div>
              <p>
                A lo largo de este movimiento, el fuego seguirá ardiendo en cada
                corazón como en el día de Pentecostés.
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
        <Lideres />
      </div>

      <section>
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
      </section>
      <Footer />
    </div>
  );
};

export default page;
