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
const pic2 =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Isabel/127053599_4787008098037954_87363432099015818_n.jpg";
const firstpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/WIRECAST_SlidShow++035.jpg";
const secondpic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274687118_7121994934539247_7298005248163609642_n.jpg";
const third =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Pastors+Images/Samuel/274641260_7121963861209021_5223219459611293665_n.jpg";
import Image from "next/image";

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
              Un Mensaje del Presidente
            </h1>
            <h1 className="py-2 text-sm font-light">
              Nos relata el Rev. Samuel Francisco
            </h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="h-full">
            <img className="object-cover h-full w-screen" src={pic}></img>
          </div>
        </div>
        <BodySectionImageLeft
          headingText={"¿Por qué nació el Movimiento Pentecostal Monte Sinaí?"}
          subheadingText={
            "Esta es una pregunta muy importante. Todas las organizaciones tienen una razón de ser. Algunas nacen y desaparecen, y otras nacen y son permanentes. ¿Cuál es la diferencia entre ambas? "
          }
          subheadingText2={`Una tuvo su origen en la buena voluntad humana; la otra nació del genuino llamado de Dios. Este Movimiento nació con dolor de parto del corazón de Dios, y lo que viene de Dios es permanente.
`}
          image={firstpic}
        />
        <Header
          children={undefined}
          image={secondpic}
          subheadingText={`Alcanzar al mundo entero para el Rey de reyes y Señor de señores`}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={"center"}
          video={undefined}
          headerText={`"La Visión de un Llamado Divino"`}
          containerheight={undefined}
          show={undefined}
        />{" "}
        <BodySectionImageRight
          subheadingText={`Al escribir este preámbulo, sólo somos unas pocas semillas que Dios tiene en sus manos para esparcir por la tierra. Sólo Dios sabe lo que seremos mañana si su regreso se retrasa. Pero aunque el regreso de Cristo se retrase o aparezca justo en el momento en que estoy escribiendo, nuestra visión seguirá siendo la misma: alcanzar el mundo entero para el Rey de reyes y Señor de señores.

`}
          subheadingText2={`Dios está buscando hombres vigilantes que anuncien a viva voz la buena nueva de la salvación, que prediquen la palabra de Dios a tiempo y fuera de tiempo, hombres que se dediquen exclusivamente al Señor; hombres incansables que conozcan el uso de la Espada del Espíritu Santo y que se cubran con la armadura de Dios para enfrentar a una sociedad con ataduras y yugos que sólo Dios sabe romper; una sociedad desorientada que pretende saber hacia dónde va mientras se pierde en el ancho mar de la vida, navegando sin destino.

`}
          image={firstpic}
        ></BodySectionImageRight>
        <BodySectionImageRight
          subheadingText={`Hoy, hay dos grandes fuerzas que destruyen nuestra sociedad de la angustia. Una de ellas es la fuerza exterior de Satanás, haciendo sus grandes ofertas engañosas para embaucar a los hombres faltos de conocimiento de Dios, ganándolos con la riqueza falsa que pasa rápidamente, con los deseos carnales que llegan a una gran variedad de trucos diabólicos como: la pornografía con veneno que mata, las drogas, el aborto criminal, el adulterio fatal, y la terrible fornicación que se acepta como algo normal.

          `}
          subheadingText2={`Otra fuerza tan peligrosa como la mencionada anteriormente, es la religión organizada de hoy, con todos sus trucos y falsedades. La religión ata al hombre a Dios, pero ha creado muchos dioses de su propia imaginación y ha prestado servicio y el resultado final es el mismo: un mundo con muchas religiones, pero desvinculado de la dirección verdadera hacia Cristo.

          `}
          image={third}
        />
        <BodySectionImageLeft
          subheadingText={`El hombre de hoy está atado; podríamos decir que el hombre de hoy es esclavo de la filosofía moderna y necesita un encuentro personal y vital con el único que puede darle la vida eterna: Jesucristo, mi salvador; y el salvador de los que se rindan a sus pies.

            `}
          image={third}
        />
        <BodySectionImageLeft
          blog3={
            <div className="py-4 border-b-2 w-3/4">
              <p className=" font-bold text-xl">
                Monte Sinaí, un Nuevo Pilar en la Defensa de la Sana Doctrina
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Monte Sinaí viene a formar parte y continuar la labor de
                aquellos pilares que a lo largo de la historia de la iglesia,
                han defendido la sana doctrina de la palabra de Dios comenzando
                por los doce Apóstoles.
              </p>
              <br></br>
              <p>
                El apóstol Pablo; a quien se le apareció Jesús como un nacido
                fuera de tiempo según 1 Corintios 15:8-9 “Y al fin se me vio
                también a mí, como a uno nacido fuera de tiempo. Porque yo soy
                el más pequeño de los apóstoles, que no soy digno de ser llamado
                apóstol, porque perseguí a la iglesia de Dios”. Y terminando con
                todos aquellos que han engrosado la línea de hombres ilustres,
                dedicados y valientes incluyendo a uno de los más altos
                apóstoles del siglo XX, mi padre espiritual el Rev. Luis M.
                Ortiz, quien sigue siendo para mí, la identificación de lo que
                es el Movimiento Misionero Mundial, organización en la que
                trabajé durante veintiún años, y donde me formé, para ser lo
                que, por la misericordia de Dios, soy hoy.
              </p>
              <br></br>
              <p>
                Nuestra visión es seguir presentando a Cristo crucificado por
                nuestros pecados y resucitado del sepulcro para nuestra
                justificación; proclamar el Evangelio de acuerdo con el
                postulado bíblico mencionado en Marcos 16:15 de predicar el
                Evangelio a toda criatura. El que crea y se bautice se salvará;
                pero el que no crea se condenará.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <p className="text-sm">
                Estamos viviendo en tiempos muy peligrosos y perversos. Estamos
                siendo testigos del comportamiento de la falta de identidad con
                la santa doctrina. Hoy en día casi todas las iglesias están
                adoptando la misma filosofía de tolerancia a cosas que
                consideran sin importancia para poder tener uniformidad en la
                iglesia. Esto ha traído como consecuencia una separación de la
                consagración hacia Dios y una notable indiferencia en la Iglesia
                de Dios. Se manifiesta en frialdad para la obra de Dios cuyos
                síntomas son: apatía, tibieza y rechazo a la palabra de Dios.
              </p>
              <div className="object-cover w-full h-full  p-8">
                <Image
                  className="w-full"
                  src={pic}
                  width={1000}
                  height={1000}
                  alt="pic2"
                ></Image>
                <p className="pt-4">Source:wef</p>
              </div>
            </div>
          }
          image={undefined}
        ></BodySectionImageLeft>
        <BodySectionImageLeft
          blog3={
            <div className="py-4 border-b-2 w-3/4">
              <p className=" font-bold text-xl">
                El Monte Sinaí: La Experiencia de la Nación Elegida por Dios en
                el Desierto
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Monte Sinaí nace en medio de un gran desierto, que es nuestro
                mundo de hoy, desorientado y engañado por la hipocresía y la
                falsedad que reina en nuestro mundo, por falta del pan
                espiritual que es la palabra de Dios. El capítulo 19 del libro
                del Éxodo, versículos 1 a 25, narra la experiencia de la nación
                elegida por Dios. Después de haber sido rescatados por la
                poderosa mano de Dios, cuando estaban esclavizados en Egipto y
                tres meses después de esta liberación, fueron llevados al
                desierto del Sinaí. Este nombre es también sinónimo del monte
                Horeb, identificado como el monte de Dios. Dios llamó a Moisés
                para comisionarlo como jefe de la nueva nación en el Monte Sinaí
                en medio de una zarza ardiente que no se consumía. (Éxodo,
                capítulo 3, versículo 2). Después, cuando la vida de Moisés se
                preparó como pastor del rebaño de su suegro Jetro y recibió la
                visión de la zarza ardiente, terminó las credenciales de su
                poder a través de este hombre llamado Moisés y después de
                terminar de liberar a su pueblo de Egipto; tres meses después
                llegaron al desierto del Sinaí.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <div className="object-cover w-full h-full  p-8">
                <Image
                  className="w-full"
                  src={pic}
                  width={1000}
                  height={1000}
                  alt="pic2"
                ></Image>
                <p className="pt-4">Source:wef</p>
              </div>
            </div>
          }
          image={undefined}
        ></BodySectionImageLeft>
        <BodySectionImageLeft
          headingText={"Conclusion"}
          subheadingText={`Los mayores avivamientos a lo largo de la historia se identifican con el fuego. Nuestro Dios es un Dios de fuego. Se reveló a Moisés en medio del fuego, y el profeta Elías fue un profeta de fuego. Él es quien hace que sus ángeles sean espíritus, y que su ministerio sea una llama de fuego. Pentecostés comenzó con fuego. El capítulo 2 del libro de los Hechos dice “…y se les aparecieron lenguas repartidas como de fuego, y se posó sobre cada uno de ellos” (versículo tres).

`}
          blog3={<div>wdfwe</div>}
          subheadingText2={
            <div>
              <p>
                `Cuando Dios estaba estableciendo su pacto con esta nación, en
                esa montaña descendió la gloria de Dios. El versículo 18 del
                capítulo 19 del Éxodo dice: “Y el monte Sinaí se convirtió en
                humo, porque el Señor descendió sobre él en fuego`
              </p>
              <br></br>
              <p>
                Esperamos en el Supremo Señor de nuestras vidas, que a lo largo
                de la historia de este movimiento, el fuego siga ardiendo en
                cada corazón como en aquel momento en el día de Pentecostés.
              </p>
              <br></br>
              <p >-Reverendo Samuel Francisco</p>
            </div>
          }
          image={firstpic}
        />
        
      </section>

      <Footer />
    </div>
  );
}

export default page;
