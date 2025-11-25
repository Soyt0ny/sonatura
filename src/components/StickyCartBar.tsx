import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  // Detectar si estamos en desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Observar el botón original con IntersectionObserver
  useEffect(() => {
    const originalButton = document.getElementById("original-cart-button");
    
    if (!originalButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsButtonHidden(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    observer.observe(originalButton);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Manejar scroll para mobile
  useEffect(() => {
    if (isDesktop) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  // Determinar visibilidad final
  useEffect(() => {
    if (isDesktop) {
      // En desktop: solo visible cuando el botón original no se ve
      setIsVisible(isButtonHidden);
    }
  }, [isDesktop, isButtonHidden]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/50 shadow-lg animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Left side - Product info (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-1 min-w-0 flex-1">
            <h3 className="text-sm md:text-base font-semibold text-foreground truncate">
              Libro Realifestación®
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">4.9 / 5</span>
            </div>
          </div>

          {/* Middle - Pricing */}
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">$124</span>
              <span className="text-xl md:text-2xl font-bold text-foreground">$37</span>
            </div>
            <span className="hidden md:block text-xs text-muted-foreground">
              O 6 pagos de <span className="font-semibold">$11.17/mes</span>
            </span>
          </div>

          {/* Right side - CTA Button */}
          <Button 
            className="h-11 px-6 md:px-8 text-sm font-semibold uppercase tracking-wide bg-gradient-to-r from-[#8B4513] to-[#A0522D] hover:from-[#A0522D] hover:to-[#8B4513] text-white shadow-lg rounded-lg whitespace-nowrap"
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;