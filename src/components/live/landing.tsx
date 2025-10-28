import Countdown from "../ui/countdown";
import Image from "next/image";
import cloud1 from "@/public/landing/cloud1.webp";
import cloud2 from "@/public/landing/cloud2.webp";
import logo from "@/public/landing/dv_logo.webp";
import timer from "@/public/landing/timer.webp";
import sign from "@/public/landing/sign.webp";
import bakery from "@/public/landing/bakery.webp";
import grass2 from "@/public/landing/grass2.webp";

const Landing = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
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
      <Image src={logo} alt="dv logo sign" className="w-1/4 pt-20" />

      <div className="relative flex w-1/2 flex-col items-center justify-center">
        <p className="z-30 pt-2 text-xl font-bold text-landing-brown-200">
          University of California, Riverside | May 9-10, 2026
        </p>
        <Image src={timer} alt="timer bg" className="absolute z-0 w-4/5" />
        <div className="z-10">
          <Countdown
            classNames={{
              unit: "text-landing-brown-200",
              background: "bg-landing-brown-100",
              digit: "text-white",
            }}
          />
        </div>
      </div>

      <div className="relative z-20 flex w-full justify-center">
        <Image src={bakery} alt="bakery house" className="z-20 w-[52%]" />
        <Image
          src={sign}
          alt="wooden board sign"
          className="absolute -bottom-20 right-[39%] z-30 w-[8%]"
        />
      </div>
      <Image
        src={grass2}
        alt="left grass box"
        className="absolute -bottom-[29%] left-48 z-30 w-1/5"
      />
      <Image
        src={grass2}
        alt="right grass box"
        className="absolute -bottom-[29%] right-48 z-30 w-1/5"
      />
    </div>
  );
};

export default Landing;
