import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Navbar2 from "../../../../sections/navbar/Navbar2";
import Footer from "../../../../sections/footer/Footer";
import Header from "../../../../sections/header/Header";

const pic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/241045481_6088712877867463_5615439554713167151_n.jpg";
import BodySectionImageLeft from "../../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
import BodySectionImageRight from "../../../../sections/body/bodyImageText/imageLeftTextRight/BodySectionImageLeft";
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
              Conociendo con Profundidad al Rev. Samuel Francisco
            </h1>
            <h1 className="py-2 text-sm font-light">
              La conducción divina hacia propósitos eternos
            </h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="h-full">
            <img className="object-cover h-full w-screen" src={secondpic}></img>
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
                Ya tuvimos la oportunidad de conocer la trayectoria del comienzo
                de la historia Personal y Ministerial de la Pastora Isabel
                Francisco, hasta el día de hoy. Su relato de cómo Dios la fue
                conduciendo durante sus años de juventud y todo su peregrinaje
                hasta llegar a los Estados Unidos. Moviéndola de PR, hasta
                traerla al estado de Rhode Island, sin ella saber los propósitos
                reales de Dios para con ella y para con su esposo el Rev. Samuel
                Francisco, los cuales se conocen en estas tierras desconocidas
                para ambos.
              </p>
              <br></br>
              <p className=" text-sm font-bold">
                Y como Dios los usaría con propósitos futuros que los conducirán
                a propósitos eternos. Ahora tendremos la oportunidad de conocer
                la trayectoria Personal y Ministerial por parte del Rev. Samuel
                Francisco, quien nos relata sin censura lo acontecido durante su
                trayectoria.
              </p>
            </div>
          }
          blog={
            <div className="pt-8 sm:pt-0">
              <div>
                <Image
                  className="w-full"
                  src={secondpic}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
                <p className="text-xs py-2">Src: Pastor Samuel</p>
              </div>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <BodySectionImageLeft
          blog3={
            <div className=" pb-8 w-10/12 border-b-2 m-auto">
              <h2 className="font-bold text-xl m-auto text-center">
                Trajectory personal y ministerial del Rev. Samuel Francisco.
              </h2>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                El Rev. Samuel Francisco nació en el año 1950, en la República
                Dominicana. Durante toda su vida de niñez y juventud ha estado
                acostumbrado a oír el tema de la fe. Creció, sintiendo la gran
                necesidad por llenar su vida de Dios, en la soledad de momentos
                y frustraciones de la adolescencia con la insistencia de la voz
                de Dios hablando a su corazón. Hubo momentos en que las veces
                que trató de decidir por amar a Dios, la influencia del mundo y
                de sus amistades no cristianas, le hacían claudicar. Sintiendo
                que necesitaba un cambio en su vida, a la edad de los 18 años,
                migró a los EU, cambiando un país pequeño por la gran manzana,
                la ciudad de Nueva York.
              </p>
              <Image
                className="w-full pt-8"
                src={secondpic}
                width={500}
                height={500}
                alt="pastor-pic"
              ></Image>
              <p className="text-xs py-2">Src: Pastor Samuel</p>
            </div>
          }
          blog={
            <div className="pt-8">
              <div>
                <p>
                  En el año 1968, durante un invierno frío, llegó el Rev. Samuel
                  Francisco con sus hermanos y su madre, Carmen Francisco a
                  reunirse con su padre que estaba en NY, en busca de un nuevo
                  horizonte, una nueva oportunidad para su vida. Pocos meses
                  después, se encontró con Jesús de Nazaret, el cual le
                  transformó y cambió su vida.
                </p>
                <br></br>
                <p>
                  En una ciudad tan grande como la ciudad de Nueva York, sentía
                  que su vida no tenía propósitos, por lo que decidió aventurar
                  y descubrir nuevos horizontes, llegando al estado de Rhode
                  Island, situándose en la ciudad de Providence. Sin conocer
                  absolutamente a nadie en la ciudad, sin tener una familia que
                  le esperaba y sin dinero suficiente para rentar un cuarto.
                </p>
              </div>

              <br></br>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <BodySectionImageRight
          blog3={true}
          subheadingText={
            <div>
              <p> El Rev. Samuel Francisco, lleno de emoción nos revela:</p>
              <br></br>
              <p className="font-bold text-xl">
                “Me gozo en ver a mi hermano frente a este trabajo maravilloso
                de la Iglesia Puerta de Refugio.”{" "}
              </p>
            </div>
          }
          image={firstpic}
        ></BodySectionImageRight>
        <BodySectionImageLeft
          blog2={
            <div className="text-sm">
              <p>
                La Hermana Isabel Otero (quien es Isabel Francisco, con nombre
                de soltera), había venido de Puerto Rico, enviada como misionera
                a la ciudad de Providence. Pero los primeros que llegaron a
                Providence fueron la hna. Margarita y su esposo Asdrúbal.
                Llegaron a la Iglesia Aposento Alto del Movimiento Internacional
                en busca de asesoramiento y alojamiento provisional. Y es ahí,
                cuando la madre del Rev. Samuel Francisco los aloja en su casa.
                Estuvieron Margarita y su esposo Asdrúbal, dos noches. Llegaron
                un viernes y al día siguiente consiguieron el apartamento en la
                Cranston St. Ya el domingo, se regresaron a NY en busca de la
                hna. Isabel Otero (Isabel Francisco hoy día).
              </p>
            </div>
          }
          blog={
            <div className="">
              <div>
                <Image
                  className="w-full"
                  src={secondpic}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
                <p className="text-xs py-2">Src: Pastor Samuel</p>
              </div>{" "}
            </div>
          }
          image={undefined}
        ></BodySectionImageLeft>
        <BodySectionImageLeft
          blog2={
            <div className="text-sm pt-8">
              <p className="">
                Una vez, ya los tres estando establecidos en Providence, RI, la
                hna. Margarita comenzó su trabajo Ministerial. En aquél
                entonces, la hna. Margarita Féliz de Cilfredo, fungía como
                Líder, puesto que tenía un poco más de experiencia en cuantos a
                las Misiones. Debido a unos contratiempos que confrontó el
                matrimonio Cilfredo, la hna (Pastora). Isabel Francisco tuvo que
                tomar el mando de la obra. Pasado ya tres (3) años y la obra en
                su apogeo, comenzaron, el Rev. Samuel e Isabel Otero, a
                relacionarse (No es necesario entrar en detalles, ya que ella lo
                expresa con más detalles en su reseña). Cuando hubo un noviazgo
                ya formal, en el año 1974, la obra tenía más de 2 años fundada.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <p>
                La Pastora Isabel y el Rev. Samuel Francisco se casaron en el
                año 1975. La iglesia en ese entonces se identificaba como el
                Centro Evangelístico Movimiento Misionero Mundial. Una
                organización, con la cual trabajaron hasta el año 1996. Después,
                en ese mismo año, tuvieron que separarse del Movimiento por
                problemas internos de dicha organización.
              </p>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <BodySectionImageLeft
          blog3={true}
          subheadingText={
            <div>
              <p> El Rev. Samuel Francisco nos comenta: </p>
              <br></br>
              <p className="font-bold text-xl">
                “... debemos mucho respeto y amor al Movimiento Misionero
                Mundial. Pero hay veces, que Dios nos pasa por diferentes etapas
                para llevarnos a donde él quiere”
              </p>
            </div>
          }
          image={firstpic}
        ></BodySectionImageLeft>
        <BodySectionImageLeft
          blog2={
            <div className="text-sm pt-8">
              <p>
                Aquí estamos todavía dando testimonio de que nuestro Dios, “Es
                Bueno”. No ha sido fácil para ellos hacer la labor ministerial
                que Dios les ha encomendado, puesto que han tenido que pasar por
                muchas pruebas. Pero Dios ha sido Bueno, aunque se han visto
                desamparado de los hombres, pero no de Dios. Ambos, han
                confrontado pruebas fuertes, grandes desalientos, pero no han
                caído, sino que cada día, Dios los hace fuertes y firmes como
                dice el Salmo 92:12: “El Justo florecerá como la Palmera y
                crecerá como el Cedro en el Líbano.” Han sufrido como mujer con
                dolores de parto y como resultado, han parido hijos
                espirituales.
              </p>

              <p>
                Durante este año 2016, Dios nos ha permitido llegar al Sur de
                Carolina, para trabajar y fortalecer la obra que allí opera por
                medio de los Obreros Missia y Arturo Salazar, quienes están
                frente a esta obra.
              </p>
            </div>
          }
          blog={
            <div className="">
              <div>
                <Image
                  className="w-full pt-8"
                  src={secondpic}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
                <p className="text-xs py-2">Src: Pastor Samuel</p>
              </div>

              <br></br>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <BodySectionImageLeft
          blog3={
            <div className=" pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">Conclusion</h2>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Los Pastores desean aprovechar este espacio para enviarles un
                saludo pastoral y bendiciones a todos aquellos que estuvieron
                junto a ellos en este camino diciéndoles:
              </p>
              <br></br>
              <p className="font-bold text-lg">
                “Dios bendiga a todos aquellos hermanos y hermanos que ya no
                están con nosotros, y otros que están descansando en la
                presencia de Dios. La iglesia Monte Sinaí, siempre se ha
                perfilado como una Iglesia de fuego espiritual y un gran amor
                por la evangelización. Una iglesia que se ha caracterizado por
                su seriedad y su testimonio intachable.”
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <div>
                <Image
                  className="w-full pt-8"
                  src={secondpic}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
                <p className="text-xs py-2">Src: Pastor Samuel</p>
              </div>

              <br></br>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
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
