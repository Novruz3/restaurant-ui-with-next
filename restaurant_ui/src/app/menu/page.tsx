import { menu } from "@/data/data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((cat) => (
        <Link
          href={`menu/${cat.slug}`}
          key={cat.id}
          style={{ backgroundImage: `url(${cat.img})` }}
          className="h-1/3 w-full bg-cover md:h-[45vh]"
        >
          <div className={`text-${cat.color} w-1/2 flex flex-col items-center p-4 justify-center`}>
            <h1 className="uppercase text-xl font-bold">{cat.title}</h1>
            <p className="md:text-sm md:my-4 text-[12px] my-2">{cat.desc}</p>
            <button
              className={`hidden lg:block bg-${cat.color === "black" ? "black" : "gray-100"} text-${
                cat.color === "black" ? "white" : "red-500"
              } rounded-md py-2 px-4`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
