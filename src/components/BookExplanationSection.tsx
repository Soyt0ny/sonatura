import productApplication from "@/assets/product-application.jpg";
import productResults from "@/assets/product-results.jpg";

const BookExplanationSection = () => {
  return (
    <section className="mb-16 md:mb-24 max-w-7xl mx-auto">
      {/* Primera sección */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
        <div className="space-y-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-lg">★</span>
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              Calificado 4.9/5 por 18,640 clientas satisfechas
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Descubre una{" "}
            <span className="text-primary">solución superior</span> para acné,
            grasa por cortisol y bienestar hormonal.
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Los tratamientos convencionales a menudo llevan a{" "}
              <span className="font-semibold text-foreground">
                piel dañada y hormonas desequilibradas
              </span>, convirtiendo la búsqueda de bienestar en experiencias frustrantes
              y costosas. Los productos tradicionales con químicos, suplementos caros
              y tratamientos invasivos rara vez ofrecen alivio duradero, escalando
              potencialmente a{" "}
              <span className="font-semibold text-foreground">
                problemas hormonales crónicos
              </span>{" "}
              con el tiempo.
            </p>
            
            <p>
              El libro <span className="font-semibold text-foreground">Realifestacion®</span>{" "}
              revoluciona el bienestar natural. Con{" "}
              <span className="font-semibold text-foreground">
                más de 200 protocolos científicos
              </span>, ataca la raíz de problemas como acné, grasa por cortisol (cara
              hinchada, panza baja), asegurando{" "}
              <span className="font-semibold text-foreground">
                alivio inmediato y sostenido
              </span>. Ideal para transformación diaria o cambios profundos, promete{" "}
              <span className="font-semibold text-foreground">
                soporte óptimo
              </span>{" "}
              para tu cuerpo y hormonas.
            </p>
          </div>
          
          <div className="pt-4">
            <button className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              👉 Comprar Ahora
            </button>
            <p className="text-sm text-muted-foreground mt-3">
              Envío Gratis & Garantía de 60 Días
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-2 border-border/40">
            <img
              src={productApplication}
              alt="Aplicación del protocolo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Segunda sección */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-2 border-border/40">
            <img
              src={productResults}
              alt="Resultados del protocolo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Experimenta{" "}
            <span className="text-primary">alivio inmediato</span> de acné,
            cortisol elevado y problemas hormonales con nuestros protocolos
            naturales.
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Después de{" "}
              <span className="font-semibold text-foreground">
                meses de investigación y dedicación
              </span>, presentamos con orgullo{" "}
              <span className="font-semibold text-foreground">Realifestacion®</span>.
              Es el único libro que ofrece una{" "}
              <span className="font-semibold text-foreground">
                combinación única
              </span>{" "}
              de protocolos naturales específicos,{" "}
              <span className="font-semibold text-foreground">
                diseño científico
              </span>, e{" "}
              <span className="font-semibold text-foreground">
                ingredientes reconocidos por tu cuerpo
              </span>{" "}
              para máximo bienestar.
            </p>
            
            <p>
              Muchas clientas reportan haber experimentado{" "}
              <span className="font-semibold text-foreground">alivio</span> de acné,
              grasa por cortisol y{" "}
              <span className="font-semibold text-foreground">
                fatiga hormonal
              </span>{" "}
              durante su transformación.
            </p>
          </div>
          
          <ul className="space-y-3">
            {[
              "Aprobado y recomendado por entusiastas del bienestar natural.",
              "Proporciona alivio de acné, grasa por cortisol e inflamación facial.",
              "Resultados visibles durante 7-14 días siguiendo los protocolos.",
              "Evita el malestar asociado con pastillas y tratamientos químicos.",
              "Ahorra más de $10,000 al año comparado con suplementos tradicionales."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-4">
            <button className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              👉 Obtén el Tuyo Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookExplanationSection;
