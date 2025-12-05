import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import beforeAfterNew1 from "@/assets/before-after-new-1.png";
import beforeAfterNew2 from "@/assets/before-after-new-2.png";
import beforeAfterNew3 from "@/assets/before-after-new-3.png";
import beforeAfterNew4 from "@/assets/before-after-new-4.png";
import beforeAfterNew5 from "@/assets/before-after-new-5.png";
import beforeAfterNew6 from "@/assets/before-after-new-6.png";
import beforeAfterNew7 from "@/assets/before-after-new-7.png";
import beforeAfterNew8 from "@/assets/before-after-new-8.png";
import beforeAfterNew9 from "@/assets/before-after-new-9.png";
import beforeAfterNew10 from "@/assets/before-after-new-10.png";
import beforeAfterNew11 from "@/assets/before-after-new-11.png";
import beforeAfterNew12 from "@/assets/before-after-new-12.png";

const testimonials = [
  [
    // Slide 1: Acné, Peso, Cara, Acné
    { id: 1, image: beforeAfterNew1, name: "Valentina R.", age: 26, title: "Eliminé acné hormonal", rating: 5, days: 30, description: "La Dieta Afrodita + el protocolo supercalm me ayudaron a eliminar el acné hormonal y la inflamación. Mi piel tiene ese glow natural que buscaba. Literalmente cambió mi vida 360, ahora me siento segura" },
    { id: 2, image: beforeAfterNew2, name: "Isabella M.", age: 28, title: "Bajé 8 kilos de grasa", rating: 5, days: 30, description: "En solo 1 mes con la Rutina Afrodita y la Dieta Afrodita, bajé 8 kilos de grasa abdominal. Mi cuerpo está más tonificado y definido. Si yo pude, cualquiera puede—solo hay que seguir los protocolos" },
    { id: 9, image: beforeAfterNew9, name: "Carolina T.", age: 24, title: "Deshinché mi cara", rating: 4.7, days: 30, description: "Mi jawline se definió muchísimo con la Dieta Afrodita. Mi cara se deshinchó y ahora se ve más esculpida. El cambio desde adentro es real, literally game changer para mi autoestima" },
    { id: 10, image: beforeAfterNew10, name: "Daniela H.", age: 23, title: "Piel limpia en 3 semanas", rating: 5, days: 21, description: "El protocolo supercalm eliminó mi acné severo en 3 semanas. Mi piel está limpia y con ese glow natural. Probé de todo antes y esto fue lo único que atacó la raíz del problema" },
  ],
  [
    // Slide 2: Peso, Acné, Peso, Cara
    { id: 3, image: beforeAfterNew3, name: "Camila S.", age: 27, title: "Cintura más definida", rating: 4.8, days: 21, description: "Gracias a los protocolos del libro bajé la pancita que llevaba años con ella. Mi cintura está más definida y mi cuerpo se ve completamente diferente. La Rutina Afrodita fue clave" },
    { id: 5, image: beforeAfterNew5, name: "Mia P.", age: 25, title: "Glow natural en mi piel", rating: 5, days: 21, description: "La Dieta Afrodita me cambió la vida. Mi piel se desinflamo, tiene ese glow que siempre busqué con productos caros. Ahora sé que el cambio real viene de adentro, no de cremas" },
    { id: 6, image: beforeAfterNew6, name: "Sofia L.", age: 29, title: "Transformación total", rating: 4.6, days: 30, description: "En 30 días con la Rutina Afrodita y los protocolos, mi cuerpo se transformó completamente. Perdí grasa y gané definición. Cualquiera puede tener estos resultados, solo sigue el plan" },
    { id: 11, image: beforeAfterNew11, name: "Mariana K.", age: 31, title: "Adiós grasa abdominal", rating: 5, days: 30, description: "Con la Rutina Afrodita y la Dieta Afrodita perdí toda la grasa abdominal que me frustraba. Mi cintura está súper definida. El libro tiene todo lo que necesitas, solo hay que seguirlo" },
  ],
  [
    // Slide 3: Peso, Acné, Peso, Acné
    { id: 4, image: beforeAfterNew4, name: "Luna V.", age: 22, title: "Abdomen desinflado", rating: 4.9, days: 30, description: "El protocolo supercalm me desinflamo completamente. Mi abdomen ya no está hinchado y bajé mucho la grasa abdominal. Esto funciona de verdad si te comprometes con lo que dice el libro" },
    { id: 7, image: beforeAfterNew7, name: "Emma G.", age: 24, title: "Acné eliminado en 2 semanas", rating: 5, days: 14, description: "El detox de dopamina + Dieta Afrodita eliminaron mi acné hormonal en 2 semanas. Mi piel está radiante y limpia. El glow up es real si sigues los protocolos del libro" },
    { id: 8, image: beforeAfterNew8, name: "Olivia F.", age: 33, title: "Cuerpo tonificado", rating: 4.4, days: 30, description: "Seguí los protocolos del libro y en 1 mes bajé la grasa abdominal que me frustraba. Mi cuerpo está tonificado y me siento increíble. Este libro tiene todo lo que necesitas para transformarte" },
    { id: 12, image: beforeAfterNew12, name: "Andrea J.", age: 26, title: "Piel sin acné severo", rating: 5, days: 28, description: "Mi acné hormonal era severo y nada funcionaba. El protocolo supercalm + Dieta Afrodita lo eliminaron casi por completo. Mi piel se ve completamente diferente, finally encontré la solución" },
  ],
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  const partialFill = (rating % 1) * 100;
  
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, idx) => {
        if (idx < fullStars) {
          return <span key={idx} className="text-primary text-sm">★</span>;
        } else if (idx === fullStars && hasPartialStar) {
          return (
            <span key={idx} className="relative text-sm">
              <span className="text-border/40">★</span>
              <span 
                className="absolute left-0 top-0 text-primary overflow-hidden"
                style={{ width: `${partialFill}%` }}
              >
                ★
              </span>
            </span>
          );
        } else {
          return <span key={idx} className="text-border/40 text-sm">★</span>;
        }
      })}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
};

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
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-foreground">
                            {testimonial.name}, {testimonial.age}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Día {testimonial.days}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-primary mb-2">
                          {testimonial.title}
                        </p>
                        <div className="mb-2">
                          <StarRating rating={testimonial.rating} />
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
