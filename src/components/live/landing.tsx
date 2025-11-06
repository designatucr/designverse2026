// import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.webp";
import cloud2 from "@/public/landing/cloud2.webp";
import logo from "@/public/landing/dv_logo.webp";
import timer from "@/public/landing/timer.webp";
// import sign from "@/public/landing/sign.webp";
// import bakery from "@/public/landing/bakery.webp";
import grass from "@/public/landing/grass.webp";
import bakery2 from "@/public/landing/bakery2.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="nopener noreferrer"
        className="z-1 absolute right-3 top-0 z-50 w-12 cursor-pointer md:w-28 lg:right-10"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          width={100}
          height={100}
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
            src={timer}
            alt="timer bg"
            className="absolute bottom-[70%] z-0 w-[60%]"
          />
          {/* <Countdown
            classNames={{
              unit: "text-landing-brown-200",
              background: "bg-landing-brown-100",
              digit: "text-white",
            }}
          /> */}
          <div className="absolute top-[3%] z-30 flex flex-col items-center gap-1 pt-2 text-landing-brown-200 sm:top-[5%] sm:gap-2 md:top-[7%]">
            <p className="text-wrap text-[0.45rem] font-bold sm:text-xs md:text-sm lg:text-xl xl:text-3xl">
              University of California, Riverside | May 9-10, 2026
            </p>
            <p className="text-[0.45rem] sm:text-xs md:text-sm lg:text-2xl">
              A design-a-thon near you!
            </p>
          </div>
          <Image src={bakery2} alt="bakery shop" className="z-20 w-[85%]" />
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
