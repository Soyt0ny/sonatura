import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import cartProduct from "@/assets/cart-product.png";
import { ShopifyProduct } from "@/lib/shopify";

// Producto hardcodeado para Realifestación (se usará hasta que haya productos en Shopify)
const realifestacionProduct: ShopifyProduct = {
  node: {
    id: "gid://shopify/Product/realifestacion-libro",
    title: "Libro Realifestación® Digital",
    description: "Libro digital con +200 protocolos naturales de salud, belleza y Wellness",
    handle: "realifestacion-libro",
    priceRange: {
      minVariantPrice: {
        amount: "37.00",
        currencyCode: "MXN"
      }
    },
    images: {
      edges: [{
        node: {
          url: cartProduct,
          altText: "Libro Realifestación Digital"
        }
      }]
    },
    variants: {
      edges: [{
        node: {
          id: "gid://shopify/ProductVariant/realifestacion-libro-variant",
          title: "Default Title",
          price: {
            amount: "37.00",
            currencyCode: "MXN"
          },
          availableForSale: true,
          selectedOptions: []
        }
      }]
    },
    options: []
  }
};

const StickyCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    const variant = realifestacionProduct.node.variants.edges[0].node;
    addItem({
      product: realifestacionProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    });
  };

  useEffect(() => {
    const originalButton = document.getElementById("original-cart-button");
    
    if (!originalButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    observer.observe(originalButton);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/50 shadow-lg animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Left side - Product info (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-1 min-w-0 flex-1">
            <h3 className="text-sm md:text-base font-semibold text-foreground truncate">
              Libro Realifestación®
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">4.7 / 5</span>
            </div>
          </div>

          {/* Middle - Pricing */}
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">$123</span>
              <span className="text-xl md:text-2xl font-bold text-foreground">$37</span>
            </div>
            <span className="hidden md:block text-xs text-muted-foreground">
              O 6 pagos de <span className="font-semibold">$6.17/mes</span>
            </span>
          </div>

          {/* Right side - CTA Button */}
          <Button 
            className="h-11 px-6 md:px-8 text-sm font-semibold uppercase tracking-wide bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] shadow-lg rounded-lg whitespace-nowrap"
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
