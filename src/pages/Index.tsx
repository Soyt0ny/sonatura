import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductInfo from "@/components/ProductInfo";
import StickyCartBar from "@/components/StickyCartBar";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import DailyOrdersNotification from "@/components/DailyOrdersNotification";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import ClinicalResultsSection from "@/components/ClinicalResultsSection";
import UGCCarousel from "@/components/UGCCarousel";
import BookExplanationSection from "@/components/BookExplanationSection";
import BookStructureSection from "@/components/BookStructureSection";
import BookUniqueFeatures from "@/components/BookUniqueFeatures";
import ComparisonSection from "@/components/ComparisonSection";
import ProfessionalEndorsements from "@/components/ProfessionalEndorsements";
import CertificationBadges from "@/components/CertificationBadges";
import NewsletterSection from "@/components/NewsletterSection";

import GuaranteeSection from "@/components/GuaranteeSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoVogue from "@/assets/logo-vogue.png";
import logoElle from "@/assets/logo-elle.png";
import logoGoop from "@/assets/logo-goop.png";
import logoWomensHealth from "@/assets/logo-womenshealth.png";
const Index = () => {
  return <div className="min-h-screen">
      <AnnouncementBar />
      <DailyOrdersNotification />
      <StickyCartBar />
      <Header />
      
      <main className="container mx-auto px-4 pt-0 md:pt-8 pb-8 md:pb-12">
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

        {/* Before After Carousel */}
        <BeforeAfterCarousel />

      {/* Professional Endorsements */}
      <ProfessionalEndorsements />

      {/* Certification Badges */}
      <CertificationBadges />

        {/* Book Unique Features Section */}
        <BookUniqueFeatures />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Clinical Results Section */}
        <ClinicalResultsSection />


        {/* Testimonials */}
        <section className="mt-16 md:mt-24 bg-accent/20 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestras Clientas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "¡Resultados increíbles! En solo 2 semanas noté cambios reales en mi piel y mi energía. ¡Lo recomiendo totalmente!"
              </p>
              <p className="text-sm font-semibold">- María L.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 3 días</p>
            </div>
            {/* Review 2 */}
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "$67 me parece poco a comparación de lo que viene en el libro, es una BARBARIDAD lo que hay dentro y sobre todo que funciona, 10/10 sin duda."
              </p>
              <p className="text-sm font-semibold">- Sarah M.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 1 semana</p>
            </div>
            {/* Review 3 */}
            <div className="bg-background border border-border/40 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => <span key={idx} className="text-primary">★</span>)}
              </div>
              <p className="text-sm mb-4">
                "Pensé que era otra estafa más, pero los protocolos funcionan de verdad. Mi acné hormonal prácticamente desapareció."
              </p>
              <p className="text-sm font-semibold">- Ana R.</p>
              <p className="text-xs text-muted-foreground">Compradora Verificada · Hace 12 días</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cuánto me gastaría en materiales para los protocolos del libro?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Los protocolos están diseñados con ingredientes accesibles y económicos. En promedio, gastarías entre $15-30 USD al mes en materiales, dependiendo del protocolo que sigas. Todos los ingredientes son naturales y se encuentran fácilmente en supermercados o tiendas naturistas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cómo recibo el libro y los regalos?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Recibirás el libro en formato digital (PDF) inmediatamente por correo electrónico después de tu compra. Los regalos exclusivos también son digitales y los recibirás en el mismo email. Puedes acceder a todo desde cualquier dispositivo y empezar de inmediato.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Funcionará para mí?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ¡Absolutamente! Los protocolos funcionan independientemente de tu edad, género, país o condición actual. Los métodos naturales son universales y se adaptan a cualquier persona. Miles de clientas de diferentes países y perfiles han obtenido resultados exitosos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cuánto tiempo tardaré en ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                La mayoría de nuestras clientas reportan cambios notables en los primeros 14 días siguiendo los protocolos de forma constante. Para resultados óptimos y duraderos, recomendamos seguir los protocolos durante 8-12 semanas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Puedo cancelar mi orden?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Como es un producto digital, no es posible cancelar después de recibirlo. Sin embargo, ofrecemos una garantía de satisfacción de 60 días. Si no estás satisfecha con el contenido, te devolvemos tu dinero sin hacer preguntas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Qué métodos de pago aceptan?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), así como PayPal y pagos a meses sin intereses. Todos los pagos son procesados de forma segura con encriptación SSL.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Si mi tarjeta de crédito es rechazada?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Si tu tarjeta es rechazada, verifica que los datos estén correctos y que tengas fondos suficientes. También puedes intentar con otra tarjeta o usar PayPal. Si el problema persiste, contacta a tu banco o escríbenos a soporte@sonatura.com para ayudarte.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cómo puedo contactarlos?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Puedes escribirnos a soporte@sonatura.com y nuestro equipo responderá en menos de 24 horas. También puedes contactarnos a través de nuestras redes sociales. Estamos aquí para ayudarte con cualquier pregunta o inquietud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Venden en todo el mundo?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ¡Sí! Como es un producto digital, está disponible en cualquier país del mundo. Una vez completada tu compra, recibirás acceso instantáneo sin importar dónde te encuentres. Aceptamos pagos en múltiples monedas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Cómo funciona?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                El libro contiene protocolos paso a paso que identifican la raíz de tus problemas hormonales y te guían con métodos naturales específicos. Sigues el protocolo correspondiente a tu situación durante 7-14 días y observas los cambios. Es simple, natural y efectivo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="hover:no-underline">
                ¿Es seguro de usar?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                ¡Totalmente! Todos los protocolos utilizan ingredientes 100% naturales que tu cuerpo reconoce. No contienen químicos dañinos, disruptores hormonales ni ingredientes artificiales. Es seguro para cualquier persona y sin efectos secundarios adversos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;