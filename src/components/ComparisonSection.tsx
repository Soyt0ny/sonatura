import { Check, X } from "lucide-react";
import bookLifestyleSpa from "@/assets/book-lifestyle-spa.png";
import { useCurrencyDetection, formatPrice } from "@/hooks/useCurrencyDetection";

const ComparisonSection = () => {
  const currencyInfo = useCurrencyDetection();
  
  // Precios base en USD
  const bookPriceUSD = 37;
  const annualSavingsUSD = 10000;
  
  const competitorPricesUSD = [
    { priceUSD: 3000, description: "en inyecciones" },
    { priceUSD: 1800, description: "en dermatólogo" },
    { priceUSD: 1400, description: "en suplementos" },
    { priceUSD: 2200, description: "en belleza" },
    { priceUSD: 1500, description: "en skincare" },
  ];

  const features = [
    "No daña tu salud ni hormonas",
    "Sin ingredientes químicos",
    "No genera dependencia",
    "Ataca la raíz del problema",
    "100% natural",
    "Resultados duraderos",
    "Autonomía y conocimiento"
  ];

  return (
    <section className="py-12 md:py-16 max-w-5xl mx-auto px-4">
      {/* Price Comparison - Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* Left Column - Image */}
        <div className="relative flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl shadow-xl border border-border/30">
            <img 
              src={bookLifestyleSpa} 
              alt="Libro Realifestación en spa de lujo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Price Comparison */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            Invierte <span className="text-primary">{currencyInfo.isLoading ? '$37' : formatPrice(bookPriceUSD, currencyInfo)}</span> una vez.
            <br />Para siempre.
          </h2>
          
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Y corta la dependencia de{" "}
              <span className="font-medium text-foreground">+{currencyInfo.isLoading ? '$10,000' : formatPrice(annualSavingsUSD, currencyInfo)} al año</span>{" "}
              en productos con ingredientes químicos agresivos que no arreglan el problema de raíz.
            </p>
          </div>

          {/* Competitor Prices */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Podrías gastar:
            </p>
            <ul className="space-y-2">
              {competitorPricesUSD.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span>
                  <span className="font-medium text-foreground min-w-[70px]">
                    {currencyInfo.isLoading ? `$${item.priceUSD.toLocaleString()}+` : `${formatPrice(item.priceUSD, currencyInfo)}+`}
                  </span>
                  <span className="text-muted-foreground">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 w-full"></div>

          {/* Our Price */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              O escoge <span className="font-medium text-foreground">Realifestación</span> por:
            </p>
            <div className="flex items-baseline gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
              <span className="text-3xl md:text-4xl font-semibold text-primary">
                {currencyInfo.isLoading ? '$37' : formatPrice(bookPriceUSD, currencyInfo)}
              </span>
              <span className="text-sm text-muted-foreground">una sola vez</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            <span className="text-primary font-medium">+17,000 mujeres</span> ya dejaron de depender de productos costosos
          </p>
        </div>
      </div>

      {/* Elegant Separator */}
      <div className="flex items-center justify-center gap-4 my-12 md:my-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent flex-1 max-w-[200px]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent flex-1 max-w-[200px]"></div>
      </div>

      {/* Feature Comparison Table */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight mb-2">
            Cómo Nos Comparamos
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Una solución más segura, consciente e inteligente financieramente.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border/20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[45%] md:w-[50%] bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] p-3 md:p-4 border-b border-white/50"></th>
                <th className="w-[27.5%] md:w-[25%] bg-white p-3 md:p-4 text-center border-b border-border/10">
                  <span className="text-xs md:text-sm font-medium text-primary">Realifestación</span>
                </th>
                <th className="w-[27.5%] md:w-[25%] bg-white p-3 md:p-4 text-center border-b border-border/10">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">Otros</span>
                </th>
              </tr>
            </thead>
            
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] p-3 md:p-4 border-b border-white/50">
                    <span className="text-xs md:text-sm text-foreground">{feature}</span>
                  </td>
                  <td className="bg-white p-3 md:p-4 text-center border-b border-border/10">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 inline-block" strokeWidth={2} />
                  </td>
                  <td className="bg-white p-3 md:p-4 text-center border-b border-border/10">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/40 inline-block" strokeWidth={2} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reflection Text */}
        <div className="text-center max-w-md mx-auto pt-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Podrías seguir comprando productos que no arreglan el problema de raíz, o darle a tu cuerpo lo que realmente necesita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;