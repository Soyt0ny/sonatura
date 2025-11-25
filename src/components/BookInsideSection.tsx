import bookImage from "@/assets/realifestacion-book.png";

const BookInsideSection = () => {
  const features = [
    {
      title: "+200 Protocolos Completos",
      description: "Soluciones naturales paso a paso para transformar tu salud y belleza",
      position: "top-left"
    },
    {
      title: "Ingredientes Naturales",
      description: "Todo con ingredientes que tu cuerpo reconoce y puede conseguir fácilmente",
      position: "top-right"
    },
    {
      title: "Salud Hormonal",
      description: "Equilibra cortisol, estrógenos y hormonas tiroideas naturalmente",
      position: "bottom-left"
    },
    {
      title: "Independencia de Big Pharma",
      description: "Deja de depender de pastillas y suplementos químicos caros",
      position: "bottom-right"
    }
  ];

  return (
    <section className="mt-16 md:mt-24 mb-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Realifestación <span className="text-primary">por dentro</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre el contenido completo del libro que está transformando la vida de miles de mujeres
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Central Book Image */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative w-64 md:w-80 lg:w-96">
            <img 
              src={bookImage} 
              alt="Libro Realifestación" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Feature Lines and Text - Desktop */}
        <div className="hidden lg:block">
          {/* Top Left */}
          <div className="absolute top-1/4 left-0 w-1/3">
            <div className="text-right pr-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {features[0].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {features[0].description}
              </p>
            </div>
            <svg className="absolute top-1/2 right-0 w-24 h-2" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="1" x2="96" y2="1" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Top Right */}
          <div className="absolute top-1/4 right-0 w-1/3">
            <svg className="absolute top-1/2 left-0 w-24 h-2" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="1" x2="96" y2="1" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            </svg>
            <div className="text-left pl-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {features[1].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-1/4 left-0 w-1/3">
            <div className="text-right pr-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {features[2].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {features[2].description}
              </p>
            </div>
            <svg className="absolute top-1/2 right-0 w-24 h-2" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="1" x2="96" y2="1" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-1/4 right-0 w-1/3">
            <svg className="absolute top-1/2 left-0 w-24 h-2" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="1" x2="96" y2="1" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            </svg>
            <div className="text-left pl-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {features[3].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards - Mobile/Tablet */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 lg:hidden">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-accent/20 border border-border/40 rounded-xl p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookInsideSection;
