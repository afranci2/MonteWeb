import React from "react";

const logo2 = "https://monte-assets.s3.amazonaws.com/logo/new-logo.png";
const otherlogo = "https://monte-assets.s3.amazonaws.com/logo/image2.png";

import Link from "next/link";

import "./navbar.css";
import Logout from "./Logout";

function Navbar() {

  const showDiv = false;

  return (
    <nav>
      <div className=" bg-white text-black transition ease-in shadow-md relative top-0 h-16 items-center w-full z-50">
        <div className="DESKTOP px-8 m-auto content flex h-full items-center justify-between">
          <div className="">
            <Link href={"/"}>
              <div className="desktop-logo w-52 align-center top-2.5 absolute flex">
                <img src={showDiv ? logo2 : otherlogo} alt="logo" />
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
