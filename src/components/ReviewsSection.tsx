import { useState } from "react";
import { Star, SlidersHorizontal, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Mock review images
  const reviewImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  const ratingDistribution = [
    { stars: 5, count: 1500, percentage: 81 },
    { stars: 4, count: 198, percentage: 11 },
    { stars: 3, count: 92, percentage: 5 },
    { stars: 2, count: 7, percentage: 0.4 },
    { stars: 1, count: 17, percentage: 0.9 },
  ];

  return (
    <section className="mt-16 md:mt-24">
      {/* Review Images Gallery */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 pb-4">
          {reviewImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-accent/20 border border-border/40"
            >
              <img
                src={img}
                alt={`Review ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-background border border-border/40 rounded-lg p-8 mb-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Overall Rating */}
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-bold">4.7</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < 4
                        ? "fill-primary text-primary"
                        : idx === 4
                        ? "fill-primary text-primary opacity-70"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Basado en 1,855 reseñas
            </p>

            {/* Rating Bars */}
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm w-8">{item.stars}</span>
                  <Star className="w-4 h-4 fill-current text-foreground" />
                  <div className="flex-1 h-2 bg-accent/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#8B2E2E] rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Recommendation */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold mb-2">94%</div>
              <p className="text-sm text-muted-foreground">
                recomendarían estos productos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Tabs and Actions */}
      <div className="border-b border-border/40 mb-6">
        <div className="flex gap-6 mb-4">
          <button className="pb-2 border-b-2 border-foreground font-semibold">
            Reseñas (1,855)
          </button>
          <button className="pb-2 text-muted-foreground hover:text-foreground">
            Preguntas (3)
          </button>
        </div>
      </div>

      {/* Filter and Write Review Buttons */}
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          className="bg-[#8B2E2E] text-white hover:bg-[#741E1E] border-none"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filtros
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#8B2E2E] text-white hover:bg-[#741E1E] border-none"
            >
              <PenLine className="w-4 h-4 mr-2" />
              Escribir Reseña
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Escribe tu Reseña</DialogTitle>
              <DialogDescription>
                Comparte tu experiencia con nuestro producto
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-6 mt-4">
              <div>
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Calificación *</Label>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="title">Título de la Reseña *</Label>
                <Input
                  id="title"
                  placeholder="Resume tu experiencia"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="review">Tu Reseña *</Label>
                <Textarea
                  id="review"
                  placeholder="Cuéntanos sobre tu experiencia con el producto..."
                  required
                  className="mt-2 min-h-[150px]"
                />
              </div>

              <div>
                <Label htmlFor="photos">Agregar Fotos (opcional)</Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Puedes subir hasta 5 fotos
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white hover:opacity-90"
              >
                Enviar Reseña
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Reviews List Placeholder */}
      <div className="text-center py-8 text-muted-foreground">
        <p className="text-sm">1,855 reseñas verificadas</p>
      </div>
    </section>
  );
};

export default ReviewsSection;
