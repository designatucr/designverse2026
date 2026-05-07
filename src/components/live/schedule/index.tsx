"use client";
// import { api } from "@/utils/api";
import Image from "next/image";
import { useState } from "react";
import coffeeBeans from "@/public/schedule/coffeeBeans.svg";
import coffeeCup from "@/public/schedule/coffeeCup.svg";
import mokaPot from "@/public/schedule/mokaPot.svg";

type Event = {
  name: string;
  time: string;
  location: string;
};

const SCHEDULE: Record<string, Event[]> = {
  Monday: [
    {
      name: "Data Driven Design Workshop",
      time: "06:00 PM",
      location: "SSC MPR 3",
    },
    {
      name: "Figma Basics with Design @ UCR",
      time: "06:00 PM",
      location: "HUB 265",
    },
  ],
  Tuesday: [
    { name: "UX Research Methods", time: "05:00 PM", location: "SSC 122" },
  ],
  Wednesday: [
    { name: "Dev Sync", time: "04:00 PM", location: "WCH 110" },
    { name: "Open Studio Hours", time: "07:00 PM", location: "HUB 355" },
  ],
  Thursday: [
    {
      name: "Portfolio Review Night",
      time: "06:30 PM",
      location: "WCH 205/206",
    },
  ],
  Friday: [],
};

const totalDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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

interface LowerScheduleProps {
  selectedDay: string;
  onSelectDay: (day: string) => void;
}

const LowerSchedule: React.FC<LowerScheduleProps> = ({
  selectedDay,
  onSelectDay,
}) => {
  const events = SCHEDULE[selectedDay] ?? [];

  return (
    <div className="mx-auto flex w-2/3 flex-col rounded-lg border-8 border-landing-brown-700 bg-landing-grey-100 px-5 py-8 text-white">
      <div className="mb-6 flex flex-col items-center justify-center gap-2 md:flex-row">
        {totalDays.map((day) => (
          <button
            key={day}
            onClick={() => onSelectDay(day)}
            className={`w-2/3 rounded-lg px-6 py-2 font-inter font-bold text-landing-brown-500 transition-colors md:w-1/6 ${
              day === selectedDay
                ? "bg-white"
                : "bg-landing-brown-600 hover:scale-105 hover:text-landing-brown-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-6">
        {events.length === 0 ? (
          <p className="italic text-white">No events scheduled.</p>
        ) : (
          events.map((event, index) => (
            <div
              key={index}
              className="flex justify-between text-sm md:text-lg"
            >
              <p className="ml-2 font-semibold text-white md:ml-16">
                {event.name}
              </p>
              <div className="ml-5 mr-0 flex flex-col md:ml-0 md:mr-14 md:flex-row">
                <p className="whitespace-nowrap font-semibold text-white">
                  {event.time}&nbsp;
                </p>
                <p className="font-semibold text-white">{event.location}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const Schedule = () => {
  const date = new Date();
  const [selectedDay, setSelectedDay] = useState<string>(
    totalDays[date.getDay() - 1],
  );

  return (
    <div className="space-y-5">
      <UpperSchedule />
      <LowerSchedule selectedDay={selectedDay} onSelectDay={setSelectedDay} />
    </div>
  );
};

export default Schedule;
