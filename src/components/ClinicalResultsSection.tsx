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
        Transforma Tu Piel Después de 8 Semanas
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Card */}
        <div className="bg-background border-2 border-[#C7A867] rounded-3xl overflow-hidden shadow-sm">
          <div className="aspect-square w-full overflow-hidden">
            <img 
              src={clinicalResults} 
              alt="Resultados clínicos - Piel radiante" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">
              MEJORA VISIBLE
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Piel Radiante y Más Suave
            </h3>
            <p className="text-sm md:text-base text-muted-foreground italic">
              "Mi piel está brillante y mis líneas de expresión se ven más suaves"
            </p>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="space-y-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={97} />
            <p className="text-sm md:text-base text-foreground">
              dijeron que su piel se ve más radiante y luminosa
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={91} />
            <p className="text-sm md:text-base text-foreground">
              dijeron que su piel se ve más joven
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-6">
            <CircularProgress percentage={88} />
            <p className="text-sm md:text-base text-foreground">
              dijeron que vieron una reducción visible de líneas finas y arrugas
            </p>
          </div>

          {/* Study Info */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <h4 className="text-sm font-semibold mb-3 text-foreground">
              Estudio de Percepción Clínica y del Consumidor
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              †Los datos están basados en un estudio independiente de percepción del consumidor, así como en una evaluación experta realizada por un dermatólogo en un estudio clínico independiente de 33 personas después de usar nuestro producto 5 veces por semana dentro de un período de tiempo de 8 semanas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalResultsSection;
