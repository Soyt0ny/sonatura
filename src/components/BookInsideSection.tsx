import bookImage from "@/assets/realifestacion-book-white.png";

const BookInsideSection = () => {
  const protocols = [
    {
      title: "PROTOCOLO SUPERCALM",
      description: "Reduce el estrés y equilibra el cortisol naturalmente. Calma tu sistema nervioso y mejora la calidad del sueño.",
      position: "top-left"
    },
    {
      title: "PROTOCOLO AFRODITA",
      description: "Potencia tu belleza natural desde dentro. Piel radiante, cabello fuerte y uñas saludables con ingredientes naturales.",
      position: "top-right"
    },
    {
      title: "DIETA AFRODITA",
      description: "Nutrición hormonal que transforma tu cuerpo. Elimina la inflamación y equilibra tus hormonas de forma natural.",
      position: "bottom-left"
    },
    {
      title: "SHOTS ANTI ACNÉ Y ANTI CORTISOL",
      description: "Soluciones rápidas y efectivas para piel perfecta. Combate el acné y reduce la grasa por cortisol en días.",
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Realifestación <span className="text-primary">por dentro</span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Central Book Image */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative w-72 md:w-96 lg:w-[450px]">
            <img 
              src={bookImage} 
              alt="Libro Realifestación" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Feature Lines and Text - Desktop */}
        <div className="hidden lg:block">
          {/* Top Left */}
          <div className="absolute top-[20%] left-0 w-[35%]">
            <div className="text-right pr-8">
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {protocols[0].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {protocols[0].description}
              </p>
            </div>
            <svg className="absolute top-1/2 right-0 w-32 h-1" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="128" y2="0" stroke="#C7A867" strokeWidth="2" />
              <circle cx="128" cy="0" r="3" fill="#C7A867" />
            </svg>
          </div>

          {/* Top Right */}
          <div className="absolute top-[20%] right-0 w-[35%]">
            <svg className="absolute top-1/2 left-0 w-32 h-1" style={{ transform: 'translateY(-50%)' }}>
              <circle cx="0" cy="0" r="3" fill="#C7A867" />
              <line x1="0" y1="0" x2="128" y2="0" stroke="#C7A867" strokeWidth="2" />
            </svg>
            <div className="text-left pl-8">
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {protocols[1].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {protocols[1].description}
              </p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[20%] left-0 w-[35%]">
            <div className="text-right pr-8">
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {protocols[2].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {protocols[2].description}
              </p>
            </div>
            <svg className="absolute top-1/2 right-0 w-32 h-1" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="128" y2="0" stroke="#C7A867" strokeWidth="2" />
              <circle cx="128" cy="0" r="3" fill="#C7A867" />
            </svg>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[20%] right-0 w-[35%]">
            <svg className="absolute top-1/2 left-0 w-32 h-1" style={{ transform: 'translateY(-50%)' }}>
              <circle cx="0" cy="0" r="3" fill="#C7A867" />
              <line x1="0" y1="0" x2="128" y2="0" stroke="#C7A867" strokeWidth="2" />
            </svg>
            <div className="text-left pl-8">
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {protocols[3].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {protocols[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards - Mobile/Tablet */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 lg:hidden">
          {protocols.map((protocol, index) => (
            <div 
              key={index}
              className="bg-accent/10 border border-border/40 rounded-lg p-6"
            >
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {protocol.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {protocol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookInsideSection;
