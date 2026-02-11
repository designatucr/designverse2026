import React from "react";
import LogoIcon from "@/public/engineering/hackathon/dvlogo2.svg";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import tableChairs from "@/public/landing/tableChairs.svg";

const Footer = () => {
  return (
    <footer className="relative mt-[30vw] flex flex-col justify-between gap-2 bg-landing-brown-300 p-6 md:mt-[20vw] md:p-16">
      <Image
        src={tableChairs}
        alt="Table and Chairs"
        className="absolute left-1/2 top-4 w-3/4 -translate-x-1/2 -translate-y-full md:top-10 md:w-1/3"
      />
      <div className="flex flex-row justify-between pt-6">
        <div>
          <Image
            className="w-1/3 pb-5 md:pb-10 md:pl-5"
            src={LogoIcon}
            alt="DV Logo in footer"
          />
          <div className="flex flex-row md:pl-5">
            <Link
              className="pr-3"
              href="mailto:designverseucr@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail className="text-2xl text-white transition-transform hover:scale-110 md:text-5xl" />
            </Link>
            <Link
              className="pr-3"
              href="https://www.linkedin.com/company/designverseucr/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin className="text-2xl text-white transition-transform hover:scale-110 md:text-5xl" />
            </Link>
            <Link
              className="pr-3"
              href="https://www.instagram.com/designverseucr"
              target="_blank"
              aria-label="Instagram"
            >
              <RiInstagramFill className="text-2xl text-white transition-transform hover:scale-110 md:text-5xl" />
            </Link>
            <Link
              href="https://discord.com/invite/MmSvY3tu"
              target="_blank"
              aria-label="Discord"
            >
              <FaDiscord className="text-2xl text-white transition-transform hover:scale-110 md:text-5xl" />
            </Link>
          </div>
          <p className="py-5 text-left font-inter text-xs text-white md:pl-5 md:text-2xl">
            Made with &lt;3 by the 2026 DesignVerse team
          </p>
        </div>
        <div className="flex flex-col text-right md:pr-5">
          <p className="font-inter text-sm font-bold text-white md:text-2xl">
            Previous Sites
          </p>
          <Link
            className="py-3 font-inter text-sm text-white hover:cursor-pointer hover:underline md:text-2xl"
            href="https://designverse2025.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="2025 Website"
          >
            2025
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
