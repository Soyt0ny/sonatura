import clinicalResults from "@/assets/clinical-results.png";

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="3"
          opacity="0.15"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#C7A867"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold text-foreground">{percentage}%</span>
      </div>
    </div>
  );
};

const ClinicalResultsSection = () => {
  return (
    <section className="mt-16 md:mt-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Resultados Comprobados por Miles de Clientas
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Card */}
        <div className="bg-background border-2 border-[#C7A867] rounded-3xl overflow-hidden shadow-sm">
          <div className="aspect-square w-full overflow-hidden">
            <img 
              src={clinicalResults} 
              alt="Resultados clínicos - Transformación visible" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">
              TRANSFORMACIÓN REAL
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Resultados Visibles en 14 Días
            </h3>
            <p className="text-sm md:text-base text-muted-foreground italic">
              "Bajé la grasa abdominal que no podía eliminar, mi rostro se deshinchó completamente y el acné que tenía por años desapareció. ¡No puedo creer la transformación!"
            </p>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="space-y-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={98} />
            <p className="text-sm md:text-base text-foreground">
              afirman ahorrar +$3,000 dólares al año en promedio
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={97} />
            <p className="text-sm md:text-base text-foreground">
              afirman tener mejores resultados que con otros productos
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={96} />
            <p className="text-sm md:text-base text-foreground">
              afirman notar reducción visible de grasa y acné hormonal en los primeros 14 días
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={91.3} />
            <p className="text-sm md:text-base text-foreground">
              catalogaron su compra como una de las 10 mejores de su año
            </p>
          </div>

          {/* Study Info */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <h4 className="text-sm font-semibold mb-3 text-foreground">
              Encuesta de Satisfacción del Cliente
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              †Los datos están basados en una encuesta independiente realizada a más de 2,500 clientas verificadas después de implementar los protocolos del libro durante un período mínimo de 30 días.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResultsSection;
