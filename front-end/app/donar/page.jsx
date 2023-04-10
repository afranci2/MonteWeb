import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import Footer from "../../sections/footer/Footer";
const HeaderImage = "https://monte-assets.s3.amazonaws.com/img/donar.jpg";
const Computer =
  "https://monte-assets.s3.amazonaws.com/img/macbook+whilte+sp.png";

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
