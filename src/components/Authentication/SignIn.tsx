"use client";
import React, { useState } from "react";
import Navbar from "../home/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/flipkart icons.png";
import { FcGoogle } from "react-icons/fc";
import Footer from "../home/Footer";

import { fireauth } from "@/databases/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");

  const router = useRouter();

  const handlesignin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(fireauth, email, Password)
      .then(() => {
        toast.success("Sign in success");
        router.push("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const handglogin = () => {
    signInWithPopup(fireauth, new GoogleAuthProvider())
      .then(() => {
        toast.success("Sign In success");
        router.push("/");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex w-full mt-10 ml-[20%]">
        <div className="bg-blue-600 text-white p-10 pt-12">
          <span className="text-3xl tracking-wider font-bold">Sign In</span>
          <p className="text-[1.2rem] font-[500] tracking-wide text-gray-300 mt-6">
            Get access to your orders <br />
            Wishlist and Recomendations
          </p>
          <Image src={Logo} alt="" className="w-32 mt-52  ml-16"></Image>
        </div>
        <div className="bg-white p-10 grid text-center pt-20">
          <form onSubmit={handlesignin} className="grid">
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full border-b-2 pb-2 border-gray-300  outline-none"
            />
            <br />
            <input
              placeholder="Password"
              type="text"
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full border-b-2 pb-2 border-gray-300  outline-none"
            />
            <span className="flex float-end mt-4 text-blue-700 cursor-pointer text-xs tracking-wide">
              Forgot Password ?
            </span>
            <br />
            <span className="text-[13px] text-gray-400  tracking-wide">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-blue-700 cursor-pointer">Terms of Use</span>{" "}
              and
              <span className="text-blue-700 cursor-pointer">
                {" "}
                Privacy Policy
              </span>
              .
            </span>
            <br />
            <button
              type="submit"
              className="bg-orange-500 text-white p-3 text-xl"
            >
              Sign In
            </button>
          </form>
          <br />
          <div
            onClick={handglogin}
            className="flex items-center  gap-5 mt-6 ml-2 border
           border-black p-3 rounded-full hover:bg-orange-300 cursor-pointer
            hover:text-white hover:border-none "
          >
            <FcGoogle className="ml-3 text-2xl text-red-400 " />
            <span className="text-xl">Google</span>
          </div>
          <br />
          <span className="mt-48 text-blue-700 font-semibold cursor-pointer ">
            <Link href={"/login"}>Already have Account? Login</Link>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
