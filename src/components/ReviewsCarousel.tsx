import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
const reviews = [{
  id: 1,
  name: "María González",
  date: "15 Oct 2024",
  text: "Honestamente no esperaba ver cambios tan rápido. En 10 días mi cara ya no está tan hinchada y el acné que tenía en la frente casi desapareció. He probado cremas de $80 dólares que no hicieron nada, esto es completamente diferente porque atacas desde lo que comes y no solo la piel por fuera."
}, {
  id: 2,
  name: "Laura Martínez",
  date: "10 Oct 2024",
  text: "Antes gastaba como $200 al mes en suplementos y productos para la piel, literal ya llevaba años así. Con el libro dejé todo eso y en 3 semanas vi más resultados que con cualquier cosa que haya comprado. Además está en mi celular, lo leo en el gym o donde sea. Lo voy a comprar físico también porque me encantó."
}, {
  id: 3,
  name: "Ana Rodríguez",
  date: "5 Oct 2024",
  text: "Por fin algo que funciona de verdad. Ya había probado de todo y nada me duraba, siempre volvía lo mismo. Aquí aprendes a balancear tus hormonas de forma natural y eso hace que los cambios sean permanentes. En 2 semanas bajé grasa del abdomen que llevaba meses estancada."
}, {
  id: 4,
  name: "Carmen López",
  date: "1 Oct 2024",
  text: "Al principio dudé porque es digital, pero es súper práctico. Lo tengo en mi tablet, en el celular y en la computadora. Lo consulto cuando cocino y así no se me olvida nada. Lo mejor es que gasté $67 una sola vez y ya no tengo que estar comprando cosas cada mes. Mucho más económico y efectivo."
}, {
  id: 5,
  name: "Patricia Silva",
  date: "28 Sep 2024",
  text: "Llevaba años con acné hormonal y gastando fácil $150 mensuales en dermatólogo y tratamientos. Nada funcionaba más de 2 semanas. Con este libro entendí que el problema era interno, no externo. En 12 días mi piel cambió completamente, es increíble como algo tan natural puede ser tan potente."
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