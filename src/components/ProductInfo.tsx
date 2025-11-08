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
    <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna izquierda - Imágenes (solo en desktop) - STICKY */}
      <div className="hidden md:block md:sticky md:top-4 md:self-start md:h-fit">
        <ProductGallery />
      </div>

      {/* Columna derecha - Información - SCROLLABLE */}
      <div className="w-full space-y-6">
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
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-foreground line-through decoration-1 text-muted-foreground">$99</p>
                <p className="text-2xl font-bold text-foreground">$49.99</p>
              </div>
              <span className="bg-gradient-to-r from-[#FF6B4A] to-[#C83C2E] text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">50% OFF</span>
            </div>
            <p className="text-xs text-foreground mt-1">O solo $8.3/mes Shopay</p>
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




        <div className="space-y-3">
          {/* Countdown Timer */}
          
          
          {/* Live Users Counter */}
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-foreground">{liveUsers.toLocaleString()}</span>
            </div>
            <span className="text-sm text-muted-foreground">personas viendo este producto</span>
          </div>
          
          {/* Código de Descuento */}
          <div className="flex items-center justify-center gap-1.5 text-xs py-2 transition-colors">
            <span className={copied ? "text-primary font-medium" : "text-muted-foreground"}>
              {copied ? "✓ ¡Código copiado!" : "Para 10% extra usa el código"}
            </span>
            <button onClick={() => {
              navigator.clipboard.writeText("2026");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }} className="inline-flex items-center gap-1 font-semibold text-foreground underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-colors">
              2026
              <Copy className="w-3 h-3 opacity-50" />
            </button>
          </div>
          
          <div className="space-y-0">
            {/* FREE GIFTS Section - Right above Add to Cart button */}
            <div className="space-y-4 mb-4">
              <h4 className="font-bold text-center text-base">
                <span className="font-extrabold">EXCLUSIVE SALE!</span> FREE Gifts With Your First Order
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {[{
                  value: "$10",
                  name: "Digital Book",
                  image: giftDigitalBook
                }, {
                  value: "$6",
                  name: "Free Shipping",
                  image: giftFreeShipping
                }, {
                  value: "$19",
                  name: "Lash Curler",
                  image: giftLashCurler
                }, {
                  value: "$25",
                  name: "Mascara",
                  image: giftMascara
                }].map((gift, idx) => <div key={idx} className="flex flex-col items-center">
                    <div className="border border-dashed border-foreground/30 rounded-sm p-2.5 w-full">
                      <div className="text-center mb-2">
                        <span className="text-[9px] font-bold">GRATIS <span className="line-through decoration-1">{gift.value}</span></span>
                      </div>
                      <div className="aspect-[4/3] bg-[#FFE4E4] rounded-sm flex items-center justify-center overflow-hidden">
                        <img src={gift.image} alt={gift.name} className="w-full h-full object-contain p-1" />
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-[11px] font-semibold leading-tight">{gift.name}</span>
                    </div>
                  </div>)}
              </div>
            </div>

            <Button id="original-cart-button" size="lg" variant="cta" className="w-full text-base font-bold h-14 uppercase tracking-wide">
              Agregar al Carrito | $169
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

          {/* Sección de Stock Limitado */}
          <div className="bg-accent/20 border border-border/60 rounded-lg p-3 space-y-2">
            <h3 className="text-base font-bold">SOLO 1,000 COPIAS A ESTE PRECIO</h3>
            <p className="text-xs text-muted-foreground">Una vez lleguemos a las 1,000 ventas la oferta de lanzamiento terminará y el precio regresará a $99 dólares.</p>
            <div className="space-y-1">
              <Progress value={88} className="h-5" />
              <p className="text-xs font-semibold">87% VENDIDO</p>
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
                <p className="text-xs text-muted-foreground">Una piel hermosa y un cambio físico toman tiempo. Ama tus resultados o recibe un reembolso completo. 100% sin riesgo.</p>
              </div>
            </div>
          </div>

          {/* Real Results Section */}
          <div className="mt-8 space-y-1.5">
            <h2 className="text-base font-bold">Real results from real customers</h2>
            
            {/* Video Testimonials Grid - Optimized for Reels/TikTok */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="relative aspect-[9/16] bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C83C2E] flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>)}
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
                {featuredReviews.map((_, idx) => <button key={idx} onClick={() => setCurrentReviewIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentReviewIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-primary/50'}`} aria-label={`Go to review ${idx + 1}`} />)}
              </div>
            </div>
          </div>

          {/* Product Information Accordion */}
          <div className="mt-8 pt-4 border-t border-border">
            <Accordion type="single" collapsible defaultValue="good-to-know" className="w-full">
              <AccordionItem value="good-to-know">
                <AccordionTrigger className="text-base font-bold">Good To Know</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>The 4-in-1 Radiant Renewal Skincare Wand combines red light therapy, therapeutic warmth, galvanic current, and facial massage to deliver professional-grade skincare results at home.</p>
                  <p>Clinically proven to reduce fine lines and wrinkles while boosting collagen production for firmer, more youthful-looking skin.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="description">
                <AccordionTrigger className="text-base font-bold">Description</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>This award-winning skincare wand uses 4 science-backed technologies to transform your skin in just 12 minutes a day. With its rotating head and built-in timer, you have complete control over targeting specific areas of concern.</p>
                  <p>Perfect for all skin types, this device helps reduce puffiness, smooth fine lines, boost radiance, and refresh tired skin for a naturally glowing complexion.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology">
                <AccordionTrigger className="text-base font-bold">Technology</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong>Red Light Therapy (630nm):</strong> Stimulates collagen production and reduces the appearance of fine lines and wrinkles.</p>
                  <p><strong>Therapeutic Warmth:</strong> Relaxes facial muscles and soothes skin for enhanced product absorption.</p>
                  <p><strong>Galvanic Current:</strong> Activates serums and deeply hydrates skin for maximum effectiveness.</p>
                  <p><strong>Facial Massage:</strong> Reduces puffiness and promotes lymphatic drainage for a sculpted, refreshed appearance.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-base font-bold">How to Use</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>1. Cleanse your face and apply your favorite serum or moisturizer</p>
                  <p>2. Turn on the device and select your desired mode</p>
                  <p>3. Gently glide the wand across your face in upward motions</p>
                  <p>4. Use for 3 minutes per area (forehead, cheeks, jawline, neck)</p>
                  <p>5. The built-in timer will alert you when each section is complete</p>
                  <p>Use daily for best results. Clean the device after each use.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specs">
                <AccordionTrigger className="text-base font-bold">Specs & What's Included</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong>What's Included:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1x Radiant Renewal Skincare Wand</li>
                    <li>1x USB Charging Cable</li>
                    <li>1x User Manual</li>
                    <li>FREE Digital Beauty Guide ($10 value)</li>
                    <li>FREE Lash Curler ($19 value)</li>
                    <li>FREE Premium Mascara ($25 value)</li>
                  </ul>
                  <p className="mt-3"><strong>Specifications:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Red Light Wavelength: 630nm</li>
                    <li>Battery Life: Up to 2 weeks per charge</li>
                    <li>Treatment Time: 12 minutes (3 min per zone)</li>
                    <li>Weight: 4.2 oz</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sustainability">
                <AccordionTrigger className="text-base font-bold">Sustainability</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>We're committed to sustainable beauty practices. Our device is built to last for years, reducing the need for disposable beauty products.</p>
                  <p>Packaging is made from 100% recyclable materials, and we partner with carbon-neutral shipping providers to minimize our environmental impact.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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