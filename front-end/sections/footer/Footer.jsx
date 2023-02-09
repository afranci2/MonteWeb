import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-red-900 h-full z-50 relative text-center md:text-left">
      <div className="md:grid grid-cols-2 sm:gap-6 p-16 w-11/12">
        <div className=" content flex flex-col m-auto gap-4">
          <div className="logo">
            <p className="text-md">MOVIMIENTO PENTECOSTAL</p>
            <p className="font-serif text-4xl text-gold">MONTE SINAI</p>
          </div>
          <div className="description text-sm">
            <p>
              A lo largo de este movimiento, el fuego seguirá ardiendo en cada
              corazón como en el día de Pentecostés.
            </p>
          </div>
          <div className="link flex flex-col gap-4 py-4 space-y-4 md:hidden">
            <ul className="flex p-2 flex-col space-y-2 font-semibold">
              <li key={1}>
                <Link to="/">Conocernos</Link>
              </li>
              <li key={2}>
                <Link to="/">Iglesias</Link>
              </li>
              <li key={3}>
                <Link to="/">Unete</Link>
              </li>
              <li key={4}>
                <Link to="/">Donar</Link>
              </li>
            </ul>
          </div>
          <div className="py-4 socials justify-center flex gap-4 md:justify-start">
            <BsFacebook size={25} />
            <AiFillInstagram size={30} />
            <AiFillYoutube size={30} />
          </div>
          <div className="info text-xs">
            <p>
              155 Power Rd, Pawtucket, RI 02860 <br></br>+1 (401) 642-6645
            </p>
          </div>
        </div>
        <div className="md:flex px-8 gap-8 desktop-links sm: hidden">
          <ul className="flex flex-col space-y-2 font-semibold">
            <li key={1}>
              <Link to="/">Conocernos</Link>
            </li>
            <li key={2}>
              <Link to="/">Liders</Link>
            </li>
            <li key={3}>
              <Link to="/">Creencias</Link>
            </li>
            <li key={4}>
              <Link to="/">Historia</Link>
            </li>
          </ul>

          <ul className="flex flex-col space-y-2 font-semibold">
            <li key={1}>
              <Link to="/">Unete</Link>
            </li>
            <li key={2}>
              <Link to="/">Servir</Link>
            </li>
            <li key={3}>
              <Link to="/">Medios</Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 font-semibold">
            <li key={1}>
              <Link to="/">Iglesias</Link>
            </li>
            <li key={2}>
              <Link to="/">Busca Local</Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 font-semibold">
            <li key={1}>
              <Link to="/">Eventos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-8 rights-reserved gap-2 flex flex-col justify-center m-auto bg-slate-100 w-screen md:flex-row md:justify-between">
          <p className=" flex m-auto text-black text-xs md:mx-0">
            © 2021 Movimiento Pentecostal Monte Sinai. All Rights Reserved
          </p>
          <div className=" flex justify-center gap-10 pt-6 md:pt-0">
            <Link to="./rights-reserved">
              <p className="text-black text-xs">Privacy Policy</p>
            </Link>
            <Link to="./terms-of-service">
              <p className="text-black text-xs">Terms of Service</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
