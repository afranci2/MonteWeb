"use client";
import React, { useState } from "react";
import Navbar from "../../../../../sections/navbar/Navbar2";
import Footer from "../../../../../sections/footer/Footer";
import Header from "../../../../../sections/header/Header";
import Banner from "../../../../../components/banner/Banner";
import BodySectionImageLeft from "../../../../../sections/body/bodyImageText/imageRightTextLeft/BodySectionImageRight";
const image2 =
"https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/308797479_8109325175806213_3397974551028685495_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=QKpU077hoZwAX9U5QXQ&_nc_ht=scontent-atl3-2.xx&oh=00_AfCTNj8X6HlMdzzIrNUQG8t_4YoDqBzd2yuDyzG3iie9YA&oe=6471CCFE"


const heroimage =
  "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/105024806_4062236777181760_4080296992700234302_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=pv_ql8AtAosAX-WtbU7&_nc_ht=scontent-bos5-1.xx&oh=00_AfBKjwONDoqXPrjlgrhN1mgMY6qVuLxrHooFCrFkPhuj7w&oe=649368F4";
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
