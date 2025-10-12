import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="flex items-center justify-center py-12 px-3 sm:px-6">
      <div
        id="countdown"
        className="flex justify-center items-center gap-3 sm:gap-6 px-4 sm:px-8 py-6 rounded-3xl 
                   bg-[#FDF6D3]/70 backdrop-blur-md border border-[#f3df8c]
                   shadow-[0_0_25px_rgba(255,235,130,0.4)] hover:shadow-[0_0_40px_rgba(255,235,130,0.6)] 
                   transition-all duration-300 text-[#4b2308] font-[Antonio]"
      >
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((unit, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white/80 text-[#4b2308]
                       rounded-2xl shadow-md w-[70px] sm:w-[100px] h-[90px] sm:h-[120px]
                       transition-all duration-300 hover:scale-105 hover:bg-[#fff2b2]/90"
          >
            <span className="text-3xl sm:text-5xl font-bold drop-shadow-sm tracking-tight leading-none">
              {unit.value}
            </span>
            <p className="uppercase text-[10px] sm:text-sm font-semibold mt-1 tracking-widest">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default function App() {
  const timerDateISO = "2025-10-28T00:00:00";
  return <Countdown targetDate={timerDateISO} />;
}
