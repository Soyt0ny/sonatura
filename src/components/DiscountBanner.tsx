import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DiscountBanner = () => {
  const [copied, setCopied] = useState(false);
  const discountCode = "Sonatura";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setCopied(true);
      toast({
        title: "Código copiado",
        description: "El código de descuento ha sido copiado al portapapeles",
      });
      
      setTimeout(() => {
        setCopied(false);
      }, 24000); // 24 seconds to show the message
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el código",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="border border-border/40 rounded-lg p-3 mt-4 bg-accent/20">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-foreground">
          -15% Extra con código:
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span className="tracking-wider">{discountCode}</span>
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span className="text-[10px]">Copiado, Activo 24h</span>
            </>
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
