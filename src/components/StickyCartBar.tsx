import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observar el botón de compra original
    const originalButton = document.getElementById("original-cart-button");
    
    if (!originalButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mostrar el botón sticky cuando el botón original NO está visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        // El threshold de 0 significa que se activará cuando cualquier parte del elemento entre o salga
        threshold: 0,
        // rootMargin negativo para activar un poco antes de que el elemento salga completamente
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    observer.observe(originalButton);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/50 shadow-sm animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between gap-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">$37</span>
          </div>
          <Button 
            variant="cta" 
            size="sm" 
            className="h-9 px-6 text-xs font-semibold uppercase tracking-wide rounded-full"
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
