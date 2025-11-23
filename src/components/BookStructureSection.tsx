const BookStructureSection = () => {
  const protocolComponents = [
    {
      title: "Instrucciones",
      description: "Pasos claros y detallados para seguir cada protocolo correctamente, optimizando resultados.",
      gradient: "from-[#C7A867] to-[#D5C3A5]",
      icon: "📋"
    },
    {
      title: "Dosis",
      description: "Cantidades exactas y frecuencia recomendada para máxima efectividad y seguridad.",
      gradient: "from-[#2E3DFF] to-[#5B68FF]",
      icon: "⚖️"
    },
    {
      title: "Notas",
      description: "Consejos especiales, precauciones y tips para personalizar según tus necesidades.",
      gradient: "from-[#0C1520] to-[#1a2332]",
      icon: "💡"
    },
    {
      title: "Descripción",
      description: "Explicación científica de cómo funciona cada protocolo y por qué es efectivo.",
      gradient: "from-[#B4B4B4] to-[#d4d4d4]",
      icon: "🔬"
    },
    {
      title: "Imágenes",
      description: "Referencias visuales claras para cada paso, facilitando la aplicación correcta.",
      gradient: "from-[#C7A867]/80 to-[#D5C3A5]/80",
      icon: "📸"
    }
  ];

  return (
    <section className="mb-16 md:mb-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Estructura de los Protocolos{" "}
          <span className="text-primary">Realifestacion®</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Cada protocolo está diseñado científicamente con 5 componentes clave que garantizan
          resultados óptimos y fácil implementación en tu rutina diaria.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {protocolComponents.map((component, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient}`} />
            
            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {component.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {component.title}
              </h3>
              
              <p className="text-sm text-white/90 leading-relaxed">
                {component.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Más de 200 protocolos completos con esta estructura científica, diseñados para
          transformar tu salud hormonal, piel y bienestar general de forma natural.
        </p>
      </div>
    </section>
  );
};

export default BookStructureSection;
