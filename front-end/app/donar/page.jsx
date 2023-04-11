import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import Footer from "../../sections/footer/Footer";
const HeaderImage = "https://monte-assets.s3.amazonaws.com/img/donar.jpg";
const Computer =
  "https://monte-assets.s3.amazonaws.com/img/macbook+whilte+sp.png";
import { MainButton } from "../../components";
import Link from "next/link";
const Mailbox = "https://monte-assets.s3.amazonaws.com/icon/icon-mailbox.png";

import Image from "next/image";
import TithelyGiving from "../../sections/body/giving/Giving";
const Giving = "https://monte-assets.s3.amazonaws.com/icon/give-money.png";
import StripeGiving from "../../sections/body/giving/Stripegiving";
const Logo =
  "https://assets-global.website-files.com/5f6a31379c9e2712518b8d6c/61fbe41d8e639d18d7c516b7_Logomark.svg";
import TitheSection from "../../sections/body/giving/TitheSection";

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
        <TitheSection />
      <Footer />
    </div>
  );
};

export default page;
