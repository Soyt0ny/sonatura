import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
const reviews = [{
  id: 1,
  name: "María González",
  date: "15 Oct 2024",
  text: "Increíble producto! Mis pestañas se ven más largas y gruesas después de solo 3 semanas de uso. Lo recomiendo totalmente."
}, {
  id: 2,
  name: "Laura Martínez",
  date: "10 Oct 2024",
  text: "$67 me parece poco a comparación de lo que viene en el libro, es una BARBARIDAD lo que hay dentro y sobre todo que funciona, 10/10 sin duda."
}, {
  id: 3,
  name: "Ana Rodríguez",
  date: "5 Oct 2024",
  text: "Estoy encantada con los resultados. En 2 semanas ya noté la diferencia. Mis pestañas están más largas y fuertes."
}, {
  id: 4,
  name: "Carmen López",
  date: "1 Oct 2024",
  text: "Lo mejor que he probado para pestañas. Fácil de usar, no irrita los ojos y los resultados son impresionantes. Vale totalmente la pena."
}];
const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
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
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};
export default ReviewsCarousel;