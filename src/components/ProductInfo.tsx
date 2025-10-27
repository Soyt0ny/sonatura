import { Star, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ProductGallery from "@/components/ProductGallery";

const ProductInfo = () => {
  const [selectedPackage, setSelectedPackage] = useState("4");

  const packages = [
    { id: "1", bottles: "1 Botella", discount: "38%", price: "$24", originalPrice: "$39", perUnit: "$24/cada una" },
    { id: "2", bottles: "2 Botellas", discount: "45%", price: "$43", originalPrice: "$78", perUnit: "$21.5/cada una" },
    { id: "3", bottles: "3 Botellas", discount: "50%", price: "$59", originalPrice: "$117", perUnit: "$19.6/cada una" },
    { id: "4", bottles: "4 Botellas", discount: "53%", price: "$70", originalPrice: "$149", perUnit: "$17.5/cada una", badge: "MEJOR OFERTA" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">Excelente 5.0 | 9903 Reseñas</span>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Sérum de Crecimiento de Pestañas
        </h1>
      </div>

      <ProductGallery />

      <div>
        <p className="text-xl text-primary font-semibold">
          - Ahorra Hasta 56% Hoy + 4 Regalos GRATIS
        </p>
      </div>

      <div className="bg-accent/50 border border-primary/20 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-3">Obtén pestañas más llenas y saludables en 30 días</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Resultados en 2 semanas</span>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Tratamiento económico</span>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Resultado duradero</span>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Revitaliza el folículo</span>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 border-2 border-dashed border-primary rounded-lg p-3 text-center">
        <p className="text-sm font-semibold">
          🎁 Ordena antes del 28 de Oct. para recibir Regalos GRATIS garantizados
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Cantidad:</h3>
        <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
          <div className="space-y-3">
            {packages.map((pkg) => (
              <div key={pkg.id} className="relative">
                {pkg.badge && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[hsl(var(--badge-best))] text-[hsl(var(--badge-best-foreground))] text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <Label
                  htmlFor={pkg.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPackage === pkg.id
                      ? "border-primary bg-accent"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={pkg.id} id={pkg.id} />
                    <div>
                      <p className="font-semibold">{pkg.bottles}</p>
                      <p className="text-sm text-muted-foreground">Ahorra {pkg.discount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{pkg.price}</p>
                    <p className="text-xs text-muted-foreground line-through">{pkg.originalPrice}</p>
                    <p className="text-xs text-primary">{pkg.perUnit}</p>
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Button size="lg" className="w-full text-lg h-14">
          Agregar al Carrito
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          3ML = 30 APLICACIONES, SOLO $0.10/APLICACIÓN
        </p>
      </div>

      <div className="bg-secondary rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-center">¡VENTA EXCLUSIVA! Regalos GRATIS con tu Primera Orden</h4>
        <div className="grid grid-cols-4 gap-2">
          {["GRATIS $10", "GRATIS $6", "GRATIS $19", "GRATIS $25"].map((gift, idx) => (
            <div key={idx} className="bg-accent rounded-lg p-3 text-center">
              <div className="aspect-square bg-primary/10 rounded mb-2 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{gift}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
