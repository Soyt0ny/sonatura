import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductInfo from "@/components/ProductInfo";
import StickyCartBar from "@/components/StickyCartBar";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import DailyOrdersNotification from "@/components/DailyOrdersNotification";
import ReviewsSection from "@/components/ReviewsSection";
import ClinicalResultsSection from "@/components/ClinicalResultsSection";
import UGCCarousel from "@/components/UGCCarousel";
import BookExplanationSection from "@/components/BookExplanationSection";
import BookStructureSection from "@/components/BookStructureSection";
import BookUniqueFeatures from "@/components/BookUniqueFeatures";
import ComparisonSection from "@/components/ComparisonSection";
import ProfessionalEndorsements from "@/components/ProfessionalEndorsements";
import CertificationBadges from "@/components/CertificationBadges";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoVogue from "@/assets/logo-vogue.png";
import logoElle from "@/assets/logo-elle.png";
import logoGoop from "@/assets/logo-goop.png";
import logoWomensHealth from "@/assets/logo-womenshealth.png";
const Index = () => {
  return <div className="min-h-screen">
      <DailyOrdersNotification />
      <StickyCartBar />
      <Header />
      
      <main className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <ProductInfo />
        </div>

        {/* As Seen In Section */}
        <section className="mb-8 md:mb-12 border-y border-border/20 py-12">
          <h2 className="text-sm md:text-base font-medium text-center mb-10 tracking-wider uppercase text-foreground">Como lo viste en</h2>
          <div className="flex items-center justify-center gap-2 md:gap-12 lg:gap-16 px-2 md:px-4 overflow-x-auto">
            <img src={logoVogue} alt="Vogue" className="w-24 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src={logoElle} alt="Elle" className="w-24 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src={logoGoop} alt="Goop" className="w-24 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
            <img src={logoWomensHealth} alt="Women's Health" className="w-24 md:w-36 lg:w-44 flex-shrink-0 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert transition-all duration-300" />
          </div>
        </section>

        {/* UGC Carousel */}
        <UGCCarousel />

        {/* Book Explanation Section */}
        <BookExplanationSection />

        {/* Book Structure Section */}
        <BookStructureSection />

        {/* Before After Carousel */}
        <BeforeAfterCarousel />

        {/* How It Works Section */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/30 border border-border/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">1</span>
              </div>
              <h3 className="font-semibold mb-2">Identifica un prob                                                                                                                                                                                                     </h3>
              <p className="text-sm text-muted-foreground">
                Por ejemplo:
Cortisol Elevado.   





   
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/30 border border-border/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">2</span>
              </div>
              <h3 className="font-semibold mb-2">Sigues protocolos correspondientes 7-14 dias...    </h3>
              <p className="text-sm text-muted-foreground">
                



Ahora que identificaste el cortisol elevado solo sigue el protocolo supercalm, y si quieres resultados mas rápidos y efectivos puedes seguir a la vez el Detox de dopamina, 
Nuestros protocolos son un sistema paso a paso fáciles de seguir para cualquiera, usando ingredientes que todos pueden conseguir.


















                                                                      
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/30 border border-border/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">3</span>
              </div>
              <h3 className="font-semibold mb-2">Obtienes resultados     </h3>
              <p className="text-sm text-muted-foreground">
                





Sin pastillas químicas, sin suplementos con ingredientes que no reconoce tu cuerpo, sin productos caros con disrruptores hormonales. Todo es natural, controlado por ti y con ingredientes que tu cuerpo reconoce.


Además usa nuestras plantillas de apoyo en Notion para mantenerte constante con los protocolos fácilmente y poder seguir varios a la vez sin perderte, 
De igual forma puedes dejar tus preguntas en nuestra comunidad             

 

  



                                                                                                             
              </p>
            </div>
          </div>
        </section>

        {/* Book Unique Features Section */}
        <BookUniqueFeatures />

        {/* Comparison Section */}
        <ComparisonSection />

      {/* Professional Endorsements */}
      <ProfessionalEndorsements />

      {/* Certification Badges */}
      <CertificationBadges />

        {/* Clinical Results Section */}
        <ClinicalResultsSection />

        {/* Testimonials */}
        <section className="mt-16 md:mt-24 bg-accent/20 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestras Clientas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="bg-background border border-border/40 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
                </div>
                <p className="text-sm mb-4">
                  "¡Resultados increíbles! Mis pestañas son mucho más largas y llenas. ¡Recibo cumplidos todo el tiempo!"
                </p>
                <p className="text-sm font-semibold">- Sarah M.</p>
                <p className="text-xs text-muted-foreground">Compradora Verificada</p>
              </div>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cuánto tiempo hasta ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                La mayoría de usuarias ven resultados visibles en 2-4 semanas de uso diario constante. Para resultados óptimos, recomendamos usar el sérum consistentemente durante al menos 8 semanas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Es seguro de usar?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ¡Sí! Nuestra fórmula está probada dermatológicamente y es segura para uso diario. Está libre de parabenos, sulfatos y fragancias artificiales. Ha sido probada oftalmológicamente y es apta para ojos sensibles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cómo lo aplico?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Aplica en pestañas limpias y secas en la base, similar al delineador, una vez al día antes de dormir. Deja secar completamente antes de aplicar otros productos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Puedo usarlo con extensiones de pestañas?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Sí, el sérum es compatible con extensiones de pestañas. De hecho, puede ayudar a fortalecer tus pestañas naturales debajo de las extensiones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cuánto dura un frasco?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Un frasco de 5ml dura aproximadamente 3-4 meses con uso diario, lo que lo convierte en una inversión muy rentable para el cuidado de tus pestañas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Tiene efectos secundarios?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Nuestro sérum está formulado para minimizar efectos secundarios. En casos raros, algunas usuarias pueden experimentar leve irritación. Si esto ocurre, discontinúa el uso y consulta con tu médico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Funciona en cejas también?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ¡Sí! Muchas clientas lo usan también en sus cejas con excelentes resultados. Aplica de la misma manera que en las pestañas, siguiendo la línea de las cejas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Qué pasa si dejo de usarlo?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Tus pestañas gradualmente volverán a su estado original durante varios meses. Para mantener los resultados, recomendamos uso continuo o aplicación 2-3 veces por semana como mantenimiento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Puedo usar máscara después de aplicarlo?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Recomendamos aplicar el sérum por la noche para mejores resultados. Por la mañana, puedes usar máscara y otros productos de maquillaje normalmente sin problema.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Ofrecen garantía de devolución de dinero?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Sí, ofrecemos una garantía de 60 días. Si no estás completamente satisfecha con los resultados, te devolvemos tu dinero sin preguntas. Tu satisfacción es nuestra prioridad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-16 md:mt-24 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FORCHICS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;