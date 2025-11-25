const GuaranteeSection = () => {
  return (
    <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
      <div className="bg-white border-2 border-foreground/10 rounded-lg p-6 shadow-sm">
        <div className="flex gap-4 items-center">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full border-2 border-primary bg-background flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">60</div>
                <div className="text-xs text-foreground/60">Días</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1 text-foreground">Garantía de devolución de dinero de 60 días</h3>
            <p className="text-sm text-foreground/70">Una piel hermosa y un cambio físico toman tiempo. Ama tus resultados o recibe un reembolso completo. 100% sin riesgo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
