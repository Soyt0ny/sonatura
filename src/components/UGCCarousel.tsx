import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ugc1 from "@/assets/ugc-1.jpg";
import ugc2 from "@/assets/ugc-2.png";
import ugc3 from "@/assets/ugc-3.png";
import ugc4 from "@/assets/ugc-4.png";
import ugc5 from "@/assets/ugc-5.png";

const UGCCarousel = () => {
  const ugcImages = [
    { id: 1, src: ugc1, alt: "Cliente usando Realifestacion - Día 7 del protocolo Afrodita" },
    { id: 2, src: ugc2, alt: "Cliente con máscara LED leyendo Realifestacion" },
    { id: 3, src: ugc3, alt: "Cliente leyendo Realifestacion en avión" },
    { id: 4, src: ugc4, alt: "Cliente con Realifestacion en spa" },
    { id: 5, src: ugc5, alt: "Cliente haciendo yoga con Realifestacion" },
    { id: 6, src: "/placeholder.svg", alt: "Cliente UGC 6" },
  ];

  return (
    <section className="mb-16 md:mb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
          Lo Que Dicen Nuestras Clientas
        </h2>
        <p className="text-sm text-muted-foreground">
          Calificación 4.9/5 por más de 72,500+ Clientes Satisfechas
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {ugcImages.map((image) => (
            <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 md:-left-4 lg:-left-6 h-7 w-7 md:h-8 md:w-8" />
        <CarouselNext className="-right-2 md:-right-4 lg:-right-6 h-7 w-7 md:h-8 md:w-8" />
      </Carousel>
    </section>
  );
};

export default UGCCarousel;
