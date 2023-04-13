import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Navbar2 from "../../../sections/navbar/Navbar2";
import Footer from "../../../sections/footer/Footer";
import Header from "../../../sections/header/Header";
import Banner from "../../../components/banner/Banner";
import Banner2 from "../../../components/banner/Banner2";
const pic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/241045481_6088712877867463_5615439554713167151_n.jpg";
import BodySectionImageLeft from "../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import BodySectionImageRight from "../../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
const firstpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";
function page() {
  return (
    <div>
      <div className="relative">
        {" "}
        <Navbar2 />
      </div>
      <div className="h-16 w-full "></div>
      <section className="">
        <div className=" relative overflow-hidden  m-auto items-center w-full  flex justify-center h-96">
          <div className="z-40  m-auto absolute text-white  w-10/12 ">
            <h1 className="font-semibold font-serif text-5xl">
              Un Mensaje Del Vice Presidenta
            </h1>
            <h1 className="py-2 text-sm font-light">Nos relata la Pastora Isabel Francisco</h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="h-full">
            <img className="object-cover h-full w-screen" src={pic}></img>
          </div>
        </div>
        <BodySectionImageLeft
          headingText={"Bienvenida Pastoral"}
          subheadingText={
            "Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para que unidos, podamos cumplir el propósito de Dios."
          }
          subheadingText2={
            "  Por lo tanto, deseamos por este medio, presentarte el propósito principal de esta revista: "
          }
          image={firstpic}
        />
        <Header
          children={undefined}
          image={undefined}
          headerText={`"Enterate"`}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={undefined}
          video={undefined}
          subheadingText={undefined}
          containerheight={undefined}
          show={undefined}
        />{" "}
        <BodySectionImageRight
          headingText={"Erg"}
          subheadingText={"EWrg"}
          subheadingText2={"erg"}
          image={undefined}
        />
      </section>

      <Footer />
    </div>
  );
}

export default page;
