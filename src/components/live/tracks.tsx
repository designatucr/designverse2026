import Cake from "@/public/landing/track1.svg";
import CakeBack from "@/public/landing/track1back.svg";
import Bear from "@/public/landing/track2.svg";
import BearBack from "@/public/landing/track2back.svg";
import StrawberryCake from "@/public/landing/track3.svg";
import StrawberryBack from "@/public/landing/track3back.svg";
import Framer from "@/public/landing/track4.svg";
import FramerBack from "@/public/landing/track4back.svg";
import Coffee from "@/public/landing/track5.svg";
import CoffeeBack from "@/public/landing/track5back.svg";
import Track from "@/components/live/track";

const tracks = [
  {
    front: Cake,
    back: CakeBack,
    title: "Slice of Insight",
    customStyles: "text-landing-brown-50",
    description:
      "This track focuses on understanding users and their real needs. You will showcase how to plan and run user interviews, create surveys, analyze feedback, and translate insights into clear problem statements that guide better design decisions.",
    descColor: "text-black",
  },
  {
    front: Bear,
    back: BearBack,
    title: "Cookie Cutter Challenge",
    customStyles: "text-white",
    description:
      "This track involves implementing how to move from sketches and wireframes to functional prototypes. You will use rapid prototyping techniques and feedback to iterate quickly before investing time in full development.",
    descColor: "text-black",
  },
  {
    front: StrawberryCake,
    back: StrawberryBack,
    title: "Sustainable Sweets",
    customStyles: "text-landing-brown-50",
    description:
      "This track explores how designers can create more responsible and sustainable products. You will showcase how to think about environmental impact, accessibility, and ethical design while building solutions that benefit both users and the world around them.",
    descColor: "text-black",
  },
  {
    front: Framer,
    back: FramerBack,
    title: "Framaccino",
    customStyles: "text-white",
    description:
      "This track introduces Framer as a tool for creating high-fidelity and interactive prototypes. You will showcase how to design layouts, add interactions, and present your ideas in a realistic, shareable format.",
    descColor: "text-black",
  },
  {
    front: Coffee,
    back: CoffeeBack,
    title: "The Perfect Blend",
    customStyles: "text-landing-brown-50",
    description:
      "This track focuses on core UI design skills such as layout, typography, color, and visual hierarchy. You will showcase how to design interfaces that are both visually appealing and easy to use across different devices and screen sizes.",
    descColor: "text-black",
  },
];

const Tracks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="py-8 text-center font-inter text-4xl font-bold text-landing-brown-300 md:text-7xl">
        TRACKS
      </p>
      <div className="flex w-4/5 flex-col justify-center gap-12 py-12 md:flex-row md:flex-wrap">
        {tracks.map(
          (
            { front, back, title, customStyles, description, descColor },
            index,
          ) => (
            <Track
              key={index}
              front={front}
              back={back}
              title={title}
              customStyles={customStyles}
              description={description}
              descColor={descColor}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Tracks;
