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
              Un Mensaje De La Vicepresidenta
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
          image={firstpic}
        ></BodySectionImageRight>
        <BodySectionImageRight
          subheadingText="Somos un Movimiento Pentecostés, el cual está compuesto por varios Ministerios puesto por Dios. Un Cuerpo Ministerial que procura la Unidad del Espíritu en los vínculos de la paz, en el que se congrega un grupo de personas redimidas por la Sangre de Cristo, para adorar al Señor, para confraternizar, para aconsejar mutuamente, para recibir instrucciones de la Santa Bíblia, con el objeto de propagar el Evangelio, de fomentar la Obra del Ministerio y el ejercicio de los Dones Espirituales, tal como lo enseña el NT. Con el mismo propósito que lo hacía la Iglesia Primitiva (S. Marcos 16:15). "
          subheadingText2="Levantándo y creándo un cuerpo representativo de la gente redimida. Creyentes llenos del Espíritu Santo, comisionando en ellos: Evangelístas, Pastores, Maestros y Misioneros, para el trabajo local y la evangelización del mundo. Nuestro propósito y objetivo es promover actividades y cultos conforme al orden Bíblico. Nuestro Movimiento siempre se ha caracterizado en todo su apogeo desde antes de su comienzo, con el Ministerio de las Misiones, tanto locales como Internacionales.

          "
          image={third}
        />
        <BodySectionImageLeft
          blog2={
            <div className="text-sm">
              <p>
                Como organización, tenemos la responsabilidad de predicar las
                Buenas Nuevas, la cual nace en nuestros corazones con el
                propósito de ser un instrumento del Todopoderoso. Que se
                esfuerza en cumplir la gran comisión dada en S. Marcos 16:15:
                “Id y predicad el evangelio a toda criatura…
              </p>
              <br></br>
              <p>
                De esa manera, podamos alcanzar a hombres y mujeres que se hayan
                en ese estado lamentable del pecado y sean libres por medio de
                su poderosa Palabra, para que así, puedan lograr un mejor
                destino para sus vidas. También deseamos hacerte concientizar
                que el Dios de hoy, es el mismo de ayer y seguirá siéndolo por
                todos los siglos de los siglos.
              </p>
              <br></br>
              <p>
                Ese es el mismo Dios que llama, y te está llamando a que le
                sirvas con todo tu corazón. Y si Él, te ha llamado para un
                Ministerios en específico, Él respalda, y cuando Él respalda, Él
                bendice y cumple sus propósitos, porque Él es fiel para con
                todos los que le buscan de verdad, y especialmente para con
                aquellos que obedecen y llevan a cabo sus propósitos. Esto es
                para los que se atreven a entrar en las profundas aguas de este
                evangelio, que es el lugar donde podrás conocer al verdadero
                Dios al que le sirves.
              </p>
            </div>
          }
          blog={
            <div className="">
              <p className="font-bold text-sm">
                “Y sabemos que a los que aman a Dios, todas las cosas les ayudan
                a bien, esto es, a los que conforme a su propósito son
                llamados.” (Romanos 8:28).{" "}
              </p>
              <div className="object-cover w-full h-full  p-8">
                <Image
                  className="w-full"
                  src={pic}
                  width={1000}
                  height={1000}
                  alt="pic2"
                ></Image>
              </div>
            </div>
          }
          image={undefined}
        ></BodySectionImageLeft>
        <BodySectionImageLeft
          blog2={
            <div className="text-sm">
              <p>
                Sus promesas se dejan ver notorias a nuestro paso. Porque
                nuestras pisadas no van solas, sino como nos muestra una
                reflexión muy popular de “Las pisadas sobre la arena”, que Él es
                quien nos lleva cargando en sus brazos, la cual es nuestra
                Visión, predicar el evangelio de nuestro Señor Jesucristo a toda
                criatura.
              </p>
              <br></br>
              <p>
                A partir de esa premisa, poder alcanzar territorios que todavía
                no han sido liberados del poder de satanás. Los cuales le
                llamamos territorios Blancos. Declarando con una Palabra
                poderosa, la Palabra de Dios y sellándolos por medio del
                Espíritu Santo, en el nombre de nuestro Salvador Jesucristo, de
                que serán libertados.
              </p>
              <p className=" text-sm">
                Y esto se logra, cuando usted y yo, decidimos marchar hacia
                adelante en fe. Creyéndole a aquél, quien es el que nos da la
                victoria. Con esto te digo, que si piensas emprender este
                Ministerio Pastoral o cualquier otro Ministerio, espera ser
                llamado y ordenado por Dios, ya que lo que Él te promete, lo
                cumplirá y así mismo lo verás cumplido en ti mismo(a), en todo
                lo que emprendas. ¡No desmayes! ¡Sigue hacia adelante!
              </p>
            </div>
          }
          blog={
            <div className="">
              <p className="text-sm">
                Él te dará las fuerzas que necesitarás y te dará las
                herramientas necesarias para que esa Misión sea victoriosa.
                Siempre procurando tener una visión clara hacia donde el
                Todopoderoso te dirige. Recordando siempre que tu mirada debe
                estar puesta sobre la blanca soberanía y vocación, a Jesucristo
                mismo. “No mirando nosotros las cosas que se ven, sino las que
                no se ven; pues las cosas que se ven son temporales, pero las
                que no se ven son eternas.” (2 Corintios 4:18). De la misma
                manera que la Biblia registra los acontecimientos ocurridos a
                José (Gén. 37-48-penúltimo hijo de Jacob [llamado después,
                Israel]), así mismo Dios ha de cumplir lo que Él prometió a tu
                vida si depositas en Él, la misma confianza que Él ha depositado
                en tí, y que espera de tí, cuando decides caminar en Fe,
                creyéndole a Él.
              </p>
            </div>
          }
          image={undefined}
        ></BodySectionImageLeft>
        <Header
          children={undefined}
          image={secondpic}
          headerText={"Conclusion"}
          classChangeText={undefined}
          buttonColor={undefined}
          buttonLink={undefined}
          buttonText={undefined}
          contentPosition={"center"}
          video={undefined}
          subheadingText={`De la misma
          manera que la Biblia registra los acontecimientos ocurridos a
          José, así mismo Dios ha de cumplir lo que Él prometió a tu
          vida si depositas en Él, la misma confianza que Él ha depositado
          en tí, y que espera de tí, cuando decides caminar en Fe,
          creyéndole a Él.`}
          containerheight={undefined}
          show={false}
        />{" "}
      </section>

      <Footer />
    </div>
  );
}

export default page;
