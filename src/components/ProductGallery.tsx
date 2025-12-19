import { useState, memo, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";

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
  const [isZoomed, setIsZoomed] = useState(false);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    duration: 20,
    skipSnaps: false
  });

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImage(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handlePrevious = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const openZoom = useCallback(() => {
    setIsZoomed(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeZoom = useCallback(() => {
    setIsZoomed(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
    <div className="space-y-4">
      <div className="relative aspect-square bg-accent rounded-lg overflow-hidden group">
        {/* Show skeleton while first image loads */}
        {!imagesLoaded[0] && selectedImage === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 animate-pulse z-10" />
        )}
        
        {/* Embla Carousel */}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-[0_0_100%] min-w-0 h-full"
              >
                <img
                  src={img}
                  alt={`Libro Realifestación Digital - Vista ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  width={600}
                  height={600}
                  decoding={idx === 0 ? "sync" : "async"}
                  // @ts-ignore - fetchpriority is valid HTML attribute
                  fetchpriority={idx === 0 ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Best Seller Badge */}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold shadow-lg z-20">
          Más Vendido
        </Badge>
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Dot indicators for mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 md:hidden">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedImage === idx 
                  ? "bg-primary w-4" 
                  : "bg-white/60"
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
        {/* Zoom indicator */}
        <button
          onClick={openZoom}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          aria-label="Ampliar imagen"
        >
          <ZoomIn className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
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

    {/* Zoom Modal */}
    {isZoomed && (
      <div 
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
        onClick={closeZoom}
      >
        <button
          onClick={closeZoom}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          aria-label="Cerrar zoom"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        <img
          src={images[selectedImage]}
          alt={`Libro Realifestación Digital - Vista ${selectedImage + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); scrollTo(idx); }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                selectedImage === idx 
                  ? "bg-white w-6" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    )}
    </>
  );
});

ProductGallery.displayName = "ProductGallery";

export default ProductGallery;