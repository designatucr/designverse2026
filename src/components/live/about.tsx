import Title from "@/components/ui/title";
import { Inter } from "next/font/google";
import Image from "next/image";
import bunny from "@/public/landing/bunny.svg";
import matcha from "@/public/landing/matcha.svg";
import taiyaki from "@/public/landing/taiyaki.svg";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={`relative ${inter.className}`}>
      <section
        id="about"
        className="z-20 w-full items-start justify-center bg-[#fbe8d5] py-32 md:py-96"
      >
        <div className="w-3/4 pl-[8vw] pr-[8vw] font-semibold">
          <p className="mb-4 pb-12 text-3xl text-[#845d3e] lg:text-5xl">
            ABOUT US
          </p>
          <div className="relative bg-white p-6 py-24 text-landing-brown-400 shadow-[5px_5px_5px_rgba(0,0,0,0.3)] sm:mb-72 sm:p-12 md:mb-36 lg:mb-24 xl:mb-24">
            <div className="absolute left-0 top-0 h-8 w-28 translate-x-[-25%] translate-y-[15%] rotate-[-38deg] bg-blue-200/60" />
            <div className="absolute right-0 top-0 h-8 w-28 translate-x-[25%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
            <div className="absolute bottom-0 left-0 h-8 w-28 translate-x-[-30%] translate-y-[-20%] rotate-[38deg] bg-blue-200/60" />
            <div className="absolute bottom-0 right-0 h-8 w-28 translate-x-[40%] translate-y-[20%] rotate-[-38deg] bg-blue-200/60" />
            <p className="text-sm font-medium lg:text-lg">
              DesignVerse is the first and only <b>24-hour beginner-friendly</b>{" "}
              Design-a-Thon hosted by the University of California, Riverside.
              Designers are challenged to create the interface of an app or
              website through a given prompt, which would then be demoed and
              presented to a panel of industry professionals.
              <br />
              <br />
              At DesignVerse, our goal is to empower our community of students
              who are interested in design-like thinking and provide career
              developmental opportunities through our <b>workshops</b>,{" "}
              <b>mentorship</b>, and <b>networking events</b>.
              <br />
              <br />
              We welcome all undergraduate, graduate and high school students
              for a lively weekend filled with creativity, networking,
              mentorship, and more!
            </p>
          </div>
        </div>
      </section>
      <div className="relative">
        <Image
          src={bunny}
          alt="bunny"
          className="absolute bottom-0.5 bottom-[10%] left-[60%] left-[75%] w-2/5 pb-48 sm:bottom-[10%] sm:left-[60%] sm:w-2/5 md:bottom-[5%] md:left-[60%] md:w-1/3 lg:left-[55%] lg:w-auto xl:bottom-[10%] xl:right-[12%] xl:w-auto"
        />
        <Image
          src={matcha}
          alt="matcha"
          className="absolute bottom-0.5 left-[70%] z-40 w-1/5 pb-48 sm:bottom-[10%] sm:right-[15%] sm:w-auto md:bottom-[5%] md:left-[60%] md:w-auto xl:bottom-[10%] xl:right-[12%] xl:w-auto"
        />
        <Image
          src={taiyaki}
          alt="taiyaki"
          className="absolute bottom-0.5 left-[60%] z-40 w-1/5 pb-32 sm:bottom-[10%] sm:right-[15%] sm:w-auto md:bottom-[5%] md:left-[50%] md:w-auto xl:bottom-[10%] xl:right-[12%] xl:w-auto"
        />
        <div className="relative z-30 h-32 w-full bg-[#C3A47E]" />
        <div className="relative z-30 h-48 w-full bg-[#A28561]" />
      </div>

      {/* tried using below code to implement the (alleged) gradient from figma, but for whatever reason it disappears whenever i scroll, 
      might be because my monitor is ridiculously large ? idk i made it a solid color instead */}
      {/* <div className="w-full h-48 bg-gradient-to-b from-[#B99C78] to-[#A28561]" /> */}
    </div>
  );
};

export default About;
