import React from "react";
import LogoIcon from "@/public/engineering/hackathon/dvlogo2.svg";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full flex-col justify-between gap-2 bg-landing-brown-300 px-4 py-6 md:text-nowrap md:px-16 md:py-14">
      <Image
        className="w-1/4 pb-5 pl-5 pt-8 md:w-1/12"
        src={LogoIcon}
        alt="DV Logo in footer"
        width={118}
        height={80}
      />
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row pl-5">
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
          <p className="font-inter p-5 text-left text-xs text-white md:text-2xl">
            Made with &lt;3 by the 2026 DesignVerse team
          </p>
        </div>
        <div className="-mt-24 flex flex-col pl-[2vw] pr-4 text-right md:pl-[50vw] md:pr-0">
          <p className="font-inter pr-5 text-sm font-bold text-white md:text-2xl">
            Previous Sites
          </p>
          <p className="font-inter py-3 pr-5 text-sm text-white md:text-2xl">
            2024
          </p>
          <Link
            className="font-inter pr-5 text-sm text-white hover:cursor-pointer hover:underline md:text-2xl"
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
