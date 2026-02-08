"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import LOGO from "@/public/forms/formdvlogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Bushes from "@/public/forms/formbushes.svg";
import icons from "@/data/form/icons";
import LeftBunny from "@/public/forms/formbunnyleft.svg";
import RightBunny from "@/public/forms/formbunnyright.svg";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses = {},
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y flex h-full w-full flex-col items-center gap-5 font-poppins">
      <div className="mt-4 flex w-full flex-row justify-end space-x-4">
        <Button asChild>
          <Link
            href="/"
            className="bg-landing-brown-300 px-8 hover:bg-forms-brown-300"
          >
            HOME
          </Link>
        </Button>
        <Button
          className="bg-landing-brown-300 px-5 hover:bg-forms-brown-300"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          SIGN OUT
        </Button>
      </div>
      <div className="z-20 flex w-full flex-col">
        <div className="z-10 min-h-[7vh] bg-forms-brown-300 shadow-2xl" />
        <Image
          src={Bushes}
          alt="Bushes"
          className="w-full -translate-y-[25%]"
        />
      </div>
      <div className="xl:min-w-1/2 sm:-mt-10 md:-mt-16 md:w-1/2 -mt-6 flex w-10/12 -translate-y-[2%] flex-col items-center gap-7 bg-forms-beige-200 pb-12 pt-5">
        <div className="flex-between mt-12 flex w-full items-center justify-center p-8">
          <div className="sm:w-1/2 h-[1vh] w-1/4 bg-forms-brown-200" />
          <Image src={LOGO} className="sm:w-1/3 m-4 w-1/2" alt="Logo" />
          <div className="sm:w-1/2 h-[1vh] w-1/4 bg-forms-brown-200" />
        </div>
        <div className="relative flex w-full flex-col items-center gap-6">
          <Image
            src={LeftBunny}
            alt="Left Bunny"
            className="md:block absolute left-0 top-[80%] hidden w-[3vw]"
          />
          <Image
            src={RightBunny}
            alt="Right Bunny"
            className="md:block absolute right-0 top-[12%] hidden w-[3vw]"
          />
          <p className="sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-semibold text-landing-brown-300 2xl:text-7xl">
            DESIGNVERSE 2026
          </p>
          <p className="sm:text-lg md:px-8 md:py-4 md:text-xl lg:text-2xl xl:text-3xl m-0 rounded-lg bg-forms-olive-100 px-5 py-3 text-center text-base font-semibold text-white 2xl:text-4xl">
            {header}
          </p>
        </div>
        <div className="rounded-b p-8">
          <div className="grid grid-cols-1 gap-3 font-medium text-landing-brown-300">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
                packet={packet}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-10 p-8">
        {icons.map(({ image, alt }, index) => (
          <Image key={index} src={image} alt={alt} className="w-[8vw]" />
        ))}
      </div>
    </div>
  );
};

export default Form;
