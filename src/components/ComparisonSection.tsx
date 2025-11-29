import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const traditionalCosts = [
    { item: "Suplementos", cost: "$1,400" },
    { item: "Skincare", cost: "$1,800" },
    { item: "Dermatólogo", cost: "$2,000" },
    { item: "Belleza", cost: "$2,200" },
    { item: "Inyecciones", cost: "$3,000" },
    { item: "Tratamientos", cost: "$1,500" },
  ];

  const features = [
    "No daña tu salud ni hormonas",
    "Sin ingredientes químicos",
    "No genera dependencia",
    "Ataca la raíz del problema",
    "100% natural",
    "Resultados duraderos",
    "Autonomía y conocimiento",
  ];

  return (
    <section className="mt-12 md:mt-16 max-w-4xl mx-auto px-4 space-y-10">
      {/* Price Comparison */}
      <div className="bg-background/50 border border-border/30 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Invierte <span className="text-primary">$67</span> una vez. Para siempre
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Y corta la dependencia de $11,900 al año en productos con ingredientes cuestionables
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6">
          {traditionalCosts.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-2 md:p-3 bg-accent/5 border border-border/20 rounded-lg min-h-[60px] md:min-h-[70px] flex flex-col justify-center"
            >
              <span className="block text-xs text-muted-foreground mb-1 truncate">{item.item}</span>
              <span className="text-sm md:text-base font-semibold text-foreground">{item.cost}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 py-4 border-t border-border/20">
          <div className="text-center">
            <span className="text-xs text-muted-foreground block">Gasto anual típico</span>
            <span className="text-xl font-bold line-through text-muted-foreground/60">$11,900</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="text-center">
            <span className="text-xs text-muted-foreground block">Inversión única</span>
            <span className="text-2xl font-bold text-primary">$67</span>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          <span className="text-primary font-medium">+17,000 mujeres</span> ya dejaron de depender de productos costosos
        </p>
      </div>

      {/* Feature Comparison */}
      <div className="bg-background/50 border border-border/30 rounded-2xl p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-6">
          La Diferencia es Clara
        </h3>

        <div className="max-w-md mx-auto space-y-2">
          <div className="grid grid-cols-[1fr,60px,60px] md:grid-cols-[1fr,80px,80px] gap-2 md:gap-4 text-xs font-medium text-muted-foreground pb-2 border-b border-border/20">
            <span></span>
            <span className="text-center text-primary">Libro</span>
            <span className="text-center">Otros</span>
          </div>
          
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr,60px,60px] md:grid-cols-[1fr,80px,80px] gap-2 md:gap-4 items-center py-2 md:py-3"
            >
              <span className="text-xs md:text-sm text-foreground leading-tight">{feature}</span>
              <div className="flex justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600" strokeWidth={2.5} />
              </div>
              <div className="flex justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-red-500/70" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
