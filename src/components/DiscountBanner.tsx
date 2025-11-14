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
      }, 24000); // 24 seconds to show the message
    } catch (err) {
      console.error("Error copying code:", err);
    }
  };

  return (
    <div className="border border-border/20 rounded-md p-2.5 mt-4 bg-background/50">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-foreground/80 tracking-wide">
          -15% Extra
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-2.5 py-1 rounded bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer group"
        >
          <span className="text-[11px] font-semibold tracking-widest">{discountCode}</span>
          {copied ? (
            <>
              <Check className="w-3 h-3 text-foreground/60" />
              <span className="text-[9px] text-foreground/60">Copiado, 24h</span>
            </>
          ) : (
            <Copy className="w-3 h-3 text-foreground/40 group-hover:text-foreground/60 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
