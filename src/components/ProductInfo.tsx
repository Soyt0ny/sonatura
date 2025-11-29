import { Star, Clock, DollarSign, Sparkles, TrendingUp, Timer, Mail, Info, FileText, Zap, Hand, Package, Leaf } from "lucide-react";
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
              <span className="text-xs text-foreground font-medium">Loved by 726,000+ customers</span>
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
                <p className="text-2xl font-bold text-foreground line-through decoration-1 text-muted-foreground">$123</p>
                <p className="text-2xl font-bold text-foreground">$37</p>
              </div>
              <span className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] text-[#0C1520] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">70% OFF TERMINA HOY</span>
            </div>
            <p className="text-xs text-foreground mt-1">
              O solo <span className="font-bold underline">$6.17/mes</span> a 6 meses sin intereses
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-base font-bold mb-3">+200 Protocolos de salud, belleza y wellness para:</h3>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">✦</div>
              <span className="text-sm">Elimina grasa abdominal y Deshincha tu rostro (bajando tu cortisol)</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">≈</div>
              <span className="text-sm">Elimina acne hormonal (protocolo super calm y protocolo Afrodita)</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">⇈</div>
              <span className="text-sm">Elimina fatiga durante el día, insomnio y apariencia de cansancio.</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">◎</div>
              <span className="text-sm">Reduce tu estrés de forma natural y acelera tu metabolismo sin depender de productos químicos que dañan tu salud.</span>
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
              <span className="text-xs text-foreground font-medium">726,000+ Clientes lo aman</span>
            </div>
            <p className="text-xs text-foreground font-medium">#1 Best Seller en transformación Holística</p>
          </div>

          <div>
            <h1 className="text-xl font-bold leading-tight">REALIFESTACIÓN LIBRO DIGITAL - Black Friday 70% Off +4 regalos</h1>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-foreground line-through decoration-1 text-muted-foreground">$123</p>
                <p className="text-xl font-bold text-foreground">$37</p>
              </div>
              <span className="bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] text-[#0C1520] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">70% OFF</span>
            </div>
            <p className="text-xs text-foreground mt-1">
              O solo <span className="font-bold underline">$6.17/mes</span> a 6 meses sin intereses
            </p>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="text-base font-bold mb-3">+200 Protocolos de salud, belleza y Wellness para:</h3>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">✦</div>
              <span className="text-sm">Conseguir un Glow natural y un cambio físico sin usar productos químicos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">≈</div>
              <span className="text-sm">Eliminar grasa abdominal, limpiar acné y deshinchar tu rostro en 14 días</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">⇈</div>
              <span className="text-sm">Ahorrar $10k al año en productos de Skincare y suplementos que no necesitas y que tienen ingredientes químicos e invasivos que dañan tu salud</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-primary text-lg flex-shrink-0">◎</div>
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

            <Button id="original-cart-button" size="lg" variant="cta" className="w-full text-base font-bold h-14 uppercase tracking-wide">
              Agregar al Carrito | $67
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
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>Realifestación es un libro digital con +200 protocolos de salud, belleza y biohacking que te ayudarán a transformar tu vida usando ingredientes naturales que tu cuerpo reconoce.</p>
                  <p>Aprenderás a eliminar la dependencia de productos químicos costosos y dañinos, mientras ahorras más de $10,000 al año en suplementos, skincare y tratamientos innecesarios.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="description">
                <AccordionTrigger className="text-base font-bold">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span>Descripción</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground space-y-2">
                  <p>Este libro revolucionario combina protocolos respaldados por ciencia para abordar problemas desde la raíz: acné hormonal, grasa abdominal por cortisol elevado, fatiga crónica, insomnio y más.</p>
                  <p>Perfecto para quienes buscan independencia del sistema farmacéutico y quieren lograr un glow-up natural sin productos químicos que dañan tus hormonas y tu salud a largo plazo.</p>
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