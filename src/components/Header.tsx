import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import sonaturaLogo from "@/assets/sonatura-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Menú hamburguesa a la izquierda */}
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={sonaturaLogo} 
              alt="Sonatura - Crea tu Realidad" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Iconos de usuario y carrito a la derecha */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
