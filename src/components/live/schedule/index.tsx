import Image from "next/image";
import coffeeBeans from "@/public/schedule/coffeeBeans.svg";
import coffeeCup from "@/public/schedule/coffeeCup.svg";
import mokaPot from "@/public/schedule/mokaPot.svg";
import LowerSchedule from "./lowerSchedule";

type Event = {
  name: string;
  time: string;
  location: string;
};

type Schedule = Record<string, Event[]>;

const UpperSchedule = () => {
  return (
    <div className="mx-auto mb-5 flex w-2/3 flex-col items-center justify-center gap-4 rounded-lg border-8 border-landing-brown-700 bg-landing-grey-100 px-5 py-8 text-white">
      <div className="flex flex-row items-center justify-center gap-2 lg:gap-10">
        <Image
          src={coffeeCup}
          alt="coffee cup"
          className="hidden h-auto w-8 md:flex md:w-14 lg:w-auto"
        />
        <Image
          src={coffeeBeans}
          alt="coffee beans"
          className="hidden h-auto w-8 pt-16 md:flex md:w-14 lg:w-auto"
        />
        <div className="space-y-2 md:px-10 lg:space-y-4">
          <p className="text-center font-inter text-4xl font-bold md:text-6xl">
            SCHEDULE
          </p>
          <p className="text-center text-sm md:text-lg">
            Pacific Standard Time (PST)
          </p>
        </div>
        <Image
          src={coffeeBeans}
          alt="coffee beans"
          className="hidden h-auto w-8 scale-x-[-1] pb-20 md:flex md:w-14 lg:w-auto"
        />
        <Image
          src={mokaPot}
          alt="moka pot"
          className="hidden h-auto w-8 md:flex md:w-14 lg:w-auto"
        />
      </div>
    </div>
  );
};

const Schedule = async () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

  const params = new URLSearchParams({
    key: apiKey!,
    timeMin: new Date().toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
  });

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId!)}/events?${params}`,
  );

  const data = await res.json();

  const schedule: Schedule = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };
  for (const item of data.items ?? []) {
    const day = new Date(item.start.dateTime).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "long",
    });
    schedule[day]?.push({
      name: item.summary,
      time: new Date(item.start.dateTime).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Los_Angeles",
      }),
      location: item.location ?? "TBD",
    });
  }

  return (
    <div className="space-y-5">
      <UpperSchedule />
      <LowerSchedule schedule={schedule} />
    </div>
  );
};

export default Schedule;
