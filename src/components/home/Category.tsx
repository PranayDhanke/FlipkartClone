"use client";
import Image from "next/image";
import React, { useState } from "react";
import Categories from "@/components/Jsons/Category.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const Category = () => {
  return (
    <div className="box-border bg-white py-4 font-[600] text-[0.9rem] mt-3 mx-4 shadow-sm grid grid-flow-col place-items-center px-12 ">
      {Categories.Categories.map((category) => (
        <Link href={category.link}>
          <div className="itemscat">
            <Image
              src={category.imageurl}
              alt="Fashion"
              width={60}
              height={60}
            ></Image>
            <div className="flex items-center gap-1">
              <span>{category.text}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
