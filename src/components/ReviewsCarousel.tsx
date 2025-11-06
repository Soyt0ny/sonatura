import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "María González",
    date: "15 Mar 2024",
    text: "Increíble producto! Mis pestañas lucen más largas y gruesas en solo 3 semanas. Lo recomiendo totalmente, es el mejor sérum que he probado.",
  },
  {
    name: "Laura Martínez",
    date: "8 Mar 2024",
    text: "Estoy sorprendida con los resultados. Mis pestañas están más fuertes y ya no se caen como antes. Vale cada centavo invertido.",
  },
  {
    name: "Carmen Silva",
    date: "2 Mar 2024",
    text: "Después de un mes de uso, la diferencia es notable. Mis pestañas se ven naturalmente más largas y el aplicador es muy fácil de usar.",
  },
  {
    name: "Ana Torres",
    date: "25 Feb 2024",
    text: "Excelente calidad! No irrita mis ojos sensibles y los resultados son visibles desde la segunda semana. Definitivamente volveré a comprarlo.",
  },
];

export const ReviewsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <Card className="p-4 bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cliente verificado</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

