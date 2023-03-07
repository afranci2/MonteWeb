import React from "react";
import Navbar from "../../sections/navbar/Navbar";
import Header from "../../sections/header/Header";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import TithelyGiving from "../../sections/body/giving/Giving";
import StripeGiving from "../../sections/body/giving/Stripegiving";
const HeaderImage = "https://monte-assets.s3.amazonaws.com/img/donar.jpg";
const Computer =
  "https://monte-assets.s3.amazonaws.com/img/macbook+whilte+sp.png";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        image={HeaderImage}
        headerText={"Donar de Manera Facil"}
        buttonColor={"bg-yellow-400 text-black"}
        buttonLink={"/donar"}
        buttonText={"Dar Ahora"}
        contentPosition={"center"}
        subheadingText={"lore wfrwf"}
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
    </div>
  );
};

export default page;
