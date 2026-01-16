"use client";
import { GoogleEvent } from "@/types/calendar";
import { useState } from "react";

interface props {
  events: GoogleEvent[];
  totalDays: string[];
}

const Events = ({ events, totalDays }: props) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start.dateTime)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="mx-auto flex w-5/6 flex-col items-center justify-center rounded-xl border-8 border-landing-brown-700 bg-landing-grey-100 p-6 lg:border-[16px] lg:p-10">
      <div className="mx-auto flex w-full items-center justify-between gap-2 overflow-x-scroll lg:w-11/12">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex w-40 min-w-20 justify-center rounded-md p-2 text-xs font-bold focus:outline-none sm:text-sm lg:mb-8 lg:mt-2 lg:rounded-lg lg:text-lg ${
              selectedDay === day
                ? "bg-white text-landing-brown-500"
                : "bg-landing-brown-600 text-landing-brown-500"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 h-full w-11/12">
        {events.filter(
          ({ start }) =>
            new Date(start.dateTime).toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
              weekday: "long",
            }) === selectedDay,
        ).length == 0 ? (
          <div className="flex flex-row justify-center text-sm font-semibold lg:text-lg">
            No events Available
          </div>
        ) : (
          <>
            {events
              .filter(
                ({ start }) =>
                  new Date(start.dateTime).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles",
                    weekday: "long",
                  }) === selectedDay,
              )
              .map(({ start, summary, description, location }, index) => (
                <div
                  key={index}
                  className="font-workSans mb-2 grid items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white sm:mb-2 lg:mb-4 lg:grid-cols-3 lg:rounded-xl lg:p-8 lg:text-lg"
                >
                  <p className="flex">{summary}</p>
                  <p className="flex">{description.split("\n")[0].slice(1)}</p>
                  <div className="flex flex-row justify-end gap-2">
                    <p className="flex justify-end">
                      {new Date(new Date(start.dateTime)).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZone: "America/Los_Angeles",
                        },
                      )}
                    </p>
                    <p className="flex justify-center">{location}</p>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
