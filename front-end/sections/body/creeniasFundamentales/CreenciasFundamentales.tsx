import React from "react";
import MainButton from "../../../components/mainButton/MainButton";
import { BsSun } from "react-icons/bs";
import { BiBible } from "react-icons/bi";
import { TbCross } from "react-icons/tb";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


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
    <div className="text-center w-full flex h-full bg-white md:text-left py-20">
      <div className="m-auto w-10/12 flex flex-col my-16 md:p-16">
        <ul className="p-12 gap-16 m-auto flex flex-col md:flex-row">
          {Creencias.map((section) => {
            return (
              <div key={section.index} className="p-2">
                <li className="" key={section.index}>
                  <div className="">
                    <div className="justify-center flex py-4 md:justify-start">
                      {section.image}
                    </div>
                    <p className="font-bold text-lg ">{section.title}</p>
                    <p className="w-full m-auto">{section.subheading}</p>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="p-8">
          <Link href="/conocernos/creencias">
            <div className="flex justify-center gap-4">
              <button className="text-black text-sm  font-bold  rounded-lg text-center ">
                Creencias{" "}
              </button>{" "}
              <IoIosArrowForward
                className=" flex items-center my-auto"
                size={12}
              />{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreenciasFundamentales;
