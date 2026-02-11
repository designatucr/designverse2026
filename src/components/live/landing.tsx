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

// import lampost from "@/public/landing/lampost.svg";
// import lights from "@/public/landing/lights.svg";

import lampWithLight from "@/public/landing/lightwithlight.svg";

import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
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
      <div className="w-9/10 top-6 z-20 mt-8 flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt="dv logo sign"
          className="relative w-1/2 md:w-1/4"
        />

        <div className="flex w-3/4 flex-col items-center">
          <div className="w-5/6 rounded-lg border-4 border-landing-brown-67 bg-landing-beige-100 p-2 md:w-3/4 md:border-8 md:p-8">
            <div className="rounded-lg border-4 border-landing-brown-678 bg-landing-beige-100 p-2 md:p-4">
              <p className="text-md mb-1 mt-3 text-center font-bold md:text-2xl lg:text-3xl">
                University of California, Riverside | May 16-17, 2026
              </p>
              <Countdown
                classNames={{
                  unit: "text-brown-200 md:text-lg text-xs",
                  background: "bg-[#603A18]",
                  digit: "text-white",
                }}
              />
              <div className="bottom-1 z-30 flex flex-col justify-center gap-2 text-white md:flex-row lg:gap-5 xl:gap-2">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-md mx-auto my-1 flex w-2/3 items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white transition hover:scale-110 md:w-1/4 md:px-4 md:py-2 md:text-lg lg:text-xl"
                >
                  Sponsor{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
                <Link
                  href="https://minerva-sage.vercel.app/designverse/forms/participant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-md mx-auto my-1 flex w-2/3 items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white transition hover:scale-110 md:w-1/4 md:px-6 md:py-4 md:text-lg lg:text-xl"
                >
                  Apply Now!{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-md mx-auto my-1 flex w-2/3 items-center justify-center rounded-2xl bg-landing-brown-100 px-1 py-0 text-center text-sm font-semibold text-white transition hover:scale-110 md:w-1/4 md:px-6 md:py-4 md:text-lg lg:text-xl"
                >
                  Volunteer{" "}
                  <PiArrowUpRightBold className="text-md md:text-2xl xl:text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-row place-items-end justify-evenly gap-2">
            <Image
              src={lampWithLight}
              alt="lamp with bulbs"
              className="md:-translate-x-5/6 absolute bottom-0 left-0 z-40 -translate-x-full translate-y-16 scale-y-90 lg:-translate-x-2/3"
            />

            <Image
              src={lampWithLight}
              alt="lamp with bulbs"
              className="md:translate-x-5/6 absolute bottom-0 right-0 z-40 translate-x-full translate-y-16 -scale-x-100 scale-y-90 lg:translate-x-2/3"
            />

            <Image
              src={bakery}
              alt="bakery shop"
              className="xl:10/12 w-3/4 md:w-8/12 lg:w-9/12"
            />

            <Image
              src={leftBush}
              alt="left grass box"
              className="absolute bottom-0 left-0 z-30 w-1/3 -translate-x-[21%] translate-y-[1%] md:left-[12%] md:w-1/5"
            />
            <Image
              src={rightBush}
              alt="right grass box"
              className="absolute bottom-0 right-0 z-30 w-1/3 translate-x-[21%] md:right-[12%] md:w-1/5"
            />
          </div>
          <div className="z-10 -mt-1 flex h-20 w-screen bg-landing-black-100 md:-mt-3 md:h-24" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
