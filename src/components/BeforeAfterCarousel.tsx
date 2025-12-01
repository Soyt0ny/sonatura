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
    { id: 1, image: beforeAfter1, name: "María G.", days: 30, description: "Mi piel se ve más uniforme y las líneas finas se han suavizado notablemente" },
    { id: 2, image: beforeAfter2, name: "Carmen R.", days: 14, description: "Resultados visibles desde la primera semana, mi piel luce más radiante" },
    { id: 3, image: beforeAfter3, name: "Laura S.", days: 30, description: "La textura de mi piel ha mejorado increíblemente" },
    { id: 4, image: beforeAfter4, name: "Ana M.", days: 21, description: "Menos hinchazón y una piel más luminosa" },
  ],
  [
    { id: 5, image: beforeAfter5, name: "Isabel P.", days: 30, description: "Tono de piel más uniforme y saludable" },
    { id: 6, image: beforeAfter6, name: "Sofia L.", days: 14, description: "Piel más suave y tersa en solo 2 semanas" },
    { id: 7, image: beforeAfter7, name: "Paula V.", days: 30, description: "Mi piel está más hidratada y con brillo natural" },
    { id: 8, image: beforeAfter8, name: "Elena F.", days: 21, description: "Tono más uniforme y piel revitalizada" },
  ],
  [
    { id: 9, image: beforeAfter9, name: "Cristina H.", days: 30, description: "Brillo juvenil que no tenía hace años" },
    { id: 10, image: beforeAfter10, name: "Marta D.", days: 14, description: "Piel más firme y con mejor aspecto general" },
    { id: 11, image: beforeAfter11, name: "Rosa B.", days: 30, description: "Cutis radiante y rejuvenecido" },
    { id: 12, image: beforeAfter12, name: "Beatriz C.", days: 21, description: "Reducción visible de arrugas y líneas" },
  ],
];

const BeforeAfterCarousel = () => {
  return (
    <section className="mb-8 md:mb-12 py-12 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-center mb-4">
          Resultados Reales, <span className="text-primary">Cambios Visibles</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed text-center mb-12 max-w-2xl mx-auto">
          Miles de clientas satisfechas han transformado su piel con nuestros productos
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
