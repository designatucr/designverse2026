import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
// import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
import bakery from "@/public/landing/bakery.svg";
import leftBush from "@/public/landing/leftFlowerBush.svg";
import rightBush from "@/public/landing/rightFlowerBush.svg";

import lampost from "@/public/landing/lampost.svg";
import lights from "@/public/landing/lights.svg";

import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="nopener noreferrer"
        className="z-1 md:w-28 lg:right-10 absolute right-3 top-0 z-50 w-12 cursor-pointer"
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
          className="md:top-56 absolute right-0 top-32 w-[12%]"
        />
      </div>
      <div className="w-9/10 top-6 z-20 mt-8 flex flex-col items-center justify-center">
        <Image src={logo} alt="dv logo sign" className="relative w-1/4" />

        <div className="flex w-3/4 flex-col items-center">
          <div className="md:border-8 md:p-8 w-3/4 rounded-lg border-4 border-landing-brown-67 bg-landing-beige-100 p-2">
            <div className="md:p-4 rounded-lg border-4 border-landing-brown-678 bg-landing-beige-100 p-2">
              <p className="text-md md:text-2xl lg:text-3xl mb-1 mt-3 text-center font-bold">
                University of California, Riverside | May 2-3, 2026
              </p>
              <Countdown
                classNames={{
                  unit: "text-brown-200 md:text-lg text-xs",
                  background: "bg-[#603A18]",
                  digit: "text-white",
                }}
              />
              <div className="lg:gap-5 xl:gap-2 bottom-1 z-30 flex justify-center gap-2 text-white">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-xl md:text-lg sm:text-md md:px-6 md:py-4 flex items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white transition hover:scale-110"
                >
                  Sponsor{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
                <Link
                  href="https://minerva-sage.vercel.app/designverse/forms/participant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-2xl md:text-lg sm:text-md md:px-3 md:py-2 flex items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white"
                >
                  Apply Now!{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-xl md:text-lg sm:text-md md:px-3 md:py-2 flex items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white"
                >
                  Volunteer{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-row place-items-end justify-evenly gap-2">
            <Image
              src={lights}
              alt="lights"
              className="lg:left-14 md:left-6 lg:top-8 absolute -top-0 left-8 -translate-x-full 3xl:hidden"
            />
            <Image
              src={lampost}
              alt="left lampost"
              className="md:w-[8vw] lg:w-[6vw] absolute -bottom-2 left-0 z-40 w-[7vw]"
            />

            <Image
              src={bakery}
              alt="bakery shop"
              className="xl:10/12 md:w-8/12 lg:w-9/12 w-3/4"
            />

            <Image
              src={lampost}
              alt="right lampost"
              className="md:w-[8vw] lg:w-[6vw] absolute -bottom-2 right-0 z-40 w-[7vw]"
            />
            <Image
              src={lights}
              alt="lights"
              className="lg:right-2 md:right-2 lg:top-2 absolute right-8 top-8 translate-x-full 3xl:hidden"
            />

            <Image
              src={leftBush}
              alt="left grass box"
              className="md:left-[12%] md:w-1/5 absolute bottom-0 left-0 z-30 w-1/3 -translate-x-[21%] translate-y-[1%]"
            />
            <Image
              src={rightBush}
              alt="right grass box"
              className="md:right-[12%] md:w-1/5 absolute bottom-0 right-0 z-30 w-1/3 translate-x-[21%]"
            />
          </div>
          <div className="md:-mt-3 md:h-20 z-30 -mt-1 flex h-10 w-screen bg-landing-black-100" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
