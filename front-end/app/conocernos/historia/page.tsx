import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Navbar2 from "../../../sections/navbar/Navbar2";
import Footer from "../../../sections/footer/Footer";
import Header from "../../../sections/header/Header";
import Banner from "../../../components/banner/Banner";
import Banner2 from "../../../components/banner/Banner2";
import pastor1 from "./pastor1.webp";
import pastor2 from "./pastor2.webp";
import historia from "./historia.webp";

const pic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/241045481_6088712877867463_5615439554713167151_n.jpg";
import BodySectionImageLeft from "../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import BodySectionImageRight from "../../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
const pic2 =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/127053599_4787008098037954_87363432099015818_n.jpg";
const firstpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";
const secondpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274687118_7121994934539247_7298005248163609642_n.jpg";
const third =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274641260_7121963861209021_5223219459611293665_n.jpg";
import Image from "next/image";
import Link from "next/link";
const videoheader =
  "https://monte-assets.s3.amazonaws.com/video/Monte+Sinai+Promo2.mp4";
import Video from "../../../sections/video/Video";
import gradient from "./gradient.webp";

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
            <h1 className="font-semibold font-serif text-5xl">Historia</h1>
            <h1 className="py-2 text-sm font-light">
              DEL MOVIMIENTO PENTECOSTAL MONTE SINAÍ
            </h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>

          <div className="object-cover">
            <video
              className="try max-h-full h-screen max-w-full overflow-hidden w-screen object-cover mx-auto"
              autoPlay
              muted
              loop
              playsInline
              src={videoheader}
            ></video>
          </div>
        </div>

        <BodySectionImageLeft
          blog3={
            <div className="py-4 pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">Preambulo</h2>
              <p className=" ">Líderes Fundadores </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Antes de comenzar a describir la trayectoria y el crecimiento
                del Movimiento Pentecostal Monte Sinaí, debemos comentar un poco
                de sus Líderes fundadores, que mediante su valor y su esfuerzo
                han hecho posible poder edificar un pueblo para la gloria y
                honra de Dios.
              </p>
              <br></br>
              <p>El Rev. Samuel Francisco nos expresa:</p>
              <br></br>
              <p className=" text-sm font-bold">
                “Sobre su futuro, no podemos tener control, ya que el mismo,
                escapa de nuestras manos. Pero una cosa sí sabemos, y es que
                Dios, ya ha diseñado un plan muy especial para nuestras vidas, y
                que dependerá en gran parte de nosotros mismo, al hacernos
                conscientes de esta realidad de Dios y de ese plan maestro.
                Preparándonos y conduciéndonos para caminarlo paso a paso,
                cumpliendo cada detalle de este hasta que quede completado...
              </p>
              <br></br>
              <p className="font-bold">
                {" "}
                ...¡Qué maravilloso y sublime es ver cumplir nuestros sueños
                para luego, poder terminar la carrera en paz y con gozo! No es
                que hayamos terminado, sino que nosotros todavía no sentimos
                haber terminado el propósito de Dios en el estado de Rhode
                Island. Nos sentimos inconforme con lo poco que hemos realizado
                para Dios; No obstante, entendemos que ya sea poco o mucho,
                debemos realizarlo para el honor, gloria y honra del Supremo
                Señor de nuestras vidas.”
              </p>
              <br></br>
              <p>
                <p>
                  Digámoslo de esta manera –Hay hombres y mujeres que nacen
                  marcados por Dios para una tarea muy especial, y esto es lo
                  que ocurre con el Rev. Samuel y su esposa, la Pastora Isabel
                  Francisco. Ambos destinados para llenar una estadística de los
                  guerreros de Dios. Nacidos de dos bellas islas, Puerto Rico y
                  la República Dominicana. Nacidos de familias humildes.
                </p>
              </p>
            </div>
          }
          blog={
            <div className="pt-8 sm:pt-0">
              <div>
                <Image
                  className="w-full"
                  src={pastor1}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
              </div>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <Header
          image={historia}
          headerText={"Nuestro Historia en Movimiento"}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={"center"}
          video={undefined}
          subheadingText={undefined}
          containerheight={"h-96"}
          show={false}
        >
          <Image
            className=" w-full flex place-content-center justify-center h-full absolute m-auto z-40  md:w-full"
            src={gradient}
            alt="he"
          />
        </Header>
        <Header
          image={undefined}
          headerText={undefined}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={"center"}
          video={undefined}
          subheadingText={undefined}
          containerheight={"h-screen"}
          show={false}
          children={undefined}
        ></Header>

        <Link href={"/conocernos/historia/como-nace-monte-sinai"}>
          <Header
            children={undefined}
            image={pic2}
            headerText={`"Como Nace Monte Sinai?"`}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={undefined}
            subheadingText={"(Relatado por: Pastora Isabel Francisco)"}
            containerheight={undefined}
            show={undefined}
          />{" "}
        </Link>
        <Link href={"/conocernos/conocernos/conociendo-el-presidente"}>
          <Header
            children={undefined}
            image={secondpic}
            headerText={`"Conociendo Con Profundidad Al Rev. Samuel Francisco"`}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={undefined}
            subheadingText={"(Relatado por: Pastora Isabel Francisco)"}
            containerheight={undefined}
            show={undefined}
          />{" "}
        </Link>
        <Link href={"/conocernos/conocernos/conociendo-la-vicepresidenta"}>
          <Header
            children={undefined}
            image={pastor2}
            headerText={`"Las Experiencias Vividas Durante la Estadia en Westminster St."
            `}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={undefined}
            subheadingText={"(Relatado por: Pastora Isabel Francisco)"}
            containerheight={undefined}
            show={undefined}
          />{" "}
        </Link>
        <div className="grid grid-cols-2 w-full py-12 p-8">
          <div className="text-white m-auto w-11/12">
            <div className="overflow-hidden bg-black w-full rounded-lg">
              {" "}
              <Link href={"/conocernos/historia/conociendo-el-presidente"}>
                <Header
                  children={undefined}
                  image={secondpic}
                  headerText={`Un Mensaje del Presidente
            `}
                  classChangeText={undefined}
                  buttonColor={undefined}
                  buttonLink={undefined}
                  buttonText={undefined}
                  contentPosition={"center"}
                  video={undefined}
                  subheadingText={"(Relatado por: Rev. Samuel Francisco)"}
                  containerheight={undefined}
                  show={undefined}
                />{" "}
              </Link>
            </div>
          </div>
          <div className="text-white m-auto w-11/12">
            <div className="overflow-hidden bg-black h-full w-full rounded-lg">
              {" "}
              <Link href={"/conocernos/historia/conociendo-el-presidente"}>
                <Header
                  children={undefined}
                  image={pic}
                  headerText={`Un Mensaje de la Vicepresidenta
            `}
                  classChangeText={undefined}
                  buttonColor={undefined}
                  buttonLink={undefined}
                  buttonText={undefined}
                  contentPosition={"center"}
                  video={undefined}
                  subheadingText={"(Relatado por: Pastora Isabel Francisco)"}
                  containerheight={"h-full"}
                  show={undefined}
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default page;
