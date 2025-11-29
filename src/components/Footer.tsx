import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import paymentIcons from "@/assets/payment-icons.png";
import sonnaturaLogo from "@/assets/sonatura-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C1520] text-[#F4F3EF] pt-16 pb-8 border-t border-[#D5C3A5]/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src={sonnaturaLogo} 
              alt="Sonnatura" 
              className="h-8 w-auto"
            />
            <p className="text-sm text-[#B4B4B4] leading-relaxed">
              Transformando vidas a través de protocolos naturales de salud, belleza y bienestar respaldados por la ciencia.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D5C3A5]/10 hover:bg-gradient-to-r hover:from-[#C7A867] hover:to-[#D5C3A5] flex items-center justify-center transition-all duration-300 border border-[#D5C3A5]/30"
              >
                <Instagram className="w-4 h-4 hover:text-[#0C1520]" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D5C3A5]/10 hover:bg-gradient-to-r hover:from-[#C7A867] hover:to-[#D5C3A5] flex items-center justify-center transition-all duration-300 border border-[#D5C3A5]/30"
              >
                <Facebook className="w-4 h-4 hover:text-[#0C1520]" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D5C3A5]/10 hover:bg-gradient-to-r hover:from-[#C7A867] hover:to-[#D5C3A5] flex items-center justify-center transition-all duration-300 border border-[#D5C3A5]/30"
              >
                <Twitter className="w-4 h-4 hover:text-[#0C1520]" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-[#F4F3EF] mb-4 tracking-wide">Atención al Cliente</h3>
            <ul className="space-y-3 text-sm text-[#B4B4B4]">
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Centro de Ayuda</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Rastrear Pedido</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Devoluciones</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Garantía de 60 Días</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Envíos</a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-[#F4F3EF] mb-4 tracking-wide">Compañía</h3>
            <ul className="space-y-3 text-sm text-[#B4B4B4]">
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Nuestra Misión</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Testimonios</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Contacto</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#F4F3EF] mb-4 tracking-wide">Contacto</h3>
            <ul className="space-y-3 text-sm text-[#B4B4B4]">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C7A867]" />
                <a href="mailto:hola@sonnatura.com" className="hover:text-[#C7A867] transition-colors duration-300">
                  hola@sonnatura.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C7A867]" />
                <a href="tel:+1234567890" className="hover:text-[#C7A867] transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C7A867]" />
                <span>
                  123 Wellness Ave, Suite 400<br />
                  New York, NY 10001, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-[#D5C3A5]/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-[#B4B4B4] mb-2">Métodos de Pago Seguros</p>
              <img 
                src={paymentIcons} 
                alt="Payment Methods" 
                className="h-8 w-auto opacity-80"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-[#B4B4B4]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#C7A867]"></span>
                Pago Seguro SSL
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#C7A867]"></span>
                Envío Global
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#C7A867]"></span>
                17,000+ Clientas Felices
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D5C3A5]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B4B4B4]">
            <p>© 2024 Sonnatura. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-[#C7A867] transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
