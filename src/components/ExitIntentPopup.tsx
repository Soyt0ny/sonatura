import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

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

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const velocity = lastScrollY - window.scrollY;
      if (velocity > 50 && window.scrollY < 100 && !hasShown) {
        const alreadyShown = sessionStorage.getItem("exitPopupShown");
        if (!alreadyShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("exitPopupShown", "true");
        }
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const handleClaim = () => {
    const checkoutUrl = "https://sonatura-2.myshopify.com/checkouts/cn/hWN718ZVaBM5wG38sbfFlLnu/es-mx?_r=AQABYEqj5Ms058YvVAccltIevC5ZK3l7IySQ5F-IR5ky7fA&adminUrl=admin.shopify.com&cart_link_id=dGcXwxrt&editedAt=2025-12-27T06%3A50%3A22Z&isPublished=true&preview_theme_id=160414433369&profileName=Configuraci%C3%B3n++de+Mi+tienda&profile_preview_token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxZnR1ZXItY3YubXlzaG9waWZ5LmNvbSIsImF1ZCI6IjFmdHVlci1jdi5teXNob3BpZnkuY29tIiwibmJmIjoxNzY3MDcyNjU4LCJjaGVja291dF9wcm9maWxlX2lkIjozNDEzMDgyMjAxLCJjaGVja291dF9wcm9maWxlX3B1Ymxpc2hlZCI6dHJ1ZSwidXNlcl9pZCI6MTA1OTM5NjY0OTg1LCJleHAiOjE3NjcwNzYyNTh9.8vl4vpMuNZdXb_3eK-Q9OmHd58tVW25eKLuRjKDV20M";
    window.location.href = checkoutUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm p-0 bg-[#FAFAF8] border-none shadow-2xl rounded-none overflow-hidden">
        <div className="p-10 text-center">
          {/* Minimal header */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#1B1B1B]/40 mb-6">
            Oferta exclusiva
          </p>

          {/* Main message */}
          <h2 className="text-3xl font-light text-[#1B1B1B] mb-2 tracking-tight">
            10% extra
          </h2>
          <p className="text-sm text-[#1B1B1B]/50 mb-8 font-light">
            Solo por los próximos 60 minutos
          </p>

          {/* Timer - minimal */}
          <div className="mb-8">
            <span className="text-4xl font-extralight text-[#1B1B1B] tabular-nums tracking-wider">
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Code */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#1B1B1B]/40 mb-2">
              Código
            </p>
            <p className="text-lg tracking-[0.15em] text-[#1B1B1B] font-medium">
              QUEDATECONMIGO10
            </p>
          </div>

          {/* CTA */}
          <Button
            onClick={handleClaim}
            className="w-full bg-[#1B1B1B] hover:bg-[#000] text-white py-6 text-sm font-normal tracking-wide rounded-none transition-colors duration-300"
          >
            Aplicar descuento
          </Button>

          {/* Dismiss */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-[11px] text-[#1B1B1B]/30 hover:text-[#1B1B1B]/50 transition-colors tracking-wide"
          >
            No, gracias
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
