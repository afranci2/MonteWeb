"use client";
import React from "react";
import { useState, useEffect } from "react";
import { RiMenu2Line, RiCloseLine, RiSearchLine } from "react-icons/ri";
const logo2 = "https://monte-assets.s3.amazonaws.com/logo/new-logo.png";
const otherlogo = "https://monte-assets.s3.amazonaws.com/logo/image2.png";
const mobile__logo__fileAWS =
  "https://monte-assets.s3.amazonaws.com/logo/mobile_logo.webp";
import Link from "next/link";
const mobileLogo2 =
  "https://monte-assets.s3.amazonaws.com/logo/image2+copy.png";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showDiv = false;

  const icon = "000";

  return (
    <nav>
      <div className=" bg-white text-black transition ease-in shadow-md relative top-0 h-16 items-center w-full z-50">
        <div className="DESKTOP px-8 m-auto content hidden desktop:flex h-full md:items-center md:justify-between">
          <div className="">
            <Link href={"/"}>
              <div className="desktop-logo w-52 align-center top-2.5 absolute flex">
                <img src={showDiv ? logo2 : otherlogo} alt="logo" />
              </div>
            </Link>
          </div>

          <div className="right-0">
            <Link href={"/admin/"}>
              <p className="text-sm">Hello Admin</p>
            </Link>
          </div>
        </div>
        <div className="MOBILE flex items-center h-full w-11/12 m-auto ">
          {toggleMenu && (
            <div className="relative">
              <div className=" relative">
                <div
                  className="text-center z-50 mobile-links top-0 left-0 w-3/4 h-screen p-10 shadow-lg bg-white
               flex-col fixed text-black 
             
              font-semibold text-2xl py-20"
                >
                  <div className="text-left mobile-menu-pop">
                    <ul>
                      <li className="p-2 py-8 border-b-2" key={1}>
                        <Link href={"/conocernos"}>
                          <p>Conocernos</p>
                        </Link>
                      </li>
                      <li className="p-2 py-8 border-b-2" key={1}>
                        <Link href={"/iglesias"}>
                          <p>Iglesias</p>
                        </Link>
                      </li>
                      <li className="p-2 py-8 border-b-2" key={1}>
                        <Link href={"/unete"}>
                          <p>Unete</p>
                        </Link>
                      </li>
                      <li className="p-2 py-8 border-b-2" key={1}>
                        <Link href={"/eventos"}>
                          <p>Eventos</p>
                        </Link>
                      </li>
                      <li className="p-2 py-8" key={1}>
                        <Link href={"/donar"}>
                          <p>Donar</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <RiCloseLine
                    className="absolute top-0 right-0 cursor-pointer m-8"
                    color={"#000000"}
                    size={30}
                    onClick={() => setToggleMenu(false)}
                  />
                </div>
              </div>
              <div className="fixed top-0 w-screen h-screen bg-black/70"></div>
            </div>
          )}
          <div className="mobile-menu desktop:hidden">
            {toggleMenu ? (
              <RiCloseLine
                color={icon}
                size={29}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu2Line
                color={icon}
                size={24}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
          <div className="mobile__logo mx-auto block relative w-16 h-auto desktop:hidden">
            <Link href={"/"}>
              <img
                src={showDiv ? mobile__logo__fileAWS : mobileLogo2}
                alt="logo"
              />
            </Link>
          </div>
          <div className="mobile__search w-6 desktop:hidden">
            <Link href={"/"}>
              {" "}
              <RiSearchLine size={20} color={icon} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
