import { useState } from "react";
import { Copy, Check } from "lucide-react";

const DiscountBanner = () => {
  const [copied, setCopied] = useState(false);
  const discountCode = "Sonatura";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setCopied(true);
      
      setTimeout(() => {
        setCopied(false);
      }, 24000);
    } catch (err) {
      console.error("No se pudo copiar el código");
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] text-xs font-bold transition-all cursor-pointer"
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
