import { Instagram } from "lucide-react";
import sonnaturaLogo from "@/assets/sonatura-logo.png";
import paymentIcons from "@/assets/payment-icons.png";

const Footer = () => {
  return (
    <footer className="bg-white text-foreground py-8 border-t border-border/20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <img 
            src={sonnaturaLogo} 
            alt="Sonnatura" 
            className="h-6 w-auto"
          />
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="mailto:contacto.sonatura@gmail.com" className="hover:text-[#C7A867] transition-colors">
              contacto.sonatura@gmail.com
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#C7A867] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center mb-6">
          <img 
            src={paymentIcons} 
            alt="Métodos de pago aceptados" 
            className="h-8 w-auto opacity-70"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2024 Sonnatura</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C7A867] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#C7A867] transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
