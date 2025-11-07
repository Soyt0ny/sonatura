import { useEffect, useState } from "react";
const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 23,
    seconds: 45
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatNumber = (num: number) => String(num).padStart(2, "0");
  return <div className="bg-[hsl(var(--sale-banner))] text-[hsl(var(--sale-banner-foreground))] py-3 px-4">
      
    </div>;
};
export default CountdownBanner;