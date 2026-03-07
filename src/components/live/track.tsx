"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface TrackProps {
  front: StaticImageData;
  back: StaticImageData;
  title: string;
  customStyles: string;
  description: string;
  descColor: string;
}

const Track = ({
  front,
  back,
  title,
  customStyles,
  description,
  descColor,
}: TrackProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="cursor-pointer">
      <motion.div
        className="z-1 relative flex items-center justify-center"
        transition={{ duration: 0.5 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        onClick={() => setFlipped(!flipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", zIndex: flipped ? 1 : 2 }}
        >
          <p
            className={`absolute top-28 z-10 w-48 break-words text-center font-inter text-2xl font-semibold ${customStyles}`}
          >
            {title}
          </p>
          <Image src={front} alt={title} />
        </div>
        <div
          className="relative flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            zIndex: flipped ? 2 : 1,
            transform: "rotateY(180deg)",
          }}
        >
          <p
            className={`absolute top-28 z-10 w-48 break-words text-center font-inter text-base font-semibold ${descColor}`}
          >
            {description}
          </p>
          <Image src={back} alt={title} />
        </div>
      </motion.div>
    </div>
  );
};

export default Track;
