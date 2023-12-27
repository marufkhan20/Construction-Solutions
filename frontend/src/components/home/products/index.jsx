import Heading from "@/components/shared/Heading";
import Link from "next/link";
import Product from "./Product";

const Products = () => {
  return (
    <section className="font-dm-sans" id="shop">
      <div className="container">
        <Heading
          title="Best Selling"
          subTitle="Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        />

        <div className="my-12 flex items-center flex-wrap justify-center">
          <div className="bg-primary-light p-[6px] rounded-full flex items-center flex-wrap justify-center">
            <li className="w-[70px] sm:w-[84px] h-[35px] sm:h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white text-[#1E1E1E] text-lg font-normal">
              Chair
            </li>
            <li className="w-[70px] sm:w-[84px] h-[35px] sm:h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white text-[#1E1E1E] text-lg font-normal">
              Beds
            </li>
            <li className="w-[70px] sm:w-[84px] h-[35px] sm:h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white text-[#1E1E1E] text-lg font-normal">
              Sofa
            </li>
            <li className="w-[70px] sm:w-[84px] h-[35px] sm:h-[45px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white text-[#1E1E1E] text-lg font-normal">
              Lamp
            </li>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="mt-12 flex items-center justify-center">
          <Link
            href="#"
            className="text-primary font-medium flex items-center gap-3 transition-all hover:gap-4 mt-5"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="25"
              viewBox="0 0 48 25"
              fill="none"
            >
              <path
                d="M4.5 13.3509H42M42 13.3509C42 13.3509 37.5119 10.3993 36.6 7.95093M42 13.3509C42 13.3509 38.0324 16.1243 36.6 18.7509"
                stroke="#3AA39F"
                stroke-linecap="square"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
