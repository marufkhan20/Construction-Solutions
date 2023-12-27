import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialGoogle, SlSocialInstagram } from "react-icons/sl";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="p-6 flex items-center justify-between gap-5 font-dm-sans container">
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-[1px] h-[111px] bg-secondary" />
          <ul className="flex items-center flex-col gap-6 text-[#9A9EA8] text-lg">
            <li className="transition-all hover:text-primary">
              <Link href="">
                <FaFacebookF />
              </Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link href="">
                <RxTwitterLogo />
              </Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link href="">
                <SlSocialGoogle />
              </Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link href="">
                <SlSocialInstagram />
              </Link>
            </li>
          </ul>
          <div className="w-[1px] h-[111px] bg-secondary" />
        </div>
        <div>
          <span className="text-primary">PT. Digital Media Nusantara</span>
          <h2 className="text-[30px] sm:text-[40px] leading-[40px] sm:leading-[50px] my-5">
            Construction Solutions <br />
            We Build your dream
          </h2>
          <p className="text-[#8B919E] leading-[20px] lg:w-[50%]">
            Construction is focused on providing high-quality service and
            customer satisfaction we will do everything we can to meet your
            expectations.
          </p>
          <div className="mt-6 flex items-center flex-wrap">
            <Button className="rounded button-shadow">Get a Quote</Button>
            <Button
              variant="secondary"
              className="flex items-center gap-2 hover:gap-3"
            >
              <span>Our Services</span>
              <MdArrowForward />
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="/images/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
