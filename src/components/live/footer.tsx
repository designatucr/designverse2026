import React from "react";
import LogoIcon from "@/public/engineering/hackathon/dvlogo2.svg";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="md:p-16 flex flex-col justify-between gap-2 bg-landing-brown-300 p-6">
      <div className="flex flex-row justify-between">
        <div>
          <Image
            className="md:pb-10 md:pl-5 w-1/3 pb-5"
            src={LogoIcon}
            alt="DV Logo in footer"
          />
          <div className="md:pl-5 flex flex-row">
            <Link
              className="pr-3"
              href="mailto:designverseucr@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail className="md:text-5xl text-2xl text-white transition-transform hover:scale-110" />
            </Link>
            <Link
              className="pr-3"
              href="https://www.linkedin.com/company/designverseucr/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin className="md:text-5xl text-2xl text-white transition-transform hover:scale-110" />
            </Link>
            <Link
              className="pr-3"
              href="https://www.instagram.com/designverseucr"
              target="_blank"
              aria-label="Instagram"
            >
              <RiInstagramFill className="md:text-5xl text-2xl text-white transition-transform hover:scale-110" />
            </Link>
            <Link
              href="https://discord.com/invite/MmSvY3tu"
              target="_blank"
              aria-label="Discord"
            >
              <FaDiscord className="md:text-5xl text-2xl text-white transition-transform hover:scale-110" />
            </Link>
          </div>
          <p className="md:pl-5 md:text-2xl py-5 text-left font-inter text-xs text-white">
            Made with &lt;3 by the 2026 DesignVerse team
          </p>
        </div>
        <div className="md:pr-5 flex flex-col text-right">
          <p className="md:text-2xl font-inter text-sm font-bold text-white">
            Previous Sites
          </p>
          <Link
            className="md:text-2xl py-3 font-inter text-sm text-white hover:cursor-pointer hover:underline"
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
