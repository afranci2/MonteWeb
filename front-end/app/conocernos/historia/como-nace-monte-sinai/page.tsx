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
              Como Nace Monte Sinai?
            </h1>
            <h1 className="py-2 text-sm font-light">
              (Relatado por: Pastora Isabel Francisco){" "}
            </h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="h-full">
            <img className="object-cover h-full w-screen" src={pic}></img>
          </div>
        </div>
        <BodySectionImageLeft
          blog3={
            <div className=" pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">
                I. La Comisión Divina y la Obra Misionera
              </h2>
              <p className=" ">El llamado directo de Dios que inició todo</p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Pues, a partir de esta premisa, comienzo a redactarles el
                principio de todas las cosas sobre mi trayectoria Personal y
                Ministerial, hacia el comienzo de éste Ministerio que por gracia
                mi esposo y yo, hemos recibido y se nos ha comisionado realizar.
              </p>
              <br></br>
              <p>
                La Iglesia Monte Sinaí, nació en el corazón de Dios, en el 1972,
                con un llamado directo a la obra Misionera. Dios le plació
                llamar a tres jóvenes desde la bella Isla de Puerto Rico, con un
                llamado directo y genuino a un lugar desconocido para ellos. Sin
                recursos, sin una Iglesia o familia que los recibieran en este
                lugar. Anduvieron con y por fe como el patriarca Abraham anduvo,
                como cuando Dios le dijo: “... vete de tu tierra y de tu
                parentela, y de la casa de tu padre, a la tierra que te
                mostraré.” (Gén. 12:1). Después de haber orado, ayunado y tener
                confirmación del Señor, y haber recibido el respaldo de su
                Pastor y del Movimiento Misionero Mundial, un 12 de Abril,
                salieron de Puerto Rico: Asdrúbal Cilfredo y su esposa Margarita
                Féliz de Cilfredo y ésta su servidora: Isabel Francisco. (Deseo
                informar que nuestro compañero de milicia, Asdrúbal Cilfredo,
                actualmente no está con nosotros, pues ya partió con nuestro
                Señor Jesucristo).
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <div>
                <Image
                  className="w-full "
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
        <BodySectionImageRight
          blog3={true}
          headingText={"II. La Prueba de la Fe en Nueva York"}
          subheadingText={
            "Llegamos a la ciudad de Nueva York por dos semanas, obedeciendo las directrices de nuestro Señor. Allí Dios nos probó y nos respaldó de una manera maravillosamente especial. Abriéndonos puertas de alojamiento en una Iglesia en la 3era. Avenida en el Bronx, NY, la Iglesia Fuente de Jacob, donde se nos permitió dar una campaña a la juventud. Dios salvó vidas y Dios libertó vidas en ese lugar y sanando; Obrando así, de una manera muy especial y demostrando que el que nos había llamado era fiel."
          }
          image={firstpic}
        ></BodySectionImageRight>
        <BodySectionImageLeft
          blog3={
            <div className=" pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">
                III. La Providencia Divina en Providence
              </h2>
              <p className=" ">
                Edificando un nuevo hogar espiritual en Providence
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p className="">
                {" "}
                De ahí, la hna. Margarita y su esposo Asdrúbal, salieron por un
                fin de semanas para buscar apartamento en Providence, R.I. Y
                cuando llegaron a Providence R.I., fueron a la única Iglesia
                Pentecostal hispana que existía en todo Providence, la Iglesia:
                Aposento Alto. Había otra Iglesia, pero era otra denominación
                llamada la Iglesia: Jesús Sólo. Entraron al Aposento Alto, con
                el propósito de saber si alguien les podía hospedar por una
                noche, para luego, al día siguiente, buscar un apartamento. Pero
                cuando Dios está en el asunto, es cuando se abren puertas con
                facilidad. Para ese entonces, la madre del Rev. Samuel
                Francisco, nuestra hermana Carmen Francisco, también estaba
                recién llegada de NY, y estaba de visita en esa Iglesia, con el
                propósito de establecerse en Providence, RI. Previamente con el
                pleno conocimiento de las Misiones. La Hna. Carmen Francisco
                decide acogerlos en su hogar, donde estuvieron dos días.
              </p>
              <div>
                <Image
                  className="w-full pt-8"
                  src={secondpic}
                  width={500}
                  height={500}
                  alt="pastor-pic"
                ></Image>
                <p className="text-xs py-2">Src: Pastor Samuel</p>
              </div>{" "}
            </div>
          }
          blog={
            <div className="pt-8">
              <p>
                {" "}
                Al día siguiente de esa noche, la esposa del Pastor, la hna.
                Isabel Rodríguez, los llevó a unos edificios que quedan en la
                Cranston St. (cerca de la 3era. Iglesia que estuvimos
                presidiendo años después, antes de la que tenemos hoy día, en la
                Eddy St.). En esos edificios se rentaban apartamentos. Pero solo
                quedaba un sólo apartamento de un sólo dormitorio con sala,
                comedor y cocina. Y para ese entonces, rentaban amueblado el
                apartamento. Y como estábamos buscando uno de dos dormitorios,
                puesto que uno era para el matrimonio y el otro para mí, el
                dueño le dijo que él no tenía de dos dormitorios, sino de un
                sólo dormitorio. Pero Margarita le dijo, que por eso no había
                ningún problema, porque ella podía conseguir un caucho para mí,
                y ponerlo en el comedor. El hombre le dijo que él tenía una
                furnitura en el basement, y le podía conseguía el caucho para
                mí. ¡Eso fue así! Ella vino viernes, el sábado consiguió el
                apartamento y el domingo se regresó a buscarme a NY y al día
                siguiente, ya estábamos en Providence, RI. Comenzamos a vivir en
                la Cranston St., en un segundo piso.
              </p>
              <br></br>
              <p>
                Fue desde NY cuando Dios comenzó a proveernos los medios para
                llegar a la ciudad de Providence, RI, ya que cuando salimos de
                P.R, contábamos con tan sólo $50.00 dólares (sustento para tres
                jóvenes) que luego Dios, los multiplicó en el transcurso de
                nuestro peregrinaje, haciendo su voluntad. Llegamos a
                Providence, R.I., el 27 de Abril del 1972, siendo un lugar
                desconocido para nosotros. En 24 horas, Dios proveyó todo lo que
                necesitábamos. Para en aquél entonces, comenzamos a pagar $35.00
                dólares semanales con todo incluido. Comenzamos a predicar la
                palabra de Dios y a dar servicio en el mismo apartamento y en
                los hogares.
              </p>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />
        <BodySectionImageLeft
          blog3={
            <div className=" pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">
                IV. El llamado de Dios en Mi Vida
              </h2>
              <p className=" ">
                {" "}
                La confirmación del ministerio y la elección de mi esposo
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Después de tres años, en el 1975, fue cuando surgió lo de
                Samuel. Como todo joven, nos enamoramos y esperamos la
                confirmación de parte de Dios. Dios nos confirmó y nos habló
                sobre un Ministerio amplio. Mi deseo era regresar a PR, pero el
                Señor me habló una vez más y me dijo que no era el tiempo, que
                él tenía un plan y un trabajo que realizar a través de mí, y que
                tenía un ministerio amplio que realizar. Decidí obedecer al
                Señor. A penas tenía 22 años de edad, para ese entonces.
              </p>
              <br></br>
              <p>
                Cuando obedecemos al Señor y le somos fiel, el cumplirá su
                propósito en nosotros. Luego Dios trató con mi vida, acerca de
                quién es mi esposo hoy día: El Rev. Samuel Francisco. ¿Quién
                puede resistir el llamado de Dios? Oré mucho a Dios para poder
                aceptar a mi esposo como novio, ya que mi anhelo era regresarme
                a PR. El establecer una relación en este país, implicaba
                quedarme. Planes que no tenía en mente realizar. Dios trató
                conmigo por medio del Profeta Isaías 55:8, 9, 11: “Porque mis
                pensamientos no son vuestros pensamiento, ni vuestros caminos
                mis caminos, dijo Jehová…” Nuevamente Dios me confirmó por medio
                del Hno. Roberto Torre, en una Vigilia (El Hno. Robert es el
                padre de Olga Torres, quien se estuvo preparando como miembra
                activa y Líder dentro del Movimiento Pentecostal Monte Sinaí,
                durante toda su niñez y juventud), que él era el esposo que Dios
                tenía para mí y que no temiera en aceptarlo. Pero estando,
                orando, el señor me hablaba y me decía que no temiera.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <p>
                Después de tres meses de haber sido establecido nuestro noviazgo
                y de haber recibido varias confirmaciones de parte de Dios,
                reunimos nuestras familias y los ochos meses nos casamos.
              </p>
              <br></br>
              <p>Nos casamos en el año 1975.</p>
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
          blog2={
            <div className="text-sm">
              <p>
                Después de haberme casado, aún permanecí frente de la obra como
                Pastora hasta el 1985, hasta tanto mi esposo decidiera estar al
                frente de la misma. Como hijo de Pastores, sabía los retos y
                desafío que como Pastor tenía que enfrentar, por lo que tardó en
                tomar la decisión de estar al frente de la obra. Dios comenzó a
                tratar con él a través de un sueño, donde lo llamó al Santo
                Ministerio. A partir de ahí, comenzamos a trabajar mano a mano y
                todo lo que el Señor nos había prometido se fue cumpliendo al
                pies de la letra. En el 1996, nos independizamos del Movimiento
                Misionero Mundial, y es ahí donde nace el Movimiento Pentecostal
                Monte Sinaí.
              </p>
              <br></br>
              <p>¡ALABADO SEA EL SEŇOR!</p>
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
          blog3={
            <div className=" pb-8 w-10/12 border-b-2">
              <h2 className="font-bold text-xl ">
                V. Expansión de la obra de Dios
              </h2>
              <p className=" ">
                Testimonios de la poderosa obra de Dios y las iglesias asociadas
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Junto hemos visto a Dios obrando de manera poderosa y visible en
                la conversión de muchas almas para Cristo, con milagros,
                prodigios y maravillas. Dios no ha dejado caer ninguna de sus
                promesas a tierra. Por su gracia, nos ha permitido llegar a
                otros países con la poderosa Palabra de Dios; cubriendo a
                Venezuela, Perú y a la República Dominicana y otros países.
              </p>
              <br></br>
              <p>
                Estas son sólo 4 de 12 Iglesia existentes en la República
                Dominicana.
              </p>
              <br></br>
              <p>
                También tenemos las Iglesias locales: Monte Sinaí en Pawtucket,
                RI y Monte Sinaí en New Bedford, Mass
              </p>
              <br></br>
              <p>
                Está también, la Iglesia Restoration Worship (Congregación de
                habla Inglés), aquí en Providence, quien la preside nuestro
                hijo, el Pastor Erny Francisco. No es considerada como una
                Iglesia hija como tal, pero su vínculo es más estrecho y
                complementario, ya que la dirige uno de sus hijos de sangre.
              </p>
              <br></br>
              <p>
                Durante este año 2016, Dios nos ha permitido llegar al Sur de
                Carolina, para trabajar y fortalecer la obra que allí opera por
                medio de los Obreros Missia y Arturo Salazar, quienes están
                frente a esta obra.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <p>
                Y la nuestra, que es la Sede Central, en la ciudad de
                Providence, RI.
              </p>
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
              <p className=" ">
                Nuestra Lema: “El que hace a los Ángeles sus espíritu y a sus
                ministros, llama de fuego” (Hebreos 1:7)
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Mientras el día dura, seguiremos predicando la Palabra de Dios
                con una congregación preciosa, llena de amor y muy unida, a
                pesar de las diferentes nacionalidades y costumbres que en ellas
                se encuentra, los cuales son los que nos ayudan a empujar la
                obra hacia adelante. Está favorable decirle, querido lector, que
                sin la ayuda del Señor, nada podíamos, ni podemos hacer, porque
                siervos inútiles somos delante de él.
              </p>
              <br></br>
              <p>¡Gloria de Dios!</p>
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
        <div className="grid grid-cols-2 w-full h-96">
          <div className="text-white m-auto w-11/12 h-full p-16">
            <div className=" bg-black h-full w-full rounded-lg">wef</div>
          </div>
          <div className="text-white m-auto w-11/12 h-full p-16">
            <div className=" bg-black h-full w-full rounded-lg">wef</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default page;
