import { Check, X } from "lucide-react";
const ComparisonSection = () => {
  const traditionalCosts = [{
    item: "Suplementos",
    cost: "$1,400"
  }, {
    item: "Skincare",
    cost: "$1,800"
  }, {
    item: "Dermatólogo",
    cost: "$2,000"
  }, {
    item: "Belleza",
    cost: "$2,200"
  }, {
    item: "Inyecciones",
    cost: "$3,000"
  }, {
    item: "Tratamientos",
    cost: "$1,500"
  }];
  const features = ["No daña tu salud ni hormonas", "Sin ingredientes químicos", "No genera dependencia", "Ataca la raíz del problema", "100% natural", "Resultados duraderos", "Autonomía y conocimiento"];
  return <section className="mt-12 md:mt-16 max-w-4xl mx-auto px-4 space-y-10">
      {/* Price Comparison */}
      <div className="bg-background/50 border border-border/30 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Invierte <span className="text-primary">$37</span> una vez. Para siempre
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-6">Y corta la dependencia de +$10,000 al año en productos con ingredientes químicos agresivos que no arreglan el problema de raíz</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6">
          {traditionalCosts.map((item, idx) => <div key={idx} className="text-center p-2 md:p-3 bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] border border-border/20 rounded-lg min-h-[60px] md:min-h-[70px] flex flex-col justify-center">
              <span className="block text-xs text-muted-foreground mb-1 truncate">{item.item}</span>
              <span className="text-sm md:text-base font-semibold text-foreground">{item.cost}</span>
            </div>)}
        </div>

        <div className="flex items-center justify-center gap-4 py-4 border-t border-border/20">
          <div className="text-center">
            <span className="text-xs text-muted-foreground block">Gasto anual típico</span>
            <span className="text-xl font-bold line-through text-muted-foreground/60">$11,900</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="text-center">
            <span className="text-xs text-muted-foreground block">Inversión única</span>
            <span className="text-2xl font-bold text-primary">$37</span>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          <span className="text-primary font-medium">+17,000 mujeres</span> ya dejaron de depender de productos costosos
        </p>
      </div>

      {/* Feature Comparison */}
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
          {/* Header Row */}
          <div className="grid grid-cols-[1.5fr,1fr,1fr] md:grid-cols-[2fr,1fr,1fr]">
            <div className="bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB]"></div>
            <div className="bg-white p-3 md:p-4 text-center border-b border-border/10">
              <span className="text-xs md:text-sm font-semibold text-primary">Realifestación</span>
            </div>
            <div className="bg-white p-3 md:p-4 text-center border-b border-border/10">
              <span className="text-xs md:text-sm font-semibold text-muted-foreground">Otros Productos</span>
            </div>
          </div>
          
          {/* Feature Rows */}
          {features.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-[1.5fr,1fr,1fr] md:grid-cols-[2fr,1fr,1fr]">
              <div className="bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] p-3 md:p-4 flex items-center border-b border-white/50">
                <span className="text-xs md:text-sm text-foreground font-medium">{feature}</span>
              </div>
              <div className="bg-white p-3 md:p-4 flex items-center justify-center border-b border-border/10">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" strokeWidth={2.5} />
              </div>
              <div className="bg-white p-3 md:p-4 flex items-center justify-center border-b border-border/10">
                <X className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground/60" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default ComparisonSection;