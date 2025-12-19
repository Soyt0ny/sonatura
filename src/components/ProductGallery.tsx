import { useState, memo, useEffect, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Use public folder for faster loading
const images = [
  "/products/product-1.png",
  "/products/product-2.png",
  "/products/product-3.png",
  "/products/product-4.png",
  "/products/product-5.png"
];

const ProductGallery = memo(() => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false, false]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum swipe distance to trigger navigation
  const minSwipeDistance = 50;

  // Preload first 2 images immediately on mount
  useEffect(() => {
    const preloadImages = [images[0], images[1]];
    preloadImages.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[idx] = true;
          return newState;
        });
      };
    });
  }, []);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swiped left -> next image
        handleNext();
      } else {
        // Swiped right -> previous image
        handlePrevious();
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="space-y-4">
      <div 
        className="relative aspect-square bg-accent rounded-lg overflow-hidden group touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Show skeleton while first image loads */}
        {!imagesLoaded[0] && selectedImage === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 animate-pulse" />
        )}
        <img
          src={images[selectedImage]}
          alt="Libro Realifestación Digital"
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            selectedImage === 0 && !imagesLoaded[0] ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          width={600}
          height={600}
          decoding={selectedImage === 0 ? "sync" : "async"}
          // @ts-ignore - fetchpriority is valid HTML attribute
          fetchpriority={selectedImage === 0 ? "high" : "auto"}
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
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx ? "border-primary" : "border-transparent"
            }`}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${idx + 1}`} 
              className="w-full h-full object-cover"
              loading={idx < 2 ? "eager" : "lazy"}
              width={120}
              height={120}
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
});

ProductGallery.displayName = "ProductGallery";

export default ProductGallery;
