import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-background border border-border/40 rounded-lg p-4 shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <span className="text-2xl flex-shrink-0">🔥</span>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Producto Popular</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{orderCount.toLocaleString('es-ES')}</span> personas realizaron un pedido en las últimas 24 horas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOrdersNotification;
