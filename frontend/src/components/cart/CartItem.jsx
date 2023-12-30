"use client";

import { useState } from "react";

const CartItem = () => {
  const [itemCount, setItemCount] = useState(1);
  return (
    <div className="pb-8 border-b border-[#D1D1D8] flex justify-between gap-5 flex-wrap">
      <div className="flex items-center flex-wrap gap-9">
        <img
          src="/images/products/11.jpeg"
          alt="product"
          className="w-[160px] h-[160px]"
        />
        <div>
          <h3 className="mb-3 text-xl font-semibold">Osmond Armchair</h3>
          <div className="flex items-center gap-3">
            <span className="text-[#A2A3B1] font-semibold">Color</span>
            <span className="font-semibold">Gunnared biege</span>
          </div>
          <div className="flex items-center flex-wrap gap-7 mt-7">
            <div className="px-4 py-2 border border-[#A2A3B1] rounded-md flex items-center gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="cursor-pointer"
                onClick={() => setItemCount(itemCount - 1)}
              >
                <path
                  d="M4.16667 10H15.8333"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#17183B] text-lg">{itemCount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="cursor-pointer"
                onClick={() => setItemCount(itemCount + 1)}
              >
                <path
                  d="M10 4.16675V15.8334"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16666 10H15.8333"
                  stroke="#17183B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <button className="text-[#E14B4B] font-semibold">Remove</button>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold">$149.99</h3>
    </div>
  );
};

export default CartItem;
