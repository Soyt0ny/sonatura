import { Check, X } from "lucide-react";
import radiantSkinImage from "@/assets/radiant-skin.jpg";

const ComparisonSection = () => {
  const competitorPrices = [
    { price: "$3,000+", description: "en inyecciones" },
    { price: "$1,800+", description: "en dermatólogo" },
    { price: "$1,400+", description: "en suplementos" },
    { price: "$2,200+", description: "en belleza" },
    { price: "$1,500+", description: "en skincare" },
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
    <section className="py-16 md:py-20 max-w-5xl mx-auto px-4">
      {/* Price Comparison - Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column - Image */}
        <div>
          <img 
            src={radiantSkinImage} 
            alt="Mujer con piel radiante" 
            className="w-full h-[450px] md:h-[520px] object-cover rounded-xl"
          />
        </div>

        {/* Right Column - Price Comparison */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
              Invierte <span className="text-[#C7A867]">$37</span> una vez.
              <br />Para siempre.
            </h2>
          </div>

          {/* Competitor Prices */}
          <div className="space-y-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Podrías gastar:
            </p>
            <div className="space-y-3">
              {competitorPrices.map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2"></span>
                  <span className="text-lg md:text-xl font-semibold text-foreground min-w-[90px]">{item.price}</span>
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#C7A867]/30 w-full"></div>

          {/* Our Price */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              O escoge <span className="font-medium text-foreground">Realifestación</span> por:
            </p>
            <div className="flex items-baseline gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A867] flex-shrink-0 mt-3"></span>
              <span className="text-4xl md:text-5xl font-semibold text-[#C7A867]">$37</span>
              <span className="text-sm text-muted-foreground">una sola vez</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            +17,000 mujeres ya dejaron de depender de productos costosos
          </p>
        </div>
      </div>

      {/* Elegant Separator */}
      <div className="flex items-center justify-center gap-4 my-16 md:my-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C7A867]/40 to-transparent flex-1 max-w-[200px]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#C7A867]/40"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#C7A867]/40 to-transparent flex-1 max-w-[200px]"></div>
      </div>

      {/* Feature Comparison Table */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
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
                  <span className="text-xs md:text-sm font-medium text-[#C7A867]">Realifestación</span>
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
        <div className="text-center max-w-md mx-auto pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Podrías seguir comprando productos que no arreglan el problema de raíz, o darle a tu cuerpo lo que realmente necesita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
