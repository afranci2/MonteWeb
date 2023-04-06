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
  const [scrollY, setScrollY] = useState(50);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.pageYOffset > 50) {
        setShowDiv(false);
      } else {
        setShowDiv(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor =
    scrollY > 50
      ? "bg-white text-black transition ease-in  shadow-xl"
      : "font-medium navbar text-white";
  const icon = scrollY > 50 ? " 000" : "fff";

  return (
    <nav>
      <div
        className={
          backgroundColor + " fixed top-0 h-16 items-center w-full z-50"
        }
      >
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
          {toggleMenu && (
            <div className=" ">
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
