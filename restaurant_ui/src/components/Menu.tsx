import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaCartShopping, FaPhone } from "react-icons/fa6";
import { links } from "@/data/data";

const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const user = false;
  return (
    <div>
      {!menu ? (
        <HiMenuAlt1
          className="text-red-500 text-2xl font-bold"
          onClick={() => setMenu(true)}
        />
      ) : (
        <RiCloseLargeFill
          className="text-red-500 text-2xl font-bold"
          onClick={() => setMenu(false)}
        />
      )}
      {menu && <div className=" bg-red-500 w-full h-[calc(100vh-6rem)] absolute z-10 top-24 left-0">
        <div className="mt-8 flex flex-col gap-8 text-3xl text-white justify-center items-center my-auto">
          {links.map((link) => (
            <Link key={link.id} href={link.url} onClick={()=> setMenu(false)}>
              {link.title}
            </Link>
          ))}
          {user ? (
            <Link href="/orders" onClick={()=> setMenu(false)}>Orders</Link>
          ) : (
            <Link href="/login" onClick={()=> setMenu(false)}>Login</Link>
          )}
          <div className="items-center gap-2 bg-orange-300 rounded-lg p-2 flex">
            <FaPhone />
            <span>123456789</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCartShopping />
            <Link href="/cart" onClick={()=> setMenu(false)}>Cart (3)</Link>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Menu;
