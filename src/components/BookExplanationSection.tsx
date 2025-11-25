import productApplication from "@/assets/product-application.jpg";
import productResults from "@/assets/product-results.jpg";

const BookExplanationSection = () => {
  return (
    <section className="mb-16 md:mb-20 max-w-5xl mx-auto px-4">
      {/* Primera sección */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center mb-12 md:mb-16">
        <div className="space-y-5">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-sm">★</span>
            ))}
            <span className="text-xs text-muted-foreground ml-2">
              4.9/5 por 18,640 clientas
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            Descubre una{" "}
            <span className="text-primary">solución superior</span> para acné,
            grasa por cortisol y bienestar hormonal.
          </h2>
          
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Los tratamientos convencionales a menudo llevan a{" "}
              <span className="font-medium text-foreground">
                piel dañada y hormonas desequilibradas
              </span>, convirtiendo la búsqueda de bienestar en experiencias frustrantes.
            </p>
            
            <p>
              El libro <span className="font-medium text-foreground">Realifestacion®</span>{" "}
              revoluciona el bienestar natural con{" "}
              <span className="font-medium text-foreground">
                más de 200 protocolos científicos
              </span>, atacando la raíz de problemas como acné y grasa por cortisol.
            </p>
          </div>
          
          <div className="pt-2">
            <button className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm">
              Comprar Ahora
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              Envío Gratis & Garantía de 60 Días
            </p>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl shadow-xl border border-border/30">
            <img
              src={productApplication}
              alt="Aplicación del protocolo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Segunda sección */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="relative order-2 md:order-1 flex justify-center">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl shadow-xl border border-border/30">
            <img
              src={productResults}
              alt="Resultados del protocolo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-5 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
            Experimenta{" "}
            <span className="text-primary">alivio inmediato</span> de acné,
            cortisol elevado y problemas hormonales.
          </h2>
          
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              <span className="font-medium text-foreground">Realifestacion®</span>{" "}
              ofrece una{" "}
              <span className="font-medium text-foreground">
                combinación única
              </span>{" "}
              de protocolos naturales específicos con{" "}
              <span className="font-medium text-foreground">
                ingredientes reconocidos por tu cuerpo
              </span>.
            </p>
            
            <p>
              Muchas clientas reportan{" "}
              <span className="font-medium text-foreground">alivio</span> de acné,
              grasa por cortisol y fatiga hormonal durante su transformación.
            </p>
          </div>
          
          <ul className="space-y-2">
            {[
              "Aprobado por entusiastas del bienestar natural",
              "Alivio de acné, grasa por cortisol e inflamación",
              "Resultados visibles en 7-14 días",
              "Sin malestar de pastillas y tratamientos químicos",
              "Ahorra más de $10,000/año vs. suplementos"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-2">
            <button className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm">
              Obtén el Tuyo Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookExplanationSection;
