import bookImage from "@/assets/book-lifestyle-bath.png";
import { Sparkles, Shield, DollarSign, Stars } from "lucide-react";

const BookUniqueFeatures = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Ingredientes Naturales",
      description: "Protocolos formulados con ingredientes que tu cuerpo reconoce y procesa naturalmente.",
      badges: ["100% Natural", "Sin Químicos", "Biodisponible"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sin Disruptores Hormonales",
      description: "Cero ingredientes que interfieran con tu sistema endocrino o equilibrio hormonal.",
      badges: ["Seguro Hormonal", "Sin Tóxicos"]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Ahorra +$10k al Año",
      description: "Deja de gastar en suplementos caros, tratamientos costosos y productos que no funcionan.",
      badges: ["Económico", "Alta Efectividad"]
    },
    {
      icon: <Stars className="w-6 h-6" />,
      title: "Resultados Reales",
      description: "Elimina acné, reduce grasa por cortisol, logra glow-up natural y transforma tu bienestar.",
      badges: ["Resultados Comprobados", "Cambio Real"]
    }
  ];

  return (
    <section className="mt-16 md:mt-24 mb-16 md:mb-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          4 Características Únicas{" "}
          <span className="italic text-muted-foreground">/ 1 Libro Poderoso</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Lo que hace a Realifestacion® superior a cualquier suplemento, tratamiento o producto de belleza convencional.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-3xl p-8 md:p-12 border border-border/30">
        {/* Book Image - Left Side */}
        <div className="flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl group-hover:blur-2xl transition-all duration-500" />
            <img 
              src={bookImage} 
              alt="Libro Realifestacion" 
              className="relative w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Features Grid - Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background border-2 border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          A diferencia de suplementos caros y tratamientos con químicos dañinos, Realifestacion® te da el control total
          de tu salud con protocolos naturales que tu cuerpo comprende y procesa perfectamente.
        </p>
      </div>
    </section>
  );
};

export default BookUniqueFeatures;
