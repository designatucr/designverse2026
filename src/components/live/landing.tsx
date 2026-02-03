import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
import bakery from "@/public/landing/bakery.svg";
import leftLampost from "@/public/landing/leftLampost.svg";
import rightLampost from "@/public/landing/rightLampost.svg";
// import grass from "@/public/landing/grass.svg";
import leftBush from "@/public/landing/leftFlowerBush.svg";
import rightBush from "@/public/landing/rightFlowerBush.svg";
// import bakery2 from "@/public/landing/bakery2.svg";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
const Landing = () => {
  return (
    <div className="flex min-h-0 w-full flex-col items-center overflow-x-hidden bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
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
          className="relative bottom-[20%] w-1/4 translate-y-[15%] md:bottom-[20%] md:-translate-y-[60%] lg:-translate-y-[60%] xl:-translate-y-[60%]"
        />

        <div className="relative bottom-44 flex w-[95%] flex-col items-center md:w-[80%] lg:w-[85%]">
          <Image
            src={timer}
            alt="Sign on top of Bakery"
            className="relative top-7 w-[79%] md:top-10 md:w-1/2 lg:w-[54vw] xl:w-[43vw]"
          />
          <div className="absolute mt-7 flex flex-col items-center py-2 text-center text-landing-brown-200 md:mt-16">
            <p className="md:text-2x1 mt-3 text-nowrap text-[2.4vw] font-bold md:mb-5 lg:text-xl">
              University of California, Riverside | May 2-3, 2026
            </p>
            <Countdown
              classNames={{
                unit: "text-center text-landing-brown-400 text-[0.5rem] md:text-xs lg:text-[0.9rem] xl:text-[1.2rem] font-bold",
                digit: "font-bold text-white lg:text-[2rem] 2xl:text-[2.5rem]",
                background:
                  "w-5/12 lg:w-8 lg:h-12 xl:w-10 xl:h-16 bg-landing-brown-400 lg:rounded-lg",
              }}
            />
          </div>
          <div className="absolute top-28 z-30 flex justify-center gap-2 text-white md:top-64 md:gap-10">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-landing-brown-100 px-4 py-1 text-[0.6rem] font-semibold md:text-lg xl:h-10 xl:w-40 xl:text-lg"
            >
              Mentor{" "}
              <PiArrowUpRightBold className="text-[0.6rem] md:text-2xl" />
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-landing-brown-100 px-4 py-1 text-[0.6rem] font-semibold md:text-lg xl:h-10 xl:w-40 xl:text-lg"
            >
              Sponsor{" "}
              <PiArrowUpRightBold className="text-[0.6rem] md:text-2xl" />
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-landing-brown-100 px-3 py-1 text-[0.6rem] font-semibold md:text-lg xl:h-10 xl:w-40 xl:text-lg"
            >
              Volunteer{" "}
              <PiArrowUpRightBold className="text-[0.6rem] md:text-2xl" />
            </Link>
          </div>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[43%] z-30 flex items-center justify-center rounded-lg bg-landing-brown-100 px-4 py-1 text-[0.6rem] font-semibold text-white md:text-lg xl:h-10 xl:w-40 xl:text-lg"
          >
            Apply Now!
          </Link>
          <Image
            src={bakery}
            alt="bakery shop"
            className="relative z-20 flex w-full md:w-full lg:w-[70vw] xl:w-[56vw]"
          />
          <Image
            src={leftLampost}
            alt="left lampost"
            className="absolute -bottom-2 -left-[50%] z-40 w-[75%] -translate-x-[21%] md:-bottom-6 md:-left-[22%] md:w-[53%]"
          />
          <Image
            src={rightLampost}
            alt="right lampost"
            className="absolute -bottom-2 -right-[50%] z-40 w-[75%] translate-x-[21%] md:-bottom-6 md:-right-[23%] md:w-[53%]"
          />
          <div className="absolute bottom-0 z-30 flex h-10 w-screen translate-y-[98%] bg-landing-black-100 md:h-20" />
        </div>
        <div className="relative flex w-full flex-col items-center">
          <Image
            src={leftBush}
            alt="left grass box"
            className="absolute bottom-44 left-0 z-30 w-[30%] -translate-x-[21%] translate-y-[1%] md:left-[12%] md:w-[20%]"
          />
          <Image
            src={rightBush}
            alt="right grass box"
            className="absolute bottom-44 right-0 z-30 w-[30%] translate-x-[21%] -scale-x-100 md:right-[12%] md:w-[20%]"
          />
          {/* <Image
            src={grass}
            alt="left grass box"
            className="absolute bottom-44 left-[12%] z-30 w-[20%] -translate-x-[21%]"
          />
          <Image
            src={grass}
            alt="right grass box"
            className="absolute bottom-44 right-[12%] z-30 w-[20%] translate-x-[21%] -scale-x-100"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
