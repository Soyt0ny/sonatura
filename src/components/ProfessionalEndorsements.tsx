import { useState } from "react";
import { Check } from "lucide-react";

interface Endorsement {
  id: number;
  image: string;
  title: string;
  content: string;
  name: string;
  profession: string;
}

const endorsements: Endorsement[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    title: "La Solución Natural que Recomiendo a Mis Pacientes",
    content: "Después de años tratando problemas hormonales y de piel con tratamientos convencionales, este libro me mostró un enfoque completamente diferente. Los protocolos naturales que contiene son exactamente lo que necesitamos: atacar la raíz del problema sin químicos dañinos. He visto transformaciones increíbles en mis pacientes que lo siguen.",
    name: "Dra. Patricia Mendoza",
    profession: "Endocrinóloga"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    title: "Un Cambio de Paradigma en el Cuidado de la Piel",
    content: "Como dermatóloga, he visto los efectos secundarios de productos químicos agresivos durante años. Este libro ofrece alternativas naturales respaldadas por la ciencia que realmente funcionan. Los ingredientes que recomienda son los que nuestros cuerpos reconocen y procesan de manera óptima.",
    name: "Dra. Carmen Ruiz",
    profession: "Dermatóloga Certificada"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    title: "La Guía Definitiva para la Salud Hormonal",
    content: "Este libro es revolucionario. Finalmente tenemos un recurso completo que enseña a las mujeres cómo cuidar su salud hormonal de manera natural, sin depender de suplementos costosos llenos de ingredientes sintéticos. Los protocolos son prácticos, seguros y efectivos.",
    name: "Dra. Sofia Torres",
    profession: "Especialista en Medicina Funcional"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    title: "Nutrición Real para Resultados Reales",
    content: "Como nutrióloga, siempre he creído en el poder de los alimentos y remedios naturales. Este libro compila exactamente lo que necesitamos: protocolos claros, ingredientes naturales y resultados comprobados. Es la herramienta perfecta para empoderar a las personas con conocimiento real sobre su salud.",
    name: "Lic. María González",
    profession: "Nutrióloga Clínica"
  }
];

const ProfessionalEndorsements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEndorsement = endorsements[activeIndex];

  return (
    <section className="mt-16 md:mt-24 max-w-6xl mx-auto px-4">
      <div className="bg-background border-2 border-border/40 rounded-3xl p-8 md:p-12 shadow-lg">
        {/* Selector Circles */}
        <div className="flex justify-center gap-3 mb-10">
          {endorsements.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#C7A867] scale-125"
                  : "bg-border/40 hover:bg-border/60"
              }`}
              aria-label={`Ver endorsement ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={activeEndorsement.image}
                alt={activeEndorsement.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520]/60 to-transparent" />
              
              {/* Verification Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <Check className="w-4 h-4 text-[#C7A867]" />
                <span className="text-xs font-medium">Verificado</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
              {activeEndorsement.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {activeEndorsement.content}
            </p>

            <div className="pt-4 border-t border-border/40">
              <p className="font-semibold text-base md:text-lg text-foreground mb-1">
                {activeEndorsement.name}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {activeEndorsement.profession}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalEndorsements;
