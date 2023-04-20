import React from "react";
import Navbar2 from "../../../sections/navbar/Navbar2";
import Footer from "../../../sections/footer/Footer";

import BodySectionImageLeft from "../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import BodySectionImageRight from "../../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";

const firstpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";
const secondpic =
"https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274641260_7121963861209021_5223219459611293665_n.jpg"
const third =
"https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/245199343_6305001846238564_6030649010072531409_n.jpg"

const pic3="https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++048.jpg"

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
            <h1 className="font-semibold font-serif text-5xl">Lideres</h1>
            <h1 className="py-2 text-sm font-light">
              Conoce los lideres del Movimiento Pentecostal Monte Sinai
            </h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="h-full">
            <img className="object-cover h-full w-screen" src={pic3}></img>
          </div>
        </div>

        <BodySectionImageLeft
          headingText={
            <div>
              <p>Rev. Samuel Francisco</p>
              <p className="text-sm  font-medium">Presidente</p>
            </div>
          }
          subheadingText={
            `Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro 
            llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para
             que unidos, podamos cumplir el propósito de Dios. Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro 
             llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para
              que unidos, podamos cumplir el propósito de Dios. Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro 
              llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para
               que unidos, podamos cumplir el propósito de Dios.`
          }
          subheadingText2={
            "  Por lo tanto, deseamos por este medio, presentarte el propósito principal de esta revista: "
          }
          image={secondpic}
        />
        <BodySectionImageLeft
          headingText={
            <div>
              <p>Isabel Francisco</p>
              <p className="text-sm  font-medium">Vice Presidenta</p>
            </div>
          }
          subheadingText={
            "Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para que unidos, podamos cumplir el propósito de Dios."
          }
          subheadingText2={
            "  Por lo tanto, deseamos por este medio, presentarte el propósito principal de esta revista: "
          }
          image={third}
        />
        <BodySectionImageRight
          headingText={
            <div>
              <p>Dr. Anthony Francisco, Sr.</p>
              <p className="text-sm  font-medium">Tesorero</p>
            </div>
          }
          subheadingText={
            "Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para que unidos, podamos cumplir el propósito de Dios."
          }
          subheadingText2={
            "  Por lo tanto, deseamos por este medio, presentarte el propósito principal de esta revista: "
          }
          image={firstpic}
        />
        <BodySectionImageRight
          headingText={
            <div>
              <p>Flor DeLaRoca</p>
              <p className="text-sm  font-medium">Secretaria</p>
            </div>
          }
          subheadingText={
            "Reciban un cordial saludo y muchas bendiciones de los Pastores: el Rev. Samuel e Isabel Francisco. Deseamos hacerle conocer nuestro llamado, misión, visión y formación del Movimiento Pentecostal Monte Sinaí y a la misma vez, invitarle a usted y a toda su familia para que unidos, podamos cumplir el propósito de Dios."
          }
          subheadingText2={
            "  Por lo tanto, deseamos por este medio, presentarte el propósito principal de esta revista: "
          }
          image={firstpic}
        />
      </section>

      <Footer />
    </div>
  );
}

export default page;
