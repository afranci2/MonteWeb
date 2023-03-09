import React from "react";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
const Instagram =
  "https://monte-assets.s3.amazonaws.com/icon/icons8-instagram-240.png";
import SocialMediaTab from "./SocialMediaTab";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-6 py-6">
      <SocialMediaTab
        icon={<AiFillFacebook size={30} fill="#1778F2" />}
        text="Facebook"
        link="https://www.facebook.com/elmontesinai.org"
      />
      <SocialMediaTab
        text="Instagram"
        link="https://www.instagram.com/mp.montesinai"
      >
        <Image
          className="w-8"
          alt="instagram"
          src={Instagram}
          width={100}
          height={100}
        />
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
