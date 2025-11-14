import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    <div className="inline-flex items-center gap-1.5 mt-3">
      <span className="text-[10px] font-medium text-muted-foreground">
        -15% Extra:
      </span>
      <Badge
        onClick={handleCopy}
        className="cursor-pointer gap-1.5 px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white border-0 hover:opacity-90 transition-opacity"
      >
        <span className="tracking-wide">{discountCode}</span>
        {copied ? (
          <>
            <Check className="w-2.5 h-2.5" />
            <span className="text-[9px]">Copiado, Activo 24h</span>
          </>
        ) : (
          <Copy className="w-2.5 h-2.5" />
        )}
      </Badge>
    </div>
  );
};

export default DiscountBanner;
