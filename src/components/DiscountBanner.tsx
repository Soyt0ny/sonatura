import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="bg-accent text-accent-foreground py-4 border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <p className="text-sm md:text-base font-light tracking-wide">
            Para <span className="font-semibold">-15% Extra</span> usa el código
          </p>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="gap-2 font-medium border-accent-foreground/20 bg-accent-foreground/5 hover:bg-accent-foreground/10 text-accent-foreground transition-all duration-300"
          >
            <span className="font-semibold tracking-wider">{discountCode}</span>
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-xs">Copiado, Activo por 24h</span>
              </>
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
