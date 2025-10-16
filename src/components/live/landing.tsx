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
    <div className="flex flex-col items-center w-screen bg-gradient-to-b from-landing-blue-100 to-landing-orange-100">
      <div className="relative w-full flex justify-center z-20">
        <Image src = {cloud1} alt = "cloud" className="absolute w-1/6 top-24 left-0"/>
        <Image src = {cloud2} alt = "cloud" className="absolute w-[12%] top-56 right-0"/>
      </div>
      <Image src = {logo} alt = "dv logo" className="w-1/5 pt-20 pb-5"/>

      <div className="relative flex flex-col items-center justify-center w-1/2">
        <p className="text-landing-brown-200 z-30 text-xl font-bold pt-2">
          University of California, Riverside | May 9-10, 2026
        </p>   
        <Image src = {timer} alt = "timer" className="absolute z-0 w-4/5"/>
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
      
      <div className="relative w-full flex justify-center z-20">
        <Image
          src={bakery}
          alt="bakery"
          className="w-[52%] z-20"
        />
        <Image
          src={sign}
          alt="wooden board sign"
          className="absolute w-[8%] right-[39%] -bottom-24 z-30"
        />
      </div>
      <Image
        src={grass2}
        alt="grass box"
        className="absolute -bottom-[30%] left-48 w-1/5 z-30"
      />
      <Image
        src={grass2}
        alt="grass box"
        className="absolute -bottom-[30%] right-48 w-1/5 z-30"
      />
    </div>
  );
};

export default Landing;
