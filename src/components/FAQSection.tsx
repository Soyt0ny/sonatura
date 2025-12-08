import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="space-y-4">
        <AccordionItem value="item-1" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Funcionará para mí?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            ¡Absolutamente! Los protocolos funcionan independientemente de tu edad, género, país o condición actual. Los métodos naturales son universales y se adaptan a cualquier persona. Miles de clientas de diferentes países y perfiles han obtenido resultados exitosos.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Cuánto tiempo tardaré en ver resultados?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            La mayoría de nuestras clientas reportan cambios notables en los primeros 14 días siguiendo los protocolos de forma constante. Para resultados óptimos y duraderos, recomendamos seguir los protocolos durante 8-12 semanas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Cómo funciona?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            El libro contiene protocolos paso a paso que identifican la raíz de tus problemas hormonales y te guían con métodos naturales específicos. Sigues el protocolo correspondiente a tu situación durante 7-14 días y observas los cambios. Es simple, natural y efectivo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Cómo recibo el libro y los regalos?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            Recibirás el libro en formato digital (PDF) inmediatamente por correo electrónico después de tu compra. Los regalos exclusivos también son digitales y los recibirás en el mismo email. Puedes acceder a todo desde cualquier dispositivo y empezar de inmediato.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Es seguro de usar?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            ¡Totalmente! Todos los protocolos utilizan ingredientes 100% naturales que tu cuerpo reconoce. No contienen químicos dañinos, disruptores hormonales ni ingredientes artificiales. Es seguro para cualquier persona y sin efectos secundarios adversos.
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
            ¿Venden en todo el mundo?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            ¡Sí! Como es un producto digital, está disponible en cualquier país del mundo. Una vez completada tu compra, recibirás acceso instantáneo sin importar dónde te encuentres. Aceptamos pagos en múltiples monedas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Puedo cancelar mi orden?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            Como es un producto digital, no es posible cancelar después de recibirlo. Sin embargo, ofrecemos una garantía de satisfacción de 60 días. Si no estás satisfecha con el contenido, te devolvemos tu dinero sin hacer preguntas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Si mi tarjeta de crédito es rechazada?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            Si tu tarjeta es rechazada, verifica que los datos estén correctos y que tengas fondos suficientes. También puedes intentar con otra tarjeta o usar PayPal. Si el problema persiste, contacta a tu banco o escríbenos a soporte@sonatura.com para ayudarte.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10" className="bg-background border border-border/40 rounded-lg px-6 shadow-sm">
          <AccordionTrigger className="hover:no-underline">
            ¿Cómo puedo contactarlos?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            Puedes escribirnos a soporte@sonatura.com y nuestro equipo responderá en menos de 24 horas. También puedes contactarnos a través de nuestras redes sociales. Estamos aquí para ayudarte con cualquier pregunta o inquietud.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;