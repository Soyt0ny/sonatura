import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

const DailyOrdersNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Generar número basado en la fecha actual para que sea consistente durante todo el día
  const getDailyOrderCount = () => {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    
    // Usar la fecha como seed para generar un número pseudo-aleatorio
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      const char = dateString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Convertir el hash a un número entre 1237 y 1896
    const min = 1237;
    const max = 1896;
    const range = max - min + 1;
    const normalized = Math.abs(hash) % range;
    
    return min + normalized;
  };

  const orderCount = getDailyOrderCount();

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-[100] animate-in slide-in-from-right-5 duration-500">
      <div className="bg-background border border-border/40 rounded-lg px-4 py-3 shadow-lg max-w-xs">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-start gap-2 pr-6">
          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-foreground leading-relaxed">
            <span className="font-bold text-sm">{orderCount.toLocaleString('es-ES')}</span> Personas compraron este producto en las últimas 24 horas
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyOrdersNotification;
