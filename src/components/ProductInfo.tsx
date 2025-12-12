import { Star, Clock, DollarSign, Sparkles, TrendingUp, Timer, Mail, Info, FileText, Zap, Hand, Package, Leaf, ShieldCheck, Ban, Target, Eye, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProductGallery from "@/components/ProductGallery";
import paymentIcons from "@/assets/payment-icons.png";
import giftDigitalBook from "@/assets/gift-digital-book.jpg";
import giftFreeShipping from "@/assets/gift-free-shipping.jpg";
import giftLashCurler from "@/assets/gift-lash-curler.jpg";
import giftMascara from "@/assets/gift-mascara.jpg";
import logoApa from "@/assets/logo-apa.png";
import logoNonGmo from "@/assets/logo-non-gmo.png";
import logoCrueltyFree from "@/assets/logo-cruelty-free.png";
import logoUsdaOrganic from "@/assets/logo-usda-organic.png";
import { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";
import ExclusiveGiftsSection from "@/components/ExclusiveGiftsSection";
import { useCartStore } from "@/stores/cartStore";
import cartProduct from "@/assets/cart-product.png";
import { ShopifyProduct } from "@/lib/shopify";
import { useCurrencyDetection, formatPrice, formatLargePrice } from "@/hooks/useCurrencyDetection";
// Producto real de Shopify - Realifestación
const realifestacionProduct: ShopifyProduct = {
  node: {
    id: "gid://shopify/Product/14884385390964",
    title: "Libro Realifestación® Digital",
    description: "Libro digital con +200 protocolos naturales de salud, belleza y Wellness",
    handle: "libro-realifestacion-digital",
    priceRange: {
      minVariantPrice: {
        amount: "37.00",
        currencyCode: "USD"
      }
    },
    images: {
      edges: [{
        node: {
          url: "https://cdn.shopify.com/s/files/1/0962/3099/8388/files/cart-product.png?v=1765178637",
          altText: "Libro Realifestación Digital"
        }
      }]
    },
    variants: {
      edges: [{
        node: {
          id: "gid://shopify/ProductVariant/53730495922548",
          title: "Default Title",
          price: {
            amount: "37.00",
            currencyCode: "USD"
          },
          availableForSale: true,
          selectedOptions: []
        }
      }]
    },
    options: []
  }
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(59 * 60); // 59 minutos en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          return 59 * 60; // Reinicia a 59 minutos cuando llega a 0
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return <div className="border border-border/40 rounded-lg py-2 px-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-medium text-muted-foreground">
          La oferta termina en
        </p>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground tabular-nums tracking-tight">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>;
};
// Precios mencionados en reseñas (USD)
const featuredReviews = [{
  name: "Mariana G.",
  date: "hace 1 día",
  review: "Honestamente no esperaba ver cambios tan rápido. En 10 días mi cara ya no está tan hinchada y el acné que tenía en la frente casi desapareció. He probado cremas de +$300 dólares que no hicieron nada, esto es completamente diferente porque atacas desde lo que comes y no solo la piel por fuera."
}, {
  name: "Daniela P.",
  date: "hace 3 días",
  review: "Antes gastaba como +$200 al mes en suplementos y productos para la piel, literal ya llevaba años así. Con el libro dejé todo eso y en 3 semanas vi más resultados que con cualquier cosa que haya comprado. Además está en mi celular, lo leo en el gym o donde sea. Lo voy a comprar físico también porque me encantó."
}, {
  name: "Andrea T.",
  date: "hace 6 días",
  review: "Por fin algo que funciona de verdad. Ya había probado de todo y nada me duraba, siempre volvía lo mismo. Aquí aprendes a balancear tus hormonas de forma natural y eso hace que los cambios sean permanentes. En 2 semanas bajé grasa del abdomen que llevaba meses estancada."
}, {
  name: "Fernanda K.",
  date: "20 Nov 2025",
  review: "Al principio dudé porque es digital, pero es súper práctico. Lo tengo en mi tablet, en el celular y en la computadora. Lo consulto cuando cocino y así no se me olvida nada. Lo mejor es que gasté $37 una sola vez y ya no tengo que estar comprando cosas cada mes. Mucho más económico y efectivo."
}, {
  name: "Regina H.",
  date: "15 Nov 2025",
  review: "Llevaba años con acné hormonal y gastando fácil +$150 mensuales en dermatólogo y tratamientos. Nada funcionaba más de 2 semanas. Con este libro entendí que el problema era interno, no externo. En 12 días mi piel cambió completamente, es increíble como algo tan natural puede ser tan potente."
}];
const ProductInfo = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [liveUsers, setLiveUsers] = useState(1150);
  const [copied, setCopied] = useState(false);
  const { addItem } = useCartStore();
  const currencyInfo = useCurrencyDetection();

  // Precios base en USD
  const originalPriceUSD = 123;
  const currentPriceUSD = 37;
  const monthlyPriceUSD = 6.17;
  const annualSavingsUSD = 10000;


  const handleAddToCart = () => {
    const variant = realifestacionProduct.node.variants.edges[0].node;
    addItem({
      product: realifestacionProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    });
  };

  // Calcular la fecha de mañana
  const tomorrow = addDays(new Date(), 1);
  const formattedDate = format(tomorrow, "d 'de' MMMM", {
    locale: es
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % featuredReviews.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUsers = Math.floor(Math.random() * (1297 - 1000 + 1)) + 1000;
      setLiveUsers(randomUsers);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <>
    <div className="w-full md:max-w-7xl md:mx-auto md:px-8 lg:px-16">
    <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna izquierda - Imágenes (solo en desktop) - STICKY */}
      <div className="hidden md:block md:sticky md:top-4 md:self-start md:h-fit">
        <ProductGallery />
      </div>

      {/* Columna derecha - Información - SCROLLABLE */}
      <div className="w-full md:max-w-2xl space-y-6">
        {/* Desktop: mostrar rating, título y precio primero */}
        <div className="hidden md:block space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
              </div>
              <span className="text-xs text-foreground font-medium">4.7 / 5</span>
              <span className="text-muted-foreground text-xs">●</span>
              <span className="text-xs text-foreground font-medium">Loved by 72,500+ customers</span>
            </div>
            <p className="text-xs text-foreground font-medium">#1 Best Seller en transformación Holística</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-tight">
              REALIFESTACIÓN LIBRO DIGITAL - Black Friday 70% Off +4 regalos
            </h1>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-foreground line-through decoration-1 text-muted-foreground">
                  {formatPrice(originalPriceUSD, currencyInfo)}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {formatPrice(currentPriceUSD, currencyInfo)}
                </p>
              </div>
              <span className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] text-[#0C1520] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">70% OFF TERMINA HOY</span>
            </div>
            <p className="text-xs text-foreground mt-1">
              O solo <span className="font-bold underline">{formatPrice(monthlyPriceUSD, currencyInfo)}/mes</span> a 6 meses sin intereses
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-base font-bold mb-3">+200 Protocolos naturales de salud, belleza y Wellness para:</h3>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">✦</div>
              <span className="text-sm">Conseguir un Glow natural y un cambio físico sin usar productos químicos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">≈</div>
              <span className="text-sm">Eliminar grasa abdominal, limpiar acné y deshinchar tu rostro en 14 días</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">⇈</div>
              <span className="text-sm">Ahorrar {formatLargePrice(annualSavingsUSD, currencyInfo)} al año en productos de Skincare y suplementos que no necesitas y que tienen ingredientes químicos e invasivos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">◎</div>
              <span className="text-sm">Tener independencia total del sistema, cero dependencia a productos y no efectos secundarios. Solo soluciones naturales que tu cuerpo reconoce.</span>
            </div>
          </div>
        </div>

        {/* Exclusive Gifts Section - Desktop */}
        <div className="hidden md:block -mt-4 mb-8">
          <ExclusiveGiftsSection />
        </div>

        {/* Móvil: mostrar galería primero */}
        <div className="md:hidden mb-4">
          <ProductGallery />
        </div>

        {/* Móvil: mostrar rating, título y precio después de galería */}
        <div className="md:hidden space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
              </div>
              <span className="text-xs text-foreground font-medium">4.7 / 5</span>
              <span className="text-muted-foreground text-xs">●</span>
              <span className="text-xs text-foreground font-medium">72,500+ Clientes lo aman</span>
            </div>
            <p className="text-xs text-foreground font-medium">#1 Best Seller en transformación Holística</p>
          </div>

          <div>
            <h1 className="text-xl font-bold leading-tight">REALIFESTACIÓN LIBRO DIGITAL - Black Friday 70% Off +4 regalos</h1>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-foreground line-through decoration-1 text-muted-foreground">
                  {formatPrice(originalPriceUSD, currencyInfo)}
                </p>
                <p className="text-xl font-bold text-foreground">
                  {formatPrice(currentPriceUSD, currencyInfo)}
                </p>
              </div>
              <span className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] text-[#0C1520] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">70% OFF</span>
            </div>
            <p className="text-xs text-foreground mt-1">
              O solo <span className="font-bold underline">{formatPrice(monthlyPriceUSD, currencyInfo)}/mes</span> a 6 meses sin intereses
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-base font-bold mb-3">+200 Protocolos naturales de salud, belleza y Wellness para:</h3>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">✦</div>
              <span className="text-sm">Conseguir un Glow natural y un cambio físico sin usar productos químicos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">≈</div>
              <span className="text-sm">Eliminar grasa abdominal, limpiar acné y deshinchar tu rostro en 14 días</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">⇈</div>
              <span className="text-sm">Ahorrar {formatLargePrice(annualSavingsUSD, currencyInfo)} al año en productos de Skincare y suplementos que no necesitas y que tienen ingredientes químicos e invasivos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0 w-6 text-center">◎</div>
              <span className="text-sm">Tener independencia total del sistema, cero dependencia a productos y no efectos secundarios. Solo soluciones naturales que tu cuerpo reconoce.</span>
            </div>
          </div>
        </div>

        {/* Exclusive Gifts Section - Mobile */}
        <div className="md:hidden -mt-4 mb-8">
          <ExclusiveGiftsSection />
        </div>

        <div className="space-y-3">
          <div className="space-y-0">
            {/* Live Users Counter - Above Add to Cart */}
            <div className="flex items-center justify-center gap-2 -mt-8">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">{liveUsers.toLocaleString()}</span>
              </div>
              <span className="text-sm text-muted-foreground">personas viendo este producto</span>
            </div>

            <Button 
              id="original-cart-button" 
              size="lg" 
              variant="cta" 
              className="w-full text-base font-bold h-14 uppercase tracking-wide"
              onClick={handleAddToCart}
            >
              Agregar al Carrito | {formatPrice(currentPriceUSD, currencyInfo)}
            </Button>
            
            {/* Warranty Icons Section */}
            <div className="grid grid-cols-3 gap-3 py-3 border-b border-border">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-[#4A5A8B] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#4A5A8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-[10px] font-semibold leading-tight">
                  <div>60 Dias de</div>
                  <div>Garantía</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-[#4A5A8B] flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-[#4A5A8B]" strokeWidth={2.5} />
                </div>
                <div className="text-[10px] font-semibold leading-tight">
                  <div>Entrega</div>
                  <div>Inmediata</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-[#4A5A8B] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#4A5A8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-[10px] font-semibold leading-tight">
                  <div>Soporte</div>
                  <div>24/7</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img src={paymentIcons} alt="Métodos de pago aceptados" className="h-8" />
          </div>

          {/* Featured Reviews Carousel */}
          <div className="relative">
            <div className="bg-white border-2 border-foreground/10 rounded-lg p-4 space-y-2 animate-fade-in shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold mb-0.5 text-foreground">{featuredReviews[currentReviewIndex].name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-gold">Verified customer</span>
                    <div className="w-4 h-4 rounded-full bg-gold flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-foreground/60">{featuredReviews[currentReviewIndex].date}</span>
              </div>
              
              <p className="text-sm leading-relaxed text-foreground/80">
                "{featuredReviews[currentReviewIndex].review}"
              </p>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-1.5 mt-3">
              {featuredReviews.map((_, idx) => <button key={idx} onClick={() => setCurrentReviewIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentReviewIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-primary/50'}`} aria-label={`Go to review ${idx + 1}`} />)}
            </div>
          </div>

          {/* Sección de Garantía */}
          <div className="bg-white border-2 border-foreground/10 rounded-lg p-4 shadow-sm">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">60</div>
                    <div className="text-[10px] text-foreground/60">Días</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1 text-foreground">Garantía de devolución de dinero de 60 días</h3>
                <p className="text-xs text-foreground/70">Una piel hermosa y un cambio físico toman tiempo. Prueba los protocolos, usa las plantillas y si no te gusta recibe un reembolso completo. 100% sin riesgo.</p>
              </div>
            </div>
          </div>


          {/* Product Information Accordion */}
          <div className="mt-8 pt-4 border-t border-border">
            <Accordion type="single" collapsible defaultValue="good-to-know" className="w-full">
              <AccordionItem value="good-to-know">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    <span>Bueno Saber</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/90 space-y-3">
                  <p className="font-semibold text-foreground">A diferencia de otros productos de belleza y bienestar, Realifestación:</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>No tiene ingredientes químicos ni sintéticos ocultos</strong> que dañan tu salud, tus hormonas y tu fertilidad.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>No te obliga a suscripciones eternas</strong> a productos. Compras una vez y tienes el conocimiento para siempre.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Ataca la raíz del problema:</strong> tus hormonas, tu estrés, tu gut health, metabolismo, sistema linfático y digestión. Mientras otros solo te venden un "calmante" para los síntomas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Es fácil y rápido:</strong> cada protocolo se elabora en menos de 5 minutos con soluciones 100% naturales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Sabes exactamente lo que le metes a tu cuerpo</strong> y el proceso de elaboración. Transparencia total.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Te da conocimiento que dura para siempre.</strong> No dependes de nadie más que de ti misma.</span>
                    </li>
                  </ul>
                  <p className="pt-2 text-foreground/80 italic border-t border-border/30 mt-3">Nosotros no intoxicamos tu cuerpo con disruptores hormonales que no resuelven el problema de raíz para mantenerte comprando. Te ofrecemos una solución natural, que te hace libre, consciente y te devuelve el poder a ti.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="description">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span>Descripción</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/90 space-y-2">
                  <p>Realifestación es un libro digital con +200 protocolos de salud, belleza y biohacking que te ayudarán a transformar tu vida usando ingredientes naturales que tu cuerpo reconoce.</p>
                  <p>Aprenderás a eliminar la dependencia de productos químicos costosos y dañinos, mientras ahorras más de {currencyInfo.isLoading ? '$10,000' : formatLargePrice(annualSavingsUSD, currencyInfo)} al año en suplementos, skincare y tratamientos innecesarios.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Protocolos Incluidos</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong>Protocolo SuperCalm:</strong> Reduce el cortisol naturalmente para eliminar grasa abdominal y deshinchar el rostro (adiós moon face).</p>
                  <p><strong>Protocolo Afrodita:</strong> Equilibra tus hormonas para eliminar acné y lograr piel radiante desde adentro.</p>
                  <p><strong>Dieta Afrodita:</strong> Los 42 alimentos más saludables del mundo para un glow natural en piel, cabello y energía.</p>
                  <p><strong>Shots Anti Acné y Anti Cortisol:</strong> Recetas rápidas de 5 minutos con ingredientes naturales para resultados visibles.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <Hand className="w-4 h-4 text-primary" />
                    <span>Cómo Usar</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>1. Descarga el libro digital instantáneamente después de tu compra (entrega inmediata por email)</p>
                  <p>2. Explora los +200 protocolos organizados por categorías: piel, cabello, energía, hormonas, bienestar</p>
                  <p>3. Elige los protocolos que se alinean con tus objetivos personales</p>
                  <p>4. Sigue las instrucciones paso a paso con ingredientes, dosis y notas detalladas</p>
                  <p>5. Implementa los protocolos en tu rutina (la mayoría toman solo 5 minutos)</p>
                  <p>Los resultados son acumulativos: consistencia es clave para transformaciones duraderas.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specs">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <span>Qué Incluye</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong>Incluye:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Libro Digital Realifestación (PDF de alta calidad)</li>
                    <li>+200 Protocolos de Salud, Belleza y Biohacking</li>
                    <li>Protocolo SuperCalm (reduce cortisol y grasa abdominal)</li>
                    <li>Protocolo Afrodita (elimina acné hormonal)</li>
                    <li>Dieta Afrodita (42 alimentos más saludables del mundo)</li>
                    <li>Shots Anti Acné y Anti Cortisol (recetas de 5 minutos)</li>
                    <li>Imágenes ilustrativas para cada protocolo</li>
                    <li>Instrucciones, dosis y notas detalladas</li>
                  </ul>
                  <p className="mt-3"><strong>Especificaciones:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Formato: PDF digital descargable</li>
                    <li>Entrega: Inmediata por email</li>
                    <li>Acceso: De por vida (sin suscripciones)</li>
                    <li>Compatibilidad: Cualquier dispositivo (móvil, tablet, PC)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sustainability">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span>Compromiso Natural</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>Estamos comprometidos con un enfoque 100% natural y sostenible. Todos los protocolos utilizan ingredientes que tu cuerpo reconoce, sin químicos sintéticos ni dependencia de big pharma.</p>
                  <p>Al ser digital, eliminamos el impacto ambiental del envío físico. Nuestro objetivo es empoderarte con conocimiento para que cuides tu salud de forma natural, económica y sostenible a largo plazo.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>
    </div>

    {/* Infinite Scrolling Messages Bar - Full Width */}
    <div className="mt-8 overflow-hidden bg-primary text-primary-foreground py-3 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="inline-flex items-center gap-2 animate-scroll-seamless whitespace-nowrap">
        {/* Primer set de mensajes */}
        <span className="text-sm font-semibold">#1 best seller en wellness</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">CONTENIDO PATENTADO E INNOVADOR</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">BASADO EN CIENCIA Y NO INVASIVO</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">+200 PROTOCOLOS DE SALUD Y BELLEZA</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        
        {/* Segundo set duplicado exacto para scroll infinito sin cortes */}
        <span className="text-sm font-semibold">#1 BEST SELLER EN WELLNESS            </span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">CONTENIDO PATENTADO E INNOVADOR</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">BASADO EN CIENCIA Y NO INVASIVO</span>
        <span className="text-primary-foreground/40 px-1">•</span>
        <span className="text-sm font-semibold">+200 PROTOCOLOS DE SALUD Y BELLEZA</span>
        <span className="text-primary-foreground/40 px-1">•</span>
      </div>
    </div>

    {/* Authority Logos Section */}
    
    </div>
  </>;
};
export default ProductInfo;