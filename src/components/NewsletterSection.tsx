import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import newsletterImage from "@/assets/newsletter-wellness.png";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="mt-24 mb-16">
      <div className="max-w-4xl mx-auto">
        {/* Content */}
        <div className="bg-accent/30 border-2 border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4 tracking-tight">
              Suscríbete y Obtén 15% de Descuento
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              Recibe{" "}
              <span className="text-foreground font-medium">15% de descuento</span> en tu primera compra
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-12 bg-background border-border/40 text-foreground placeholder:text-muted-foreground focus:border-border rounded-lg transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] font-semibold rounded-lg transition-all duration-300"
                >
                  Obtener Mi 15% de Descuento
                </Button>
              </form>
            ) : (
              <div className="bg-accent/20 border border-border/40 rounded-lg p-6 text-center animate-fade-in">
                <p className="text-foreground font-semibold mb-2">¡Gracias por suscribirte!</p>
                <p className="text-muted-foreground text-sm">
                  Revisa tu correo para activar tu descuento del 15%
                </p>
              </div>
            )}

            <p className="text-muted-foreground text-xs mt-6">
              Al suscribirte, aceptas recibir emails con contenido exclusivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
