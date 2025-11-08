import { Star, Clock, DollarSign, Sparkles, TrendingUp, Timer, Mail } from "lucide-react";
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
const featuredReviews = [{
  name: "Christina A.",
  date: "April 4, 2025",
  review: "Antes me gastaba como $150 usd al mes en suplementos, desde que compre este libro los deje TODOS y fue la mejor decisión, nada como lo natural"
}, {
  name: "Sarah M.",
  date: "March 28, 2025",
  review: "After just 2 weeks, my skin looks brighter and feels so much smoother. The red light therapy is incredible!"
}, {
  name: "Jessica L.",
  date: "March 15, 2025",
  review: "This wand has become part of my daily routine. My friends keep asking what I'm doing differently - my skin glows!"
}, {
  name: "Amanda K.",
  date: "February 22, 2025",
  review: "Best investment for my skin! The combination of technologies really works. I've noticed fewer fine lines around my eyes."
}, {
  name: "Rachel T.",
  date: "February 10, 2025",
  review: "I was skeptical at first, but wow! My skin feels tighter and looks more radiant. The built-in timer makes it so easy to use."
}];
const ProductInfo = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [liveUsers, setLiveUsers] = useState(1150);
  const [copied, setCopied] = useState(false);

  // Calcular la fecha de mañana
  const tomorrow = addDays(new Date(), 1);
  const formattedDate = format(tomorrow, "d 'de' MMMM", {
    locale: es
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % featuredReviews.length);
    }, 13000);
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
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna izquierda - Imágenes (solo en desktop) - STICKY */}
      <div className="hidden md:block md:sticky md:top-4 md:self-start md:h-fit">
        <ProductGallery />
      </div>

      {/* Columna derecha - Información - SCROLLABLE */}
      <div className="space-y-6">
        {/* Desktop: mostrar rating, título y precio primero */}
        <div className="hidden md:block space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />)}
              </div>
              <span className="text-xs text-foreground font-medium">4.7 / 5</span>
              <span className="text-muted-foreground text-xs">●</span>
              <span className="text-xs text-foreground font-medium">Loved by 726,000+ customers</span>
            </div>
            <p className="text-xs text-foreground font-medium">#1 Best Seller en transformación Holística</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold leading-tight">
              4-in-1 Radiant Renewal Skincare Wand with Red Light Therapy
            </h1>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-foreground line-through decoration-1 text-muted-foreground">$99</p>
              <p className="text-2xl font-bold text-foreground">$169</p>
            </div>
          </div>

          

          
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
              <span className="text-xs text-foreground font-medium">726,000+ Clientes lo aman</span>
            </div>
            <p className="text-xs text-foreground font-medium">#1 Best Seller en transformación Holística</p>
          </div>

          <div>
            <h1 className="text-xl font-bold leading-tight">REALIFESTACIÓN LIBRO DIGITAL
- 50% Off +4 regalos</h1>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-foreground line-through decoration-1 text-muted-foreground">$99</p>
                <p className="text-xl font-bold text-foreground">$49.99</p>
              </div>
              <span className="bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">50% OFF</span>
            </div>
            <p className="text-xs text-foreground mt-1">O solo $8.3/mes Shopay</p>
          </div>
        </div>

        <p className="text-sm text-foreground/90 leading-relaxed">El primer libro enciclopedia Wellness del mundo con +200 Protocolos, recetas y remedios naturales paso a paso para skincare, salud hormonal y digestiva, biohacking y más.. Sin depender de pastillas o suplementos con ingredientes químicos que te envenenan silenciosamente. Tú estás en control de lo que entra a tu cuerpo. </p>

        <div>
          
        </div>

        <div className="border border-border rounded-lg p-4">
          <h3 className="font-bold text-base mb-4">Recupera tu belleza, tu salud y tu energía en 14 días sin productos químicos...</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">✦</div>
              <span className="text-sm">Elimina grasa abdominal y Deshincha tu rostro (bajando tu cortisol)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">≈</div>
              <span className="text-sm">Elimina acne hormonal (protocolo super calm y protocolo Afrodita)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">⇈</div>
              <span className="text-sm">Elimina fatiga durante el día, insomnio y apariencia de cansancio.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">◎</div>
              <span className="text-sm">Reduce tu estrés de forma natural y acelera tu metabolismo sin depender de productos químicos que dañan tu salud.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-primary text-xl flex-shrink-0">✓</div>
              <span className="text-sm">Todo con recetas y protocolos paso a paso que toman solo 5 minutos.</span>
            </div>
          </div>
        </div>

        {/* Countdown 24 Hours */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 border-2 border-primary/30 rounded-xl p-6 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50"></div>
          <div className="relative z-10 space-y-3">
            <p className="text-center text-sm font-bold uppercase tracking-wide text-foreground">
              50% OFF + 4 Regalos Termina En:
            </p>
            <div className="flex justify-center gap-2">
              {(() => {
                const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
                useEffect(() => {
                  const timer = setInterval(() => {
                    setTimeLeft(prev => {
                      if (prev <= 0) return 24 * 60 * 60;
                      return prev - 1;
                    });
                  }, 1000);
                  return () => clearInterval(timer);
                }, []);
                const hours = Math.floor(timeLeft / 3600);
                const minutes = Math.floor(timeLeft % 3600 / 60);
                const seconds = timeLeft % 60;
                return <>
                    <div className="flex flex-col items-center justify-center bg-background border border-border/50 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
                      <span className="text-2xl font-bold text-foreground tabular-nums">
                        {String(hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">Horas</span>
                    </div>
                    <div className="flex items-center text-2xl font-bold text-primary">:</div>
                    <div className="flex flex-col items-center justify-center bg-background border border-border/50 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
                      <span className="text-2xl font-bold text-foreground tabular-nums">
                        {String(minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">Minutos</span>
                    </div>
                    <div className="flex items-center text-2xl font-bold text-primary">:</div>
                    <div className="flex flex-col items-center justify-center bg-background border border-border/50 rounded-lg px-4 py-3 min-w-[70px] shadow-sm">
                      <span className="text-2xl font-bold text-foreground tabular-nums">
                        {String(seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">Segundos</span>
                    </div>
                  </>;
              })()}
            </div>
            <p className="text-center text-xs font-medium text-foreground/80 pt-1">🎁 Ordena antes del 8 Nov. para recibir Regalos</p>
          </div>
        </div>




        
      </div>
    </div>

    {/* Infinite Scrolling Messages Bar - Full Width */}
    <div className="mt-8 overflow-hidden bg-primary text-primary-foreground py-3 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="flex items-center gap-8 animate-scroll-infinite whitespace-nowrap">
        {/* Primer set de mensajes */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">✨ ENVÍO GRATIS en todos los pedidos</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">🎁 4 REGALOS GRATIS con tu primera compra</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">⚡ OFERTA LIMITADA - Solo quedan 120 unidades</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
        
        {/* Segundo set de mensajes (duplicado para efecto infinito) */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">✨ ENVÍO GRATIS en todos los pedidos</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">🎁 4 REGALOS GRATIS con tu primera compra</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">⚡ OFERTA LIMITADA - Solo quedan 120 unidades</span>
        </div>
        <span className="text-primary-foreground/40">•</span>
      </div>
    </div>

    {/* Authority Logos Section */}
    <div className="py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-4">
          Inspirado en prácticas aprobadas por...
        </p>
        <div className="grid grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
          {[{
            src: logoApa,
            alt: "American Psychological Association"
          }, {
            src: logoNonGmo,
            alt: "Non GMO Project"
          }, {
            src: logoCrueltyFree,
            alt: "Cruelty Free"
          }, {
            src: logoUsdaOrganic,
            alt: "USDA Organic"
          }].map((logo, i) => <div key={i} className="w-full h-28 md:h-32 flex items-center justify-center p-2">
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
            </div>)}
        </div>
      </div>
    </div>
  </>;
};
export default ProductInfo;