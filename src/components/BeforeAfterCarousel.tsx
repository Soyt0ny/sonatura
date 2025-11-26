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
    { id: 1, image: beforeAfter1, name: "María G.", days: 30 },
    { id: 2, image: beforeAfter2, name: "Carmen R.", days: 14 },
    { id: 3, image: beforeAfter3, name: "Laura S.", days: 30 },
    { id: 4, image: beforeAfter4, name: "Ana M.", days: 21 },
  ],
  [
    { id: 5, image: beforeAfter5, name: "Isabel P.", days: 30 },
    { id: 6, image: beforeAfter6, name: "Sofia L.", days: 14 },
    { id: 7, image: beforeAfter7, name: "Paula V.", days: 30 },
    { id: 8, image: beforeAfter8, name: "Elena F.", days: 21 },
  ],
  [
    { id: 9, image: beforeAfter9, name: "Cristina H.", days: 30 },
    { id: 10, image: beforeAfter10, name: "Marta D.", days: 14 },
    { id: 11, image: beforeAfter11, name: "Rosa B.", days: 30 },
    { id: 12, image: beforeAfter12, name: "Beatriz C.", days: 21 },
  ],
];

const BeforeAfterCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Transformaciones Verificadas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
            Resultados Reales
          </h2>
          <div className="w-12 h-px bg-[#C7A867] mx-auto mt-6" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((row, rowIndex) => (
              <CarouselItem key={rowIndex} className="pl-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {row.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="group relative"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                        <img
                          src={testimonial.image}
                          alt={`Resultado ${testimonial.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        {/* Info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white/90">
                              {testimonial.name}
                            </span>
                            <span className="text-xs text-white/70 border border-white/30 px-2 py-0.5 rounded-full">
                              Día {testimonial.days}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Minimal navigation */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 rounded-full border-border/30 bg-transparent hover:bg-accent/10" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 rounded-full border-border/30 bg-transparent hover:bg-accent/10" />
          </div>
        </Carousel>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-3 mt-8 md:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-1.5 h-1.5 rounded-full bg-border/60"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
