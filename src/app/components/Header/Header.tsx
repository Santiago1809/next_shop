"use client";
import { useState } from "react";
import "./header.css";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="w-full bg-black flex justify-between p-6">
      <h4 className="font-semibold text-xl">Next shop</h4>
      <div className="lg:block hidden">
        <ul className="flex justify-around mx-4">
          <li className="mx-3 px-4 cursor-pointer">Products</li>
          <li className="mx-3 px-4 cursor-pointer">Sign In</li>
          <li className="mx-3 px-4 cursor-pointer">Cart</li>
        </ul>
      </div>
      <div className="lg:hidden block relative">
        <button className="text-white" onClick={toggle}>
          ☰
        </button>
      </div>
      {showMenu && (
        <div className="lg:hidden absolute bg-black top-[10%] right-3">
          <ul className="flex flex-col justify-center text-center py-3">
            <li className="mx-3 px-4 cursor-pointer">Products</li>
            <li className="mx-3 px-4 cursor-pointer">Sign In</li>
            <li className="mx-3 px-4 cursor-pointer">Cart</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
