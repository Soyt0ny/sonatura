import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const UGCCarousel = () => {
  // Placeholder images - usuario agregará sus propias imágenes UGC
  const ugcImages = [
    { id: 1, src: "/placeholder.svg", alt: "Cliente UGC 1" },
    { id: 2, src: "/placeholder.svg", alt: "Cliente UGC 2" },
    { id: 3, src: "/placeholder.svg", alt: "Cliente UGC 3" },
    { id: 4, src: "/placeholder.svg", alt: "Cliente UGC 4" },
    { id: 5, src: "/placeholder.svg", alt: "Cliente UGC 5" },
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
            <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
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
        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
      </Carousel>
    </section>
  );
};

export default UGCCarousel;
