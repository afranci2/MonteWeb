import React from "react";
import "../styles/globals.css";
import Navbar from "../sections/navbar/Navbar";
import Header from "../sections/header/Header";
import Banner from "../components/banner/Banner";
import Banner2 from "../components/banner/Banner2";
import SocialMedia from "../components/tab/sideTab/SocialMedia";
import DefaultBody from "../sections/body/defaultBody/DefaultBody";
import MobileCard from "../components/mobileCard/MobileCard";
import SideTab from "../components/tab/sideTab/SideTab";
import TextLeftTab from "../components/tab/textLeftTab/TextLeftTab";
import TextRightTab from "../components/tab/textRightTab/TextRightTab";
const ConocernosVideo = "https://monte-assets.s3.amazonaws.com/video/promo.mp4";
import ConocernosCardImage from "../public/section2.jpg";
import IglesiasCardImage from "../public/assets/img/CHURCH-BUILDING.jpg";
import UneteCardImage from "../public/assets/img/izzy.jpg";
import EventosCardImage from "../public/assets/img/nimsy.jpg";
import Link from 'next/link'
import BodySectionImageLeft from '../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft'
import BodySectionImageRight from '../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight'
import AnniversaryPicture from '../public/assets/img/50Anni.F4.png'
const HeroVideo =
  "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4";
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png";
import Michael from "../public/assets/img/section2.jpg";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header video={HeroVideo}>
        <img
          className="h-2/6 w-auto flex place-content-center justify-center absolute m-auto z-40 md:h-[22rem] md:w-auto"
          src={Logo}
          alt="he"
        />
      </Header>
      <Header
        contentPosition="left"
        image={Michael}
        classChangeText="absolute top-1/4 flex flex-col gap-2 w-10/12"
        headerText="Bienvenidos"
        subheadingText="Le invitamos a nuestro servicio de adoración en persona o en linea"
        buttonText="EN VIVO"
        buttonLink="/en-vivo"
      >
        <Banner
          color="bg-red-800/90"
          headerText=""
          subheadingText=""
          position="bottom-0"
        >
          <div className="content">
            <p className="text-yellow-400 font-semibold text-md">
              HORARIOS DE SERVICIO GENERAL
            </p>
            <p className="text-xs">
              ** Tiempos de servicio pueden variar según la ubicación **
            </p>
            <br></br>
            <div className="times flex justify-between font-medium text-sm">
              <p>
                Domingo <br></br>3:00 PM EST
              </p>
              <p>
                Martes <br></br>7:00 PM EST
              </p>
              <p>
                Jueves <br></br>7:30 PM EST
              </p>
            </div>
          </div>
        </Banner>
      </Header>
      <div className="tabs-section">
        <div className="MOBILE flex w-11/12 m-auto md:hidden ">
          <DefaultBody>
            <MobileCard
              headerText="Conocernos"
              subheadingText="Ver nuestra mision, lideres, historia, y mas
"
              buttonLink="/conocernos"
              buttonText="VER AHORA"
              image={ConocernosCardImage}
              imagePosition="object-left "
            />

            <MobileCard
              headerText="Iglesias"
              subheadingText="¿Listo para conocer una iglesia? Encuentre una congregación cerca de ti
"
              buttonLink="/iglesias"
              buttonText="ACOMPANANOS"
              image={IglesiasCardImage}
              imagePosition="object-left "
            />
            <MobileCard
              headerText="Unete a Nosotros
          "
              subheadingText="Es hora de ver lo que Dios puede hacer a través de ti. ¡Únase a nosotros!
          "
              imagePosition="object-left "
              buttonLink="/unete"
              buttonText="UNETE"
              image={UneteCardImage}
            />
            <MobileCard
              headerText="Eventos
          "
              imagePosition="object-left "
              subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
          "
              buttonLink="/unete"
              buttonText="EVENTOS"
              image={EventosCardImage}
            />
          </DefaultBody>
        </div>
        <div className="DESKTOP hidden md:flex">
          <div className="hello gap-12 w-10/12 m-auto max-w-screen">
            <div className="LEFT-SMALL-TABS  flex flex-col gap-4">
              <SideTab headerText="Siguenos">
                <div className="content">
                  <SocialMedia />
                </div>
              </SideTab>
              <SideTab
                buttonColor="bg-yellow-400"
                headerText="Listo para servir?
              "
                subheaderText="Inscríbase ahora como voluntario y vea lo que Dios puede hacer a través de usted.
              "
                buttonText="COMENZAR AHORA"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-red-800 text-white"
                headerText="Diezmar"
                subheaderText="Dar una ofrenda o programa diezmos recurrentes.
              "
                buttonText="DAR AHORA"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-yellow-400"
                headerText="COVID-19
              "
                subheaderText="Consulte nuestra política de COVID-19 y los nuevos desarrollos
              "
                buttonText="LEER MAS"
                buttonLink="./"
              />
            </div>
            <div className="RIGHT-MAIN-TABS  w-full maintabs">
              <TextLeftTab
                headerText="Conocernos"
                subheadingText="Ver nuestra mision, lideres, historia, y mas
"
                buttonLink="/conocernos"
                buttonText="VER AHORA"
                image={ConocernosCardImage}
              />
              <TextRightTab
                headerText="Iglesias"
                subheadingText="¿Listo para conocer una iglesia? Encuentre una congregación cerca de ti
                  "
                buttonLink="/iglesias"
                buttonText="ACOMPANANOS"
                image={IglesiasCardImage}
              />

              <TextLeftTab
                headerText="Unete a Nosotros
                  "
                subheadingText="Es hora de ver lo que Dios puede hacer a través de ti. ¡Únase a nosotros!
                  "
                buttonLink="/unete"
                buttonText="UNETE"
                imagePosition="object-bottom "
                image={UneteCardImage}
              />
              <TextRightTab
                headerText="Eventos
                "
                subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
                "
                buttonLink="/unete"
                buttonText="EVENTOS"
                image={EventosCardImage}
              />
            </div>
          </div>
        </div>
      </div>
      <Header
        video={ConocernosVideo}
        contentPosition="center"
        headerText="Un Genuino Llamado de Dios"
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
        buttonText="Conocernos"
      ></Header>
      <DefaultBody>
        <Banner2 position="top-0">
          <div className="gap-12 text-black">
            <p className="font-medium font-serif text-4xl">Eventos</p>
            <Link href="/eventos">
              <p className="">Ver ahora</p>
            </Link>
          </div>
        </Banner2>
        <BodySectionImageLeft
          buttonText="Historia"
          headingText="50 anos"
          subheadingText=">EDIT THIS Para más información sobre diezmos y donaciones, seguridad y privacidad, impuestos, etc., póngase en contacto con nosotros
"
          buttonLink="/historia"
          image={AnniversaryPicture}
        />
        <BodySectionImageRight
          buttonText="Historia"
          headingText="50 anos"
          subheadingText=">EDIT THIS Para más información sobre diezmos y donaciones, seguridad y privacidad, impuestos, etc., póngase en contacto con nosotros
"
          buttonLink="/historia"
          image={AnniversaryPicture}
        />
      </DefaultBody>
    </div>
  );
};

export default page;
