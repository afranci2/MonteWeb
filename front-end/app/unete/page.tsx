import React from "react";
import "../../public/globals.css";
import Navbar from "../../sections/navbar/Navbar";
import Footer from "../../sections/footer/Footer";
import Header from "../../sections/header/Header";
import DefaultBody from "../../sections/body/defaultBody/DefaultBody";
import MobileCard from "../../components/mobileCard/MobileCard";
import TextLeftTab from "../../components/tab/textLeftTab/TextLeftTab";
import TextRightTab from "../../components/tab/textRightTab/TextRightTab";
const ConocernosCardImage =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Poetry/274688543_7121958261209581_1265145167667835553_n.jpg";
const IglesiasCardImage =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Media/315306956_8339967716075290_9033138615889496268_n.jpg";
const UneteCardImage = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Congragation/240894583_6088691674536250_7517035433702364537_n.jpg";
const EventosCardImage = 'https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Ushers/279019125_7399278380144233_724713185633846961_n.jpg'

const AnniversaryPicture =
  "https://monte-assets.s3.amazonaws.com/img/50Anni.F4.png";
const HeroVideo =
  "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4";
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png";
const Michael = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Women/312581454_8245687048836691_2558137973907464007_n.jpg";


const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        image={Michael}
        headerText={"Unete"}
        classChangeText={undefined}
        contentPosition={"center"}
        subheadingText={
          "Check out opportunities to volunteer, donate, participate, and more!"
        }
        containerheight={undefined}
        children={undefined}
        video={undefined}
      ></Header>
      <div className="tabs-section bg-slate-100">
        <div className="MOBILE flex w-11/12 m-auto md:hidden ">
          <DefaultBody>
            <MobileCard
              headerText="Servir"
              subheadingText="Utiliza tus dones y talentos para marcar la diferencia. Únete a cualquiera de nuestros equipos y sirve.
              "
              buttonLink="/conocernos"
              buttonText="UNIRSE A UN EQUIPO"
              image={ConocernosCardImage}
              imagePosition="object-left "
            />

            <MobileCard
              headerText="En Vivo

              "
              subheadingText=" ¿Listo para conocer una iglesia? Encuentre una congregación cerca de ti
              "
              buttonLink="/en-vivo"
              buttonText="VER AHORA"
              image={IglesiasCardImage}
              imagePosition="object-left "
            />
            <MobileCard
              headerText="Redes Sociales


          "
              subheadingText="Únase a nosotros en línea para la adoración, la comunión, los estudios bíblicos y más. ¡Participa en vivo o transmite sermones pasados a través de Facebook Live!


          "
              imagePosition="object-left "
              buttonLink="/unete"
              buttonText="UNETE"
              image={UneteCardImage}
            />
            <MobileCard
              headerText="Contacto
          "
              imagePosition="object-left "
              subheadingText="Have a question or need to get in contact? Try here.
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
                headerText="Servir"
                subheadingText="Utiliza tus dones y talentos para marcar la diferencia. Únete a cualquiera de nuestros equipos y sirve. 
"
                buttonLink="/servir"
                buttonText="APLICAR"
                image={ConocernosCardImage}
              />
              <TextRightTab
                headerText="En Vivo"
                subheadingText="¿Listo para conocer una iglesia? Encuentre una congregación cerca de ti
                  "
                buttonLink="/en-vivo"
                buttonText="VER AHORA"
                image={IglesiasCardImage}
              />

              <TextLeftTab
                headerText="Redes Sociales
                  "
                subheadingText="Es hora de ver lo que Dios puede hacer a través de ti. ¡Únase a nosotros!
                  "
                buttonLink="/redes-sociales"
                buttonText="VER MAS"
                imagePosition="object-bottom "
                image={UneteCardImage}
              />
              <TextRightTab
                headerText="Contacto
                "
                subheadingText="¡No te lo pierdas! Apunte en el calendario y acompáñenos en los eventos importantes
                "
                buttonLink="/contacto"
                buttonText="ENVIAR UN MENSAJE"
                image={EventosCardImage}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
