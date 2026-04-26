import Cake from "@/public/landing/track1.svg";
import Bear from "@/public/landing/track2.svg";
import StrawberryCake from "@/public/landing/track3.svg";
import Frappuccino from "@/public/landing/track4.svg";
import Coffee from "@/public/landing/track5.svg";
import Image from "next/image";

const tracks = [
  {
    image: Cake,
    title: "Slice of Insight",
    customStyles: "text-landing-brown-50",
  },
  {
    image: Bear,
    title: "Cookie Cutter Challenge",
    customStyles: "text-white",
  },
  {
    image: StrawberryCake,
    title: "Sustainable Sweets",
    customStyles: "text-landing-brown-50",
  },
  {
    image: Frappuccino,
    title: "Framaccino",
    customStyles: "text-white",
  },
  {
    image: Coffee,
    title: "The Perfect Blend",
    customStyles: "text-landing-brown-50",
  },
];

const Tracks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="py-8 text-center font-inter text-4xl font-bold text-landing-brown-300 md:text-7xl">
        TRACKS
      </p>
      <div className="flex flex-wrap justify-center gap-12 py-12">
        {tracks.map(({ image, title, customStyles }, index) => (
          <div
            key={index}
            className="relative z-20 flex items-center justify-center"
          >
            <p
              className={`absolute top-28 z-10 w-48 break-words text-center font-inter text-2xl font-semibold ${customStyles}`}
            >
              {title}
            </p>
            <Image key={index} src={image} alt={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
