import Title from "@/components/ui/title";
import { Inter } from "next/font/google";
import Image from "next/image";
import bunny from "@/public/about/bunny.webp";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={`relative ${inter.className}`}>
      <Image
        src={bunny}
        alt="bunny"
        className="absolute bottom-0.5 right-[5%] w-1/5 pb-24 sm:bottom-[10%] sm:right-[15%] sm:w-auto md:bottom-[5%] md:right-[10%] md:w-auto xl:bottom-[10%] xl:right-[12%] xl:w-auto"
      />
      <section
        id="about"
        className="z-20 w-full items-start justify-center bg-[#fbe8d5] py-32 md:py-96"
      >
        <div className="pl-[8vw] font-semibold lg:w-1/2">
          <p className="mb-4 pb-12 text-3xl text-[#845d3e] lg:text-5xl">
            About Us
          </p>
          <div className="bg-[#DAB486] p-6 py-24 text-[#845d3e]">
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

      <div className="relative z-30 h-32 w-full bg-[#C3A47E]" />
      <div className="relative z-30 h-48 w-full bg-[#A28561]" />
      {/* tried using below code to implement the (alleged) gradient from figma, but for whatever reason it disappears whenever i scroll, 
      might be because my monitor is ridiculously large ? idk i made it a solid color instead */}
      {/* <div className="w-full h-48 bg-gradient-to-b from-[#B99C78] to-[#A28561]" /> */}
    </div>
  );
};

export default About;
