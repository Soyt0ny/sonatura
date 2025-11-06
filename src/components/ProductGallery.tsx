import { useState } from "react";
import productMain from "@/assets/product-main.jpg";
import productResults from "@/assets/product-results.jpg";
import productApplication from "@/assets/product-application.jpg";

const ProductGallery = () => {
  const images = [productMain, productResults, productApplication, productMain, productResults];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="relative aspect-square bg-accent rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Producto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-1.5 md:gap-2 px-4 md:px-0">
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
