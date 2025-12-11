import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCurrencyDetection } from "@/hooks/useCurrencyDetection";

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currencyInfo = useCurrencyDetection();

  // Format price to rounded local currency with currency code for clarity
  const formatRoundedPrice = (usdAmount: number) => {
    const converted = usdAmount * currencyInfo.exchangeRate;
    // Round to nice number based on currency
    let rounded: number;
    if (converted < 100) {
      rounded = Math.round(converted / 5) * 5; // Round to nearest 5
    } else if (converted < 1000) {
      rounded = Math.round(converted / 50) * 50; // Round to nearest 50
    } else {
      rounded = Math.round(converted / 100) * 100; // Round to nearest 100
    }
    // Show currency code for non-USD currencies to make conversion clear
    if (currencyInfo.currencyCode !== 'USD') {
      return `${currencyInfo.currencySymbol}${rounded.toLocaleString()} ${currencyInfo.currencyCode}`;
    }
    return `$${rounded.toLocaleString()}`;
  };

  const reviews = [{
    id: 1,
    name: "Sofia V.",
    date: "hace 1 día",
    text: `No les miento, en 10 días ya se notaba el cambio. Mi cara estaba súper desinflada y el acné de la frente? Casi nada. He probado cremas de +${formatRoundedPrice(80)} que literally no hacían nada, pero esto es diferente porque trabajas desde adentro, no solo ponerte cosas encima. Total game changer para mi skin care routine ✨`
  }, {
    id: 2,
    name: "Isabella M.",
    date: "hace 3 días",
    text: `Antes gastaba como +${formatRoundedPrice(200)} al mes en suplementos y skincare, literal llevaba AÑOS así. Con el libro dejé todo eso y en 3 semanas vi más resultados que con cualquier producto que haya probado. Lo mejor? Lo tengo en mi cel, lo leo en el gym, mientras cocino... y ya lo quiero en físico porque es mi nueva biblia de wellness 📖`
  }, {
    id: 3,
    name: "Camila R.",
    date: "hace 6 días",
    text: "Finally algo que funciona de verdad y que DURA. Ya había intentado de todo y siempre volvía lo mismo. Aquí entiendes cómo balancear tus hormonas de forma natural y eso hace que los cambios se queden. En 2 semanas bajé la pancita que llevaba meses estancada, estoy obsessed 🙌"
  }, {
    id: 4,
    name: "Luna S.",
    date: "20 Nov 2025",
    text: `Al principio dudé porque era digital, pero honestly es súper práctico. Lo tengo en mi tablet, en el cel, en la compu... lo consulto cuando estoy en la cocina preparando mis meals. Lo mejor es que fueron ${formatRoundedPrice(37)} una sola vez y ya no tengo que estar comprando productos cada mes. Best investment que he hecho en mi wellness journey 💫`
  }, {
    id: 5,
    name: "Valentina L.",
    date: "15 Nov 2025",
    text: `Llevaba años luchando con acné hormonal y gastando fácil +${formatRoundedPrice(150)} al mes en derma y tratamientos. Nada me funcionaba más de 2 semanas. Con este libro entendí que el problema era interno, no lo que me ponía en la cara. En 12 días mi piel hizo un glow up increíble. Es wild cómo algo tan natural puede ser tan potente 🌿`
  }];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];
  
  return (
    <Card className="p-4 space-y-3 bg-white border-2 border-foreground/10 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-sm text-foreground">{currentReview.name}</h3>
            <p className="text-xs text-foreground/60">{currentReview.date}</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">{currentReview.text}</p>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center gap-1.5 pt-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-primary/50'
            }`}
            aria-label={`Ir a reseña ${idx + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};
export default ReviewsCarousel;