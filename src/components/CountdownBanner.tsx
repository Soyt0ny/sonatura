import { useEffect, useState } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 23,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-[hsl(var(--sale-banner))] text-[hsl(var(--sale-banner-foreground))] py-3 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <span className="font-semibold text-sm md:text-base">
          🎃 Early Halloween Sale ends in 🎃
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.hours)[0]}
            </span>
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.hours)[1]}
            </span>
          </div>
          <span className="font-bold">:</span>
          <div className="flex gap-1">
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.minutes)[0]}
            </span>
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.minutes)[1]}
            </span>
          </div>
          <span className="font-bold">:</span>
          <div className="flex gap-1">
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.seconds)[0]}
            </span>
            <span className="bg-white text-primary px-2 py-1 rounded font-bold text-sm">
              {formatNumber(timeLeft.seconds)[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
