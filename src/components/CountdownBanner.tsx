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
    <div className="bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <span className="font-bold text-sm md:text-base">
            🎁 Oferta 50% Off +4 regalos pre Black Friday termina en:
          </span>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 rounded px-2 py-1 min-w-[45px]">
              <span className="font-bold text-lg tabular-nums">{formatNumber(hours)}</span>
              <span className="text-xs block">hrs</span>
            </div>
            <span className="font-bold text-lg">:</span>
            <div className="bg-white/20 rounded px-2 py-1 min-w-[45px]">
              <span className="font-bold text-lg tabular-nums">{formatNumber(minutes)}</span>
              <span className="text-xs block">min</span>
            </div>
            <span className="font-bold text-lg">:</span>
            <div className="bg-white/20 rounded px-2 py-1 min-w-[45px]">
              <span className="font-bold text-lg tabular-nums">{formatNumber(seconds)}</span>
              <span className="text-xs block">seg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;