"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";

const Product = () => {
  const [itemCount, setItemCount] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [color, setColor] = useState(1);
  return (
    <main className="px-5 py-14">
      <div className="px-5 lg:container flex flex-col-reverse md:flex-row justify-between gap-16">
        <div className="w-full md:w-[40%] lg:pl-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23 12H1"
              stroke="#17183B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 17L1 12L6 7"
              stroke="#17183B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="flex items-center gap-2 text-sm mt-8">
            <span className="font-semibold">Chair</span>
            <span className="text-[#17183B] font-semibold">/</span>
            <span className="text-[#17183B] font-semibold">
              Meryl Lounge Chair
            </span>
          </div>

          <h2 className="text-[#17183B] text-[30px] sm:text-[44px] font-bold mt-14">
            Meryl Lounge Chair
          </h2>
          <div className="mt-2 flex items-center justify-between gap-5 flex-wrap">
            <h3 className="text-[#17183B] font-semibold text-2xl">$149.99</h3>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="14"
                viewBox="0 0 86 14"
                fill="none"
              >
                <path
                  d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z"
                  fill="#FFC41F"
                />
                <path
                  d="M24.7347 0.502901C24.8472 0.289557 25.1528 0.289558 25.2653 0.502902L27.0707 3.92471C27.1141 4.00699 27.1932 4.06447 27.2849 4.08033L31.0971 4.73994C31.3348 4.78106 31.4292 5.07165 31.2611 5.24463L28.5647 8.01904C28.4998 8.08575 28.4696 8.17876 28.4828 8.27083L29.0336 12.1003C29.0679 12.3391 28.8207 12.5187 28.6042 12.4122L25.1324 10.7051C25.0489 10.664 24.9511 10.664 24.8676 10.7051L21.3958 12.4122C21.1793 12.5187 20.9321 12.3391 20.9664 12.1003L21.5172 8.27083C21.5304 8.17876 21.5002 8.08575 21.4353 8.01904L18.7389 5.24463C18.5708 5.07165 18.6652 4.78106 18.9029 4.73994L22.7151 4.08033C22.8068 4.06447 22.8859 4.00699 22.9293 3.92471L24.7347 0.502901Z"
                  fill="#FFC41F"
                />
                <path
                  d="M42.7347 0.502901C42.8472 0.289557 43.1528 0.289558 43.2653 0.502902L45.0707 3.92471C45.1141 4.00699 45.1932 4.06447 45.2849 4.08033L49.0971 4.73994C49.3348 4.78106 49.4292 5.07165 49.2611 5.24463L46.5647 8.01904C46.4998 8.08575 46.4696 8.17876 46.4828 8.27083L47.0336 12.1003C47.0679 12.3391 46.8207 12.5187 46.6042 12.4122L43.1324 10.7051C43.0489 10.664 42.9511 10.664 42.8676 10.7051L39.3958 12.4122C39.1793 12.5187 38.9321 12.3391 38.9664 12.1003L39.5172 8.27083C39.5304 8.17876 39.5002 8.08575 39.4353 8.01904L36.7389 5.24463C36.5708 5.07165 36.6652 4.78106 36.9029 4.73994L40.7151 4.08033C40.8068 4.06447 40.8859 4.00699 40.9293 3.92471L42.7347 0.502901Z"
                  fill="#FFC41F"
                />
                <path
                  d="M60.7347 0.502901C60.8472 0.289557 61.1528 0.289558 61.2653 0.502902L63.0707 3.92471C63.1141 4.00699 63.1932 4.06447 63.2849 4.08033L67.0971 4.73994C67.3348 4.78106 67.4292 5.07165 67.2611 5.24463L64.5647 8.01904C64.4998 8.08575 64.4696 8.17876 64.4828 8.27083L65.0336 12.1003C65.0679 12.3391 64.8207 12.5187 64.6042 12.4122L61.1324 10.7051C61.0489 10.664 60.9511 10.664 60.8676 10.7051L57.3958 12.4122C57.1793 12.5187 56.9321 12.3391 56.9664 12.1003L57.5172 8.27083C57.5304 8.17876 57.5002 8.08575 57.4353 8.01904L54.7389 5.24463C54.5708 5.07165 54.6652 4.78106 54.9029 4.73994L58.7151 4.08033C58.8068 4.06447 58.8859 4.00699 58.9293 3.92471L60.7347 0.502901Z"
                  fill="#FFC41F"
                />
                <path
                  d="M78.7347 0.502901C78.8472 0.289557 79.1528 0.289558 79.2653 0.502902L81.0707 3.92471C81.1141 4.00699 81.1932 4.06447 81.2849 4.08033L85.0971 4.73994C85.3348 4.78106 85.4292 5.07165 85.2611 5.24463L82.5647 8.01904C82.4998 8.08575 82.4696 8.17876 82.4828 8.27083L83.0336 12.1003C83.0679 12.3391 82.8207 12.5187 82.6042 12.4122L79.1324 10.7051C79.0489 10.664 78.9511 10.664 78.8676 10.7051L75.3958 12.4122C75.1793 12.5187 74.9321 12.3391 74.9664 12.1003L75.5172 8.27083C75.5304 8.17876 75.5002 8.08575 75.4353 8.01904L72.7389 5.24463C72.5708 5.07165 72.6652 4.78106 72.9029 4.73994L76.7151 4.08033C76.8068 4.06447 76.8859 4.00699 76.9293 3.92471L78.7347 0.502901Z"
                  fill="#D1D1D8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M79.3463 0.656162L79.2653 0.502782C79.1528 0.289438 78.8472 0.289437 78.7347 0.502781L76.9293 3.92459C76.8859 4.00687 76.8068 4.06435 76.7151 4.08021L72.9029 4.73982C72.6652 4.78094 72.5708 5.07153 72.7389 5.24451L75.4354 8.01892C75.5002 8.08563 75.5304 8.17864 75.5172 8.27071L74.9664 12.1002C74.9321 12.3389 75.1793 12.5185 75.3958 12.4121L78.8676 10.705C78.9511 10.6639 79.0489 10.6639 79.1324 10.705L79.3463 10.8101V0.656162Z"
                  fill="#FFC41F"
                />
              </svg>
              <span className="text-[#17183B]">
                4.6 / 5.0 <span className="text-[#A2A3B1]">(556)</span>
              </span>
            </div>
          </div>
          <p className="mt-12 text-[#17183B] leading-6">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                color === 1 ? "bg-[#E8E8EB]" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => setColor(1)}
            >
              <div className="w-5 h-5 rounded-full bg-[#C1BDB3]" />
            </div>
            <div
              className={`w-7 h-7 rounded-full bg-transparent flex items-center justify-center ${
                color === 2 ? "bg-[#58737D]/20" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => setColor(2)}
            >
              <div className="w-5 h-5 rounded-full bg-[#58737D]" />
            </div>
            <div
              className={`w-7 h-7 rounded-full bg-transparent flex items-center justify-center ${
                color === 3 ? "bg-[#545454]/20" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => setColor(3)}
            >
              <div className="w-5 h-5 rounded-full bg-[#545454]" />
            </div>
            <div
              className={`w-7 h-7 rounded-full bg-transparent flex items-center justify-center ${
                color === 4 ? "bg-[#CBA5A5]/20" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => setColor(4)}
            >
              <div className="w-5 h-5 rounded-full bg-[#CBA5A5]" />
            </div>
          </div>
          <div className="mt-8 gap-6 flex items-center flex-wrap">
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
            <Button className="rounded-md">Add to Cart</Button>
          </div>
          <p className="text-[#17183B] mt-8">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>
          <div className="mt-20 flex items-center justify-between gap-5 flex-wrap">
            <button
              className="text-base text-primary flex items-center gap-2 font-semibold cursor-pointer"
              onClick={() => setWishlist(!wishlist)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={wishlist ? "#3AA39F" : "none"}
              >
                <path
                  d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012V4.61012Z"
                  stroke="#3AA39F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Add to Wishlist</span>
            </button>
            <div className="flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z"
                  fill="#17183B"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M16 3.5C15.4 3.8 14.8 3.9 14.1 4C14.8 3.6 15.3 3 15.5 2.2C14.9 2.6 14.2 2.8 13.4 3C12.8 2.4 11.9 2 11 2C8.9 2 7.3 4 7.8 6C5.1 5.9 2.7 4.6 1 2.6C0.1 4.1 0.6 6 2 7C1.5 7 1 6.8 0.5 6.6C0.5 8.1 1.6 9.5 3.1 9.9C2.6 10 2.1 10.1 1.6 10C2 11.3 3.2 12.3 4.7 12.3C3.5 13.2 1.7 13.7 0 13.5C1.5 14.4 3.2 15 5 15C11.1 15 14.5 9.9 14.3 5.2C15 4.8 15.6 4.2 16 3.5Z"
                  fill="#17183B"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 11.3 2 14.1 4.8 15.3C4.8 14.7 4.79999 14.1 4.89999 13.5C5.09999 12.8 5.89999 9.1 5.89999 9.1C5.89999 9.1 5.60001 8.6 5.60001 7.8C5.60001 6.6 6.30001 5.7 7.10001 5.7C7.80001 5.7 8.2 6.2 8.2 6.9C8.2 7.6 7.7 8.7 7.5 9.7C7.3 10.5 7.9 11.2 8.8 11.2C10.3 11.2 11.3 9.3 11.3 6.9C11.3 5.1 10.1 3.8 8 3.8C5.6 3.8 4.10001 5.6 4.10001 7.6C4.10001 8.3 4.30001 8.8 4.60001 9.2C4.70001 9.4 4.8 9.4 4.7 9.6C4.7 9.7 4.6 10.1 4.5 10.2C4.4 10.4 4.30001 10.5 4.10001 10.4C3.00001 9.9 2.5 8.7 2.5 7.3C2.5 5 4.4 2.3 8.2 2.3C11.3 2.3 13.3 4.5 13.3 6.9C13.3 10 11.6 12.4 9 12.4C8.1 12.4 7.3 11.9 7 11.4C7 11.4 6.49999 13.2 6.39999 13.6C6.19999 14.2 5.90001 14.8 5.60001 15.3C6.30001 15.5 7.09999 15.6 7.89999 15.6C12.3 15.6 15.9 12 15.9 7.6C16 3.6 12.4 0 8 0Z"
                  fill="#17183B"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1.44578C10.1205 1.44578 10.4096 1.44578 11.2771 1.44578C12.0482 1.44578 12.4337 1.63855 12.7229 1.73494C13.1084 1.92771 13.3976 2.0241 13.6867 2.31325C13.9759 2.60241 14.1687 2.89157 14.2651 3.27711C14.3614 3.56627 14.4578 3.95181 14.5542 4.72289C14.5542 5.59036 14.5542 5.78313 14.5542 8C14.5542 10.2169 14.5542 10.4096 14.5542 11.2771C14.5542 12.0482 14.3614 12.4337 14.2651 12.7229C14.0723 13.1084 13.9759 13.3976 13.6867 13.6867C13.3976 13.9759 13.1084 14.1687 12.7229 14.2651C12.4337 14.3614 12.0482 14.4578 11.2771 14.5542C10.4096 14.5542 10.2169 14.5542 8 14.5542C5.78313 14.5542 5.59036 14.5542 4.72289 14.5542C3.95181 14.5542 3.56627 14.3614 3.27711 14.2651C2.89157 14.0723 2.60241 13.9759 2.31325 13.6867C2.0241 13.3976 1.83133 13.1084 1.73494 12.7229C1.63855 12.4337 1.54217 12.0482 1.44578 11.2771C1.44578 10.4096 1.44578 10.2169 1.44578 8C1.44578 5.78313 1.44578 5.59036 1.44578 4.72289C1.44578 3.95181 1.63855 3.56627 1.73494 3.27711C1.92771 2.89157 2.0241 2.60241 2.31325 2.31325C2.60241 2.0241 2.89157 1.83133 3.27711 1.73494C3.56627 1.63855 3.95181 1.54217 4.72289 1.44578C5.59036 1.44578 5.87952 1.44578 8 1.44578ZM8 0C5.78313 0 5.59036 0 4.72289 0C3.85542 0 3.27711 0.192772 2.79518 0.385543C2.31325 0.578314 1.83133 0.867471 1.3494 1.3494C0.867471 1.83133 0.674699 2.21687 0.385543 2.79518C0.192772 3.27711 0.0963856 3.85542 0 4.72289C0 5.59036 0 5.87952 0 8C0 10.2169 0 10.4096 0 11.2771C0 12.1446 0.192772 12.7229 0.385543 13.2048C0.578314 13.6867 0.867471 14.1687 1.3494 14.6506C1.83133 15.1325 2.21687 15.3253 2.79518 15.6145C3.27711 15.8072 3.85542 15.9036 4.72289 16C5.59036 16 5.87952 16 8 16C10.1205 16 10.4096 16 11.2771 16C12.1446 16 12.7229 15.8072 13.2048 15.6145C13.6867 15.4217 14.1687 15.1325 14.6506 14.6506C15.1325 14.1687 15.3253 13.7831 15.6145 13.2048C15.8072 12.7229 15.9036 12.1446 16 11.2771C16 10.4096 16 10.1205 16 8C16 5.87952 16 5.59036 16 4.72289C16 3.85542 15.8072 3.27711 15.6145 2.79518C15.4217 2.31325 15.1325 1.83133 14.6506 1.3494C14.1687 0.867471 13.7831 0.674699 13.2048 0.385543C12.7229 0.192772 12.1446 0.0963856 11.2771 0C10.4096 0 10.2169 0 8 0Z"
                  fill="#17183B"
                />
                <path
                  d="M8 3.85542C5.68675 3.85542 3.85542 5.68675 3.85542 8C3.85542 10.3133 5.68675 12.1446 8 12.1446C10.3133 12.1446 12.1446 10.3133 12.1446 8C12.1446 5.68675 10.3133 3.85542 8 3.85542ZM8 10.6988C6.55422 10.6988 5.30121 9.54217 5.30121 8C5.30121 6.55422 6.45783 5.30121 8 5.30121C9.44578 5.30121 10.6988 6.45783 10.6988 8C10.6988 9.44578 9.44578 10.6988 8 10.6988Z"
                  fill="#17183B"
                />
                <path
                  d="M12.241 4.72289C12.7733 4.72289 13.2048 4.29136 13.2048 3.75904C13.2048 3.22671 12.7733 2.79518 12.241 2.79518C11.7086 2.79518 11.2771 3.22671 11.2771 3.75904C11.2771 4.29136 11.7086 4.72289 12.241 4.72289Z"
                  fill="#17183B"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] flex flex-col items-end">
          <div className="flex items-center gap-3">
            <h3 className="text-[32px] text-[#17183B] font-bold">01</h3>
            <span className="text-2xl font-semibold text-[#A2A3B1]">/ 05</span>
          </div>
          <div className="flex items-center gap-20 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer stroke-[#17183B] transition-all hover:stroke-primary"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer stroke-[#17183B] transition-all hover:stroke-primary"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-end">
            <div className="-mr-[40%]">
              <img className="w-[800px]" src="/images/products/5.png" alt="" />
            </div>
            <div className="w-[350px] h-[150px] lg:w-[440px] lg:h-[250px] product-shadow" />
          </div>
          <div className="mt-[75px] grid-cols-2 sm:grid-cols-3 grid lg:grid-cols-4 xl:grid-cols-6 gap-6">
            <div className="hidden xl:block"></div>
            <div className="w-full h-full border-2 rounded-[5px] flex items-center justify-center border-primary p-1 cursor-pointer transition-all hover:border-primary">
              <img
                className="w-full mx-h-full"
                src="/images/products/6.jpeg"
                alt=""
              />
            </div>
            <div className="w-full h-full border-2 rounded-[5px] flex items-center justify-center border-[#D1D1D8] p-1 cursor-pointer transition-all hover:border-primary">
              <img src="/images/products/7.jpeg" alt="" />
            </div>
            <div className="w-full h-full border-2 rounded-[5px] flex items-center justify-center border-[#D1D1D8] p-1 cursor-pointer transition-all hover:border-primary">
              <img src="/images/products/8.jpeg" alt="" />
            </div>
            <div className="w-full h-full border-2 rounded-[5px] flex items-center justify-center border-[#D1D1D8] p-1 cursor-pointer transition-all hover:border-primary">
              <img src="/images/products/9.jpeg" alt="" />
            </div>
            <div className="w-full h-full border-2 rounded-[5px] flex items-center justify-center border-[#D1D1D8] p-1 cursor-pointer transition-all hover:border-primary">
              <img src="/images/products/10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
