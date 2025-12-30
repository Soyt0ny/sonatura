import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Minus, Plus, Trash2, ShoppingBag, Lock, Star } from "lucide-react";
import { useCurrencyDetection, formatPrice } from "@/hooks/useCurrencyDetection";

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    totalPrice
  } = useCartStore();

  const currencyInfo = useCurrencyDetection();

  const handleCheckout = () => {
    const checkoutUrl = "https://sonatura-2.myshopify.com/checkouts/cn/hWN718ZVaBM5wG38sbfFlLnu/es-mx?_r=AQABYEqj5Ms058YvVAccltIevC5ZK3l7IySQ5F-IR5ky7fA&adminUrl=admin.shopify.com&cart_link_id=dGcXwxrt&editedAt=2025-12-27T06%3A50%3A22Z&isPublished=true&preview_theme_id=160414433369&profileName=Configuraci%C3%B3n++de+Mi+tienda&profile_preview_token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxZnR1ZXItY3YubXlzaG9waWZ5LmNvbSIsImF1ZCI6IjFmdHVlci1jdi5teXNob3BpZnkuY29tIiwibmJmIjoxNzY3MDcyNjU4LCJjaGVja291dF9wcm9maWxlX2lkIjozNDEzMDgyMjAxLCJjaGVja291dF9wcm9maWxlX3B1Ymxpc2hlZCI6dHJ1ZSwidXNlcl9pZCI6MTA1OTM5NjY0OTg1LCJleHAiOjE3NjcwNzYyNTh9.8vl4vpMuNZdXb_3eK-Q9OmHd58tVW25eKLuRjKDV20M";
    
    // En móvil usar redirección directa para evitar bloqueo de popups
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      window.location.href = checkoutUrl;
    } else {
      window.open(checkoutUrl, '_blank');
    }
  };

  const totalUSD = totalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md bg-background border-l border-border/50 flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="w-5 h-5" />
            Tu Carrito
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col flex-1 mt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 min-h-0">
                {items.map((item) => {
                  const itemPriceUSD = parseFloat(item.price.amount);
                  return (
                    <div
                      key={item.variantId}
                      className="flex gap-4 p-4 bg-card rounded-xl border border-border/30"
                    >
                      {item.product.node.images?.edges?.[0]?.node && (
                        <img
                          src={item.product.node.images.edges[0].node.url}
                          alt={item.product.node.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm truncate">
                          {item.product.node.title}
                        </h4>
                        {item.variantTitle !== "Default Title" && (
                          <p className="text-xs text-muted-foreground">
                            {item.selectedOptions.map(option => option.value).join(' • ')}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-foreground">
                            {formatPrice(itemPriceUSD, currencyInfo)}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                              className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                              className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.variantId)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex-shrink-0 border-t border-border/30 pt-5 mt-4 space-y-4 pb-6 bg-background">
                {/* Ahorro */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ahorras</span>
                  <span className="text-sm font-medium text-green-600">
                    -{formatPrice(86 * items.reduce((sum, item) => sum + item.quantity, 0), currencyInfo)}
                  </span>
                </div>
                
                {/* Total estimado */}
                <div className="flex justify-between items-baseline">
                  <span className="text-foreground font-medium">Total estimado</span>
                  <div className="text-right">
                    <span className="font-bold text-xl text-foreground">
                      {formatPrice(totalUSD, currencyInfo)}
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      o {formatPrice(6.17 * items.reduce((sum, item) => sum + item.quantity, 0), currencyInfo)}/mes
                    </p>
                  </div>
                </div>
                
                {/* Botón Proceder al Pago */}
                <Button 
                  onClick={handleCheckout}
                  disabled={items.length === 0}
                  className="w-full h-12 text-base font-semibold uppercase tracking-wide bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] rounded-lg"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Continuar al Pago
                </Button>
                
                {/* Footer con rating a la izquierda y garantías a la derecha */}
                <div className="flex justify-between items-start pt-2">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C7A867] text-[#C7A867]" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">72,567+ clientes</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Entrega inmediata por email</p>
                    <p className="text-xs text-muted-foreground">60 días de garantía</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
