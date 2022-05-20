import React from "react";
import Cart from "../cart"

export default function index() {
  return (
    <header className="text-white">
        <div className="px-[10%]">
      <div className="flex justify-between py-[3%]">
        <h1>Games Market</h1>
        <div><Cart/></div>
      </div>
      </div>
    </header>
  );
}
