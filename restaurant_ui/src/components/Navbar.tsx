"use client";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { FaCartShopping, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const user = false;
  return (
    <>
      <div className="h-12 md:text-xl flex justify-between items-center border-b-2 border-red-500 px-4 md:h-24">
        <div className="hidden md:flex gap-4 text-red-500 flex-1 justify-start">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="text-red-500 font-bold text-xl flex-1 md:text-center md:text-2xl">
          <Link href="/">MASSIMO</Link>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
        <div className="hidden md:flex gap-4 items-center text-red-500 flex-1 justify-end">
          <div className="items-center gap-2 bg-orange-300 rounded-lg p-1 hidden lg:flex">
            <FaPhone />
            <span>123456789</span>
          </div>
          <div>
            {user ? (
              <Link href="/orders">Orders</Link>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            <FaCartShopping />
            <Link href="/cart">Cart (3)</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
