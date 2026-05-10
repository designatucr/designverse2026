"use client";
import { useState } from "react";

type Event = {
  name: string;
  time: string;
  location: string;
};

type Schedule = Record<string, Event[]>;

const totalDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface LowerScheduleProps {
  schedule: Schedule;
}

const LowerSchedule: React.FC<LowerScheduleProps> = ({ schedule }) => {
  const date = new Date();
  const dayIndex = date.getDay() - 1 >= 0 ? date.getDay() - 1 : 6;
  const [selectedDay, setSelectedDay] = useState<string>(totalDays[dayIndex]);

  const events = schedule[selectedDay] ?? [];

  return (
    <div className="mx-auto flex w-2/3 flex-col rounded-lg border-8 border-landing-brown-700 bg-landing-grey-100 px-5 py-8 text-white">
      <div className="mb-6 flex flex-col items-center justify-center gap-2 md:flex-row">
        {totalDays.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`w-2/3 rounded-lg px-6 py-2 font-inter font-bold text-landing-brown-500 transition-colors md:w-1/6 ${
              day === selectedDay
                ? "bg-white"
                : "bg-landing-brown-600 transition hover:scale-105 hover:cursor-pointer hover:text-landing-brown-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {events.length === 0 ? (
          <p className="italic text-white">No events scheduled.</p>
        ) : (
          events.map((event, index) => (
            <div
              key={index}
              className="flex justify-between border-b-2 border-landing-brown-600 pb-6 text-sm md:text-lg"
            >
              <p className="landing-text-white ml-2 font-semibold md:ml-8">
                {event.name}
              </p>
              <div className="ml-5 mr-0 flex flex-col items-end md:ml-0 md:mr-6">
                <p className="whitespace-nowrap text-right font-semibold text-white">
                  {event.time}&nbsp;
                </p>
                <p className="font-semibold text-white">
                  {event.location.split(", ")[0]}
                </p>
                {event.location
                  .split(", ")
                  .slice(1)
                  .map((loc, i) => (
                    <p key={i} className="text-right font-semibold text-white">
                      {loc}
                    </p>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LowerSchedule;
