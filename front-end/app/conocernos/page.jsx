import React from "react";
import Navbar2 from "../../sections/navbar/Navbar2";
import Header from "../../sections/header/Header";
import BodySectionImageLeft from "../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
import BodySectionImageRight from "../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import IglesiasChurchSection from "../../sections/body/iglesiaschurchsection/IglesiasChurchSection";
import Link from "next/link";
import Footer from "../../sections/footer/Footer";
import Banner2 from "../../components/banner/Banner2";
import { IoIosArrowForward } from "react-icons/io";
import ChurchZip from "../../components/churchzip/ChurchZip";
const ConocernosVideo = "https://monte-assets.s3.amazonaws.com/video/promo.mp4";
const pastor2 = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274687118_7121994934539247_7298005248163609642_n.jpg"
const CreenciasImage = "https://monte-assets.s3.amazonaws.com/img/bible.jpg";
const ConocernosHero = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const churchImage =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Couple/274685981_7121899154548825_4616241431371263813_n.jpg";
const Javier = "https://monte-assets.s3.amazonaws.com/img/javier.jpg";
import CreenciasFundamentales from "../../sections/body/creeniasFundamentales/CreenciasFundamentales";
import Lideres from "../../sections/lideres/Lideres";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = "https://monte-assets.s3.amazonaws.com/img/becky.jpg";
const Pastora =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/274605267_7121837261221681_6242282331205613768_n.jpg";
const Anthony =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Mens/305628064_8245683625503700_961665000343553299_n.jpg";
const otherOne =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Mens/312465605_8245751052163624_6268065564327914459_n.jpg";
const anniversary =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";
const vid2 = "https://monte-assets.s3.amazonaws.com/video/Monte+Sinai+Promo2.mp4"

async function fetchChurches() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-churches`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const data = await res.json();

    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const res = await fetchChurches();
  const lidereslist = [
    {
      id: 0,
      image: Pastor,
      title: "Rev.",
      position: "Presidente",
      last_name: "Francisco",
      first_name: "Samuel",
    },
    {
      id: 1,
      image: Pastora,
      title: "Rev.",
      position: "Vice Presidente",
      last_name: "Francisco",
      first_name: "Isabel",
    },
    {
      id: 2,
      image: Becky,
      title: "",
      position: "Secretaria",
      last_name: "Delaroca",
      first_name: "Flor",
    },
    {
      id: 3,

      image: Anthony,
      title: "Dr.",
      position: "Tesorero",
      last_name: "Francisco",
      first_name: "Anthony",
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <Navbar2 id="top" />
        <div className="">
          <Header
            image={ConocernosHero}
            headerText="Conocernos"
            children={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={undefined}
            subheadingText={
              "Descubre nuestra historia, propósito, quiénes somos y lo que representamos"
            }
          />
        </div>
        <Banner2 position={"bg-slate-100"}>
          <ul className="hidden gap-8 text-black text-md font-medium p-8 md:flex text-sm">
            {/*use dropdown component             <Dropdown />
             */}

            <a href="#nace">
              <li key={1}>
                <p>Como Nace Monte Sinai?</p>
              </li>
            </a>
            <a href={"#presidencia"}>
              <li key={2}>
                <p>Mensajes del Presidencia</p>{" "}
              </li>
            </a>
            <a href="#creencias">
              <li key={3}>
                <p>Creencias</p>
              </li>
            </a>
            <a href="#historia-h">
              <li key={4}>
                <p>Historia</p>{" "}
              </li>
            </a>

            <a href="#lideres">
              <li key={5}>
                <p>Lideres</p>{" "}
              </li>
            </a>
            <a href={"#iglesias-i"}>
              <li key={6}>
                <p>Iglesias</p>{" "}
              </li>
            </a>
          </ul>
        </Banner2>
        <BodySectionImageLeft

          backgroundColor={"bg-white"}
          image={Javier}
          headingText="Nuestra Misión
        "
          subheadingText={
            "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
          }
        ></BodySectionImageLeft>
        <Link href={"/conocernos/historia/como-nace-monte-sinai"}>
          <Header
          id="nace"
            children={undefined}
            image={undefined}
            headerText={`"Como Nace Monte Sinai?"`}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={vid2}
            subheadingText={"(Relatado por: Pastora Isabel Francisco)"}
            containerheight={undefined}
            show={undefined}
          />{" "}
        </Link>
        <div className="overflow-hidden relative gap-8  grid md:grid-cols-2 w-full py-12 p-8 md:gap-0">
          <div className="text-white m-auto w-11/12">
            <div id="presidencia" className="overflow-hidden bg-black h-full rounded-lg">
              {" "}
              <Link href={"/conocernos/historia/conociendo-el-presidente"}>
                <Header
                  video={undefined}
                  contentPosition="center"
                  headerText="Un Mensaje del Presidente"
                  children={undefined}
                  image={pastor2}
                  classChangeText={undefined}
                  containerheight={"h-screen"}
                ></Header>
              </Link>
            </div>
          </div>
          <div className="text-white m-auto w-11/12">
            <div className="overflow-hidden bg-black h-full w-full rounded-lg">
              {" "}
              <Link href="/conocernos/mensaje-de-la-vicepresidenta">
                <Header
                  video={undefined}
                  contentPosition="center"
                  headerText="Un Mensaje de la Vicepresidenta"
                  children={undefined}
                  image={Pastora}
                  classChangeText={undefined}
                  containerheight={"h-screen"}
                ></Header>
              </Link>
            </div>
          </div>
        </div>
        <div className="div" id="creencias">
          <Header
            children={undefined}
            image={CreenciasImage}
            headerText={"Creencias Fundamentales"}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={undefined}
            video={undefined}
            subheadingText={undefined}
            containerheight={"h-96"}
          />
          <div className="h-full w-full">
            <CreenciasFundamentales />
          </div>
        </div>

        <div id="historia-h">
          <BodySectionImageRight
            image={anniversary}
            headingText="Historia"
            subheadingText={
              " Descubre cómo comenzamos y cómo hemos crecido como comunidad.​"
            }
            buttonColor="bg-red-800"
          >
            <ul className="grid grid-cols-2 gap-2 w-10/12 py-4 sm:m-auto">
              <li className="bg-gray-300/20 rounded-sm hover:bg-white">
                <Link href="/conocernos/historia/">
                  <div className=" p-4">
                    <p className="font-bold text-xs">Historia</p>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-300/20 rounded-sm hover:bg-white">
                <Link href="/conocernos/historia/como-nace-monte-sinai">
                  <div className=" p-4">
                    <p className="font-bold text-xs">Como Nace Monte Sinai?</p>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-300/20 rounded-sm hover:bg-white">
                <Link href="/conocernos/historia/conociendo-el-presidente">
                  <div className=" p-4">
                    <p className="font-bold text-xs">
                      Conociendo al Rev. Samuel Francisco
                    </p>
                  </div>
                </Link>
              </li>
              <li className="bg-gray-300/20 rounded-sm hover:bg-white">
                <Link href="/conocernos/historia/experiencias-de-westminster">
                  <div className=" p-4">
                    <p className="font-bold text-xs">
                      Las Experiencias de Westminste St.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="py-8 ">
              <Link href="/conocernos/historia">
                <div className=" flex justify-center gap-4 md:justify-start md:ml-">
                  <button className="text-black text-sm  font-bold  rounded-lg text-center ">
                    Historia{" "}
                  </button>{" "}
                  <IoIosArrowForward
                    className=" flex items-center my-auto"
                    size={12}
                  />{" "}
                </div>
              </Link>
            </div>
          </BodySectionImageRight>
        </div>
        <div id="lideres">
          <Lideres show_link={true} pastors={lidereslist} />
        </div>
      </div>
      <section className="relative pt-4">
        <div className="md:hidden">
          <Header
            image={otherOne}
            headerText="Conectate con Nosotros"
            children={undefined}
            classChangeText={undefined}
            buttonColor={undefined}
            buttonLink={undefined}
            buttonText={undefined}
            contentPosition={"center"}
            video={undefined}
            subheadingText={
              "Descubre cómo puedes formar parte de nuestra familia de fe"
            }
            containerheight={"h-60"}
          />
        </div>

        <ChurchZip />

        <IglesiasChurchSection churches={res} conocernos={"Wrg"} />
      </section>

      <Footer />
    </div>
  );
};

export default page;
