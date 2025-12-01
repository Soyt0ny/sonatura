import { Heart, Target, Sparkles } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Somos más que una marca. Somos un movimiento que empodera a mujeres para transformar su bienestar desde adentro.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quiénes Somos */}
          <div className="bg-card border-2 border-border/40 rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              ¿Quiénes Somos?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sonatura nace de la convicción de que toda mujer merece acceso a soluciones reales 
              para su bienestar hormonal, su piel y su salud integral. Creemos en el poder de lo 
              natural, en la ciencia aplicada con propósito y en la autonomía del conocimiento. 
              No vendemos dependencia, vendemos transformación verdadera.
            </p>
          </div>

          {/* Por Qué Lo Hacemos */}
          <div className="bg-card border-2 border-border/40 rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              ¿Por Qué Lo Hacemos?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Porque estamos cansadas de ver mujeres gastando miles de dólares en productos que 
              no funcionan, en tratamientos invasivos y en soluciones temporales que nunca atacan 
              la raíz del problema. Creemos que toda mujer tiene derecho a conocer cómo funciona 
              su cuerpo y cómo cuidarlo de forma natural, efectiva y sostenible.
            </p>
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Misión */}
          <div className="bg-gradient-to-br from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-3xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C7A867]/20 mb-4">
              <Target className="w-8 h-8 text-[#C7A867]" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-[#0C1520] mb-3">
              Nuestra Misión
            </h4>
            <p className="text-[#0C1520]/70 text-sm leading-relaxed">
              Empoderar a mujeres con conocimiento científico accesible para que transformen 
              su salud hormonal, su piel y su bienestar desde la raíz, sin dependencia de 
              productos químicos ni tratamientos costosos.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-br from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-3xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C7A867]/20 mb-4">
              <Sparkles className="w-8 h-8 text-[#C7A867]" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-[#0C1520] mb-3">
              Nuestra Visión
            </h4>
            <p className="text-[#0C1520]/70 text-sm leading-relaxed">
              Convertirnos en la referencia global de bienestar femenino natural, reconocida 
              por ofrecer soluciones científicamente respaldadas que generan cambios duraderos 
              y reales en millones de mujeres.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-gradient-to-br from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB] rounded-3xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C7A867]/20 mb-4">
              <Heart className="w-8 h-8 text-[#C7A867]" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-[#0C1520] mb-3">
              Nuestros Valores
            </h4>
            <ul className="text-[#0C1520]/70 text-sm leading-relaxed text-left space-y-2">
              <li>• Transparencia total</li>
              <li>• Ciencia con propósito</li>
              <li>• Autonomía del conocimiento</li>
              <li>• Resultados reales y duraderos</li>
              <li>• Empoderamiento femenino</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
