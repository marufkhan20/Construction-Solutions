import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="font-dm-sans">
      <div className="bg-primary-light py-[70px] px-5">
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
            <p className="mt-5">
              We provide outstanding business consulting services.
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex items-center gap-4">
              <h3 className="text-primary">COMPANY</h3>
              <div className="h-[1px] w-full bg-primary" />
            </div>
            <ul className="flex gap-5 flex-col">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Our Services</Link>
              </li>
              <li>
                <Link href="#">Help & FAQs</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex items-center gap-4">
              <h3 className="text-primary">HEADQUARTERS</h3>
              <div className="h-[1px] w-full bg-primary" />
            </div>
            <ul className="flex gap-5 flex-col">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="21"
                    viewBox="0 0 15 21"
                    fill="none"
                  >
                    <path
                      d="M6.72922 20.5467C1.05352 12.3186 0 11.4741 0 8.4502C0 4.30805 3.35785 0.950195 7.5 0.950195C11.6421 0.950195 15 4.30805 15 8.4502C15 11.4741 13.9465 12.3186 8.27078 20.5467C7.89832 21.0847 7.10164 21.0847 6.72922 20.5467ZM7.5 11.5752C9.2259 11.5752 10.625 10.1761 10.625 8.4502C10.625 6.7243 9.2259 5.3252 7.5 5.3252C5.7741 5.3252 4.375 6.7243 4.375 8.4502C4.375 10.1761 5.7741 11.5752 7.5 11.5752Z"
                      fill="#3AA39F"
                    />
                  </svg>{" "}
                  52 FD fifth Avenue,USA
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.7158 4.66504C14.8301 4.57422 15 4.65918 15 4.80273V10.7939C15 11.5703 14.3701 12.2002 13.5938 12.2002H1.40625C0.629883 12.2002 0 11.5703 0 10.7939V4.80566C0 4.65918 0.166992 4.57715 0.28418 4.66797C0.94043 5.17773 1.81055 5.8252 4.79883 7.99609C5.41699 8.44727 6.45996 9.39648 7.5 9.39062C8.5459 9.39941 9.60938 8.42969 10.2041 7.99609C13.1924 5.8252 14.0596 5.1748 14.7158 4.66504ZM7.5 8.4502C8.17969 8.46191 9.1582 7.59473 9.65039 7.2373C13.5381 4.41602 13.834 4.16992 14.7305 3.4668C14.9004 3.33496 15 3.12988 15 2.91309V2.35645C15 1.58008 14.3701 0.950195 13.5938 0.950195H1.40625C0.629883 0.950195 0 1.58008 0 2.35645V2.91309C0 3.12988 0.0996094 3.33203 0.269531 3.4668C1.16602 4.16699 1.46191 4.41602 5.34961 7.2373C5.8418 7.59473 6.82031 8.46191 7.5 8.4502Z"
                      fill="#3AA39F"
                    />
                  </svg>{" "}
                  Hello@dynamiclayers.net
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M14.5722 11.5497L11.2909 10.1434C11.1507 10.0837 10.995 10.0711 10.847 10.1076C10.6991 10.144 10.567 10.2276 10.4706 10.3456L9.01744 12.121C6.73686 11.0457 4.90151 9.2104 3.82624 6.92982L5.60166 5.47667C5.71993 5.38048 5.80363 5.24837 5.84011 5.10036C5.87659 4.95234 5.86384 4.79647 5.80381 4.65634L4.39754 1.37503C4.33165 1.22398 4.21512 1.10065 4.06804 1.02631C3.92097 0.951966 3.75256 0.931275 3.59186 0.967801L0.544931 1.67094C0.389998 1.70672 0.251766 1.79395 0.152796 1.91841C0.0538267 2.04287 -3.56904e-05 2.19719 1.77431e-08 2.3562C1.77431e-08 9.87098 6.09093 15.9502 13.594 15.9502C13.753 15.9503 13.9074 15.8965 14.032 15.7975C14.1565 15.6985 14.2438 15.5602 14.2795 15.4053L14.9827 12.3583C15.019 12.1968 14.9978 12.0278 14.9229 11.8802C14.848 11.7326 14.724 11.6157 14.5722 11.5497Z"
                      fill="#3AA39F"
                    />
                  </svg>{" "}
                  000 000 00000
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex items-center gap-4">
              <h3 className="text-primary">NEWSLETTER</h3>
              <div className="h-[1px] w-full bg-primary" />
            </div>
            <p>Stay always in touch! Subscribe to our newsletter.</p>
            <div className="p-1 border border-primary flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-full outline-none placeholder:text-black bg-transparent px-4 text-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="43"
                viewBox="0 0 66 43"
                fill="none"
              >
                <rect y="0.950195" width="66" height="42" fill="#3AA39F" />
                <path
                  d="M41.5954 12.0764L23.4879 22.5228C22.7808 22.9291 22.8707 23.9136 23.5739 24.2105L27.7267 25.9529L38.9505 16.0612C39.1654 15.8698 39.4701 16.1628 39.2865 16.3855L29.8753 27.8515V30.9964C29.8753 31.9184 30.9887 32.2817 31.5357 31.6137L34.0164 28.5938L38.8841 30.6331C39.4389 30.8675 40.0718 30.5198 40.1733 29.9221L42.9861 13.0453C43.119 12.2561 42.2712 11.6857 41.5954 12.0764Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>
              <span className="text-primary">*</span> Don’t worry, we don’t
              spam.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black/5 py-5 px-5">
        <div className="container flex items-center justify-between gap-10 flex-wrap">
          <p className="text-black">
            © Copyright 2023{" "}
            <span className="text-primary font-bold">Dynamic Layers</span> - All
            Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <FaFacebookF className="cursor-pointer transition-all hover:text-primary text-base" />
            <FaTwitter className="cursor-pointer transition-all hover:text-primary text-base" />
            <FaGoogle className="cursor-pointer transition-all hover:text-primary text-base" />
            <RiInstagramFill className="cursor-pointer transition-all hover:text-primary text-base" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
