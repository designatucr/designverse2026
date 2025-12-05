// import { api } from "@/utils/api";
// import Events from "./events";
// import Image from "next/image";
// import pin from "@/public/schedule/pin.svg";
// import string from "@/public/schedule/string.svg";

const Schedule = async () => {
  //   const { items } = await api({
  //     url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  //     method: "GET",
  //   });

  //   const totalDays = [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];

  return (
    <div>
      {/* <div className="relative">
        <Image
          src={pin}
          alt=""
          className="absolute bottom-[75%] left-[18%] w-2/3 sm:bottom-[75%] sm:left-[16.5%] md:bottom-[80%] md:left-[16.5%] lg:bottom-[80%] lg:left-[17%]"
        />{" "}
        <div className="mx-auto w-4/5 rounded-lg bg-landing-beige-300 p-6 text-center font-bold text-landing-brown-300 sm:mt-20 sm:rounded-xl sm:p-8 md:mt-40 md:p-10 lg:mt-60 lg:p-20">
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl">
            COME IN, WE'D LOVE TO
          </p>
          <p className="text-lg sm:text-4xl md:text-6xl">SEE YOU HERE!</p>
        </div>
        <Image
          src={string}
          alt=""
          className="absolute bottom-[-46%] left-[18%] w-2/3 sm:bottom-[-40%] sm:left-[16.5%] md:bottom-[-40%] md:left-[16.5%] lg:bottom-[-40%] lg:left-[17%]"
        />
      </div>
      <div className="mx-auto mt-4 w-4/5 rounded-lg bg-landing-beige-300 py-4 sm:mt-5 sm:rounded-xl sm:p-4 sm:py-6 md:mt-8 md:p-10 md:py-6 lg:py-10">
        <p className="mb-4 text-center text-lg font-bold text-landing-brown-300 sm:mb-6 sm:text-2xl md:mb-10 lg:mt-4 lg:text-4xl">
          SCHEDULE (PST)
        </p>
        <Events events={items} totalDays={totalDays} />
      </div> */}
    </div>
  );
};

export default Schedule;
