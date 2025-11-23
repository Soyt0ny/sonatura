import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const traditionalCosts = [
    { item: "Suplementos", cost: "$1,400+" },
    { item: "Productos de skin care", cost: "$1,800+" },
    { item: "Visitas al Dermatólogo", cost: "$2,000+" },
    { item: "Productos de belleza", cost: "$2,200+" },
    { item: "Inyecciones peligrosas", cost: "$3,000+" },
    { item: "Terapias y tratamientos específicos", cost: "$1,500+" },
  ];

  const features = [
    "No dañan tu salud, hormonas y fertilidad",
    "Sin ingredientes químicos o sintéticos",
    "No genera dependencia",
    "No generan envejecimiento prematuro",
    "Ataca la raíz del problema",
    "Conoces los ingredientes",
    "Conoces el proceso de elaboración",
    "100% natural",
    "Fácil y rápido",
    "Financieramente conveniente",
    "Resultados duraderos",
    "Disponible en cualquier lugar",
    "Autonomía y conocimiento duradero",
    "Uso seguro",
  ];

  return (
    <section className="mt-16 md:mt-24 space-y-16">
      {/* Price Comparison */}
      <div className="bg-background border-2 border-border/40 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Invierte $67 y Deja de Depender de Productos que te Cuestan $5,000 USD/Año
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Con ingredientes químicos cuestionables que dañan tu salud.
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Puedes seguir gastando:</h3>
          <div className="space-y-3">
            {traditionalCosts.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-accent/10 border border-border/30 rounded-lg p-4"
              >
                <span className="text-sm md:text-base text-foreground">{item.item}</span>
                <span className="text-lg font-bold text-foreground">{item.cost}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t-2 border-border/50">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total anual:</span>
              <span className="text-3xl font-bold text-primary">$11,900</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-semibold mb-4">
            O puedes invertir <span className="text-3xl text-primary font-bold">$67</span> una vez en este libro
          </p>
          <p className="text-base text-muted-foreground mb-6">
            Corta la dependencia a estos productos para siempre y empieza a cuidar tu cuerpo de forma real y natural.
          </p>
          <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg p-4">
            <p className="text-sm font-medium">
              <span className="text-primary font-bold">+17,000 mujeres</span> ya dejaron de gastar $5,000 en productos que dañan su salud y vieron mejores resultados.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-background border-2 border-border/40 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Cómo nos Comparamos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          La diferencia es clara: el libro te da autonomía, salud real y resultados duraderos sin dependencia.
        </p>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border/50">
                <th className="text-left py-4 px-4 text-sm md:text-base font-semibold w-1/2"></th>
                <th className="text-center py-4 px-4 text-sm md:text-base font-bold bg-primary/10 rounded-t-xl">
                  REALIFESTACIÓN
                </th>
                <th className="text-center py-4 px-4 text-sm md:text-base font-semibold text-muted-foreground">
                  SUPLEMENTOS & PRODUCTOS
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border/20 ${
                    idx % 2 === 0 ? "bg-accent/5" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-sm text-foreground">{feature}</td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Check className="w-6 h-6 text-green-600 mx-auto" strokeWidth={3} />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="w-6 h-6 text-red-600 mx-auto" strokeWidth={3} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto bg-accent/10 border border-border/30 rounded-xl p-6">
          <p className="text-sm md:text-base text-muted-foreground">
            Podrías no elegir el libro, seguir comprando suplementos, pastillas y productos como normalmente y aún así seguirás necesitando darle a tu cuerpo lo que{" "}
            <span className="font-bold text-foreground">REALMENTE necesita</span>...
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            No solo en tu alimentación, en los productos de belleza e higiene, en tu sueño, en tus hábitos, en los productos que usas a diario...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
