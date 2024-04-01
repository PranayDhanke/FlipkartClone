import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import {
  PiCopyrightThin,
  PiGift,
  PiQuestionThin,
  PiShootingStarThin,
  PiStorefrontThin,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black mt-8 pt-1">
      <hr className=" bg-white " />
      <div className="text-white flex p-5  justify-between px-8">
        <div className="flex gap-5">
          <div className="footersty">
            <PiStorefrontThin />
            <span>Became a Seller</span>
          </div>
          <div className="footersty">
            <PiShootingStarThin />
            <span>Advertise</span>
          </div>
          <div className="footersty">
            <PiGift />
            <span>Gift Cards</span>
          </div>
          <div className="footersty">
            <PiQuestionThin />
            <span>Help Center</span>
          </div>
        </div>
        <div>
          <div className="footersty ">
            <PiCopyrightThin />
            <span>Today FakeFlipkart.com</span>
          </div>
        </div>
        <div>
          <div className=" flex gap-5">
            <span>Follow Us on : </span>
            <div className="footersty ">
              <BsTwitterX />
              <span>Twitter</span>
            </div>
            <div className="footersty">
              <BsGithub />
              <span>Github</span>
            </div>
            <div className="footersty">
              <BsLinkedin />
              <span>Linked In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
