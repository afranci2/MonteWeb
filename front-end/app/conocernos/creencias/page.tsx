import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Navbar2 from "../../../sections/navbar/Navbar2";
import Footer from "../../../sections/footer/Footer";
import Header from "../../../sections/header/Header";
import Banner from "../../../components/banner/Banner";
import Banner2 from "../../../components/banner/Banner2";
const pic =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Ministries/Kids/245164592_6304981806240568_2941321431489227706_n.jpg";
import Image from "next/image";

const beliefs_title = [
  "La Biblia",
  "Dios",
  "Jesucristo",
  "Arrepentamiento",
  "Bautismo en Agua",
  "Hombre Y Mujer",
  "La Santa Cena",
  "Justificacion, Regeneracion, Santificacion y Nuevo Nacimiento",
  "El Espíritu Santo",
  "La Iglesia",
  "Apoyo Financiero de los Miembros",
  "Responsabilidades Financieras de los Miembros",
  "Curación y Liberación",
  "Segunda Venida de Cristo",
  "Resurrección",
  "El Infierno y el Lago de Fuego ",
  "Cielo y Tierra Nuevos",
  "Día de Descanso",
  "Matrimonio",
  "Divorcio",
  "Aborto y Planificación Familiar",
  "Ministerio de la Mujer",
];

const beliefs_description = [
  "Creemos que la Biblia es la palabra de Dios; la regla infalible en la que basar nuestra fe y conducta. Creemos que fue inspirada divinamente por Dios como se afirma en 2 Timoteo 3:15 y 2 Pedro 2:2.",
  "Cuando nos referimos a Dios, no nos referimos a ningún Dios fabricado por la mano del hombre. Estamos afirmando que creemos en el único y verdadero Dios, creador de los cielos, los cielos y la tierra, y de todo lo que existe en el mundo visible e invisible, que además conserva todo lo creado: JEHOVÁ. Dios que se ha revelado en tres personas diferentes: Padre, Hijo y Espíritu Santo.",
  "Creemos en Jesucristo como centro de nuestra fe cristiana, el hijo unigénito del padre lleno de gracia y verdad, nacido del Padre concebido por obra y gracia del Espíritu Santo, nacido de la Virgen María, manifestado en carne como el Emmanuel prometido, anunciado por los profetas del Antiguo Testamento y confirmado por Juan el Bautista como el Cordero de Dios, y que suprime el pecado del mundo. Murió en la cruz a causa de nuestras transgresiones y pecados, y resucitó al tercer día para nuestra justificación y nuestra esperanza de resurrección, y ascendió a la derecha del padre con poder y gloria para ser nuestro Dios poderoso intercediendo por nuestros pecados, desde donde volverá pronto para tomar a su iglesia; nos envió el Espíritu Santo para estar con nosotros hasta el fin de este mundo, como abogado, como mediador y sumo sacerdote, más sublime que los cielos, (Isaías 9: 6, Lucas 1:31, Juan 3:16; Juan 6:35).",
  "Arrepentirse es esencial para recibir el perdón de los pecados. (Tito 2:11 y Romanos 10: 11). Después de arrepentirse, hay que vivir una santidad interna y externa. Arrepentirse es un cambio de dirección en la vida; un cambio de priorización de valores asignando a Cristo como centro de nuestra vida. (2ª Corintios 5:17).",
  "Creemos que el bautismo en agua es una ordenanza o sacramento ordenado por nuestro señor Jesucristo para ser practicado por todos aquellos que profesan la fe cristiana. El bautismo de acuerdo a la base bíblica original, se hará por “inmersión” total en el nombre del padre, del hijo y del Espíritu Santo. El privilegio no será negado a una persona que lo solicite. Cualquier persona que haga profesión de fe debe ser bautizada después de recibir la instrucción correspondiente al bautismo en los primeros seis meses de su conversión. (Romanos 6:4; Mateo 28:19).",
  "Ya que el hombre y la mujer fueron creados por Dios, y por causa de la desobediencia caímos en transgresión y por ellos fuimos destituidos de la gloria de Dios y posteriormente redimidos. (Génesis 1:26-31; 3:1-7; Romanos 3:23 y 5:12-21)",
  "Es una ordenanza o sacramento de nuestro señor Jesucristo. Pueden participar todos los miembros fieles que estén en plena comunión. Todos aquellos que hayan confesado a Jesús como su salvador y que tengan buen testimonio.",
  "Creemos que la justificación, la regeneración, la santificación y el nuevo nacimiento vienen a través de la fe en el señor Jesucristo, por la purificación de la sangre y la plenitud del Espíritu Santo. Una conciencia clara en la palabra de Dios que viene a ser la infalible gobierna nuestra fe. (Romanos 5:1; Tito 3:5, Romanos 6:22: Juan 3:11-15).La santa cena puede ser conducida por los pastores o un funcionario a cargo y esto debe hacerse con reverencia. Ninguna persona en pecado debe tomar esta comunión o se expondrá al juicio de Dios, según 1ª. Corintios 11:27.",
  "Para lograr el éxito y la eficacia en la bendita labor de la santa obra de Dios, todos los creyentes deben ser llenados por el Espíritu Santo. Esto se puede lograr buscando esta llenura a través de los dones del Espíritu Santo que se dan para la edificación de la iglesia, que es el cuerpo de Cristo.(1ª Corintios 12:1-31; Efesios 4; 11-12). A. La señal inicial de haber recibido el bautismo en el Espíritu Santo es hablar en otras lenguas. (Marcos 16:17; Hechos 2:4) B. La evidencia de este bautismo se demostrará en una vida de testimonio que produce los frutos del Espíritu Santo. (Gálatas 5:22 y Romanos 12:6-8",
  "La iglesia es una institución divina, compuesta por todos los limpiados por la sangre de Cristo. Todos ellos están llamados a la Gran Comisión de predicar el evangelio a todas las criaturas. La iglesia tiene un papel reconciliador; está en este mundo para llevar a los hombres perdidos a una relación más estrecha con su creador a través del poder del evangelismo que rompe los yugos del inicuo. (Mateo 16:18; Lucas 4:18)",
  "Los ministros deben ser sostenidos por los diezmos y las ofrendas voluntarias recogidas los días de servicio y los servicios especiales. (1 Timoteo 5:18; 1 Corintios 9:13)  ",
  "Las responsabilidades de los miembros con la iglesia son: Las primicias, los diezmos (10 por ciento de lo que ganan) y otras ofrendas voluntarias según la prosperidad dada por Dios (Deuteronomio 26:2; Malaquías 3:10; 1ª. Corintios 16:1-2; Lucas 11:42; 1ª. Corintios 9:6-9;Hebreos 7:1-21  ",
  "Creemos en la Sanación Divina, y en la Liberación proporcionada por nuestro señor Jesucristo en la cruz del Calvario (Marcos 16:15-18)",
  "Creemos en la promesa hecha por Dios a sus discípulos, y a todos los que han aceptado a Jesús como su salvador, de que nuestro Señor vendrá por segunda vez a levantar su iglesia. La primera fase de su Segunda Venida se conoce como el levantamiento de la iglesia. Esto ocurrirá en secreto, como lo expresa el texto sagrado como ladrón en la noche. En este acto, los muertos en Cristo resucitarán primero, y luego nosotros, que estamos vivos y permanecemos, seremos arrebatados junto con ellos en las nubes para encontrarnos con el Señor en el aire, y así estaremos siempre con el Señor (1ª. Tesalonicenses 4:16-18). También creemos que la segunda fase de su llegada será vista por todo el mundo. Todo ojo lo verá (Apocalipsis 1:7) lo que significa que será visible literariamente (Hechos 1:9-11); 1 Tesalonicenses 1:7-9; Judas 14 y 15) que el Señor establecerá un reino milenario y Satanás será atado por mil años (Judas 14 y 15, Apocalipsis 20:3, Isaías 11: 6-9)",
  "Creemos que habrá una resurrección de los muertos; unos para la vida eterna y otros para la vergüenza y la condenación sin fin, según Daniel 12:2 y Juan 11:25.",
  "Creemos que el infierno es un lugar literal y real en el que se encuentran aquellos cuyas vidas han recibido una amplia oportunidad de salvación en la vida de Jesucristo. Ellos no han arreglado sus vidas con Dios, dado el paso inicial de aceptar al Señor como el salvador de sus almas. También creemos que es el castigo para Satanás y sus ángeles y todos aquellos que rechazaron el amor de Dios, conocemos este castigo como el lago de fuego (Apocalipsis 19:20, 20:10-15, 14:11; 21:8; Marcos 3:29; 9:43; Lucas 16:24; Mateo 25-41-46; 2 Tesalonicenses 1:8, 9)",
  "Creemos que habrá un nuevo cielo y una nueva tierra, donde vivirá la justicia (Mateo 24; 35; 2ª Pedro 3:12-31 y Apocalipsis 21:13)",
  "Debe haber un día de descanso. El primer día de la semana debe ser el día de descanso:  El domingo. Este día debe ser separado para el culto, es el día del señor (Oseas 2:11; Juan 20:1-23; Colosenses 2: 16-17: Apocalipsis 1:10 Éxodo 20:8; Mateo 12:1-8; Lucas 14:1-5).",
  "En cuanto al tema del matrimonio, el Movimiento Pentecostal Monte Sinaí mantiene una línea bíblica. Creemos que el matrimonio es una institución divina, la más antigua de las instituciones humanas. Debe ser respetado y mantenido en el orden que fue instituido sin ser violado. Dios casó a la primera pareja en el Jardín del Edén e instituyó el matrimonio con una sola mujer para Adán. Génesis 2:2-11 dice”…y el Señor Dios hizo caer un profundo sueño sobre Adán y éste se durmió; y tomó una de sus costillas y cerró la carne en su lugar; y la costilla que Dios había tomado del hombre, hizo una mujer, y la trajo al hombre”. Estamos en oposición a los yugos de desigualdad en la iglesia, lo que significa que un hombre o mujer creyente se casa con un hombre o mujer que no cree. La luz y las tinieblas no están en armonía. Nos oponemos al matrimonio de personas del mismo sexo, de personas que son familia cercana (incesto). (Números 30: 6; Romanos 7:2; 1ª Corintios 7;.33-39: Colosenses 3; 18; Mateo 24:38; Lucas 20:34; Levítico 21:7; 22:12: 18:618, y 22; Romanos 1:26. y 27)",
  "En la sección, 21 establecimos que el matrimonio es bíblicamente indisoluble, en otras palabras: irrompible o inseparable. Mateo 19:4-5, Jesús explica en este capítulo que Moisés dio una carta de divorcio a los judíos en el Antiguo Testamento (bajo la ley), pero en el principio no fue así. Dios dijo que serían una sola carne y el hombre no podía desunir lo que Dios unía. La única razón para la separación de una pareja es la “porneia”: Palabra griega utilizada por Jesús cuyo significado literal abarca todos los actos sexuales degenerados (Adulterio, Fornicación, Homosexualidad, Lesbianismo, Transexualidad, el acto prohibido en la cama, acto contra natura, sodomía e incesto.  ",
  "Nos oponemos abiertamente a la práctica legalizada y criminal del aborto, porque bíblicamente lo consideramos una abierta violación al sexto mandamiento de Éxodo 20:13. ",
  "Por otro lado, y por razones ajenas a la planificación familiar, en un caso no planificado en el que el embarazo pone en peligro la vida de la madre después de haber agotado todos los recursos humanos; en este caso se acepta. Nuestra organización está a favor de la planificación familiar; del uso de anticonceptivos que no pongan en peligro la vida de la persona que lo pone en práctica. Pensamos que es un crimen traer a este mundo la vida para vivir en la necesidad y la miseria. Muchos niños, por falta de educación y de los elementos esenciales de la vida, se ven obligados a tomar el estilo de vida delincuencial en la sociedad.",
  "Creemos en la plenitud del llamado o ministerio de la mujer dado por Dios, ya que en Cristo no hay diferencia entre el hombre y la mujer. Con esto, no le quitamos el asiento al hombre como cabeza de familia y representante de la creación, pero en cuanto al llamado en esta nueva dispensación no hay diferencia. Las mujeres en el Movimiento Pentecostal Monte Sinaí serán ordenadas en pleno ministerio para hacer todo lo que corresponde dentro.",
];

function page() {
  return (
    <div>
      <div className="relative">
        {" "}
        <Navbar2 />
      </div>
      <div className="h-16 w-full "></div>
      <section className="">
        <div className=" relative overflow-hidden h-60 m-auto items-center w-full  flex justify-center">
          <div className="z-40  m-auto absolute text-white  w-10/12 ">
            <h1 className="font-semibold font-serif text-5xl">
              Creencias Fundamentales
            </h1>
            <h1 className="py-4">A full look at our beliefs</h1>
          </div>
          <div className="z-20 absolute w-full h-full bg-black/30"></div>
          <div className="md:hidden">
            <img className="object-cover w-screen" src={pic}></img>
          </div>
        </div>
        <div className="z-40 relative">
          {beliefs_title.map((belief, index) => {
            return (
              <div className="py-8 p-4">
                <h2 className="font-bold text-lg">{belief}</h2>
                <p className="text-sm">{beliefs_description[index]}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default page;
