import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              TIENDA
            </Button>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              NOSOTROS
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              RESEÑAS
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              BLOG
            </a>
          </nav>

          <div className="flex-1 flex justify-center md:justify-center">
            <h1 className="text-2xl font-bold tracking-wider">FORCHICS</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
