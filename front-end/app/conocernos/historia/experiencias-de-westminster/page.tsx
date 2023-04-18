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
              Experiencias Vividas Durante la Estadía en la Westminster St.
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
              <h2 className="font-bold text-xl ">
                Explosión espiritual en la Misión de Monte Sinaí
              </h2>
              <p className=" ">
                La historia detrás de la mudanza a la Eddy St.
              </p>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p>
                Durante el transcurso de los siete años, la Iglesia tuvo una
                explosión espiritual y muchos nuevos miembros se unieron a la
                Misión de Monte Sinaí, por lo que deseo añadir en este espacio,
                que fue el empuje de cómo Dios les permitió a nuestros Pastores,
                salir de esos lugares para el lugar que hoy día tenemos. Pero
                les aseguro, que aquí no termina su jornada. No es el final de
                los sucesos.
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
          blog2={
            <div className="text-sm pt-8">
              <p> El Rev. Samuel nos cuenta: </p>
              <br></br>
              <p className="font-bold">
                “Por el 1988, estaba en la República Dominicana, llevando a cabo
                un trabajo ministerial en lo que es la obra del MPMS. Estábamos
                ayudando en el fortalecimiento del trabajo que se estaba
                haciendo en la Iglesia Central en Santo Domingo. Y estando yo de
                rodillas, orando a Dios, buscando la presencia de Dios, comencé
                a tener una revelación, en donde veía el local de la 1193
                Westminster St.
              </p>
            </div>
          }
          blog={
            <div className="pt-8">
              <div>
                <p>
                  De repente, comencé a mirar un torbellino de fuego que salía
                  de la Iglesia (Westminster), y comenzó a moverse hacia el lado
                  de lo que es el Sur de Providence. El torbellino de fuego, iba
                  de un lado de la acera hasta el otro lado y los cubría. Y
                  luego seguía, seguía, seguía moviéndose y se movía por toda la
                  Broad St., hasta arriba. Hasta que llegó al local donde
                  estamos ahora, donde está la Iglesia Central 1183 Eddy St.
                  Cuando llegó ahí, comenzó a dar vueltas y vueltas, y ahí
                  terminó la visión. Todavía no teníamos el lugar. Eso fue en
                  visión, que vi ese lugar. Daba a entender que iba a movernos
                  el Señor del lugar de donde estábamos en el 1193 Westminster
                  St. para luego llevarnos a lo que es hoy, el 1183 de la Eddy
                  St. en Providence.”
                </p>
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
                Mientras eso estaba por cumplirse en el transcurso de los días
                venideros, en el local de la Westminster, tuvieron que romper
                paredes para agrandar la nave principal, para poder dar espacio
                al aumento excesivo que iba creciendo de día a día en membresía.
                Debido a esto, temiendo que interviniera la cuidad de
                Providence, se comenzó a idear un plan para colectar dinero con
                el propósito para comprar un lugar grande. Después de dar un
                Estudio Bíblico, expuso los planes al pueblo presente, sobre lo
                que había en su corazón. Sobre la necesidad de obtener un lugar
                propio y mucho más grande. Para sorpresa de ellos y planes de
                Dios, había entre los oyentes, un hombre colombiano que entró en
                pantalones cortos a la Iglesia, después de terminar la charla,
                les dijo: “… sus palabras han tocado mi corazón, yo quiero dar
                una ofrenda para ese proyecto de dos mil dólares, y mañana vamos
                a ir al banco para sacar el dinero.”
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
          blog3={
            <div className="m-auto">
              <div className="py-4 pb-8 w-10/12 border-b-2">
                <h2 className="font-bold text-xl ">
                  La Colecta de Fondos y la Provisión de Dios para el Nuevo
                  Lugar
                </h2>
              </div>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p className="">
                Así fue el comienzo, colectando dinero a través de dos meses. En
                otra ocasión, apareció un predicador haitiano y nos dijo, que
                Dios le había movido a pedir una ofrenda a la Iglesia que él
                presidía para este proyecto. De esa manera, se colectaron más de
                ochocientos dólares aquella misma noche. Dios proveyó $35 mil
                dólares en menos de dos años, gracias a la intervención del
                Espíritu Santo. Habiendo ya una base $35 mil dólares. Con esa
                premisa se comenzó la búsqueda de un Local.”
              </p>
              <br></br>
            </div>
          }
          blog={
            <div className="pt-8">
              <p>
                Podemos ver cumplido el sueño, donde Dios lo dirigía por medio
                de un torbellino hasta llegar a la Eddy St., lugar donde se paró
                y concluyó el torbellino. También su petición fue contestada
                obteniendo el precio más bajo.
              </p>
            </div>
          }
          image={undefined}
          children={<div>dfwe</div>}
        />

        <BodySectionImageLeft
          blog={
            <div className="text-sm pt-8">
              <p>Continúa el Reverendo Samuel, su relato:</p>
              <br></br>
              <p className="font-bold">
                {" "}
                “Una vez obtuvimos el lugar, reuní el pueblo y comenzamos a
                ungir el lugar por todos sus puntos cardinales.
              </p>
              <br></br>
              <p className="font-bold">
                Con sólo $5,000 iniciamos la reconstrucción del local para
                hacerlo óptimo a los servicios. El lugar demandaba por lo menos,
                unos $30,000 para habitarlo adecuadamente. Después, me volví a
                parar firme y le pedí al pueblo $15,000 para empezar. Una vez
                logramos ese objetivo, tiramos un piso nuevo, limpiamos el
                lugar, le pusimos placas de yeso (Sheetrock), porque las paredes
                sólo tenían bloques al descubierto, pintamos el lugar y nos
                mudamos enseguida.
              </p>
              <br></br>
              <p className="font-bold">
                El Señor siguió proveyendo hasta que toda la nave estuvo
                arreglada. Con piso nuevo, alfombra, techo suspendido, y un
                sótano remodelado. El lado donde se reunían los caballeros,
                junto al sótano, se arregló también. Dios proveyó más de sesenta
                mil dólares para hacer los arreglos pertinentes.”
              </p>
            </div>
          }
          blog2={
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
        <BodySectionImageRight
          blog3={true}
          subheadingText={
            <div>
              <p>
                En agradecimiento a Dios y al pueblo trabajador, de esta manera
                se expresa el Rev. Samuel Francisco y a toda la congregación que
                hizo posible este triunfo:
              </p>
              <br></br>
              <p className="font-bold">
                “Gracias, mil gracias, Monte Sinaí, tú mereces, Iglesia, ser
                bendecida, porque no hay otra Iglesia tan noble y buena como
                tú.” ¡Dios te bendiga!
              </p>
            </div>
          }
          image={firstpic}
        ></BodySectionImageRight>
        <BodySectionImageLeft
          blog3={
            <div className="m-auto">
              <div className="py-4 pb-8 w-10/12 border-b-2">
                <h2 className="font-bold text-xl ">
                  La reconstrucción del local en Eddy St. y la provisión
                  continua de Dios.
                </h2>
              </div>
            </div>
          }
          blog2={
            <div className="text-sm pt-8">
              <p className="">
                {" "}
                Una vez alcanzado este logro, la Iglesia tuvo por dos ocasiones
                que moverse hasta tanto se terminara la remodelación del local
                ubicado en la 1183 Eddy St. (hoy día). Estuvieron por catorce
                meses en la Iglesia “Church of God” de la Avenida Elmwood en
                Providence (Local #9), pero debido a las incomodidades que se
                presentaron durante la estadía en esa Iglesia, se vieron
                obligados a salir y rentar tres días por semana a la Iglesia
                Pentecostal Puerta de Refugio en la 247 Valley St. (Local #10)
                en Providence.
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
                Terminado ese largo peregrinaje de 18 meses, el Pastor agradece
                a Dios por la enseñanza, durante todo su peregrinaje. Lo que han
                aprendido, los ha enseñado a sobrevivir en las altas y en las
                bajas, teniendo y no teniendo, porque Dios le ha mostrado por
                muchas formas que Él es “Jehová Jireh”.
              </p>
              <br></br>
              <p>
                También, aprovechan dar gracias a Dios, por el Pastor Simón y
                por el Pastor Juan Francisco, por el grande apoyo que les
                brindaron, y la ayuda de todos los hermanos colaboradores, que
                sin la ayuda de todos ellos, esto se hubiese sido muy fuerte
                para los Pastores realizar. Y aunque Dios está con ellos, el
                trabajo de equipo, de un pueblo unido, trabajando mano a mano, y
                en una misma dirección es de mucha importancia, lo cual es digno
                de reconocer.
              </p>
              <br></br>
              <p>
                <p>
                  Este trabajo no termina aquí, pues tendremos mucho más
                  adelante que conquistar y mucho de que contar, y esto es hasta
                  que Cristo nos llame como Iglesia y nos podamos reunir con Él.
                </p>
                <br></br>
                <p className="font-bold">¡Toda la Gloria sea para Él!</p>
              </p>
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
                Nuestra visión sique siendo la misma, alcanzando y abarcando
                todo el mundo para el Rey de reyes y Señor de señores.
                Presentando a Cristo crucificado por nuestros pecados y que se
                ha levantado de la tumba para nuestra justificación. Esperamos
                en el supremo Señor de nuestras vidas, que a lo largo de la
                historia de este Movimiento, el fuego continúe ardiendo en cada
                corazón, como en aquel momento, en el día de Pentecostés (Hechos
                2).
              </p>
              <br></br>
              <p>
                Nuestra visión es que podamos seguir trabajando en el campo de
                las Misiones para ir llenando los campos blancos (Campos sin
                evangelizar), con almas salvadas. Almas con una misión y visión
                como la nuestra. Con una mente de Cristo, renovada y lavada por
                la Sangre de Cristo, que es la que quita el pecado de nuestros
                miembros. Personas dispuestas, comprometedoras con el Reino de
                Dios, de seguir predicando este evangelio y como dice la Palabra
                de Dios, hasta los confines del mundo. Que deseen seguir la
                encomienda dada por Jesús: “Id y predicad este evangelio a toda
                criatura. El que creyere y fuere bautizado, será salvo…” (S.
                Marcos 16:15)
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
      </section>

      <Footer />
    </div>
  );
}

export default page;
