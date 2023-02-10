import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Instagram from "../../../assets/icons/icons8-instagram-240.png";
import SocialMediaTab from "./SocialMediaTab";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-6 py-8">
      <SocialMediaTab
        icon={<AiFillFacebook size={30} fill="#1778F2" />}
        text="Facebook"
        link="https://www.facebook.com/elmontesinai.org"
      />
      <SocialMediaTab text="Instagram"         link="https://www.instagram.com/mp.montesinai"
>
        <img className="w-8  " src={Instagram}></img>
      </SocialMediaTab>
      <SocialMediaTab
        icon={<AiFillYoutube size={30} fill="#FF0000" />}
        text="Youtube"
        link="https://www.youtube.com/elmontesinai.org"

      />
    </div>
  );
};

export default SocialMedia;
