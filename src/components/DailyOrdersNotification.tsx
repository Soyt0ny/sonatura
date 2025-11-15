import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const DailyOrdersNotification = () => {
  useEffect(() => {
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

    const timer = setTimeout(() => {
      const orderCount = getDailyOrderCount();
      toast({
        title: "🔥 Producto Popular",
        description: `${orderCount.toLocaleString('es-ES')} personas realizaron un pedido en las últimas 24 horas`,
        duration: 5000,
      });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default DailyOrdersNotification;
