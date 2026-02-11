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
    <div className="min:w-24 mx-2 flex flex-col items-center gap-1 md:gap-0">
      <div className="m-1 mb-0 flex gap-1 md:m-3 lg:!gap-1">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className={`flex items-center justify-center rounded ${classNames.background} bg-opacity-40 p-1 text-lg font-bold ${classNames.digit} lg:min-w-11 lg:p-3 lg:text-3xl`}
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div className={`mx-auto mt-0 text-base ${classNames.unit}`}>{unit}</div>
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

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const entries = Object.entries(countdown);
  const displayEntries = isMobile ? entries.slice(0, 3) : entries;

  return (
    <div className="flex items-center justify-center font-bold">
      {displayEntries.map(([unit, value]) => (
        <Digits key={unit} unit={unit} value={value} classNames={classNames} />
      ))}
    </div>
  );
};

export default Countdown;
