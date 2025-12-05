import { useState, useEffect } from "react";
import giftRutinaAfrodita from "@/assets/gift-rutina-afrodita.png";
import giftDietaAfrodita from "@/assets/gift-dieta-afrodita.png";
import giftHabitos8020 from "@/assets/gift-habitos-80-20.png";
import realifestacionBook from "@/assets/realifestacion-book.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const gifts = [{
  badge: "FREE $29",
  originalPrice: "$29",
  title: "Rutina Afrodita",
  subtitle: "Guía completa",
  description: "Plan de ejercicios semanal con foco en músculos \"atractivos\": glúteos, cintura, clavículas, glúteo medio, etc. Para crear una postura elegante que proyecte energía femenina, piel firme y glúteos redondos. Usando sesiones cortas de ejercicios (45-60 min Max) de fuerza, movilidad y estética. *Plantilla de Notion*",
  image: giftRutinaAfrodita
}, {
  badge: "FREE $19",
  originalPrice: "$19",
  title: "Dieta Afrodita",
  subtitle: "Plan nutricional",
  description: "Plan de alimentación diseñado para balancear hormonas, reducir inflamación y potenciar tu feminidad desde la nutrición.",
  image: giftDietaAfrodita
}, {
  badge: "FREE $9",
  originalPrice: "$9",
  title: "Hábitos 80/20",
  subtitle: "Plantilla diaria",
  description: "Plantilla práctica con los hábitos esenciales del 20% que generan el 80% de resultados en tu transformación hormonal y física.",
  image: giftHabitos8020
}, {
  badge: "FREE $37",
  originalPrice: "$37",
  title: "Descuento Libro Físico",
  subtitle: "Versión impresa",
  description: "Obtén $37 de descuento en la versión física del libro. Exactamente lo que pagas por la versión digital, lo obtienes de descuento para tener el libro en tus manos.",
  image: realifestacionBook
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          }}>Compra antes del {getTomorrowDate()} para obtener garantizado: 70% off + 4 Regalos GRATIS
          </p>

          {/* Gifts Grid */}
          <div className="grid grid-cols-4 gap-4 md:gap-6 mb-6 max-w-[900px] mx-auto">
            {gifts.map((gift, index) => <div key={index} className="flex flex-col items-center">
                {/* FREE Badge - Above the card */}
                <div className="rounded-[4px] px-2 py-1 mb-1 flex flex-col items-center justify-center" style={{
              backgroundColor: "#D9C6A5",
              minWidth: "50px",
              minHeight: "28px"
            }}>
                  <span className="text-[9px] font-bold uppercase leading-none" style={{
                fontFamily: "Inter, sans-serif",
                color: "#1B1B1B"
              }}>
                    GRATIS
                  </span>
                  <span className="text-[10px] line-through mt-0.5 font-bold" style={{
                fontFamily: "Inter, sans-serif",
                color: "#1B1B1B",
                textDecorationColor: "#1B1B1B",
                textDecorationThickness: "1px"
              }}>
                    {gift.originalPrice}
                  </span>
                </div>

                {/* Gift Card */}
                <div 
                  className="relative w-full aspect-[1/1] rounded-[6px] overflow-hidden transition-transform hover:scale-[1.03] cursor-pointer" 
                  style={{
                    backgroundColor: "#F7F5F1",
                    border: "1.5px solid #D5C3A5",
                    boxShadow: "0 3px 10px rgba(27, 27, 27, 0.04)"
                  }}
                  onClick={() => setSelectedImage(gift.image)}
                >
                  {/* Product Image */}
                  <img src={gift.image} alt={gift.title} className="w-full h-full object-cover" />
                </div>

                {/* Title & Info Icon */}
                <div className="mt-1.5 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <h3 className="text-[9px] md:text-[10px] font-semibold leading-tight text-[#1B1B1B]/80" style={{
                  fontFamily: "Inter, sans-serif"
                }}>
                      {gift.title}
                    </h3>
                    <TooltipProvider>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <Info className="w-2.5 h-2.5 text-[#1B1B1B]/40 cursor-help hover:text-[#1B1B1B]/70 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          className="max-w-[200px] text-[10px] bg-[#1B1B1B] text-[#F4F3EF] border-[#D5C3A5]/30"
                        >
                          <p>{gift.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
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
                <div className="flex flex-col items-center">
                  <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                    <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(hours).padStart(2, "0")}</span>
                  </div>
                  <span className="text-[8px] text-[#1B1B1B]/50 mt-0.5 uppercase tracking-wide">horas</span>
                </div>
                <span className="text-base font-semibold text-[#1B1B1B]/30 mb-3">:</span>
                <div className="flex flex-col items-center">
                  <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                    <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(minutes).padStart(2, "0")}</span>
                  </div>
                  <span className="text-[8px] text-[#1B1B1B]/50 mt-0.5 uppercase tracking-wide">minutos</span>
                </div>
                <span className="text-base font-semibold text-[#1B1B1B]/30 mb-3">:</span>
                <div className="flex flex-col items-center">
                  <div className="bg-[#1B1B1B] rounded-md px-3 py-1.5 min-w-[42px] shadow-md">
                    <span className="font-bold text-base tabular-nums text-[#F5F3EE]">{String(seconds).padStart(2, "0")}</span>
                  </div>
                  <span className="text-[8px] text-[#1B1B1B]/50 mt-0.5 uppercase tracking-wide">segundos</span>
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

      {/* Image Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[85vw] md:max-w-[500px] p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Regalo ampliado" 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>;
};
export default ExclusiveGiftsSection;