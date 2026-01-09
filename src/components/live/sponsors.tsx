import Title from "@/components/ui/title";
import { sponsors } from "@/data/sponsors/sponsors";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-12">
      <Title>SPONSORS</Title>
      <div className="max-w-8xl grid w-5/6 grid-cols-1 items-center justify-center gap-8 p-6 sm:grid-cols-3 sm:gap-1">
        {sponsors.map(({ name, image, translateY, link }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            className={`flex items-center justify-center transition-transform hover:scale-110 ${translateY ? "-translate-y-[6%]" : ""}`}
          >
            <Image src={image} alt={name} className="w-2/3 sm:w-3/4" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
