import { useEffect, useState } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 horas en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 24 * 60 * 60; // Reinicia a 24 horas cuando llega a 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white py-2 px-4 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <span className="text-xs md:text-sm font-medium tracking-wide">
            Oferta 50% Off +4 regalos pre Black Friday termina en:
          </span>
          <div className="flex items-center gap-2">
            <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-0.5 min-w-[35px]">
              <span className="font-semibold text-sm tabular-nums">{formatNumber(hours)}</span>
            </div>
            <span className="text-xs text-white/60">:</span>
            <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-0.5 min-w-[35px]">
              <span className="font-semibold text-sm tabular-nums">{formatNumber(minutes)}</span>
            </div>
            <span className="text-xs text-white/60">:</span>
            <div className="bg-white/10 backdrop-blur-sm rounded px-2 py-0.5 min-w-[35px]">
              <span className="font-semibold text-sm tabular-nums">{formatNumber(seconds)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;