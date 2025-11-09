import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import giftDigitalBook from "@/assets/gift-digital-book.jpg";
import giftFreeShipping from "@/assets/gift-free-shipping.jpg";
import giftLashCurler from "@/assets/gift-lash-curler.jpg";
import giftMascara from "@/assets/gift-mascara.jpg";

const gifts = [
  {
    badge: "FREE $10",
    originalPrice: "$10",
    title: "E-book digital",
    subtitle: "Guía completa",
    image: giftDigitalBook,
  },
  {
    badge: "FREE $6",
    originalPrice: "$6",
    title: "Envío gratis",
    subtitle: "A todo el país",
    image: giftFreeShipping,
  },
  {
    badge: "FREE $19",
    originalPrice: "$19",
    title: "Lash Curler",
    subtitle: "Premium quality",
    image: giftLashCurler,
  },
  {
    badge: "FREE $25",
    originalPrice: "$25",
    title: "Mascara travel",
    subtitle: "Tamaño viaje",
    image: giftMascara,
  },
];

const ExclusiveGiftsSection = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("giftsCountdown");
    return saved ? parseInt(saved) : 24 * 60 * 60;
  });
  
  const [kitsAvailable, setKitsAvailable] = useState(() => {
    const saved = localStorage.getItem("kitsAvailable");
    return saved ? parseInt(saved) : 127;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newValue = prev <= 0 ? 24 * 60 * 60 : prev - 1;
        localStorage.setItem("giftsCountdown", newValue.toString());
        return newValue;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setKitsAvailable((prev) => {
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
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const handleAddToCart = () => {
    const cartButton = document.getElementById("original-cart-button");
    if (cartButton) {
      cartButton.scrollIntoView({ behavior: "smooth", block: "center" });
      cartButton.click();
    }
  };

  return (
    <section 
      className="w-full py-12 px-5 md:px-0"
      style={{ backgroundColor: "#F7F5F1" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 
            className="text-[26px] md:text-[28px] font-bold"
            style={{ 
              fontFamily: "Playfair Display, serif",
              color: "#1B1B1B"
            }}
          >
            OFERTA EXCLUSIVA — Regalos gratis con tu primer pedido
          </h2>
          <p 
            className="text-[14px]"
            style={{ 
              fontFamily: "Inter, sans-serif",
              color: "#1B1B1B"
            }}
          >
            Compra HOY y llévate estos 4 regalos. Oferta válida solo por tiempo limitado.
          </p>
        </div>

        {/* Gifts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px] md:gap-[28px] mb-8">
          {gifts.map((gift, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Gift Card */}
              <div 
                className="relative w-full aspect-[220/160] rounded-[12px] p-4 flex items-center justify-center transition-transform hover:scale-[1.03]"
                style={{
                  backgroundColor: "#F7F5F1",
                  border: "2px dashed #B8B8B8",
                  boxShadow: "0 6px 18px rgba(27, 27, 27, 0.06)",
                }}
              >
                {/* FREE Badge */}
                <div 
                  className="absolute -top-[14px] left-3 rounded-[8px] px-3 py-1.5 flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: "#D9C6A5",
                    minWidth: "90px",
                    minHeight: "34px",
                  }}
                >
                  <span 
                    className="text-[12px] md:text-[14px] font-bold uppercase leading-tight"
                    style={{ 
                      fontFamily: "Inter, sans-serif",
                      color: "#1B1B1B"
                    }}
                  >
                    FREE
                  </span>
                  <span 
                    className="text-[10px] md:text-[12px] line-through"
                    style={{ 
                      fontFamily: "Inter, sans-serif",
                      color: "#B8B8B8"
                    }}
                  >
                    {gift.originalPrice}
                  </span>
                </div>

                {/* Product Image */}
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="max-h-[60%] w-auto object-contain"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="mt-[14px] text-center space-y-0.5">
                <h3 
                  className="text-[14px] md:text-[16px] font-semibold"
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    color: "#1B1B1B"
                  }}
                >
                  {gift.title}
                </h3>
                <p 
                  className="text-[11px] md:text-[12px]"
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    color: "#B8B8B8"
                  }}
                >
                  {gift.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="text-center space-y-4 mb-6">
          {/* Countdown & Kits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2">
              <span 
                className="text-[13px]"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  color: "#1B1B1B"
                }}
              >
                Quedan:
              </span>
              <div className="flex items-center gap-1">
                <span 
                  className="text-[18px] font-bold tabular-nums"
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    color: "#1B1B1B"
                  }}
                >
                  {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m{" "}
                  {String(seconds).padStart(2, "0")}s
                </span>
              </div>
            </div>
            <span 
              className="hidden md:inline text-[13px]"
              style={{ color: "#B8B8B8" }}
            >
              •
            </span>
            <div>
              <span 
                className="text-[13px] font-medium"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  color: "#1B1B1B"
                }}
              >
                Quedan {kitsAvailable} kits disponibles
              </span>
            </div>
          </div>

          {/* Urgency Text */}
          <p 
            className="text-[13px] max-w-[600px] mx-auto"
            style={{ 
              fontFamily: "Inter, sans-serif",
              color: "#1B1B1B"
            }}
          >
            Solo hoy: estos regalos se entregan con pedidos confirmados antes del contador. Si
            vuelves mañana, la oferta podrá no estar disponible.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleAddToCart}
            className="rounded-[8px] px-9 py-4 text-[15px] md:text-[16px] font-semibold transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "#D9C6A5",
              color: "#1B1B1B",
              fontFamily: "Playfair Display, serif",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            aria-label="Recibir regalos gratis con compra"
          >
            Sí, quiero los regalos — Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveGiftsSection;
