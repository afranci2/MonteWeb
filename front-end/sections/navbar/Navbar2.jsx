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
      <div className=" bg-white text-black transition ease-in  shadow-md fixed top-0 h-16 items-center w-full z-50">
        <div className="DESKTOP px-8 m-auto content hidden desktop:flex h-full md:items-center">
          <div>
            <Link href={"/"}>
              <div className="desktop-logo w-52 align-center top-2.5 absolute flex">
                <img src={showDiv ? logo2 : otherlogo} alt="logo" />
              </div>
            </Link>
          </div>
          <ul className="desktop-links  m-auto pt-1 text-sm   hidden md:flex items-center gap-6">
            <li key={1}>
              <Link href={"/conocernos"}>Conocernos</Link>
            </li>
            <li key={2}>
              <Link href={"/iglesias"}>Iglesias</Link>
            </li>
            <li key={3}>
              <Link href={"/unete"}>Unete</Link>
            </li>
            <li key={4}>
              <Link href={"/eventos"}>Eventos</Link>
            </li>
            <li key={5}>
              <Link href={"/donar"}>Donar</Link>
            </li>
          </ul>
          <div>
            <RiSearchLine color={icon} size={18} />
          </div>
        </div>
        <div className="MOBILE flex items-center h-full w-11/12 m-auto ">
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
            {toggleMenu && (
              <div className="links-mobile slide-in-left ">
                <div
                  className="text-center z-50 mobile-links w-5/6 p-10 bg-slate-100 top-16
               flex-col absolute rounded text-black 
             
              font-semibold text-2xl"
                >
                  <div className=" mobile-menu-pop py-20">
                    <ul>
                      <li className="p-2" key={1}>
                        <Link href={"/conocernos"}>
                          <p>Conocernos</p>
                        </Link>
                      </li>
                      <li className="p-2" key={1}>
                        <Link href={"/iglesias"}>
                          <p>Iglesias</p>
                        </Link>
                      </li>
                      <li className="p-2" key={1}>
                        <Link href={"/unete"}>
                          <p>Unete</p>
                        </Link>
                      </li>
                      <li className="p-2" key={1}>
                        <Link href={"/eventos"}>
                          <p>Eventos</p>
                        </Link>
                      </li>
                      <li className="p-2" key={1}>
                        <Link href={"/donar"}>
                          <p>Donar</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
