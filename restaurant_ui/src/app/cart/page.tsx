import Image from "next/image";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Cart = () => {
  return (
    <div className="flex flex-col text-red-500 md:flex-row">
      <div className="p-4 flex flex-col justify-center md:w-2/3 lg:mx-20">
        <div className="flex items-center justify-between mb-4 flex-row border-b border-red-500 pb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer text-xl">
          <IoIosCloseCircle />
          </span>
        </div>
      </div>
      <div className="p-4 m-4 mt-4 bg-fuchsia-50 flex flex-col gap-4 justify-center md:w-1/3">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
