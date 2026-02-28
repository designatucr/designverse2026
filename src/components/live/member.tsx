import Image, { StaticImageData } from "next/image";

interface teamProp {
  name: string;
  image: StaticImageData;
  role?: string;
}

const Member = ({ name, image, role }: teamProp) => {
  return (
    <div className="flex flex-col items-center md:mx-6 md:justify-center md:p-6">
      <div className="mb-4 w-full overflow-hidden">
        <Image src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <p className="text-center text-xl font-bold text-landing-brown-300 md:text-2xl">
        {name}
      </p>
      <p className="text-md text-center text-landing-brown-300 md:text-lg">
        {role}
      </p>
    </div>
  );
};

export default Member;
