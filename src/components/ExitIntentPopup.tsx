import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Clock, Gift } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora en segundos

  // Formatear tiempo
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Detectar exit intent
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown) {
      const alreadyShown = sessionStorage.getItem("exitPopupShown");
      if (!alreadyShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }
  }, [hasShown]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  // Detectar intento de salida
  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  // Detectar en móvil con scroll hacia arriba rápido
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = lastScrollY - currentScrollY;
      
      // Si el usuario hace scroll rápido hacia arriba desde abajo
      if (scrollVelocity > 50 && currentScrollY < 100 && !hasShown) {
        const alreadyShown = sessionStorage.getItem("exitPopupShown");
        if (!alreadyShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("exitPopupShown", "true");
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const handleClaim = () => {
    // Redirigir al checkout con el descuento
    const checkoutUrl = "https://sonatura-2.myshopify.com/checkouts/cn/hWN718ZVaBM5wG38sbfFlLnu/es-mx?_r=AQABYEqj5Ms058YvVAccltIevC5ZK3l7IySQ5F-IR5ky7fA&adminUrl=admin.shopify.com&cart_link_id=dGcXwxrt&editedAt=2025-12-27T06%3A50%3A22Z&isPublished=true&preview_theme_id=160414433369&profileName=Configuraci%C3%B3n++de+Mi+tienda&profile_preview_token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxZnR1ZXItY3YubXlzaG9waWZ5LmNvbSIsImF1ZCI6IjFmdHVlci1jdi5teXNob3BpZnkuY29tIiwibmJmIjoxNzY3MDcyNjU4LCJjaGVja291dF9wcm9maWxlX2lkIjozNDEzMDgyMjAxLCJjaGVja291dF9wcm9maWxlX3B1Ymxpc2hlZCI6dHJ1ZSwidXNlcl9pZCI6MTA1OTM5NjY0OTg1LCJleHAiOjE3NjcwNzYyNTh9.8vl4vpMuNZdXb_3eK-Q9OmHd58tVW25eKLuRjKDV20M";
    window.location.href = checkoutUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 bg-gradient-to-br from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] border border-[#D5C3A5]/50 shadow-2xl rounded-2xl overflow-hidden">
        {/* Header decorativo */}
        <div className="bg-[#1B1B1B] py-4 px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Gift className="w-5 h-5 text-[#D5C3A5]" />
            <span className="text-[#D5C3A5] text-sm font-medium tracking-widest uppercase">
              Oferta Exclusiva
            </span>
            <Gift className="w-5 h-5 text-[#D5C3A5]" />
          </div>
        </div>

        <div className="p-6 text-center">
          {/* Título principal */}
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-[#1B1B1B] leading-tight">
              ¡Espera! <br />
              <span className="text-[#8B7355]">10% EXTRA</span> de descuento
            </DialogTitle>
          </DialogHeader>

          {/* Descripción */}
          <p className="text-[#1B1B1B]/70 text-sm mb-6 leading-relaxed">
            Solo por los próximos <span className="font-semibold text-[#1B1B1B]">60 minutos</span>, 
            te ofrecemos un descuento adicional exclusivo para que no te pierdas esta oportunidad.
          </p>

          {/* Timer */}
          <div className="bg-[#1B1B1B] rounded-xl py-4 px-6 mb-6 inline-block">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-[#D5C3A5]" />
              <span className="text-[#F5F3EE] text-xs uppercase tracking-wider">Expira en:</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#F5F3EE] tabular-nums mt-1">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Código de descuento */}
          <div className="bg-white/60 border-2 border-dashed border-[#D5C3A5] rounded-lg py-3 px-4 mb-6">
            <p className="text-xs text-[#1B1B1B]/60 mb-1">Usa el código:</p>
            <p className="text-xl font-bold tracking-widest text-[#1B1B1B]">QUEDATECONMIGO10</p>
          </div>

          {/* Botón CTA */}
          <Button
            onClick={handleClaim}
            className="w-full bg-[#1B1B1B] hover:bg-[#2a2a2a] text-[#F5F3EE] py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ¡Quiero mi 10% Extra!
          </Button>

          {/* Texto secundario */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-xs text-[#1B1B1B]/50 hover:text-[#1B1B1B]/70 transition-colors underline"
          >
            No gracias, prefiero pagar más
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
