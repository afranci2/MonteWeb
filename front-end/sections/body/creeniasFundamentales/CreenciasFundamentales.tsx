import React from "react";
import Header from "../../header/Header";
const CreenciasImage = "https://monte-assets.s3.amazonaws.com/img/bible.jpg";
import MainButton from "../../../components/mainButton/MainButton";
import { BsSun } from "react-icons/bs";
import { BiBible } from "react-icons/bi";
import { TbCross } from "react-icons/tb";

const CreenciasFundamentales = () => {
  const Creencias = [
    {
      id: 1,
      title: "La Biblia",
      subheading:
        "Creemos que la Biblia es la palabra de Dios; la regla infalible en la que basar nuestra fe y conducta. Creemos que fue inspirada divinamente por Dios como se afirma en 2 Timoteo 3:15 y 2 Pedro 2:2.  ",
      image: <BiBible size={60} />,
    },
    {
      id: 2,
      title: "Dios",
      subheading:
        "Estamos afirmando que creemos en el único y verdadero Dios, creador de los cielos, los cielos y la tierra, y de todo lo que existe en el mundo visible e invisible, que además conserva todo lo creado: JEHOVÁ.",
      image: <BsSun size={60} />,
    },
    {
      id: 3,
      title: "Jesucristo",
      subheading:
        "Creemos en Jesucristo como centro de nuestra fe cristiana, el hijo unigénito del padre lleno de gracia y verdad. Murió en la cruz a causa de nuestras transgresiones y pecados, y resucitó al tercer día para nuestra justificación y nuestra esperanza de resurrección.",
      image: <TbCross size={60} />,
    },
  ];

  return (
    <div className="w-full h-full bg-slate-100">
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
        containerheight="h-72"
      />
      <div className="py-8">
      <ul>
        {Creencias.map((section) => {
          return (
            <div className="total ">
              <div className="flex w-10/12 text-left p-8 m-auto ">
                <li className="flex w-1/2 gap-12" key={section.id}>
                  <div className="w-1 contain">
                    <div className=" bg-red-300 py-12">{section.image}</div>
                    <p className="font-bold text-lg ">{section.title}</p>
                    <p className="max-w-24">{section.subheading}</p>
                  </div>
                </li>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="p-8">
        <MainButton
          link="/conocernos/creencias"
          text="Leer mas"
          buttonPosition="center"
          buttonColor="bg-red-800 text-white"
        />
      </div>
      </div>
    </div>
  );
};

export default CreenciasFundamentales;
