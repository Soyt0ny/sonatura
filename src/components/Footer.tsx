import { Instagram } from "lucide-react";
import sonnaturaLogo from "@/assets/sonatura-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C1520] text-[#F4F3EF] py-8 border-t border-[#D5C3A5]/20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <img 
            src={sonnaturaLogo} 
            alt="Sonnatura" 
            className="h-6 w-auto"
          />
          
          <div className="flex items-center gap-6 text-xs text-[#B4B4B4]">
            <a href="mailto:hola@sonnatura.com" className="hover:text-[#C7A867] transition-colors">
              hola@sonnatura.com
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

        {/* Bottom Bar */}
        <div className="border-t border-[#D5C3A5]/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#B4B4B4]">
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
