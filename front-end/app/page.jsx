import React from "react";
import "../styles/globals.css";
import Navbar from "../sections/navbar/Navbar";
import Header from "../sections/header/Header";
import Banner from "../components/banner/Banner";
import Banner2 from "../components/banner/Banner2";
import SocialMedia from "../components/tab/sideTab/SocialMedia";
import MediaQuery from "react-responsive";
import DefaultBody from '../sections/body/defaultBody/DefaultBody'
import MobileCard from '../components/mobileCard/MobileCard'
import SideTab from '../components/tab/sideTab/SideTab'
import TextLeftTab from '../components/tab/textLeftTab/TextLeftTab'
import TextRightTab from '../components/tab/textRightTab/TextRightTab'

const HeroVideo =
  "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4";
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png";
import Michael from "../public/section2.jpg";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header video={HeroVideo}>
        <img
          className="h-2/6 w-auto flex place-content-center justify-center absolute m-auto z-40 md:h-80 md:w-auto"
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
        <div className="MOBILE">
          <MediaQuery maxWidth={799}>
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
              />
              <MobileCard
                headerText="Unete a Nosotros
          "
                subheadingText="Es hora de ver lo que Dios puede hacer a través de ti. ¡Únase a nosotros!
          "
                buttonLink="/unete"
                buttonText="UNETE"
                image={UneteCardImage}
              />
              <MobileCard
                headerText="Eventos
          "
                subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
          "
                buttonLink="/unete"
                buttonText="EVENTOS"
                image={EventosCardImage}
              />
            </DefaultBody>
          </MediaQuery>
        </div>
        <div className="DESKTOP">
          <MediaQuery minWidth={800}>
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
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default page;
