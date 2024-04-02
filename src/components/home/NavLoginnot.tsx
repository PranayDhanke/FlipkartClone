"use client";
import { fireauth } from "@/databases/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiBoxList, CiGift, CiHeart } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import {
  MdCardGiftcard,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const NavLoginnot = () => {
  const [arrow, setarrow] = useState(true);
  const router = useRouter();

  const logoutuser = () => {
    const useravai = fireauth.currentUser;
    if (useravai != null) {
      fireauth
        .signOut()
        .then(() => {
          toast.success("logout success");
          router.push("/login")
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    } else {
      toast.error("user is not logged in");
    }
  };
  return (
    <div>
      <ToastContainer />
      <Link href={"/login"}>
        <div
          onMouseEnter={() => setarrow(false)}
          onMouseLeave={() => setarrow(true)}
          className="loginbars flex items-center gap-2 hover:bg-blue-500 p-2 rounded-lg hover:text-white"
        >
          <CgProfile className="text-xl" />
          <span>Account</span>
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
            <div onClick={logoutuser} className="displays">
              <BiLogOut />
              <span>Logout</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavLoginnot;
