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
    <div className="mx-auto rounded-xl bg-landing-brown-700 p-4">
      <div className="mx-auto flex flex-col items-center justify-center bg-landing-grey-100 p-6">
        <div className="lg:w-11/12 mx-auto flex w-full items-center justify-between gap-2 overflow-x-scroll">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`sm:text-sm lg:mb-8 lg:mt-2 lg:rounded-lg lg:text-lg flex w-40 min-w-20 justify-center rounded-md p-2 text-xs font-bold focus:outline-none ${
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
            <div className="lg:text-lg flex flex-row justify-center text-sm font-semibold">
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
                    className="font-workSans sm:mb-2 lg:mb-4 lg:grid-cols-3 lg:rounded-xl lg:p-8 lg:text-lg mb-2 grid items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white"
                  >
                    <p className="flex">{summary}</p>
                    <p className="flex">
                      {description.split("\n")[0].slice(1)}
                    </p>
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
    </div>
  );
};

export default Events;
