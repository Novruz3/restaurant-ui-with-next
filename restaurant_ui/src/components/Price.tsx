"use client";
import { IPriceProps } from "@/types/Interfaces";
import React, { useState } from "react";

const Price = ({ price, id, options }: IPriceProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(price);
  const [selected, setSelected] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex flex-col gap-2 md:gap-8">
      <h2 className="font-bold text-2xl">
        ${(totalPrice * quantity).toFixed(2)}
      </h2>
      <div className="space-x-4">
        {options?.map((op, index) => (
          <button
            key={op.title}
            className="border border-red-500 p-2 rounded-md"
            onClick={() => {
              setSelected(index);
              setTotalPrice(price + op.additionalPrice);
            }}
            style={{
              backgroundColor:
                selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(248 113 113)",
            }}
          >
            {op.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center border border-red-500 py-2 px-8 sm:w-2/3 w-1/2">
          <span className="hidden sm:block">Quantity</span>
          <div>
            <button
              onClick={() => {
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
              }}
            >
              {"<"}
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => {
                quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="sm:w-1/3 w-1/2 bg-red-500 p-2 text-white uppercase border border-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
