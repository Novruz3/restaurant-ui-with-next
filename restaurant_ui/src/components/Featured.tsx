import { featuredProducts } from "@/data/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll  text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col justify-around  p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                {product.img && <Image
                  src={product.img}
                  alt=""
                  className="object-contain"
                  fill
                />}
              </div>
            <div className="flex flex-col flex-1 gap-2 text-sm lg:text-base text-center items-center">
              <h1 className="uppercase text-xl font-bold">{product.title}</h1>
              <p className="p-4">{product.desc}</p>
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-red-500 text-white rounded-md p-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
