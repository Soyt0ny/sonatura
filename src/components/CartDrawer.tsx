import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Minus, Plus, Trash2, ShoppingBag, Loader2, Lock, Star } from "lucide-react";
import { toast } from "sonner";
import { useCurrencyDetection, formatPrice } from "@/hooks/useCurrencyDetection";

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    totalPrice, 
    isLoading,
    createCheckout 
  } = useCartStore();

  const currencyInfo = useCurrencyDetection();

  const handleCheckout = async () => {
    try {
      const checkoutUrl = await createCheckout();
      if (checkoutUrl) {
        // Usar redirección directa en lugar de window.open para evitar bloqueo en móviles
        window.location.href = checkoutUrl;
      } else {
        toast.error("Error al crear el checkout", {
          description: "Por favor intenta de nuevo",
        });
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      toast.error("Error al proceder al pago", {
        description: "Por favor intenta de nuevo más tarde",
      });
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

              <div className="flex-shrink-0 border-t border-border/50 pt-4 mt-4 space-y-3 pb-8 bg-background">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-xl text-foreground">
                    {formatPrice(totalUSD, currencyInfo)}
                  </span>
                </div>
                
                {/* Ahorro y pagos a meses */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Ahorras</span>
                    <span className="text-sm font-semibold text-green-600">
                      {formatPrice(86 * items.reduce((sum, item) => sum + item.quantity, 0), currencyInfo)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground text-right">
                    O solo {formatPrice(6.17 * items.reduce((sum, item) => sum + item.quantity, 0), currencyInfo)}/mes a 6 meses sin intereses
                  </p>
                </div>
                
                {/* Botón Proceder al Pago */}
                <Button 
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isLoading}
                  className="w-full h-12 text-base font-semibold uppercase tracking-wide bg-gradient-to-r from-[#C7A867] to-[#D5C3A5] hover:from-[#D5C3A5] hover:to-[#C7A867] text-[#0C1520] shadow-lg rounded-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creando checkout...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Proceder al Pago
                    </>
                  )}
                </Button>
                
                {/* Botón Shop Pay */}
                <Button 
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isLoading}
                  variant="outline"
                  className="w-full h-10 bg-[#5A31F4] hover:bg-[#4B27CC] border-[#5A31F4] text-white font-semibold rounded-lg"
                >
                  <svg className="w-16 h-5 mr-1" viewBox="0 0 341 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M227.297 0C220.448 0 214.896 5.47699 214.896 12.2365V67.7635C214.896 74.523 220.448 80 227.297 80H328.357C335.206 80 340.758 74.523 340.758 67.7635V12.2365C340.758 5.47699 335.206 0 328.357 0H227.297Z" fill="white"/>
                    <path d="M244.607 45.4098H241.174L239.348 55.2282H235.502L239.65 32.3057H247.858C249.576 32.3057 250.925 32.7894 251.905 33.7565C252.885 34.7237 253.375 35.9884 253.375 37.5504C253.375 39.5962 252.75 41.3174 251.501 42.714C250.252 44.1107 248.635 44.9016 246.651 45.0866L250.412 55.2282H246.254L244.607 45.4098ZM241.66 42.1675H245.162C246.359 42.1675 247.356 41.7805 248.153 41.0063C248.95 40.2322 249.349 39.2315 249.349 38.0043C249.349 37.2051 249.114 36.563 248.644 36.0785C248.174 35.594 247.509 35.3517 246.651 35.3517H243.061L241.66 42.1675Z" fill="#5A31F4"/>
                    <path d="M267.201 49.9651C267.201 51.5855 266.719 52.9113 265.756 53.9427C264.793 54.9741 263.478 55.4898 261.812 55.4898C260.461 55.4898 259.39 55.0862 258.599 54.279C257.807 53.4718 257.412 52.3913 257.412 51.0374C257.412 49.4336 257.907 48.0888 258.897 47.003C259.888 45.9172 261.187 45.2893 262.794 45.1195C263.13 45.0863 263.56 45.0697 264.084 45.0697H266.912L267.201 49.9651ZM269.879 39.4621C269.879 37.8417 269.402 36.5657 268.448 35.6344C267.493 34.703 266.172 34.2374 264.485 34.2374C262.854 34.2374 261.373 34.6116 260.043 35.3601L259.322 38.1884C260.652 37.2821 262.047 36.8291 263.507 36.8291C265.362 36.8291 266.289 37.6556 266.289 39.3088L266.145 41.9709H264.199C261.458 41.9709 259.305 42.6026 257.741 43.866C256.177 45.1293 255.395 46.8755 255.395 49.1046C255.395 50.9501 255.928 52.4098 256.995 53.4835C258.062 54.5573 259.497 55.0942 261.299 55.0942C263.371 55.0942 265.169 54.2548 266.694 52.5764L266.838 54.8139H270.052L270.109 54.0979C269.956 53.4724 269.879 52.6282 269.879 51.5651V39.4621Z" fill="#5A31F4"/>
                    <path d="M289.914 34.5839L283.997 58.0063C283.232 60.8263 282.324 62.9336 281.275 64.3277C280.226 65.7219 278.627 66.4188 276.478 66.4188C275.664 66.4188 274.798 66.319 273.88 66.1192L274.457 63.2907C275.051 63.4824 275.638 63.5783 276.219 63.5783C277.326 63.5783 278.165 63.2032 278.738 62.4532C279.311 61.7032 279.816 60.5342 280.252 58.9464L280.627 57.4635L275.158 34.5839H278.917L282.173 49.0459L282.461 51.3673L283.182 49.0459L288.128 34.5839H289.914Z" fill="#5A31F4"/>
                    <path d="M292.864 55.2282H289.018L291.168 43.5853C291.621 41.1811 292.519 39.2649 293.862 37.8369C295.205 36.4089 296.881 35.6949 298.889 35.6949C300.089 35.6949 301.071 35.9762 301.836 36.5388L300.558 39.4621C299.977 39.0168 299.295 38.7941 298.514 38.7941C297.348 38.7941 296.316 39.2483 295.417 40.1566C294.518 41.0649 293.857 42.3408 293.436 43.9844L291.902 51.4005L291.759 55.2282H292.864Z" fill="#5A31F4"/>
                    <path d="M303.389 55.2282L307.537 32.3057H311.383L307.235 55.2282H303.389Z" fill="#5A31F4"/>
                    <path d="M319.924 38.2051C318.498 38.2051 317.314 38.7317 316.372 39.785C315.429 40.8382 314.766 42.2897 314.382 44.1396L313.648 47.5991C314.031 49.3158 314.622 50.6544 315.419 51.615C316.216 52.5757 317.339 53.056 318.789 53.056C320.406 53.056 321.755 52.6246 322.834 51.7617L323.412 54.7764C322.064 55.5499 320.457 55.9366 318.586 55.9366C316.139 55.9366 314.183 55.123 312.717 53.4957C311.251 51.8685 310.518 49.6476 310.518 46.8332C310.518 43.8688 311.356 41.373 313.033 39.3459C314.709 37.3188 316.845 36.3052 319.44 36.3052C321.317 36.3052 322.927 36.6836 324.27 37.4404L323.412 40.3884C322.173 39.5993 320.975 39.0497 319.818 38.6044L319.924 38.2051Z" fill="#5A31F4"/>
                    <path d="M112.965 20.6252C107.048 18.4378 99.8254 17.0928 91.5155 17.0928C83.2055 17.0928 76.0011 18.4378 70.0659 20.6252C64.1305 22.8126 58.0905 26.1419 52.5983 30.7379C47.1062 35.334 42.7185 41.2504 39.5869 48.4123C36.4554 55.5742 34.8389 63.8689 34.8389 73.0001C34.8389 82.1312 36.4554 90.4259 39.5869 97.5878C42.7185 104.75 47.1062 110.666 52.5983 115.262C58.0905 119.858 64.1305 123.188 70.0659 125.375C76.0013 127.562 83.2055 128.907 91.5155 128.907C99.8254 128.907 107.03 127.562 112.965 125.375C118.9 123.188 124.941 119.858 130.433 115.262C135.925 110.666 140.313 104.75 143.444 97.5878C146.576 90.4259 148.192 82.1312 148.192 73.0001C148.192 63.8689 146.576 55.5742 143.444 48.4123C140.313 41.2504 135.925 35.334 130.433 30.7379C124.941 26.1419 118.9 22.8126 112.965 20.6252Z" fill="#95BF47"/>
                    <path d="M91.5155 23.9551C66.9849 23.9551 47.2003 45.9096 47.2003 73.0001C47.2003 100.091 66.9849 122.045 91.5155 122.045C116.046 122.045 135.831 100.091 135.831 73.0001C135.831 45.9096 116.046 23.9551 91.5155 23.9551ZM91.5155 110.45C74.0406 110.45 59.8767 93.5553 59.8767 72.9999C59.8767 52.4449 74.0406 35.5506 91.5155 35.5506C108.99 35.5506 123.154 52.4449 123.154 72.9999C123.154 93.5553 108.99 110.45 91.5155 110.45Z" fill="#5E8E3E"/>
                    <path d="M12.6011 32.3057H0.660156L8.84875 55.2282H16.7688L12.6011 32.3057Z" fill="white"/>
                    <path d="M36.0879 38.188C35.0578 36.6343 33.5608 35.5106 31.5974 34.8167C29.634 34.1229 27.3699 33.776 24.8052 33.776C21.7234 33.776 18.9339 34.3137 16.4369 35.3892C13.9399 36.4647 12.0263 37.9024 10.6961 39.7025C9.36594 41.5026 8.70087 43.5276 8.70087 45.7776C8.70087 47.7234 9.20069 49.3977 10.2003 50.8008C11.2 52.2039 12.5649 53.2379 14.2952 53.9028C16.0255 54.5678 17.8997 54.9002 19.9179 54.9002C21.9361 54.9002 23.7506 54.6012 25.3616 54.0032C26.9725 53.4052 28.3153 52.5488 29.3899 51.4341C30.4645 50.3193 31.2262 49.015 31.6749 47.5212C32.1236 50.095 33.1426 52.0326 34.7319 53.334C36.3212 54.6354 38.4288 55.2861 41.0548 55.2861C44.7377 55.2861 47.7922 54.1006 50.2182 51.7295C52.6443 49.3584 53.8573 46.3605 53.8573 42.7359C53.8573 40.9191 53.4925 39.2906 52.7629 37.8503C52.0333 36.41 50.9768 35.2246 49.5931 34.2941C48.2095 33.3636 46.5517 32.7587 44.6198 32.4793L36.0879 38.188ZM15.4689 44.7577C15.4689 43.4355 15.8882 42.276 16.7266 41.2791C17.5651 40.2822 18.6872 39.5088 20.093 38.9588C21.4988 38.4089 23.0244 38.1339 24.6697 38.1339C26.8265 38.1339 28.5547 38.5682 29.8543 39.4369C31.1539 40.3056 31.8036 41.5035 31.8036 43.0305C31.8036 44.8889 31.0861 46.4056 29.651 47.5805C28.216 48.7554 26.2926 49.3429 23.8809 49.3429C21.8322 49.3429 20.1024 48.8587 18.6915 47.8902C17.2806 46.9218 16.5751 45.9374 16.5751 44.7577C16.5751 44.7577 15.4689 44.7577 15.4689 44.7577ZM42.4645 50.7214C40.9622 50.7214 39.7441 50.2393 38.8101 49.2751C37.8762 48.3109 37.4092 47.0569 37.4092 45.5132C37.4092 43.6131 38.0434 42.0297 39.3118 40.763C40.5801 39.4962 42.2229 38.8628 44.2399 38.8628C45.7422 38.8628 46.9515 39.3428 47.8677 40.3029C48.7838 41.263 49.2419 42.5149 49.2419 44.0586C49.2419 45.9879 48.6135 47.5734 47.3569 48.8151C46.1002 50.0528 44.4634 50.7214 42.4645 50.7214Z" fill="white"/>
                    <path d="M57.0063 55.2282L64.7295 32.3057H77.4814C79.7998 32.3057 81.718 32.6339 83.236 33.2903C84.754 33.9467 85.8899 34.8543 86.6436 36.013C87.3973 37.1716 87.7742 38.5095 87.7742 40.0265C87.7742 42.2765 87.0411 44.2724 85.575 46.0143C84.1089 47.7562 82.0757 49.0566 79.4755 49.9156L82.9803 55.2282H75.8013L73.022 50.6177H66.4908L64.6328 55.2282H57.0063ZM68.0531 46.1296H74.1853C76.0614 46.1296 77.5594 45.6599 78.6795 44.7205C79.7996 43.7811 80.3596 42.5517 80.3596 41.0325C80.3596 40.0308 80.0445 39.2218 79.4141 38.6054C78.7838 37.989 77.8488 37.6808 76.6092 37.6808H70.9268L68.0531 46.1296Z" fill="white"/>
                    <path d="M105.178 55.2282L99.6912 50.1706C98.1574 51.8587 96.3879 53.1573 94.3827 54.0666C92.3775 54.9759 90.2254 55.4305 87.9263 55.4305C85.4293 55.4305 83.2655 54.9343 81.4349 53.9418C79.6042 52.9493 78.2132 51.617 77.2618 49.9448C76.3104 48.2726 75.8347 46.4296 75.8347 44.4159C75.8347 41.6556 76.6377 39.1767 78.2437 36.979C79.8497 34.7813 82.1201 33.1216 85.0548 32C83.8152 30.6111 82.9198 29.2056 82.3684 27.7835C81.8171 26.3613 81.5414 24.9474 81.5414 23.5418C81.5414 21.4865 82.0745 19.6702 83.1405 18.0929C84.2066 16.5156 85.6694 15.3053 87.529 14.462C89.3886 13.6187 91.4584 13.197 93.7383 13.197C96.2353 13.197 98.3882 13.6978 100.197 14.6994C102.006 15.7011 103.387 17.0522 104.338 18.7527C105.29 20.4532 105.766 22.3254 105.766 24.3693C105.766 26.8565 105.03 29.1042 103.558 31.1127C102.086 33.1212 99.8656 34.8839 96.8969 36.4007L103.025 43.3897C103.659 41.9842 104.097 40.3702 104.339 38.5479L111.174 39.6107C110.691 42.3293 109.78 44.896 108.441 47.3109L113.619 53.0459L105.178 55.2282ZM90.8679 39.1393C89.314 39.8457 88.1363 40.7259 87.3349 41.7797C86.5335 42.8335 86.1328 44.0191 86.1328 45.3364C86.1328 46.8287 86.6619 48.0664 87.7201 49.0494C88.7784 50.0323 90.1495 50.5238 91.8334 50.5238C93.0346 50.5238 94.1627 50.2804 95.2177 49.7937C96.2726 49.3069 97.2281 48.6151 98.0843 47.7183L90.8679 39.1393ZM94.1899 31.5965C95.8738 30.6364 97.1262 29.5868 97.9473 28.4477C98.7684 27.3086 99.179 26.0624 99.179 24.7093C99.179 23.356 98.7388 22.2504 97.8584 21.3923C96.978 20.5342 95.8285 20.1051 94.4099 20.1051C93.0278 20.1051 91.8757 20.5092 90.9536 21.3174C90.0315 22.1257 89.5704 23.1564 89.5704 24.4096C89.5704 25.3365 89.7751 26.2343 90.1846 27.1029C90.5941 27.9716 91.295 28.9527 92.2873 30.0463L94.1899 31.5965Z" fill="white"/>
                  </svg>
                </Button>
                
                {/* Textos de garantía */}
                <div className="space-y-1.5 text-center">
                  <p className="text-xs text-muted-foreground">60 días de garantía</p>
                  <p className="text-xs text-muted-foreground">Entrega gratis e inmediata por email</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 fill-[#C7A867] text-[#C7A867]" />
                    <span className="text-xs text-muted-foreground">4.9 / 5 estrellas por 72,567 clientes</span>
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
