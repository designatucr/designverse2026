// import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.svg";
import cloud2 from "@/public/landing/cloud2.svg";
import logo from "@/public/landing/dv_logo.svg";
import bakerySign from "@/public/landing/bakery_sign.svg";
// import timer from "@/public/landing/timer.svg";
// import sign from "@/public/landing/sign.svg";
// import bakery from "@/public/landing/bakery.svg";
import grass from "@/public/landing/grass.svg";
import bakery2 from "@/public/landing/bakery2.svg";
import Link from "next/link";

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
          className="absolute right-0 top-56 w-[12%]"
        />
      </div>
      <div className="sm:mt-34 relative z-20 mt-20 flex w-[90%] flex-col items-center justify-center md:mt-36 lg:mt-52">
        <div className="relative flex w-full flex-col items-center">
          <Image
            src={logo}
            alt="dv logo sign"
            className="w-1/4 -translate-y-[80%]"
          />
          <Image
            src={bakerySign}
            alt="sign on top bakery"
            className="absolute bottom-[50%] md:bottom-[45%] lg:bottom-[45%] z-0 size-[70%] pt-10 md:size-[70%] lg:size-[58%] lg:pt-2"
          />
          {/* <Image
            src={timer}
            alt="timer bg"
            className="absolute bottom-[70%] z-0 size-[54%] pt-10 md:size-[45%] lg:size-[35%] lg:pt-2"
          /> */}
          {/* <Countdown
            classNames={{
              unit: "text-landing-brown-200",
              background: "bg-landing-brown-100",
              digit: "text-white",
            }}
          /> */}
          <div className="absolute top-[3%] z-30 flex flex-col justify-center items-center lg:gap-1 pt-1 text-landing-brown-200 sm:top-[5%] sm:gap-2 lg:pt-6">
            <p className="text-wrap text-[.58rem] font-bold md:text-xl lg:text-3xl">
              University of California, Riverside | May 9-10, 2026
            </p>
            <p className="text-[0.48rem] md:text-lg lg:pt-0 lg:text-2xl">
              A design-a-thon near you!
            </p>
          </div>
          <Image
            src={bakery2}
            alt="bakery shop"
            className="z-20 h-[20%] md:h-[40%]"
          />
        </div>
        <Image
          src={grass}
          alt="left grass box"
          className="absolute bottom-0 left-0 z-30 w-[25%] -translate-x-[24%]"
        />
        <Image
          src={grass}
          alt="right grass box"
          className="absolute bottom-0 right-0 z-30 w-[26%] translate-x-[21%] -scale-x-100"
        />
        <div className="absolute top-[60%] z-30 flex w-[90%] flex-col items-center justify-center gap-2 text-landing-brown-300 md:gap-5">
          <div className="text-lg font-bold sm:text-3xl md:text-5xl lg:text-7xl">
            COMING SOON.
          </div>
          <div className="text-sm md:text-xl lg:text-3xl">
            Something new is brewing...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
