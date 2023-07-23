import React from "react";
import facebook from "../Assets/socials/facebook.png";
import instagram from "../Assets/socials/instagram.png";
import email from "../Assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2022 | Nuel</p>
        <p className="hidden sm:block">Artist</p>
        <p className="hidden sm:block">Decorator</p>
        <p className="hidden sm:block">Designed by @Uche Ejiogu</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.facebook.com/dave.wonder.560"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://instagram.com/agugbue_ikenna?igshid=MzNINGNKZWQ4Mg=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>

        <a
          className="ml-4"
          href="iamagugbueikenna@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
