"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiBoxList, CiGift, CiHeart } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import {
  MdCardGiftcard,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const NavLogin = () => {
  const [arrow, setarrow] = useState(true);
  return (
    <div>
      <Link href={"/login"}>
        <div
          onMouseEnter={() => setarrow(false)}
          onMouseLeave={() => setarrow(true)}
          className="loginbars flex items-center gap-2 hover:bg-blue-500 p-2 rounded-lg hover:text-white"
        >
          <CgProfile className="text-xl" />
          <span>Login</span>
          {arrow ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </div>
      </Link>

      {!arrow ? (
        <div
          onMouseEnter={() => setarrow(false)}
          onMouseLeave={() => setarrow(true)}
          className="absolute top-[2.55rem] z-20 bg-white p-4 w-[17rem] 
            rounded-b-lg drop-shadow-2xl"
        >
          <div className="flex items-center justify-between gap-5">
            <span>New Custmer?</span>
            <Link href={"/signin"}>
              <span className="text-blue-400 font-bold">Sign UP</span>
            </Link>
          </div>
          <hr className="mt-2" />
          <div className="grid mt-3">
            <Link href={"/"}>
              <div className="displays">
                <CgProfile />
                <span>My Profile</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="displays">
                <FaPlusCircle />
                <span>Flipkart Plus Zone</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="displays">
                <CiBoxList />
                <span>Orders</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="displays">
                <CiHeart />
                <span>Wishlist</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="displays">
                <CiGift />
                <span>Rewards</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="displays">
                <MdCardGiftcard />
                <span>Gift Cards</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavLogin;
