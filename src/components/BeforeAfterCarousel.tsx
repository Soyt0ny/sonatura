import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import beforeAfter4 from "@/assets/before-after-4.jpg";
import beforeAfter5 from "@/assets/before-after-5.jpg";
import beforeAfter6 from "@/assets/before-after-6.jpg";
import beforeAfter7 from "@/assets/before-after-7.jpg";
import beforeAfter8 from "@/assets/before-after-8.jpg";
import beforeAfter9 from "@/assets/before-after-9.jpg";
import beforeAfter10 from "@/assets/before-after-10.jpg";
import beforeAfter11 from "@/assets/before-after-11.jpg";
import beforeAfter12 from "@/assets/before-after-12.jpg";

const testimonials = [
  [
    { id: 1, image: beforeAfter1, name: "Valentina R.", days: 30, description: "La Dieta Afrodita + el protocolo supercalm me ayudaron a bajar 8 kilos de grasa abdominal. Mi cara ya no está hinchada y mi piel tiene ese glow natural que buscaba. Literalmente cambió mi vida 360, ahora me siento segura con mi cuerpo" },
    { id: 2, image: beforeAfter2, name: "Isabella M.", days: 14, description: "En solo 2 semanas con la Rutina Afrodita y el detox de dopamina, mi acné hormonal bajó un montón. Mi piel se ve más firme y radiante. Si yo pude, cualquiera puede—solo hay que seguir los protocolos tal cual vienen" },
    { id: 3, image: beforeAfter3, name: "Camila S.", days: 30, description: "Gracias a los protocolos del libro bajé la pancita que llevaba años con ella. Mi cabello está más fuerte y mi piel tiene una textura increíble. La Rutina Afrodita fue clave para tonificar sin pasar horas en el gym" },
    { id: 4, image: beforeAfter4, name: "Luna V.", days: 21, description: "El protocolo supercalm me desinflamo completamente. Mi cara ya no está hinchada y el acné que tenía en la frente desapareció. Esto funciona de verdad si te comprometes con lo que dice el libro" },
  ],
  [
    { id: 5, image: beforeAfter5, name: "Mia P.", days: 30, description: "La Dieta Afrodita me cambió la vida. Perdí 6 kilos de grasa abdominal y mi piel tiene ese glow que siempre busqué con productos caros. Ahora sé que el cambio real viene de adentro, no de cremas" },
    { id: 6, image: beforeAfter6, name: "Sofia L.", days: 14, description: "En 14 días con el detox de dopamina y los protocolos básicos, mi cara se desinflamo y mi acné bajo muchísimo. Mi piel está más suave y luminosa. Cualquiera puede tener estos resultados, solo sigue el plan" },
    { id: 7, image: beforeAfter7, name: "Emma G.", days: 30, description: "La Rutina Afrodita + Dieta Afrodita me dieron ese cuerpo que siempre quise: cintura definida, glúteos firmes y piel radiante. Bajé peso y me tonifiqué sin morir en el proceso. Esto es para cualquier mujer que quiera verse bien" },
    { id: 8, image: beforeAfter8, name: "Olivia F.", days: 21, description: "Seguí los protocolos del libro y en 3 semanas mi cabello está más sano, mi piel más limpia y bajé la grasa abdominal que me frustraba. El glow up es real si te tomas en serio lo que dice Realifestacion" },
  ],
  [
    { id: 9, image: beforeAfter9, name: "Aitana H.", days: 30, description: "El protocolo supercalm + Dieta Afrodita me ayudaron a bajar 7 kilos y mi cara ya no está hinchada. Mi piel tiene ese brillo juvenil que no tenía hace años. Este libro tiene todo lo que necesitas para transformarte" },
    { id: 10, image: beforeAfter10, name: "Renata D.", days: 14, description: "Con la Rutina Afrodita logré tonificar en tiempo récord. Mi piel está más firme, mi acné hormonal bajó y me siento más segura. Si sigues los protocolos paso a paso, los resultados llegan solos" },
    { id: 11, image: beforeAfter11, name: "Victoria B.", days: 30, description: "La Dieta Afrodita me hizo bajar peso de forma natural y mi piel se ve radiante. El detox de dopamina me ayudo a controlar ansiedad y mi cara ya no está hinchada. Esto funciona para cualquier mujer, en serio" },
    { id: 12, image: beforeAfter12, name: "Antonella C.", days: 21, description: "En 3 semanas con los protocolos del libro, mi cabello creció más sano, mi acné desapareció y mi piel tiene ese glow natural. La Rutina Afrodita me ayudó a tonificar sin sufrir. Esto cambió mi vida completamente" },
  ],
];

const BeforeAfterCarousel = () => {
  return (
    <section className="mb-8 md:mb-12 py-12 bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transformaciones Reales con Realifestacion
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Miles de mujeres han transformado su cuerpo, piel y bienestar siguiendo los protocolos del libro
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((row, rowIndex) => (
              <CarouselItem key={rowIndex}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {row.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-background border border-border/40 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <img
                          src={testimonial.image}
                          alt={`Antes y después ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-foreground">
                            {testimonial.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Día {testimonial.days}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, idx) => (
                            <span key={idx} className="text-primary text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full bg-border/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
