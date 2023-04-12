import React from "react";
import "../public/globals.css";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";
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
const ConocernosCardImage =
  "https://monte-assets.s3.amazonaws.com/img/pastor1.jpg";
const IglesiasCardImage =
  "https://monte-assets.s3.amazonaws.com/img/CHURCH-BUILDING.jpg";
const UneteCardImage = "https://monte-assets.s3.amazonaws.com/img/izzy.jpg";
const EventosCardImage = "https://monte-assets.s3.amazonaws.com/img/nimsy.jpg";
import Link from "next/link";
import BodySectionImageLeft from "../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
import BodySectionImageRight from "../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
const AnniversaryPicture =
  "https://monte-assets.s3.amazonaws.com/img/50Anni.F4.png";
const HeroVideo =
  "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4";
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png";
const Michael = "https://monte-assets.s3.amazonaws.com/img/section2.jpg";
import Image from "next/image";
const Markos = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Congragation/41260321_2236714596400663_4054600941633011712_o.jpg"

async function fetchEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-events`,
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

async function fetchEvents2() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-events-dates-and-times`,
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

function getDateAndTimeForChurchId(events, id) {
  const matchingEvent = events.filter((event) => event.event_id === id);
  const dateAndTime = `${matchingEvent[0].date} - ${
    matchingEvent[matchingEvent.length - 1].date
  }`;
  return dateAndTime;
}

async function page() {
  const res = await fetchEvents();
  const res2 = await fetchEvents2();

  return (
    <div>
      <Navbar />
      <Header video={HeroVideo}>
        <img
          className="h-1/3 w-auto flex place-content-center justify-center absolute m-auto z-40 md:h-[18rem] md:w-auto"
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
          <div className="flex p-6 py-12 gap-8 w-10/12 m-auto max-w-screen">
            <div className="RIGHT-MAIN-TABS w-full maintabs">
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
            <div className="LEFT-SMALL-TABS max-w-[300px] w-1/3 flex flex-col">
              <SideTab headerText="Siguenos">
                <div className="content">
                  <SocialMedia />
                </div>
              </SideTab>
              <SideTab
                buttonColor="bg-gray-200 text-black"
                headerText="Listo para servir?
              "
                subheaderText="Inscríbase ahora como voluntario y vea lo que Dios puede hacer a través de usted.
              "
                buttonText="COMENZAR AHORA"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-yellow-400 text-black"
                headerText="Diezmar"
                subheaderText="Dar una ofrenda o programa diezmos recurrentes.
              "
                buttonText="DAR AHORA"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-gray-200 text-black"
                headerText="COVID-19
              "
                subheaderText="Consulte nuestra política de COVID-19 y los nuevos desarrollos
              "
                buttonText="LEER MAS"
                buttonLink="./"
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
          <div className="">
            <p>
              A lo largo de este movimiento, el fuego seguirá ardiendo en cada
              corazón como en el día de Pentecostés.
            </p>
            <br></br>
          </div>
        }
        buttonText="CONOCERNOS"
        buttonLink={"/conocernos#top"}
      ></Header>
      <DefaultBody>
        <h2 className="pt-28 font-serif text-5xl m-auto flex justify-center items-center">
          Eventos
        </h2>
        <p className="text-md w-3/4 p-4 m-auto flex text-center justify-center items-center">
          Ueferfewfwr fwerfwerf werfwerfrew fewrf frf rfr frpcoming events that
          are mdae for godle erwferfwerf rf
        </p>

        <BodySectionImageLeft
          card={"qwgrwr"}
          buttonText={"Ver Mas"}
          headingText={res[res.length - 1].name}
          subheadingText={res[res.length - 1].description}
          subheadingText2={getDateAndTimeForChurchId(
            res2,
            res[res.length - 1].id
          )}
          buttonLink={"/"}
          image={Michael}
          buttonColor="bg-yellow-400 text-black"
        />
        <BodySectionImageRight
          card={"qwgrwr"}
          buttonText={"Ver Mas"}
          headingText={res[res.length - 2].name}
          subheadingText={res[res.length - 2].description}
          subheadingText2={getDateAndTimeForChurchId(
            res2,
            res[res.length - 2].id
          )}
          buttonLink={"/"}
          image={Michael}
          buttonColor="bg-yellow-400 text-black"

        />
        <div className="pb-24 bg-gray-300/50 m-auto">
          <div className="flex justify-center gap-4">
            <button className="text-black text-sm  font-bold  rounded-lg text-center ">
             Eventos
            </button>
            <IoIosArrowForward className=" flex items-center my-auto" size={12} />
          </div>
        </div>
      </DefaultBody>
      <section className=" h-screen object-cover bg-black flex m-auto justify-center items-center">
        <div className="z-40 absolute text-white text-center w-3/4">
          <p className="font-semibold py-4 font-serif text-5xl">
            ¡Nos alegra tenerte con nosotros!
          </p>
          <p className="text-lg">
            Deja que Dios encienda el fuego dentro de ti.
          </p>
        </div>
        <div className="z-30 absolute w-full h-full bg-black/30"></div>
        <Image
          className="object-cover h-screen w-full"
          src={Markos}
          alt="ewfe"
          width={1000}
          height={1000}
        ></Image>
      </section>

      <Footer />
    </div>
  );
}

export default page;
