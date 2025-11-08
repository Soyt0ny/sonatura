import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import product7 from "@/assets/product-7.png";
import product8 from "@/assets/product-8.png";

const ProductGallery = () => {
  const images = [product1, product2, product3, product4, product5, product6, product7, product8];
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-accent rounded-lg overflow-hidden group">
        <img
          src={images[selectedImage]}
          alt="Producto"
          className="w-full h-full object-cover"
        />
        
        {/* Best Seller Badge */}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold shadow-lg">
          Más Vendido
        </Badge>
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx ? "border-primary" : "border-transparent"
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
