"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Button from "../ui/Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white px-6 flex items-center justify-between gap-5 flex-wrap py-[18px] font-dm-sans z-50">
      <Link href="/" className="lg:ml-[70px]">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <nav className="hidden xl:block">
        <ul className="flex items-center flex-wrap gap-10 text-secondary">
          <li className="transition-all hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="transition-all hover:text-primary">
            <a href="#services">Services</a>
          </li>
          <li className="transition-all hover:text-primary">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="transition-all hover:text-primary">
            <a href="#testimonials">Testimonial</a>
          </li>
          <li className="transition-all hover:text-primary">
            <a href="#shop">Shop</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-10">
        <FiSearch className="hidden sm:block text-2xl cursor-pointer text-black" />
        <Link
          href="/cart"
          className="hidden sm:flex items-center gap-2 py-3 px-4 rounded-lg bg-primary-light text-black font-medium"
        >
          <FaCartShopping className="hidden sm:block" />
          <span className="hidden sm:block">Cart</span>
          <span className="hidden sm:flex text-xs w-5 h-5 rounded-full bg-[#007580] text-white items-center justify-center">
            2
          </span>
        </Link>
        <Button className="hidden sm:block">GET QUOTE</Button>
        <FaBars
          onClick={() => setOpenMenu(true)}
          className="block xl:hidden text-2xl cursor-pointer"
        />
      </div>

      {/* mobile menu */}
      <div
        className={`block xl:hidden absolute inset-0 w-full min-h-screen bg-white transition-all duration-300 p-10 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-end mb-5">
          <AiOutlineClose
            onClick={() => setOpenMenu(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <nav>
          <ul className="flex flex-col items-center gap-10 text-secondary">
            <li className="transition-all hover:text-primary">
              <a href="#">Home</a>
            </li>
            <li className="transition-all hover:text-primary">
              <a href="#services">Services</a>
            </li>
            <li className="transition-all hover:text-primary">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="transition-all hover:text-primary">
              <a href="#testimonials">Testimonial</a>
            </li>
            <li className="transition-all hover:text-primary">
              <a href="#shop">Shop</a>
            </li>
          </ul>
        </nav>
        <div className="flex sm:hidden flex-col items-center gap-10 mt-10">
          <FiSearch className="text-2xl cursor-pointer text-black" />
          <Link
            href="/cart"
            className="flex items-center gap-2 py-3 px-4 rounded-lg bg-primary-light text-black font-medium"
          >
            <FaCartShopping />
            <span>Cart</span>
            <span className="text-xs w-5 h-5 rounded-full bg-[#007580] text-white flex items-center justify-center">
              2
            </span>
          </Link>
          <Button>GET QUOTE</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
