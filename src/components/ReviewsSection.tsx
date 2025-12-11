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
import reviewImg1 from "@/assets/review-img-1.png";
import reviewImg2 from "@/assets/review-img-2.png";
import reviewImg3 from "@/assets/review-img-3.png";
import reviewImg4 from "@/assets/review-img-4.png";
import reviewImg5 from "@/assets/review-img-5.png";
import reviewImg6 from "@/assets/review-img-6.png";
import reviewImg7 from "@/assets/review-img-7.png";
import reviewImg8 from "@/assets/review-img-8.png";
import reviewImg9 from "@/assets/review-img-9.png";
import reviewImg10 from "@/assets/review-img-10.png";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(5);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, { helpful: number; notHelpful: number; voted: 'helpful' | 'notHelpful' | null }>>({});

  // Review images
  const reviewImages = [
    reviewImg1,
    reviewImg2,
    reviewImg3,
    reviewImg4,
    reviewImg5,
    reviewImg6,
    reviewImg7,
    reviewImg8,
    reviewImg9,
    reviewImg10,
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
      text: "¡Me encanta! Compré uno para mi hija para ayudarla con el acné hormonal y los resultados han sido increíbles.",
      date: "Hace 1 día",
      helpful: 0,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Acné hormonal",
      goal: "Equilibrio hormonal natural",
      timeUsing: "2-3 semanas"
    },
    {
      id: 2,
      name: "Goldalee K.",
      initials: "GK",
      verified: true,
      rating: 5,
      title: "Mi piel y energía mejoraron notablemente",
      text: "He seguido los protocolos del libro durante aproximadamente un mes. Mi piel se ve más clara y mi energía ha aumentado significativamente. ¡Estoy muy agradecida por este conocimiento! Con mucha gratitud, Kat (esposa de Goldalee) en NYC",
      date: "Hace 4 días",
      helpful: 2,
      notHelpful: 1,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Fatiga crónica y problemas de piel",
      goal: "Más energía y piel radiante",
      timeUsing: "1 mes"
    },
    {
      id: 3,
      name: "Sharon F.",
      initials: "SF",
      verified: true,
      rating: 5,
      title: "Resultados visibles en cortisol elevado",
      text: "Después de 3 semanas siguiendo el protocolo SuperCalm, he notado una reducción significativa en mi grasa abdominal y mi piel ya no está tan oleosa.",
      date: "Hace 6 días",
      helpful: 5,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Cortisol elevado",
      goal: "Reducir grasa abdominal",
      timeUsing: "3 semanas"
    },
    {
      id: 4,
      name: "María G.",
      initials: "MG",
      verified: true,
      rating: 5,
      title: "Excelente inversión, mejor que suplementos",
      text: "Llevo 6 semanas siguiendo los protocolos y los resultados superan cualquier suplemento que haya tomado. Mi acné casi desapareció y me siento con más control de mi salud.",
      date: "Hace 8 días",
      helpful: 8,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Acné hormonal persistente",
      goal: "Piel clara sin químicos",
      timeUsing: "6 semanas"
    },
    {
      id: 5,
      name: "Carmen R.",
      initials: "CR",
      verified: true,
      rating: 5,
      title: "Recomendado 100%",
      text: "Sinceramente no esperaba estos resultados naturales. Mi equilibrio hormonal mejoró, duermo mejor y mi piel luce increíble. Lo mejor en lo que he invertido en años.",
      date: "Hace 10 días",
      helpful: 12,
      notHelpful: 1,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Desbalance hormonal general",
      goal: "Bienestar integral natural",
      timeUsing: "2 meses"
    },
    {
      id: 6,
      name: "Patricia L.",
      initials: "PL",
      verified: true,
      rating: 4,
      title: "Muy completo y práctico",
      text: "He visto mejoras en mi energía y digestión después de 4 semanas. Los protocolos son fáciles de seguir y muy bien explicados.",
      date: "Hace 12 días",
      helpful: 3,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Problemas digestivos",
      goal: "Mejor digestión y energía",
      timeUsing: "4 semanas"
    },
    {
      id: 7,
      name: "Isabel M.",
      initials: "IM",
      verified: true,
      rating: 5,
      title: "Cambió mi enfoque de bienestar",
      text: "Desde que aplico estos protocolos mi salud hormonal está mucho mejor. El acné se redujo notablemente y me siento más equilibrada emocionalmente.",
      date: "Hace 2 días",
      helpful: 6,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Acné y cambios de humor",
      goal: "Equilibrio hormonal completo",
      timeUsing: "5 semanas"
    },
    {
      id: 8,
      name: "Ana S.",
      initials: "AS",
      verified: true,
      rating: 5,
      title: "Resultados rápidos y naturales",
      text: "En solo 2 semanas ya vi diferencia en mi piel y nivel de energía. Totalmente satisfecha con esta inversión en mi salud.",
      date: "Hace 2 semanas",
      helpful: 4,
      notHelpful: 0,
      product: "Libro Realifestacion",
      productImage: "/placeholder.svg",
      concern: "Piel opaca y baja energía",
      goal: "Vitalidad y piel radiante",
      timeUsing: "2 semanas"
    }
  ];

  const handleVote = (reviewId: number, voteType: 'helpful' | 'notHelpful') => {
    setHelpfulVotes(prev => {
      const currentVote = prev[reviewId];
      const review = mockReviews.find(r => r.id === reviewId);
      if (!review) return prev;

      // If already voted the same way, remove vote
      if (currentVote?.voted === voteType) {
        return {
          ...prev,
          [reviewId]: {
            helpful: voteType === 'helpful' ? (currentVote.helpful - 1) : currentVote.helpful,
            notHelpful: voteType === 'notHelpful' ? (currentVote.notHelpful - 1) : currentVote.notHelpful,
            voted: null
          }
        };
      }

      // If changing vote
      if (currentVote?.voted) {
        return {
          ...prev,
          [reviewId]: {
            helpful: voteType === 'helpful' ? (currentVote.helpful + 1) : (currentVote.helpful - 1),
            notHelpful: voteType === 'notHelpful' ? (currentVote.notHelpful + 1) : (currentVote.notHelpful - 1),
            voted: voteType
          }
        };
      }

      // New vote
      return {
        ...prev,
        [reviewId]: {
          helpful: voteType === 'helpful' ? (review.helpful + 1) : review.helpful,
          notHelpful: voteType === 'notHelpful' ? (review.notHelpful + 1) : review.notHelpful,
          voted: voteType
        }
      };
    });
  };

  const getVoteCount = (reviewId: number, voteType: 'helpful' | 'notHelpful') => {
    const review = mockReviews.find(r => r.id === reviewId);
    if (!review) return 0;
    const votes = helpfulVotes[reviewId];
    if (votes) {
      return voteType === 'helpful' ? votes.helpful : votes.notHelpful;
    }
    return voteType === 'helpful' ? review.helpful : review.notHelpful;
  };

  return (
    <section className="mt-16 md:mt-24 py-12 md:py-16 bg-background">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Por Qué Aman Realifestacion
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Miles de mujeres ya transformaron su cuerpo, piel y bienestar. Estas son sus historias reales.
        </p>
      </div>

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
                      className="h-full bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] rounded-full"
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
                recomendarían este libro
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
          <span className="text-sm text-muted-foreground">Ordenar</span>
          <select className="text-sm border border-border/40 rounded px-3 py-1 bg-background">
            <option>Mayor calificación</option>
            <option>Menor calificación</option>
            <option>Más recientes</option>
          </select>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6 mb-8">
        {mockReviews.slice(0, visibleReviews).map((review) => (
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
                    <div className="flex items-center gap-1 text-xs text-foreground mt-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Comprador Verificado</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-xs font-medium mb-2">Reseñando</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-background rounded border border-border/40">
                    <img src={review.productImage} alt="Producto" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs flex-1">{review.product}</p>
                </div>
              </div>

              {/* Recommendation Badge */}
              <div className="flex items-center gap-2 text-xs text-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>Recomiendo este producto</span>
              </div>

              {/* User Info */}
              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between">
                  <span className="font-medium">Preocupación Principal</span>
                  <span className="text-muted-foreground">{review.concern}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Objetivo al comprar</span>
                  <span className="text-muted-foreground">{review.goal}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Tiempo usando los protocolos</span>
                  <span className="text-muted-foreground">{review.timeUsing}</span>
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
                <span className="text-sm text-muted-foreground">¿Te fue útil?</span>
                <button 
                  onClick={() => handleVote(review.id, 'helpful')}
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    helpfulVotes[review.id]?.voted === 'helpful' 
                      ? 'text-green-600' 
                      : 'hover:text-foreground'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{getVoteCount(review.id, 'helpful')}</span>
                </button>
                <button 
                  onClick={() => handleVote(review.id, 'notHelpful')}
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    helpfulVotes[review.id]?.voted === 'notHelpful' 
                      ? 'text-red-500' 
                      : 'hover:text-foreground'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>{getVoteCount(review.id, 'notHelpful')}</span>
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
          className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] border-none"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filtros
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] border-none"
            >
              <PenLine className="w-4 h-4 mr-2" />
              Escribir Reseña
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Escribe tu Reseña</DialogTitle>
              <DialogDescription>
                Comparte tu experiencia con el libro Realifestacion
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
                  placeholder="Cuéntanos sobre tu experiencia con el libro y los protocolos..."
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
                className="w-full bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520]"
              >
                Enviar Reseña
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Reviews Count and Load More Button */}
      <div className="text-center py-8">
        <p className="text-sm text-muted-foreground mb-4">1,855 reseñas verificadas</p>
        {visibleReviews < mockReviews.length && (
          <Button
            onClick={() => setVisibleReviews(prev => Math.min(prev + 3, mockReviews.length))}
            variant="outline"
            className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] border-none"
          >
            Ver más reseñas
          </Button>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
