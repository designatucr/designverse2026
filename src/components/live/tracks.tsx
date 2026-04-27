import Title from "@/components/ui/title";

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
      "Uncover real user needs and translate insights into a clear, evidence-driven problem statement.",
    descColor: "text-black",
  },
  {
    front: Bear,
    back: BearBack,
    title: "Cookie Cutter Challenge",
    customStyles: "text-white",
    description:
      "Bring concepts to life through rapid, testable, and iterative prototypes.",
    descColor: "text-black",
  },
  {
    front: StrawberryCake,
    back: StrawberryBack,
    title: "Pudding Success On",
    customStyles: "text-landing-brown-50",
    description:
      "Design a solution that prioritizes sustainability, ethics, and long-term social impact.",
    descColor: "text-black",
  },
  {
    front: Framer,
    back: FramerBack,
    title: "Framaccino",
    customStyles: "text-white",
    description:
      "Create polished, high-fidelity interactive experiences using Framer.",
    descColor: "text-black",
  },
  {
    front: Coffee,
    back: CoffeeBack,
    title: "The Perfect Blend",
    customStyles: "text-landing-brown-50",
    description:
      "Design visually refined, accessible, and consistent interfaces alongside cafe theme.",
    descColor: "text-black",
  },
];

const Tracks = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center py-10">
      <Title>TRACKS</Title>
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
