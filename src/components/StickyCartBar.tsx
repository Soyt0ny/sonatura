import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when scrolled down more than 800px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">$169</span>
          </div>
          <Button 
            variant="cta" 
            size="lg" 
            className="h-12 px-8 text-sm font-bold uppercase tracking-wide"
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
