"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3, BsThreeDotsVertical } from "react-icons/bs";
import { PiHeadset, PiStorefrontBold } from "react-icons/pi";
import Link from "next/link";
import { GoBell, GoDownload } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";
import { fireauth } from "@/databases/firebase/firebase";
import NavLogin from "./NavLogin";
import NavLoginnot from "./NavLoginnot";
const Navbar = () => {
  const [dots, setdots] = useState(false);
  const [user, setuser] = useState(false);

  useEffect(() => {
    const user = fireauth.currentUser;
    if (user != null) {
      setuser(true);
    } else {
      setuser(false);
    }
  }, []);

  return (
    <div className="sticky pt-3 pb-4 px-6 bg-white flex box-border items-center">
      <Link href={"/"}>
        <div className="logo cursor-pointer sticky">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="160"
            height="40"
            title="Flipkart"
          />
        </div>
      </Link>
      <div className="search flex items-center ml-9">
        <CiSearch className="w-6 text-slate-500 h-6 absolute z-10 ml-3" />
        <input
          type="text"
          title="Search for Products, Brands and More"
          name="q"
          placeholder="Search for Products, Brands and More"
          className=" placeholder:text-slate-500 w-[36.3rem] h-10 p-[1.2rem]
                      rounded-md pl-12 text-[1.1rem] bg-blue-50 border-none
                      outline-none relative z-0"
        />
      </div>

      <div className=" relative z-0 flex items-center gap-10 mx-8 text-[17px] cursor-pointer ">
        {user ? <NavLoginnot /> : <NavLogin />}

        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <BsCart3 className="text-xl" />
            <span>Cart</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <PiStorefrontBold className="text-2xl" />
            <span>Became a Seller</span>
          </div>
        </Link>
      </div>

      <div>
        <BsThreeDotsVertical
          onMouseEnter={() => setdots(true)}
          onMouseLeave={() => {
            setdots(false);
          }}
          className=" w-11 h-11 p-3 rounded-md hover:bg-slate-100 
                    hover:border border-t-slate-200 text-black"
        />
      </div>
      {dots ? (
        <div
          onMouseEnter={() => setdots(true)}
          onMouseLeave={() => {
            setdots(false);
          }}
          className="absolute right-14 p-2 top-[3.8rem] bg-white shadow-2xl"
        >
          <div>
            <Link href={"/"} className="displays2">
              <GoBell />
              <span>Notification Prefrences</span>
            </Link>
          </div>
          <div>
            <Link href={"/"} className="displays2">
              <PiHeadset />
              <span>24x7 Custmer Support</span>
            </Link>
          </div>
          <div>
            <Link href={"/"} className="displays2">
              <FaArrowTrendUp />
              <span>Advetise</span>
            </Link>
          </div>
          <div>
            <Link href={"/"} className="displays2">
              <GoDownload />
              <span>Download App</span>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
