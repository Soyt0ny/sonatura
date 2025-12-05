import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import beforeAfterNew1 from "@/assets/before-after-new-1.png";
import beforeAfterNew2 from "@/assets/before-after-new-2.png";
import beforeAfterNew3 from "@/assets/before-after-new-3.png";
import beforeAfterNew4 from "@/assets/before-after-new-4.png";
import beforeAfterNew5 from "@/assets/before-after-new-5.png";
import beforeAfterNew6 from "@/assets/before-after-new-6.png";
import beforeAfterNew7 from "@/assets/before-after-new-7.png";
import beforeAfterNew8 from "@/assets/before-after-new-8.png";
import result1 from "@/assets/result-1.png";
import result2 from "@/assets/result-2.png";
import result3 from "@/assets/result-3.png";
import result4 from "@/assets/result-4.png";
import result5 from "@/assets/result-5.png";
import result6 from "@/assets/result-6.png";

const testimonials = [
  [
    { id: 1, image: beforeAfterNew1, name: "Valentina R.", days: 30, description: "Gasté como $200/mes en serums y suplementos que literally no hacían nada. Ahora entiendo que el acné era un síntoma de todo lo que estaba mal por dentro. Los protocolos de alimentación, sueño y equilibrio hormonal atacaron la raíz. Mi piel se limpió sola porque mi cuerpo finalmente funciona bien. Es wild ver a chicas comprando productos con ingredientes impronunciables esperando milagros cuando la solución es ser consciente de lo que realmente necesitas." },
    { id: 2, image: beforeAfterNew2, name: "Isabella M.", days: 30, description: "Before: gastando $150 en fat burners y productos detox que me dejaban igual. Now: siguiendo TODOS los protocolos del libro—la Dieta Afrodita, el balance hormonal, los hábitos de sueño—y bajé 8 kilos de grasa real. No fue solo la alimentación, fue cambiar todo desde la raíz. Mi cuerpo responde diferente porque le doy lo que necesita. La diferencia entre saber y no saber es abismal, y tener la disciplina para aplicarlo es lo que separa resultados reales de seguir siendo clienta eterna de marcas." },
    { id: 3, image: beforeAfterNew3, name: "Camila S.", days: 21, description: "Solía pensar que mi pancita era genética until I realized que era inflamación por todo lo que hacía mal. Los protocolos del libro—desde alimentación hasta equilibrio hormonal y hábitos—trabajaron juntos para desinflamar todo mi sistema. Mi cintura apareció porque ataqué el problema desde múltiples ángulos, no con una pastilla mágica. Ahora me da un poco de pena ver amigas gastando fortunas en fajas y tratamientos cuando la solución está en ser inteligente con tu cuerpo." },
    { id: 4, image: beforeAfterNew4, name: "Luna V.", days: 30, description: "El protocolo supercalm fue el inicio, pero honestly todos los protocolos juntos hicieron el cambio real. Mejor sueño, alimentación consciente, balance hormonal—todo conectado. Mi abdomen se deshinchó porque mi cuerpo dejó de estar en modo supervivencia. Antes gastaba fácil $180/mes en probióticos y digestivos que no resolvían nada. Ahora entiendo que ser wellness de verdad es tener conocimiento y disciplina, no una colección de productos caros que solo benefician a las marcas." },
  ],
  [
    { id: 5, image: beforeAfterNew5, name: "Mia P.", days: 21, description: "Plot twist: el glow que buscaba con cremas de $80 vino de arreglar mi alimentación, sueño y hormonas. Los protocolos del libro trabajan en conjunto—no es solo la Dieta Afrodita, es todo el sistema completo. Mi piel brilla porque mi cuerpo está nutrido desde adentro. Me siento un poco tonta por haber gastado tanto en skincare cuando la respuesta era ser consciente de lo básico. Ahora proyecto una energía diferente, como que la gente nota que me cuido de verdad, no que solo compro cosas." },
    { id: 6, image: beforeAfterNew6, name: "Sofia L.", days: 30, description: "Mi transformación no fue por UN protocolo—fue por seguir TODO el libro con disciplina. La Rutina Afrodita tonificó mi cuerpo, la alimentación me desinflamó, el balance hormonal reguló todo. Juntos atacaron el mismo problema desde diferentes ángulos. Antes era de las que compraba cada suplemento nuevo ($200+/mes easy), ahora me doy cuenta que eso es ser víctima del marketing. El conocimiento te libera y los resultados hablan solos. Mi cuerpo es prueba de que la consciencia gana." },
    { id: 7, image: beforeAfterNew7, name: "Emma G.", days: 14, description: "14 días y mi acné hormonal gone. Pero no fue magia—fue entender que mi piel reflejaba el caos interno. El detox de dopamina, la Dieta Afrodita, el protocolo de sueño... todos atacando la misma raíz desde diferentes puntos. Gasté AÑOS y como $3,000 en dermatólogos y productos que solo trataban síntomas. Ahora mi piel está clean porque YO decidí ser inteligente y disciplinada. La diferencia entre nosotras y las que siguen luchando es simplemente conocimiento aplicado." },
    { id: 8, image: beforeAfterNew8, name: "Olivia F.", days: 30, description: "Claramente ya me cuidaba un poco before, pero nada que ver con esto. Los protocolos del libro conectaron todo: alimentación que nutre de verdad, hábitos que equilibran hormonas, rutina que tonifica. Mi grasa abdominal desapareció porque ataqué la causa, no el síntoma. Es casi vergonzoso ver a mujeres gastando en tratamientos externos cuando el cambio real es interno. Me siento poderosa sabiendo exactamente qué hacer—eso es wellness real, no comprar productos de moda." },
  ],
  [
    { id: 9, image: result1, name: "Ana L.", days: 45, description: "Esta soy yo creando mi propia realidad. Cintura definida, cuerpo proporcionado—todo porque entendí que cada protocolo del libro afecta TODO. La alimentación mejoró mi piel, energía y composición corporal. El sueño equilibró mis hormonas. Los hábitos consolidaron resultados. Antes gastaba como $250/mes en gym boutique + suplementos sin entender nada. Ahora tengo conocimiento y disciplina—eso me hace diferente. La confianza que siento viene de saber que yo controlo mis resultados, no las marcas." },
    { id: 10, image: result2, name: "Daniela M.", days: 30, description: "Mis glúteos y postura cambiaron porque cambié TODO, not just el ejercicio. La Rutina Afrodita fue key pero la alimentación nutrió mis músculos, el balance hormonal optimizó mi cuerpo, los hábitos de sueño mejoraron mi recuperación. Es un sistema completo. Me causa gracia ver chicas comprando booty pills y cremas reafirmantes ($150+/mes) cuando la solución es ser smart. Ahora proyecto una energía magnética porque mi cuerpo refleja consciencia y disciplina, no desesperación por productos." },
    { id: 11, image: result3, name: "Victoria S.", days: 21, description: "Este outfit lo uso con confianza porque mi cuerpo cambió desde adentro. Todos los protocolos del libro—alimentación, hormonas, hábitos, rutina—trabajan juntos en la misma dirección. Me siento ligera y tonificada porque ataqué la raíz, no síntomas. Solía gastar $200/mes en suplementos trendy que no entendía. Ahora me siento casi superior sabiendo exactamente qué necesita mi cuerpo. La diferencia es conocimiento + disciplina. Las que siguen buscando atajos simplemente no saben lo que yo sé." },
    { id: 12, image: result4, name: "Renata G.", days: 30, description: "Mi pelo, mi piel, mis ojos—todo brilla diferente porque TODO mi cuerpo está nutrido. No fue un serum de $90, fue la Dieta Afrodita + balance hormonal + protocolo de sueño transformando mi salud completa. Cuando arreglas la alimentación, mejora tu pelo, desaparecen ojeras, tu piel glows naturally. Es casi triste ver mujeres gastando fortunas en productos externos cuando ignoran lo básico interno. Ahora soy de las que saben, y honestly se nota—la gente me pregunta qué me hago." },
  ],
  [
    { id: 13, image: result5, name: "Carolina P.", days: 28, description: "Glass skin sin filtro porque mi cuerpo está en balance real. Los protocolos de alimentación nutrieron mi piel desde adentro, el equilibrio hormonal eliminó breakouts, los hábitos de sueño me dieron esta luminosidad. Gasté AÑOS comprando skincare coreano ($300+/mes at my worst) buscando este resultado que vino de ser consciente con lo básico. Ahora me maquillo porque quiero, no porque necesito. La belleza real viene de ser inteligente, no de ser buena clienta de marcas que solo quieren tu dinero." },
    { id: 14, image: result6, name: "Mariana T.", days: 45, description: "El gym siempre fue parte de mi vida, pero los protocolos del libro literally unlocked otro nivel. Mi definición mejoró porque la alimentación nutre mis músculos, el balance hormonal optimiza mi metabolismo, el sueño mejora mi recuperación. Todo conectado. Antes compraba pre-workouts y proteínas random ($180/mes) sin entender nada. Ahora soy la chica del gym que sabe exactamente qué hace y por qué—y se nota. Mi cuerpo refleja disciplina inteligente, no solo esfuerzo ciego." },
  ],
];

const BeforeAfterCarousel = () => {
  return (
    <section className="mb-8 md:mb-12 py-12 bg-gradient-to-r from-[#F5F3EE] via-[#EDE9E0] to-[#E8E4DB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transformaciones Reales con Realifestacion
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Miles de mujeres han transformado su cuerpo, piel y bienestar siguiendo los protocolos del libro
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((row, rowIndex) => (
              <CarouselItem key={rowIndex}>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${row.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-4 md:gap-6 ${row.length === 2 ? 'lg:max-w-2xl lg:mx-auto' : ''}`}>
                  {row.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-background border border-border/40 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <img
                          src={testimonial.image}
                          alt={`Antes y después ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-foreground">
                            {testimonial.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Día {testimonial.days}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, idx) => (
                            <span key={idx} className="text-primary text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Mobile indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full bg-border/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
