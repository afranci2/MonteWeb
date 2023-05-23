"use client";
import React, { useState } from "react";
import Navbar from "../../../../../sections/navbar/Navbar2";
import Footer from "../../../../../sections/footer/Footer";
import Header from "../../../../../sections/header/Header";
import Banner from "../../../../../components/banner/Banner";
import BodySectionImageLeft from "../../../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
const image2 =
  "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/308582926_8109322895806441_1503573631717639969_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LKPn4_W_2MAAX_bx8tW&_nc_ht=scontent-bos5-1.xx&oh=00_AfDM3Z8e0PlzbQWbgEeGS5rVKPCUWf0rAULGQfCjxi-I1A&oe=646FFDC4";
const heroimage =
  "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/65057510_2861504527254997_3639034715119288320_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=suEJc1V8S_wAX8JqXda&_nc_ht=scontent-atl3-2.xx&oh=00_AfBAHEzK_jSzJnFU8pDt16CJ5fqUfXla7A7SLYeS0uKGdw&oe=6493A94E"
const page = () => {
  const [option, setOption] = useState(false);

  return (
    <div>
      <Navbar />

      <Header
        children={undefined}
        image={heroimage}
        headerText={option == true ? "Evangelism" : "Evangelismo"}
        classChangeText={undefined}
        buttonColor={undefined}
        contentPosition={undefined}
        containerheight={undefined}
        mapLink={"/"}
        direction={undefined}
      />
      <Banner position="relative" color="bg-red-800">
        <div className="flex gap-8 text-white">
          <p
            onClick={() => {
              setOption(false);
            }}
            className="hover:text-gray-200 cursor-pointer"
          >
            Español
          </p>
          <p
            onClick={() => {
              setOption(true);
            }}
            className="cursor-pointer"
          >
            English
          </p>
        </div>
      </Banner>
      <div className="">
        {option == false ? (
          <div>
            <BodySectionImageLeft
              backgroundColor={"bg-white"}
              image={image2}
              headingText="Nuestra Misión
"
              subheadingText={
                "El Movimiento Pentecostal Monte Sinaí existe para este propósito; continuar extendiendo el reino de Dios en la tierra. Es por este sentido de responsabilidad que Dios ha puesto una visión en nosotros global, de alcanzar las naciones para Cristo.​"
              }
            ></BodySectionImageLeft>
            <div className="flex m-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeKMbGztf4ij00t-sEZgG9Phm8x9c8vk2v5dRG8nRLKPmuDCg/viewform?embedded=true"
                width="1500"
                height="1000"
              >
                Loading…
              </iframe>
            </div>{" "}
          </div>
        ) : (
          <div>
            <BodySectionImageLeft
              backgroundColor={"bg-white"}
              image={image2}
              headingText="Our mission
"
              subheadingText={
                "Movimiento Pentecostal Monte Sinai exists for this purpose; to continue to extend the kingdom of God on earth. It is because of this sense of responsibility that God has placed a global vision in us, to reach the nations for Christ.​"
              }
            ></BodySectionImageLeft>
            <div className="flex m-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeQFne_Uic7_AzP2QnNTS4j6ctoIevGiFxP8DieEwPz99HjaQ/viewform?embedded=true"
                width="1500"
                height="1000"
              >
                Loading…
              </iframe>
            </div>{" "}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
