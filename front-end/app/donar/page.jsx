import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import TithelyGiving from "../../sections/body/giving/Giving";
import Footer from "../../sections/footer/Footer";
import StripeGiving from "../../sections/body/giving/Stripegiving";
const HeaderImage = "https://monte-assets.s3.amazonaws.com/img/donar.jpg";
const Computer =
  "https://monte-assets.s3.amazonaws.com/img/macbook+whilte+sp.png";
const Giving = "https://monte-assets.s3.amazonaws.com/icon/give-money.png";
import Image from "next/image";
import { MainButton } from "../../components";
const Mailbox = "https://monte-assets.s3.amazonaws.com/icon/icon-mailbox.png";

const page = () => {
  return (
    <div>
      <Navbar2 />
      <Header
        image={HeaderImage}
        headerText={"Donar de Manera Facil"}
        buttonColor={"bg-yellow-400 text-black"}
        buttonText={"Dar Ahora"}
        contentPosition={"center"}
        subheadingText={
          "Give donations directly online, tithely, or in person and help support missionary efforts. Start now and see what god can do through you"
        }
        children={undefined}
        classChangeText={undefined}
        video={undefined}
        containerheight={undefined}
      />
      <BodySectionImageRight
        image={Computer}
        headingText={"Donar de Manera Facil"}
        subheadingText={
          "Sencillo y seguro. Haga un solo obsequio o programe donaciones recurrentes utilizando su cuenta corriente, tarjeta de debito o credito."
        }
      />
      <TithelyGiving />
      <StripeGiving />
      <div className=" text-center m-auto w-full py-28 flex flex-col gap-16 md:w-9/12">
        <div className="heading-text w-8/12 m-auto">
          <p className="font-semibold text-3xl p-2">Otra formas de dar</p>
          <p>
            Dar en línea (web, texto o aplicación móvil) es la forma más segura,
            sencilla y eficiente de dar. Pero si esto no es posible, siga estas
            opciones
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
      <div className="section bg-gray-200 p-28">
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
      <Footer />
    </div>
  );
};

export default page;
