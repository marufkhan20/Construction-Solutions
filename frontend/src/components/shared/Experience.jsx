import Link from "next/link";

const Experience = () => {
  return (
    <section className="secondary bg-primary-light font-plus-jakarta-sans">
      <div className="container flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-[50%]">
          <div className="hidden sm:block w-[80%] h-[66px] bg-[#F7F7F7] rounded-tr-[20px]" />
          <div className="flex items-center">
            <img
              src="/images/experience.png"
              alt="experience"
              className="z-40"
            />
            <div className="w-[60px] h-[300px] bg-[#F7F7F7] rounded-tr-[20px] rounded-br-[20px]" />
          </div>
          <img
            src="/images/experience-shadow.png"
            alt="shadow"
            className="-mt-[60%]"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <span className="text-primary text-lg">EXPERIENCES</span>
          <h2 className="text-black text-[32px] sm:text-[42px] font-semibold capitalize my-2">
            we provide you the best experience
          </h2>
          <p className="text-black text-lg leading-[34px]">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <Link
            href="#"
            className="text-primary font-medium flex items-center gap-3 transition-all hover:gap-4 mt-5"
          >
            More Info{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="25"
              viewBox="0 0 48 25"
              fill="none"
            >
              <path
                d="M4.5 13.3509H42M42 13.3509C42 13.3509 37.5119 10.3993 36.6 7.95093M42 13.3509C42 13.3509 38.0324 16.1243 36.6 18.7509"
                stroke="#565D67"
                stroke-linecap="square"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
