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
import Logout from "./Logout";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showDiv = false;

  const icon = "000";

  return (
    <nav>
      <div className=" bg-white text-black transition ease-in shadow-md relative top-0 h-16 items-center w-full z-50">
        <div className="DESKTOP px-8 m-auto content flex h-full items-center justify-between">
          <div className="">
            <Link href={"/"}>
              <div className="desktop-logo w-52 align-center top-2.5 absolute flex">
                {/*<img src={showDiv ? logo2 : otherlogo} alt="logo" />   */}
              </div>
            </Link>
          </div>

          <div className="right-0">
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
