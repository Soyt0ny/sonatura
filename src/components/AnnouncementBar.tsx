import { Truck, Heart } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-medium">Envío Gratis Hoy</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-medium">72,500+ Clientas Felices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
