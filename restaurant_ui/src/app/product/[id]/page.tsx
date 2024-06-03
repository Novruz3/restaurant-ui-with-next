import Price from "@/components/Price";
import { singleProduct } from "@/data/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="md:mt-8 p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row justify-around text-red-500">
      <div className="relative w-full h-1/3 sm:h-1/2 md:h-[70%]">
        {singleProduct.img && (
          <Image
            fill
            src={singleProduct.img}
            alt={singleProduct.title}
            className="object-contain w-full"
          />
        )}
      </div>
      <div className="w-full h-2/3 sm:h-1/2 flex flex-col gap-2 md:h-[70%]">
        <h1 className="font-bold text-3xl uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
