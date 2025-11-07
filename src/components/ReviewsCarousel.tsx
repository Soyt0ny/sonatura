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
  text: "Excelente sérum, muy fácil de aplicar y los resultados son notables. Mis pestañas lucen más saludables y llenas."
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
    <Card className="p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{currentReview.name}</span>
          <CheckCircle className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs text-muted-foreground">{currentReview.date}</span>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{currentReview.text}</p>
      
      <div className="flex justify-center gap-2 pt-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-muted'
            }`}
          />
        ))}
      </div>
    </Card>
  );
};
export default ReviewsCarousel;