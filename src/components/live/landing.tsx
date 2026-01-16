import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
// import bakery from "@/public/landing/bakery.svg";
import grass from "@/public/landing/grass.svg";
import bakery2 from "@/public/landing/bakery2.svg";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
const Landing = () => {
  return (
    <div className="flex min-h-0 w-full flex-col items-center bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="nopener noreferrer"
        className="z-1 absolute right-3 top-0 z-50 w-12 cursor-pointer md:w-28 lg:right-10"
      >
        <Image
          className="transition hover:scale-110"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          width={125}
          height={125}
        />
      </Link>
      <div className="relative z-20 flex w-full justify-center">
        <Image
          src={cloud1}
          alt="left cloud"
          className="absolute left-0 top-24 w-1/6"
        />
        <Image
          src={cloud2}
          alt="right cloud"
          className="absolute right-0 top-32 w-[12%] md:top-56"
        />
      </div>
      <div className="relative top-6 z-20 mt-44 flex w-[90%] flex-col items-center justify-center sm:mt-32 md:top-0 md:mt-36 lg:mt-52">
        <Image
          src={logo}
          alt="dv logo sign"
          className="relative bottom-[108px] w-1/4 -translate-y-[50%] md:bottom-0 lg:bottom-[5vh]"
        />

        <div className="relative bottom-44 flex w-[91%] flex-col items-center md:w-[59%] lg:w-[85%]">
          <Image
            src={timer}
            alt="Sign on top of Bakery"
            className="relative top-8 size-[78%] lg:size-[65%]"
          />
          <div className="absolute mt-8 flex-col items-center justify-center py-2 text-center text-landing-brown-200 md:mt-16 md:py-6 lg:mt-12 lg:py-4">
            <p className="mt-5 text-nowrap text-[2.3vw] font-bold md:text-[1.4vw]">
              University of California, Riverside | May 9-10, 2026
            </p>
            <Countdown
              classNames={{
                unit: "text-landing-brown-400 text-[0.5rem] md:text-[0.9rem] font-bold",
                digit:
                  "font-bold text-white text-sm md:text-lg lg:text-[2.5rem] mt-0 md:mt-5 lg:mt-2",
                background:
                  "w-2 h-8 md:w-11 md:h-14 lg:w-10 lg:h-16 bg-landing-brown-400 rounded-lg",
              }}
            />
            <div className="relative z-30 mt-0 flex justify-center gap-6 text-white md:mt-5 md:gap-10">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-5 w-16 items-center justify-center rounded-md bg-landing-brown-100 text-[0.6rem] font-semibold md:h-10 md:w-40 md:rounded-lg md:text-[1.0rem]"
              >
                Mentor <PiArrowUpRightBold className="size-3 md:size-6" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-5 w-16 items-center justify-center rounded-md bg-landing-brown-100 text-[0.6rem] font-semibold md:h-10 md:w-40 md:rounded-lg md:text-[1.0rem]"
              >
                Sponsor <PiArrowUpRightBold className="size-3 md:size-6" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-5 w-16 items-center justify-center rounded-md bg-landing-brown-100 text-[0.6rem] font-semibold md:h-10 md:w-40 md:rounded-lg md:text-[1.0rem]"
              >
                Volunteer <PiArrowUpRightBold className="size-3 md:size-6" />
              </Link>
            </div>
          </div>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-44 z-30 mt-0 flex h-5 w-20 items-center justify-center rounded-md bg-landing-brown-100 text-[0.6rem] font-semibold text-white md:top-96 md:h-10 md:w-40 md:rounded-lg md:text-[1.0rem] lg:mt-16"
          >
            Apply Now!
          </Link>
          <Image
            src={bakery2}
            alt="bakery shop"
            className="relative z-20 flex"
          />
        </div>
        <div className="relative flex w-full flex-col items-center">
          <Image
            src={grass}
            alt="left grass box"
            className="absolute bottom-44 left-[12%] z-30 w-[20%] -translate-x-[21%]"
          />
          <Image
            src={grass}
            alt="right grass box"
            className="absolute bottom-44 right-[12%] z-30 w-[20%] translate-x-[21%] -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
