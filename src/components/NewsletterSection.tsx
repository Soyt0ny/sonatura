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
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0C1520] via-[#0C1520] to-[#1a2332] rounded-3xl overflow-hidden border border-[#D5C3A5]/20 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img 
              src={newsletterImage} 
              alt="Wellness lifestyle" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0C1520]/40 md:bg-gradient-to-r md:from-transparent md:to-[#0C1520]/60"></div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F4F3EF] mb-3 tracking-tight">
                Únete a Nuestra Comunidad
              </h3>
              <p className="text-[#D5C3A5] text-sm md:text-base leading-relaxed">
                Recibe acceso exclusivo a protocolos de bienestar, consejos de transformación personal y{" "}
                <span className="text-[#C7A867] font-semibold">15% de descuento</span> en tu primera compra.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B4B4B4] w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-12 bg-[#F4F3EF]/10 border-[#D5C3A5]/30 text-[#F4F3EF] placeholder:text-[#B4B4B4] focus:border-[#C7A867] focus:ring-[#C7A867]/20 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#D5C3A5] to-[#C7A867] hover:from-[#C7A867] hover:to-[#D5C3A5] text-[#0C1520] font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#C7A867]/20"
                >
                  Obtener Mi 15% de Descuento
                </Button>
              </form>
            ) : (
              <div className="bg-[#F4F3EF]/10 border border-[#C7A867]/30 rounded-xl p-6 text-center">
                <p className="text-[#C7A867] font-semibold mb-2">¡Gracias por suscribirte!</p>
                <p className="text-[#D5C3A5] text-sm">
                  Revisa tu correo para activar tu descuento del 15%
                </p>
              </div>
            )}

            <p className="text-[#B4B4B4] text-xs mt-4 text-center">
              Al suscribirte, aceptas recibir emails con contenido exclusivo. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
