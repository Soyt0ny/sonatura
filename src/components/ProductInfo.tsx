import { Star, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ProductGallery from "@/components/ProductGallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import paymentIcons from "@/assets/payment-icons.png";
const ProductInfo = () => {
  return <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna izquierda - Imágenes (solo en desktop) */}
      <div className="hidden md:block">
        <ProductGallery />
      </div>

      {/* Columna derecha - Información */}
      <div className="space-y-6">
        {/* Desktop: mostrar rating, título y precio primero */}
        <div className="hidden md:block space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
              </div>
              <span className="text-sm text-foreground font-semibold">Excelente 5.0 | 9903 Reseñas</span>
            </div>
            <p className="text-xs text-foreground font-semibold">
              #1 Best Seller transformación Holística y Wellness
            </p>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Sérum de Crecimiento de Pestañas
            </h1>
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-2xl text-muted-foreground line-through">$99.99</p>
              <p className="text-3xl font-bold text-foreground">$49.99</p>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">50% OFF</span>
            </div>
            <p className="text-sm text-foreground mt-1"><span className="font-bold">O 6 meses sin intereses de $9 dólares</span></p>
          </div>
        </div>

        {/* Móvil: mostrar galería primero */}
        <div className="md:hidden mb-4">
          <ProductGallery />
        </div>

        {/* Móvil: mostrar rating, título y precio después de galería */}
        <div className="md:hidden space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
              </div>
              <span className="text-sm text-foreground font-semibold">Excelente 5.0 | 9903 Reseñas</span>
            </div>
            <p className="text-xs text-foreground font-semibold">
              #1 Best Seller transformación Holística y Wellness
            </p>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Ahorra Hasta 50% Hoy + 4 Regalos GRATIS</h1>
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-2xl text-muted-foreground line-through">$99.99</p>
              <p className="text-3xl font-bold text-foreground">$49.99</p>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">50% OFF</span>
            </div>
            <p className="text-sm text-foreground mt-1"><span className="font-bold">O 6 meses sin intereses de $9 dólares</span></p>
          </div>
        </div>

        <div>
          
        </div>

        <div className="bg-accent/50 border border-primary/20 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-3">Regula tu cortisol y tu metabolismo en 14 días</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Resultados en 2 semanas</span>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Tratamiento económico</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Resultado duradero</span>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Revitaliza el folículo</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border-2 border-dashed border-primary rounded-lg p-3 text-center">
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
          <div className="bg-background border rounded-lg p-3 space-y-2">
            <h3 className="text-base font-bold">SE ESTÁ AGOTANDO</h3>
            <p className="text-xs text-muted-foreground">Debido a la alta demanda, cantidades limitadas disponibles</p>
            <div className="space-y-1">
              <Progress value={88} className="h-5" />
              <p className="text-xs font-semibold">88% VENDIDO</p>
            </div>
          </div>

          {/* Sección de Garantía */}
          <div className="bg-accent/30 rounded-lg p-3">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center">
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
        </div>
      </div>
    </div>;
};
export default ProductInfo;