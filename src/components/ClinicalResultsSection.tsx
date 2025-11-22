const ClinicalResultsSection = () => {
  return (
    <section className="mt-16 md:mt-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Transforma Tu Piel Después de 8 Semanas
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Card */}
        <div className="bg-background border-2 border-border/40 rounded-3xl p-8 md:p-10 shadow-sm">
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

        {/* Right Side - Stats */}
        <div className="space-y-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-3 border-[#C7A867] flex items-center justify-center flex-shrink-0">
              <span className="text-3xl md:text-4xl font-bold text-foreground">97%</span>
            </div>
            <p className="text-sm md:text-base text-foreground">
              dijeron que su piel se ve más radiante y luminosa
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-3 border-[#C7A867] flex items-center justify-center flex-shrink-0">
              <span className="text-3xl md:text-4xl font-bold text-foreground">91%</span>
            </div>
            <p className="text-sm md:text-base text-foreground">
              dijeron que su piel se ve más joven
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-3 border-[#C7A867] flex items-center justify-center flex-shrink-0">
              <span className="text-3xl md:text-4xl font-bold text-foreground">88%</span>
            </div>
            <p className="text-sm md:text-base text-foreground">
              dijeron que vieron una reducción visible de líneas finas y arrugas
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-8 border-t border-border/30">
        <h4 className="text-sm font-semibold mb-3 text-foreground">
          Estudio de Percepción Clínica y del Consumidor
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          †Los datos están basados en un estudio independiente de percepción del consumidor, así como en una evaluación experta realizada por un dermatólogo en un estudio clínico independiente de 33 personas después de usar nuestro producto 5 veces por semana dentro de un período de tiempo de 8 semanas.
        </p>
      </div>
    </section>
  );
};

export default ClinicalResultsSection;
