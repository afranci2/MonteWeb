"use client";
import React from "react";
import { useState } from "react";
import { RiMenu2Line, RiCloseLine, RiSearchLine } from "react-icons/ri";
const logo = "https://monte-assets.s3.amazonaws.com/logo/new-logo.png";
const mobile__logo__fileAWS =
  "https://monte-assets.s3.amazonaws.com/logo/mobile_logo.webp";
import Link from "next/link";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="navbar fixed top-0 h-16 items-center w-full z-50 text-white">
        <div className="DESKTOP px-8 m-auto content hidden desktop:flex h-full md:items-center">
          <div className="desktop-logo w-56 absolute">
            <Link href={"/"}>
              <img src={logo} />
            </Link>
          </div>
          <ul className="desktop-links m-auto pt-1 text-xs font-medium hidden md:flex items-center gap-8">
            <li key={1}>
              <Link href={"/conocernos"}>CONOCERNOS</Link>
            </li>
            <li key={2}>
              <Link href={"/iglesias"}>IGLESIAS</Link>
            </li>
            <li key={3}>
              <Link href={"/unete"}>UNETE</Link>
            </li>
            <li key={4}>
              <Link href={"/eventos"}>EVENTOS</Link>
            </li>
            <li key={5}>
              <Link href={"/donar"}>DONAR</Link>
            </li>
          </ul>
          <div>
            <RiSearchLine color="fff" size={18}/>
          </div>
        </div>
        <div className="MOBILE flex items-center h-full w-11/12 m-auto dekstop:hidden">
          <div className="mobile-menu desktop:hidden">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={29}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu2Line
                color="#fff"
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
                className="w-52 mr-2 mt-4 mb-4"
                src={mobile__logo__fileAWS}
              />
            </Link>
          </div>
          <div className="mobile__search w-6 desktop:hidden">
            <Link href={"/"}>
              {" "}
              <RiSearchLine size={20} color="fff" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
