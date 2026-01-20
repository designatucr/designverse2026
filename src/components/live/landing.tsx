import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
// import bakery from "@/public/landing/bakery.svg";
// import leftLampost from "@/public/landing/leftLampost.svg";
// import rightLampost from "@/public/landing/rightLampost.svg";
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
      <div className="relative top-6 z-20 mt-36 flex w-[90%] flex-col items-center justify-center sm:mt-32 md:top-0 md:mt-36 lg:mt-52">
        <Image
          src={logo}
          alt="dv logo sign"
          className="relative bottom-[108px] w-1/4 -translate-y-[50%] md:bottom-0 lg:bottom-[5vh]"
        />

        <div className="relative bottom-44 flex w-[91%] flex-col items-center md:w-[59%] lg:w-[85%]">
          <Image
            src={timer}
            alt="Sign on top of Bakery"
            className="relative top-8 size-[79%] lg:size-[65%]"
          />
          <div className="absolute mt-8 flex-col items-center justify-center py-2 text-center text-landing-brown-200 sm:py-6 md:mt-4 lg:mt-2 lg:py-2 xl:mt-8">
            <p className="mt-4 text-nowrap text-[2.3vw] font-bold md:text-[1.4vw] lg:mt-16 xl:mt-20 2xl:text-[1.6vw]">
              University of California, Riverside | May 9-10, 2026
            </p>
            <Countdown
              classNames={{
                unit: "text-landing-brown-400 text-[0.4rem] sm:text-[0.7rem] lg:text-[0.9rem] font-bold",
                digit:
                  "font-bold text-white text-[0.7rem] sm:text-lg lg:text-[2rem] 2xl:text-[2.5rem] mt-0 mb-1 lg:mt-2",
                background:
                  " w-2 h-5  sm:w-6 sm:h-9 md:w-3 md:h-6 lg:w-8 lg:h-12 xl:w-10 xl:h-16 bg-landing-brown-400 lg:rounded-lg",
              }}
            />
            <div className="relative z-30 mt-0 flex justify-center gap-6 text-white sm:mt-2 sm:gap-10 md:gap-5 2xl:gap-12">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="xs:rounded-lg flex h-3 w-9 items-center justify-center rounded-lg bg-landing-brown-100 text-[3.5px] font-semibold sm:h-7 sm:w-24 sm:text-[0.7rem] xl:h-10 xl:w-40 xl:text-lg 2xl:h-14 2xl:w-48 2xl:text-2xl"
              >
                Mentor{" "}
                <PiArrowUpRightBold className="h-1 w-1 sm:h-3 sm:w-3 xl:h-6 xl:w-6" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="xs:rounded-lg flex h-3 w-9 items-center justify-center rounded-lg bg-landing-brown-100 text-[3.5px] font-semibold sm:h-7 sm:w-24 sm:text-[0.7rem] xl:h-10 xl:w-40 xl:text-lg 2xl:h-14 2xl:w-48 2xl:text-2xl"
              >
                Sponsor{" "}
                <PiArrowUpRightBold className="h-1 w-1 sm:h-3 sm:w-3 xl:h-6 xl:w-6" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="xs:rounded-lg flex h-3 w-9 items-center justify-center rounded-lg bg-landing-brown-100 text-[3.5px] font-semibold sm:h-7 sm:w-24 sm:text-[0.7rem] xl:h-10 xl:w-40 xl:text-lg 2xl:h-14 2xl:w-48 2xl:text-2xl"
              >
                Volunteer{" "}
                <PiArrowUpRightBold className="h-1 w-1 sm:h-3 sm:w-3 xl:h-6 xl:w-6" />
              </Link>
            </div>
          </div>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="xs:rounded-lg xl:rounded-lgxl:h-10 absolute top-44 z-30 flex h-3 w-9 items-center justify-center rounded-md bg-landing-brown-100 text-[3.5px] font-semibold text-white sm:mt-36 sm:h-7 sm:w-24 sm:text-[0.7rem] lg:top-96 lg:mt-16 xl:mt-20 xl:w-40 xl:text-lg 2xl:h-14 2xl:w-48 2xl:text-2xl"
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
          {/* <Image
            src={leftLampost}
            alt="left lampost"
            className="absolute -bottom-5 -left-[9%] z-40 w-[45%] -translate-x-[21%] md:-bottom-10"
          />
          <Image
            src={rightLampost}
            alt="right lampost"
            className="absolute -bottom-5 -right-[29%] z-40 w-[45%] -translate-x-[21%] md:-bottom-10"
          />
          <div className="absolute z-30 flex h-10 w-screen bg-landing-black-100 md:h-20" /> */}
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
