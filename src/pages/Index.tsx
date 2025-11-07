import CountdownBanner from "@/components/CountdownBanner";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProductInfo from "@/components/ProductInfo";
const Index = () => {
  return <div className="min-h-screen">
      
      <Header />
      
      
      <main className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <ProductInfo />
        </div>

        {/* How It Works Section */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Aplica Diariamente</h3>
              <p className="text-sm text-muted-foreground">
                Aplica el sérum en las pestañas limpias cada noche antes de dormir
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Ve los Resultados</h3>
              <p className="text-sm text-muted-foreground">
                Nota pestañas más largas y llenas en 2-4 semanas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Mantén la Belleza</h3>
              <p className="text-sm text-muted-foreground">
                Continúa el uso para pestañas hermosas duraderas
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16 md:mt-24 bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestras Clientas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="bg-background rounded-lg p-6">
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
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Cuánto tiempo hasta ver resultados?</h3>
              <p className="text-sm text-muted-foreground">
                La mayoría de usuarias ven resultados visibles en 2-4 semanas de uso diario constante.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Es seguro de usar?</h3>
              <p className="text-sm text-muted-foreground">
                ¡Sí! Nuestra fórmula está probada dermatológicamente y es segura para uso diario.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Cómo lo aplico?</h3>
              <p className="text-sm text-muted-foreground">
                Aplica en pestañas limpias y secas en la base, similar al delineador, una vez al día antes de dormir.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary mt-16 md:mt-24 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FORCHICS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;