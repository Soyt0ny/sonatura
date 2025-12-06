import { Check, X } from "lucide-react";
import radiantSkinImage from "@/assets/radiant-skin.jpg";

const ComparisonSection = () => {
  const competitorPrices = [
    { price: "$3,000+", description: "en inyecciones y tratamientos" },
    { price: "$1,800+", description: "en visitas al dermatólogo" },
    { price: "$1,400+", description: "en suplementos mensuales" },
    { price: "$2,200+", description: "en productos de belleza" },
    { price: "$1,500+", description: "en skincare tradicional" },
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
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
      {/* Price Comparison - Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
        {/* Left Column - Image */}
        <div className="relative">
          <img 
            src={radiantSkinImage} 
            alt="Mujer con piel radiante" 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Right Column - Price Comparison */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
              Invierte <span className="text-primary">$37</span> una vez. Para siempre
            </h2>
            <p className="text-muted-foreground">
              Y corta la dependencia de +$10,000 al año en productos con ingredientes químicos agresivos que no arreglan el problema de raíz
            </p>
          </div>

          {/* Competitor Prices */}
          <div className="space-y-4 py-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Podrías gastar:
            </p>
            <div className="space-y-3">
              {competitorPrices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                  <span className="text-xl md:text-2xl font-bold text-foreground">{item.price}</span>
                  <span className="text-muted-foreground">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40"></div>

          {/* Our Price */}
          <div className="space-y-2">
            <p className="text-muted-foreground">
              O podrías escoger <span className="font-semibold text-foreground">Realifestación</span> y pagar:
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-4xl md:text-5xl font-bold text-primary">$37</span>
              <span className="text-muted-foreground">una sola vez</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            <span className="text-primary font-medium">+17,000 mujeres</span> ya dejaron de depender de productos costosos
          </p>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Cómo Nos Comparamos
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Una solución más segura, consciente, inteligente financieramente, y que te da el poder a ti y no a suscripciones eternas a productos.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <table className="w-full border-collapse">
            {/* Header Row */}
            <thead>
              <tr>
                <th className="w-[45%] md:w-[50%] bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] p-3 md:p-4 border-b border-white/50"></th>
                <th className="w-[27.5%] md:w-[25%] bg-white p-3 md:p-4 text-center border-b border-border/10">
                  <span className="text-xs md:text-sm font-semibold text-primary">Realifestación</span>
                </th>
                <th className="w-[27.5%] md:w-[25%] bg-white p-3 md:p-4 text-center border-b border-border/10">
                  <span className="text-xs md:text-sm font-semibold text-muted-foreground">Otros Productos</span>
                </th>
              </tr>
            </thead>
            
            {/* Feature Rows */}
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] p-3 md:p-4 border-b border-white/50">
                    <span className="text-xs md:text-sm text-foreground font-medium">{feature}</span>
                  </td>
                  <td className="bg-white p-3 md:p-4 text-center border-b border-border/10">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 inline-block" strokeWidth={2.5} />
                  </td>
                  <td className="bg-white p-3 md:p-4 text-center border-b border-border/10">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground/60 inline-block" strokeWidth={2.5} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reflection Text */}
      <div className="text-center max-w-xl mx-auto mt-10">
        <p className="text-sm text-muted-foreground">
          Podrías no elegir el libro, seguir comprando suplementos, pastillas y productos como normalmente y aún así seguirás necesitando darle a tu cuerpo lo que REALMENTE necesita...
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          No solo en tu alimentación, en los productos de belleza e higiene, en tu sueño, en tus hábitos, en los productos que usas a diario....
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
