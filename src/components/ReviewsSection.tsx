import { useState } from "react";
import { Star, SlidersHorizontal, PenLine, ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";
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

  const mockReviews = [
    {
      id: 1,
      name: "Lori W.",
      initials: "LW",
      verified: true,
      rating: 5,
      title: "¡Cómpralo!",
      text: "¡Me encanta! Compré uno para mi hija para ayudar con el acné.",
      date: "Hace 2 días",
      helpful: 0,
      notHelpful: 0,
      product: "Kit de Varita de Luz Roja 4 en 1 y Suero Activador",
      productImage: "/placeholder.svg",
      ageRange: "48-57",
      skinType: "Normal",
      skinConcerns: "Líneas finas y arrugas, Aspecto fatigado",
      frequency: "2-3 veces por semana"
    },
    {
      id: 2,
      name: "Goldalee K.",
      initials: "GK",
      verified: true,
      rating: 5,
      title: "Mi piel se siente mucho más suave",
      text: "He disfrutado usando esta herramienta todos los días durante aproximadamente un mes. Mi piel se siente cada vez más suave y también más tersa. ¡Estoy muy agradecida por esta maravillosa invención! Con mucha gratitud, Kat (esposa de Goldalee) en NYC",
      date: "Hace 1 mes",
      helpful: 2,
      notHelpful: 1,
      product: "Varita de Renovación Radiante 4 en 1 con Terapia de Luz Roja",
      productImage: "/placeholder.svg",
      ageRange: "38-47",
      skinType: "Normal",
      skinConcerns: "Líneas finas y arrugas, Aspecto fatigado",
      frequency: "Diario"
    },
    {
      id: 3,
      name: "Sharon F.",
      initials: "SF",
      verified: true,
      rating: 5,
      title: "Resultados visibles",
      text: "Después de 3 semanas de uso consistente, he notado una mejora significativa en la textura de mi piel. Las líneas alrededor de mis ojos se ven menos pronunciadas.",
      date: "Hace 2 meses",
      helpful: 5,
      notHelpful: 0,
      product: "Kit de Varita de Luz Roja 4 en 1 y Suero Activador",
      productImage: "/placeholder.svg",
      ageRange: "55-64",
      skinType: "Seca",
      skinConcerns: "Líneas finas y arrugas, Pérdida de firmeza",
      frequency: "Diario"
    }
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

      {/* Reviews Count and Sort */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-medium">1,855 reseñas</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort</span>
          <select className="text-sm border border-border/40 rounded px-3 py-1 bg-background">
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
            <option>Most Recent</option>
          </select>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6 mb-8">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="grid md:grid-cols-[300px_1fr] gap-6 pb-6 border-b border-border/20 last:border-b-0"
          >
            {/* Left Side - User Info */}
            <div className="bg-accent/10 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center font-semibold text-sm">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{review.name}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-[#8B2E2E] mt-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-xs font-medium mb-2">Reviewing</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-background rounded border border-border/40">
                    <img src={review.productImage} alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs flex-1">{review.product}</p>
                </div>
              </div>

              {/* Recommendation Badge */}
              <div className="flex items-center gap-2 text-xs text-[#8B2E2E]">
                <CheckCircle2 className="w-4 h-4" />
                <span>I recommend this product</span>
              </div>

              {/* User Demographics */}
              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between">
                  <span className="font-medium">Age Range</span>
                  <span className="text-muted-foreground">{review.ageRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">What's your skin type?</span>
                  <span className="text-muted-foreground">{review.skinType}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">What were your skin concerns before using this?</span>
                  <span className="text-muted-foreground">{review.skinConcerns}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">How frequently are you using this product?</span>
                  <span className="text-muted-foreground">{review.frequency}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Review Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < review.rating
                          ? "fill-foreground text-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>

              <h3 className="font-semibold text-lg">{review.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{review.text}</p>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm text-muted-foreground">Was this helpful?</span>
                <button className="flex items-center gap-1 text-sm hover:text-foreground transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.helpful}</span>
                </button>
                <button className="flex items-center gap-1 text-sm hover:text-foreground transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  <span>{review.notHelpful}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
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
