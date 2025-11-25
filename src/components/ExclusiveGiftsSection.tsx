import { useState, useEffect } from "react";
import giftDigitalBook from "@/assets/gift-digital-book.jpg";
import giftFreeShipping from "@/assets/gift-free-shipping.jpg";
import giftLashCurler from "@/assets/gift-lash-curler.jpg";
import giftMascara from "@/assets/gift-mascara.jpg";
const gifts = [{
  badge: "FREE $10",
  originalPrice: "$10",
  title: "E-book digital",
  subtitle: "Guía completa",
  image: giftDigitalBook
}, {
  badge: "FREE $6",
  originalPrice: "$6",
  title: "Envío gratis",
  subtitle: "A todo el país",
  image: giftFreeShipping
}, {
  badge: "FREE $19",
  originalPrice: "$19",
  title: "Lash Curler",
  subtitle: "Premium quality",
  image: giftLashCurler
}, {
  badge: "FREE $25",
  originalPrice: "$25",
  title: "Mascara travel",
  subtitle: "Tamaño viaje",
  image: giftMascara
}];
const ExclusiveGiftsSection = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("giftsCountdown");
    return saved ? parseInt(saved) : 24 * 60 * 60;
  });
  const [kitsAvailable, setKitsAvailable] = useState(() => {
    const saved = localStorage.getItem("kitsAvailable");
    return saved ? parseInt(saved) : 127;
  });

  // Get tomorrow's date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.getDate();
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const month = months[tomorrow.getMonth()];
    return `${day} de ${month}`;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newValue = prev <= 0 ? 24 * 60 * 60 : prev - 1;
        localStorage.setItem("giftsCountdown", newValue.toString());
        return newValue;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setKitsAvailable(prev => {
        if (prev <= 5) return prev;
        const shouldDecrease = Math.random() < 0.3;
        if (shouldDecrease) {
          const decrease = Math.floor(Math.random() * 2) + 1;
          const newValue = Math.max(5, prev - decrease);
          localStorage.setItem("kitsAvailable", newValue.toString());
          return newValue;
        }
        return prev;
      });
    }, 45000);
    return () => clearInterval(interval);
  }, []);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor(timeLeft % 3600 / 60);
  const seconds = timeLeft % 60;
  const handleAddToCart = () => {
    const cartButton = document.getElementById("original-cart-button");
    if (cartButton) {
      cartButton.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      cartButton.click();
    }
  };
  return <section className="w-full py-3">
      <div className="w-full">
        {/* Recuadro con fondo claro */}
        <div className="bg-gradient-to-br from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-lg p-6 border border-[#D5C3A5]/30 shadow-lg">
          {/* Black Friday Title */}
          <h3 className="text-center text-[15px] md:text-[17px] font-bold tracking-wide mb-2 text-[#1B1B1B]" style={{
            fontFamily: "Inter, sans-serif"
          }}>
            OFERTA BLACK FRIDAY
          </h3>
          
          {/* Message Above Gifts */}
          <p className="text-center text-[12px] md:text-[13px] font-medium mb-4 max-w-[400px] mx-auto text-[#1B1B1B]/70" style={{
            fontFamily: "Inter, sans-serif"
          }}>Compra antes del {getTomorrowDate()} para obtener garantizado: 50% off + 4 Regalos GRATIS
          </p>

          {/* Gifts Grid */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6 max-w-[400px] mx-auto">
            {gifts.map((gift, index) => <div key={index} className="flex flex-col items-center">
                {/* Gift Card */}
                <div className="relative w-full aspect-[1/1] rounded-[6px] p-1.5 md:p-2 flex items-center justify-center transition-transform hover:scale-[1.03]" style={{
              backgroundColor: "#F7F5F1",
              border: "1.5px dashed #B8B8B8",
              boxShadow: "0 3px 10px rgba(27, 27, 27, 0.04)"
            }}>
                  {/* FREE Badge */}
                  <div className="absolute -top-[8px] left-1 rounded-[4px] px-1.5 py-0.5 flex flex-col items-center justify-center" style={{
                backgroundColor: "#D9C6A5",
                minWidth: "40px",
                minHeight: "20px"
              }}>
                    <span className="text-[8px] font-bold uppercase leading-none" style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1B1B1B"
                }}>
                      FREE
                    </span>
                    <span className="text-[7px] line-through mt-0.5 font-semibold" style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#8B4513",
                  textDecorationColor: "#8B4513",
                  textDecorationThickness: "1.5px"
                }}>
                      {gift.originalPrice}
                    </span>
                  </div>

                  {/* Product Image */}
                  <img src={gift.image} alt={gift.title} className="max-h-[55%] w-auto object-contain" />
                </div>

                {/* Title & Subtitle */}
                <div className="mt-1.5 text-center space-y-0">
                  <h3 className="text-[9px] md:text-[10px] font-semibold leading-tight text-[#1B1B1B]/80" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                    {gift.title}
                  </h3>
                </div>
              </div>)}
          </div>

          {/* Urgency Section */}
          <div className="text-center space-y-2">
            {/* Countdown */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-[11px] text-[#1B1B1B]/60 font-medium uppercase tracking-wide" style={{
                fontFamily: "Inter, sans-serif"
              }}>
                Termina en
              </span>
              <div className="flex items-center gap-1.5">
                <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                  <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(hours).padStart(2, "0")}</span>
                </div>
                <span className="text-base font-semibold text-[#1B1B1B]/30">:</span>
                <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                  <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(minutes).padStart(2, "0")}</span>
                </div>
                <span className="text-base font-semibold text-[#1B1B1B]/30">:</span>
                <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                  <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(seconds).padStart(2, "0")}</span>
                </div>
              </div>
            </div>

            {/* Urgency Text */}
            <p className="text-[10px] max-w-[350px] mx-auto text-[#1B1B1B]/50" style={{
              fontFamily: "Inter, sans-serif"
            }}>
              Regalos garantizados solo con pedidos confirmados antes del contador.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ExclusiveGiftsSection;