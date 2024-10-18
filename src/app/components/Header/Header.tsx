"use client";
import { useState } from "react";
import "./header.css";
import Link from "next/link";
export default function Header() {
  const [showMenu, setShowMenu]:[boolean, (arg0: boolean) => void] = useState(false);
  const toggle:() => void = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="w-full bg-black flex justify-between p-6">
      <h4 className="font-semibold text-xl">Next shop</h4>
      <div className="lg:block hidden">
        <ul className="flex justify-around mx-4">
          <li className="mx-3 px-4 cursor-pointer">Products</li>
          <li className="mx-3 px-4 cursor-pointer"><Link href="/auth/signin">Sign In</Link></li>
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
            <li className="mx-3 px-4 cursor-pointer"><Link href="/auth/signin">Sign In</Link></li>
            <li className="mx-3 px-4 cursor-pointer">Cart</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
