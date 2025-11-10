import React from "react";
import LogoIcon from "@/public/engineering/hackathon/dvlogo2.svg";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 flex h-[30vh] w-full flex-col items-center justify-between gap-2 bg-[#705D3F] px-10 md:h-1/3">
      <Image
        className="w-1/4 pb-5 pt-8 md:w-1/12"
        src={LogoIcon}
        alt="DV Logo in footer"
        width={118}
        height={80}
      />
      <div className="flex flex-row items-center">
        <Link
          className="pr-3"
          href="mailto:designverseucr@gmail.com"
          target="_blank"
          aria-label="Email"
        >
          <MdEmail className="text-3xl text-white transition-transform hover:scale-110 md:text-5xl" />
        </Link>
        <Link
          className="pr-3"
          href="https://www.linkedin.com/company/designverseucr/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin className="text-3xl text-white transition-transform hover:scale-110 md:text-5xl" />
        </Link>
        <Link
          className="pr-3"
          href="https://www.instagram.com/designverseucr"
          target="_blank"
          aria-label="Instagram"
        >
          <RiInstagramFill className="text-3xl text-white transition-transform hover:scale-110 md:text-5xl" />
        </Link>
        <Link
          href="https://discord.com/invite/MmSvY3tu"
          target="_blank"
          aria-label="Discord"
        >
          <FaDiscord className="text-3xl text-white transition-transform hover:scale-110 md:text-5xl" />
        </Link>
      </div>
      <p className="font-inter p-5 text-center text-sm text-white md:text-lg">
        Made with &lt;3 by the 2026 DesignVerse team
      </p>
    </footer>
  );
};

export default Footer;
