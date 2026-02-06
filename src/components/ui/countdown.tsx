"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

interface digitProps {
  value: number;
  unit: string;
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
}

const Digits = ({ value, unit, classNames }: digitProps) => {
  return (
    <div className="relative z-50 flex flex-col items-center last:hidden sm:last:flex md:gap-1">
      <div className="mt-1 flex gap-1 md:gap-5 lg:m-2 lg:!gap-1">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className={`flex items-center justify-center rounded ${classNames.background} bg-opacity-40 px-[0.3rem] py-[0.2rem] font-bold md:p-[0.4rem] ${classNames.digit} `}
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div className={`m-4 mt-0 text-[0.5rem] ${classNames.unit}`}>{unit}</div>
    </div>
  );
};

interface countdownProps {
  classNames: {
    unit: string;
    digit: string;
    background: string;
  };
}

const Countdown = ({ classNames }: countdownProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = data.end.getTime() - new Date().getTime();
      if (timeLeft <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center font-bold">
      {Object.entries(countdown).map(([unit, value], index) => (
        <Digits key={index} unit={unit} value={value} classNames={classNames} />
      ))}
    </div>
  );
};

export default Countdown;
