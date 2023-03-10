import React from "react";
import MainButton from "../../../components/mainButton/MainButton";
import { BsSun } from "react-icons/bs";
import { BiBible } from "react-icons/bi";
import { TbCross } from "react-icons/tb";

const CreenciasFundamentales = () => {
  const Creencias = [
    {
      index: 1,
      title: "La Biblia",
      subheading:
        "Creemos que la Biblia es la palabra de Dios; la regla infalible en la que basar nuestra fe y conducta. Creemos que fue inspirada divinamente por Dios como se afirma en 2 Timoteo 3:15 y 2 Pedro 2:2.  ",
      image: <BiBible size={60} />,
    },
    {
      index: 2,
      title: "Dios",
      subheading:
        "Estamos afirmando que creemos en el único y verdadero Dios, creador de los cielos, los cielos y la tierra, y de todo lo que existe en el mundo visible e invisible, que además conserva todo lo creado: JEHOVÁ.",
      image: <BsSun size={60} />,
    },
    {
      index: 3,
      title: "Jesucristo",
      subheading:
        "Creemos en Jesucristo como centro de nuestra fe cristiana, el hijo unigénito del padre lleno de gracia y verdad. Murió en la cruz a causa de nuestras transgresiones y pecados, y resucitó al tercer día para nuestra justificación y nuestra esperanza de resurrección.",
      image: <TbCross size={60} />,
    },
  ];

  return (
    <div className="text-center w-full flex h-full bg-slate-100 md:text-left">
      <div className="m-auto w-11/12 p-16 flex flex-col my-16">
        <ul className="p-12 gap-8 m-auto flex flex-col md:flex-row">
          {Creencias.map((section) => {
            return (
              <div className="">
                <li className="" key={section.index}>
                  <div className="">
                    <div className="justify-center flex py-4 md:justify-start">{section.image}</div>
                    <p className="font-bold text-lg ">{section.title}</p>
                    <p className="max-w-24">{section.subheading}</p>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="p-8">
          <MainButton
            link="/conocernos/creencias"
            text="Leer mas"
            buttonPosition="center"
            buttonColor="bg-yellow-400 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default CreenciasFundamentales;
