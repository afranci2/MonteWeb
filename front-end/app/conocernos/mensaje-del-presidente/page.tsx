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
const secondpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274687118_7121994934539247_7298005248163609642_n.jpg";

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
            <h1 className="py-2 text-sm font-light">
              Nos relata la Pastora Isabel Francisco
            </h1>
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
          image={secondpic}
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
          headingText={"Un Proposito"}
          subheadingText={
            "Su propósito es presentarte a un Dios que todo lo puede, aunque hayan cosas imposibles para los hombres, para Dios todo es posible. "
          }
          subheadingText2={
            "También deseamos hacerte enterar, de cómo ese Dios, que es Todopoderoso, ha sido el promotor y consumador de todo cuanto el Movimiento Pentecostal Monte Sinaí, ha estado llevando a cabo y que ha salido de su corazón, que hagamos para su Gloria manifestándose a través de nosotros como Iglesia, dándo a conocer al mundo, la Misión y la Visión que nos ha sido encomendada en S. Marcos 16:15, a nosotros como pueblo suyo que somos, mediante los acontecimientos ocurridos en nuestra trayectoria."
          }
          image={undefined}
        ></BodySectionImageRight>
        <BodySectionImageRight
          subheadingText="Somos un Movimiento Pentecostés, el cual está compuesto por varios Ministerios puesto por Dios. Un Cuerpo Ministerial que procura la Unidad del Espíritu en los vínculos de la paz, en el que se congrega un grupo de personas redimidas por la Sangre de Cristo, para adorar al Señor, para confraternizar, para aconsejar mutuamente, para recibir instrucciones de la Santa Bíblia, con el objeto de propagar el Evangelio, de fomentar la Obra del Ministerio y el ejercicio de los Dones Espirituales, tal como lo enseña el NT. Con el mismo propósito que lo hacía la Iglesia Primitiva (S. Marcos 16:15). "
          subheadingText2="Levantándo y creándo un cuerpo representativo de la gente redimida. Creyentes llenos del Espíritu Santo, comisionando en ellos: Evangelístas, Pastores, Maestros y Misioneros, para el trabajo local y la evangelización del mundo. Nuestro propósito y objetivo es promover actividades y cultos conforme al orden Bíblico. Nuestro Movimiento siempre se ha caracterizado en todo su apogeo desde antes de su comienzo, con el Ministerio de las Misiones, tanto locales como Internacionales.

          "
          image={undefined}
        />
        <BodySectionImageLeft
          subheadingText="Como organización, tenemos la responsabilidad de predicar las Buenas Nuevas, la cual nace en nuestros corazones con el propósito de ser un instrumento del Todopoderoso. Que se esfuerza en cumplir la gran comisión dada en S. Marcos 16:15: “Id y predicad el evangelio a toda criatura…” "
          subheadingText2="De esa manera, podamos alcanzar a hombres y mujeres que se hayan en ese estado lamentable del pecado y sean libres por medio de su poderosa Palabra, para que así, puedan lograr un mejor destino para sus vidas. También deseamos hacerte concientizar que el Dios de hoy, es el mismo de ayer y seguirá siéndolo por todos los siglos de los siglos."
          image={undefined}
          blog="ref"
          blog2="ef"
        ></BodySectionImageLeft>
      </section>

      <Footer />
    </div>
  );
}

export default page;
