// import { api } from "@/utils/api";
// import Image from "next/image";
// import Events from "./events";
import Title from "@/components/ui/title";
// import coffeeBeans from "@/public/schedule/coffeeBeans.svg";
// import coffeeCup from "@/public/schedule/coffeeCup.svg";
// import mokaPot from "@/public/schedule/mokaPot.svg";

const Schedule = async () => {
  // const { items } = await api({
  //   url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  //   method: "GET",
  // });

  // const totalDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  return (
    <>
      <Title>Schedule</Title>
      {/*
    <div className="space-y-4 py-6 lg:space-y-10 lg:py-20">
      <div className="mx-auto flex w-5/6 flex-row items-center justify-center gap-2 rounded-xl border-8 border-landing-brown-700 bg-landing-grey-100 p-4 text-center text-white lg:border-[16px] lg:p-10 xl:gap-10">
        <Image
          src={coffeeCup}
          alt="coffee"
          className="h-auto w-8 md:w-14 lg:w-auto"
        />
        <Image
          src={coffeeBeans}
          alt="coffee"
          className="h-auto w-8 pt-16 md:w-14 lg:w-auto"
        />
        <div className="space-y-2 md:px-10 lg:space-y-9 lg:px-20">
          <p className="text-xl font-bold md:text-3xl lg:text-6xl">SCHEDULE</p>
          <p className="text-sm md:text-lg lg:text-2xl">
            Pacific Standard Time (PST)
          </p>
        </div>
        <Image
          src={coffeeBeans}
          alt="coffee"
          className="h-auto w-8 scale-x-[-1] pb-20 md:w-14 lg:w-auto"
        />
        <Image
          src={mokaPot}
          alt="coffee"
          className="h-auto w-8 md:w-14 lg:w-auto"
        />
      </div>
    </div>
    */}
    </>
  );
};

export default Schedule;
