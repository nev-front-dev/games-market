import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="relative top-0 left-0 flex max-w-full">
      <AiOutlineShoppingCart size={30} />
      <p className="inline-block h-4 w-4 bg-red-500 absolute top-[-5px] left-[20px] rounded-[50%]">
        <span className="absolute top-1/5 left-1/4 text-xs">3</span>
      </p>
      <p className="flex items-center">
        <span className="inline-block ml-[5px]">2312</span>
        <span className="inline-flex ml-[5px]">$</span>
      </p>
    </div>
  );
}
