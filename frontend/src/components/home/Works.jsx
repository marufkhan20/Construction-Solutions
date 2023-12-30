import Link from "next/link";
import Heading from "../shared/Heading";

const Works = () => {
  return (
    <section className="font-plus-jakarta-sans" id="portfolio">
      <div className="container">
        <Heading
          title="Let’s Look at Our"
          subTitle="Previous Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
          // className="w-[60%]"
        />

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/1.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Front working space
            </span>
          </Link>
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/2.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Meeting corner
            </span>
          </Link>
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/3.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Guest meeting room
            </span>
          </Link>
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/4.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Guest rest room
            </span>
          </Link>
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/5.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Single working space
            </span>
          </Link>
          <Link href="/projects/1" className="relative">
            <img
              className="rounded-xl w-full h-full"
              src="/images/works/6.jpeg"
              alt="work"
            />
            <span className="text-white text-lg leading-[32px] absolute bottom-[18px] left-[18px]">
              Kitchen room
            </span>
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="#"
            className="text-primary font-medium flex items-center gap-3 transition-all hover:gap-4 mt-5 uppercase"
          >
            More Work
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

export default Works;
