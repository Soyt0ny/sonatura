import { Star, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ProductGallery from "@/components/ProductGallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import paymentIcons from "@/assets/payment-icons.png";
import { useState, useEffect } from "react";

const featuredReviews = [
  {
    name: "Christina A.",
    date: "April 4, 2025",
    review: "I love the Solawave Wand so much! It helps with any puffiness and I am seeing a reduction of fine lines."
  },
  {
    name: "Sarah M.",
    date: "March 28, 2025",
    review: "After just 2 weeks, my skin looks brighter and feels so much smoother. The red light therapy is incredible!"
  },
  {
    name: "Jessica L.",
    date: "March 15, 2025",
    review: "This wand has become part of my daily routine. My friends keep asking what I'm doing differently - my skin glows!"
  },
  {
    name: "Amanda K.",
    date: "February 22, 2025",
    review: "Best investment for my skin! The combination of technologies really works. I've noticed fewer fine lines around my eyes."
  },
  {
    name: "Rachel T.",
    date: "February 10, 2025",
    review: "I was skeptical at first, but wow! My skin feels tighter and looks more radiant. The built-in timer makes it so easy to use."
  }
];

const ProductInfo = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna izquierda - Imágenes (solo en desktop) */}
      <div className="hidden md:block">
        <ProductGallery />
      </div>

      {/* Columna derecha - Información */}
      <div className="space-y-6">
        {/* Desktop: mostrar rating, título y precio primero */}
        <div className="hidden md:block space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
            </div>
            <span className="text-base text-foreground font-medium">4.7 / 5</span>
            <span className="text-muted-foreground">●</span>
            <span className="text-base text-muted-foreground">Loved by 726,000+ customers</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-tight">
              4-in-1 Radiant Renewal Skincare Wand with Red Light Therapy
            </h1>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-foreground">$169</p>
            </div>
            <p className="text-sm text-foreground mt-1">
              or just <span className="font-semibold underline">$14.08/mo</span> <span className="text-primary font-semibold">affirm</span>
            </p>
          </div>

          <p className="text-base text-foreground leading-relaxed">
            Visibly softens fine lines, boosts radiance, and refreshes tired skin.
          </p>

          <p className="text-sm text-foreground leading-relaxed">
            This 12-minute award-winning Skincare Wand uses 4 advanced technologies. With a rotating head and built-in timer, you're in control of where results appear.
          </p>
        </div>

        {/* Móvil: mostrar galería primero */}
        <div className="md:hidden mb-4">
          <ProductGallery />
        </div>

        {/* Móvil: mostrar rating, título y precio después de galería */}
        <div className="md:hidden space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
            </div>
            <span className="text-base text-foreground font-medium">4.7 / 5</span>
            <span className="text-muted-foreground">●</span>
            <span className="text-base text-muted-foreground">Loved by 726,000+ customers</span>
          </div>

          <div>
            <h1 className="text-xl font-bold leading-tight">
              4-in-1 Radiant Renewal Skincare Wand with Red Light Therapy
            </h1>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-foreground">$169</p>
            </div>
            <p className="text-xs text-foreground mt-1">
              or just <span className="font-semibold underline">$14.08/mo</span> <span className="text-primary font-semibold">affirm</span>
            </p>
          </div>

          <p className="text-base text-foreground leading-relaxed">
            Visibly softens fine lines, boosts radiance, and refreshes tired skin.
          </p>

          <p className="text-sm text-foreground leading-relaxed">
            This 12-minute award-winning Skincare Wand uses 4 advanced technologies. With a rotating head and built-in timer, you're in control of where results appear.
          </p>
        </div>

        <div>
          
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="font-bold text-base mb-4">4 science-backed technologies:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">✦</div>
              <span className="text-sm">Boosts collagen & reduces wrinkles (Red Light Therapy, 630nm)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">≈</div>
              <span className="text-sm">Relaxes & soothes skin (Therapeutic Warmth)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">⇈</div>
              <span className="text-sm">Activates serum & deeply hydrates (Galvanic Current)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">◎</div>
              <span className="text-sm">Reduces puffiness (Facial Massage)</span>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 border border-dashed border-border rounded-lg p-3 text-center">
          <p className="text-sm font-semibold">
            🎁 Ordena antes del 28 de Oct. para recibir Regalos GRATIS garantizados
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Reseñas de Clientes:</h3>
          <ReviewsCarousel />
        </div>

        <div className="bg-secondary rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-center">¡VENTA EXCLUSIVA! Regalos GRATIS con tu Primera Orden</h4>
          <div className="grid grid-cols-4 gap-2">
            {["GRATIS $10", "GRATIS $6", "GRATIS $19", "GRATIS $25"].map((gift, idx) => <div key={idx} className="bg-accent rounded-lg p-3 text-center">
                <div className="aspect-square bg-primary/10 rounded mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{gift}</span>
                </div>
              </div>)}
          </div>
        </div>

        <div className="space-y-3">
          <Button size="lg" className="w-full text-lg h-14">
            Agregar al Carrito
          </Button>
          
          <div className="flex justify-center">
            <img src={paymentIcons} alt="Métodos de pago aceptados" className="h-8" />
          </div>

          {/* Sección de Stock Limitado */}
          <div className="bg-accent/20 border border-border/60 rounded-lg p-3 space-y-2">
            <h3 className="text-base font-bold">SE ESTÁ AGOTANDO</h3>
            <p className="text-xs text-muted-foreground">Debido a la alta demanda, cantidades limitadas disponibles</p>
            <div className="space-y-1">
              <Progress value={88} className="h-5" />
              <p className="text-xs font-semibold">88% VENDIDO</p>
            </div>
          </div>

          {/* Sección de Garantía */}
          <div className="bg-accent/20 border border-border/60 rounded-lg p-3">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border border-border bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">60</div>
                    <div className="text-[10px] text-muted-foreground">Días</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1">Garantía de devolución de dinero de 60 días</h3>
                <p className="text-xs text-muted-foreground">
                  Una piel hermosa toma tiempo. Ama tus resultados o recibe un reembolso completo. 100% sin riesgo.
                </p>
              </div>
            </div>
          </div>

          {/* Real Results Section */}
          <div className="mt-8 space-y-1.5">
            <h2 className="text-base font-bold">Real results from real customers</h2>
            
            {/* Video Testimonials Grid - Optimized for Reels/TikTok */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-[9/16] bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C83C2E] flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Reviews Carousel */}
            <div className="relative">
              <div className="bg-accent/20 border border-border/40 rounded-lg p-3 space-y-2 animate-fade-in">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold mb-0.5">{featuredReviews[currentReviewIndex].name}</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#8B4513]">Verified customer</span>
                      <div className="w-4 h-4 rounded-full bg-[#8B4513] flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{featuredReviews[currentReviewIndex].date}</span>
                </div>
                
                <p className="text-sm leading-relaxed">
                  "{featuredReviews[currentReviewIndex].review}"
                </p>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-1.5 mt-3">
                {featuredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentReviewIndex 
                        ? 'w-6 bg-primary' 
                        : 'w-1.5 bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductInfo;