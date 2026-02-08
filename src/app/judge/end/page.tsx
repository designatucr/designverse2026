import React from "react";
import Image from "next/image";
import image1 from "@/public/engineering/hackathon/judgeAssets3.webp";
import image2 from "@/public/engineering/hackathon/judgeAssets4.webp";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-gradient-to-t from-hackathon-primary to-hackathon-primary/70">
      <Image src={image1} className="md:w-1/3 w-full" alt=""></Image>
      <p className="text-center font-poppins text-4xl font-semibold text-white">
        THANK YOU FOR JUDGING!
      </p>
      <Image src={image2} className="md:w-1/3 w-full" alt=""></Image>
    </div>
  );
};

export default Page;
