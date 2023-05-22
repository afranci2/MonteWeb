import React from "react";
import Navbar from "../../../sections/navbar/Navbar2";
import Footer from "../../../sections/footer/Footer";
import Header from "../../../sections/header/Header";
import BodySectionImageLeft from "../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
const image2="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/308582926_8109322895806441_1503573631717639969_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LKPn4_W_2MAAX_bx8tW&_nc_ht=scontent-bos5-1.xx&oh=00_AfDM3Z8e0PlzbQWbgEeGS5rVKPCUWf0rAULGQfCjxi-I1A&oe=646FFDC4"
const heroimage =
  "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/105024806_4062236777181760_4080296992700234302_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=pv_ql8AtAosAX-WtbU7&_nc_ht=scontent-bos5-1.xx&oh=00_AfBKjwONDoqXPrjlgrhN1mgMY6qVuLxrHooFCrFkPhuj7w&oe=649368F4";
const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        children={undefined}
        image={heroimage}
        headerText={"Evangelismo de Jovenes (Youth Evangelism)"}
        classChangeText={undefined}
        buttonColor={undefined}
        contentPosition={undefined}
        containerheight={undefined}
        mapLink={"/"}
        direction={undefined}
      />
      <BodySectionImageLeft
        backgroundColor={"bg-white"}
        image={image2}
        headingText="Nuestra Misión
"
        subheadingText={
          "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
        }
      ></BodySectionImageLeft>

      <div className="flex m-auto">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeQFne_Uic7_AzP2QnNTS4j6ctoIevGiFxP8DieEwPz99HjaQ/viewform?embedded=true"
          width="1500"
          height="1991"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default page;
