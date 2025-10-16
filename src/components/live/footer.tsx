import React from "react";
import LogoIcon from "@/public/engineering/hackathon/dvlogo2.svg";
import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full items-center justify-between gap-2 bg-[#705D3F] px-10 py-3">
      <div className="flex flex-col items-center gap-3">
        <LogoIcon />
        <div>
          <Link
            href="mailto:designverseucr@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <MdEmail className="text-5xl text-white transition-transform hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/designverseucr/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin className="text-5xl text-white transition-transform hover:scale-110" />
          </Link>
          <Link
            href="https://www.instagram.com/designverseucr"
            target="_blank"
            aria-label="Instagram"
          >
            <RiInstagramFill className="text-5xl text-white transition-transform hover:scale-110" />
          </Link>
          <Link
            href="https://discord.com/invite/MmSvY3tu"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord className="text-5xl text-white transition-transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
