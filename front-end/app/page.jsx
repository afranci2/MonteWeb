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
import { MainButton } from "../components";
const Markos =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Women/312557903_8245686698836726_2489476650725182482_n.jpg";

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
  console.log(res)
  console.log(res2)

  return (
    <div>
      <Navbar />
      <Header video={HeroVideo}>
        <img
          className="h-1/4 w-auto flex place-content-center justify-center absolute m-auto z-40 md:h-[18rem] md:w-auto"
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
        buttonColor={"bg-red-800"}
        show={false}
      >
        <Banner
          color="bg-red-800/90"
          headerText=""
          subheadingText=" "
          position="bottom-0"
        >
          <div className="content">
            <div className="pb-8 border-b-2">
              <p className="text-yellow-400 font-semibold text-md">
                HORARIOS DE SERVICIO GENERAL
              </p>
              <p className="text-xs">
                Tiempos de servicio pueden variar según la ubicación
              </p>
            </div>
            <br></br>
            <div className="pt-2 times flex justify-between font-medium text-sm">
              <p className="f text-sm">
                Domingo <br></br>3:00 PM EST
              </p>
              <p className=" text-sm">
                Martes <br></br>7:00 PM EST
              </p>
              <p className=" text-sm">
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
              buttonText="ACOMPAÑANOS"
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
                buttonText="ACOMPAÑANOS"
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
                buttonText="Comenzar Ahora"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-yellow-400 text-black"
                headerText="Diezmar"
                subheaderText="Dar una ofrenda o programa diezmos recurrentes.
              "
                buttonText="Dar Ahora"
                buttonLink="./"
              />
              <SideTab
                buttonColor="bg-gray-100 text-black"
                headerText="COVID-19
              "
                subheaderText="Consulte nuestra política de COVID-19 y los nuevos desarrollos
              "
                buttonText="Leer Mas"
                buttonLink="./"
              />
            </div>
          </div>
        </div>
      </div>
      <Header
        buttonColor={"bg-red-800"}
        video={ConocernosVideo}
        contentPosition="center"
        headerText="Un Genuino Llamado de Dios"
        subheadingText={
          <div className="">
            <p>
              A lo largo de este movimiento, el fuego seguirá ardiendo en cada
              corazón como en el día de Pentecostés.
            </p>
          </div>
        }
        show={false}
        buttonText="Conocernos"
        buttonLink={"/conocernos#top"}
      ></Header>
      {res.length > 1 && res2.length >1 && (
        <DefaultBody>
          <div className="w-full md:w-2/3 border-b-2 m-auto pt-24 pb-6">
            <div className="w-full">
              <h2 className=" font-semibold font-serif text-5xl m-auto flex justify-center items-center">
                Eventos
              </h2>
              <p className="w-3/4 text-sm p-4 m-auto flex text-center justify-center items-center">
                Descubre nuestros próximos eventos y únete a nuestra comunidad
                de fe
              </p>
            </div>
          </div>

          <BodySectionImageLeft
            card={"qwgrwr"}
            buttonText={"Ver Mas"}
            headingText={res[res.length - 1].name}
            subheadingText2={res[res.length - 1].description}
            subheadingText={getDateAndTimeForChurchId(
              res2,
              res[res.length - 1].id
            )}
            buttonLink={"/"}
            image={res[res.length - 1].image}
            buttonColor="bg-yellow-400 text-black"
          />
          <BodySectionImageRight
            card={"qwgrwr"}
            buttonText={"Ver Mas"}
            headingText={res[res.length - 2].name}
            subheadingText2={res[res.length - 2].description}
            subheadingText={getDateAndTimeForChurchId(
              res2,
              res[res.length - 2].id
            )}
            buttonLink={"/"}
            image={res[res.length - 2].image}
            buttonColor="bg-yellow-400 text-black"
          />
          <div className="pb-24 bg-gray-300/50 m-auto">
            <Link href={"/eventos"}>
              <div className="flex justify-center gap-4">
                <button className="text-black text-sm font-bold rounded-lg text-center ">
                  Eventos
                </button>
                <IoIosArrowForward
                  className=" flex items-center my-auto"
                  size={12}
                />
              </div>
            </Link>
          </div>
        </DefaultBody>
      )}
      <BodySectionImageLeft
        headingText={"La Visión de un Llamado Divino"}
        subheadingText={`"Los mayores avivamientos a lo largo de la historia se identifican con el fuego. Nuestro Dios es un Dios de fuego. Se reveló a Moisés en medio del fuego, y el profeta Elías fue un profeta de fuego. Él es quien hace que sus ángeles sean espíritus, y que su ministerio sea una llama de fuego. Pentecostés comenzó con fuego. El capítulo 2 del libro de los Hechos dice “…y se les aparecieron lenguas repartidas como de fuego, y se posó sobre cada uno de ellos” (versículo tres).

`}
        blog3={<div>wdfwe</div>}
        subheadingText2={
          <div>
            <p>
              Cuando Dios estaba estableciendo su pacto con esta nación, en esa
              montaña descendió la gloria de Dios. El versículo 18 del capítulo
              19 del Éxodo dice: “Y el monte Sinaí se convirtió en humo, porque
              el Señor descendió sobre él en fuego
            </p>
            <br></br>
            <p>
              Esperamos en el Supremo Señor de nuestras vidas, que a lo largo de
              la historia de este movimiento, el fuego siga ardiendo en cada
              corazón como en aquel momento en el día de Pentecostés."
            </p>
            <br></br>
            <p className="font-bold">-Reverendo Samuel Francisco</p>
            <br></br>
            <div className="flex justify-center md:justify-start">
              <MainButton
                text="Leer Mas"
                link="/conocernos/mensaje-del-presidente"
              ></MainButton>
            </div>
          </div>
        }
        image={Michael}
      />
      <section className="z-10 h-screen object-cover flex m-auto justify-center items-center">
        <div className="z-40 absolute text-white text-center w-11/12">
          <p className="font-semibold py-4 font-serif text-5xl">
            ¡Nos alegra tenerte con nosotros!
          </p>
          <p className="text-md">
            Deja que Dios encienda el fuego dentro de ti.
          </p>
        </div>
        <div className="absolute h-screen w-screen bg-black/30"></div>
        <div className=" h-screen w-screen object-cover">
          {" "}
          <Image
            className="h-full object-cover"
            src={Markos}
            alt="ewfe"
            height={1000}
            width={1000}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default page;
