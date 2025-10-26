import { Star, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ProductInfo = () => {
  const [selectedPackage, setSelectedPackage] = useState("4");

  const packages = [
    { id: "1", bottles: "1 Bottle", discount: "38%", price: "$24", originalPrice: "$39", perUnit: "$24/each" },
    { id: "2", bottles: "2 Bottles", discount: "45%", price: "$43", originalPrice: "$78", perUnit: "$21.5/each" },
    { id: "3", bottles: "3 Bottles", discount: "50%", price: "$59", originalPrice: "$117", perUnit: "$19.6/each" },
    { id: "4", bottles: "4 Bottles", discount: "53%", price: "$70", originalPrice: "$149", perUnit: "$17.5/each", badge: "BEST DEAL" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">Excellent 5.0 | 9903 Reviews</span>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Eyelash Growth Serum
        </h1>
        <p className="text-xl text-primary font-semibold">
          - Save Up To 56% Today + 4 FREE Gifts
        </p>
      </div>

      <div className="bg-accent/50 border border-primary/20 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-3">Get fuller and healthier eyelashes in 30 days</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Results in 2 weeks</span>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Affordable treatment</span>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Long-lasting result</span>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Revitalize hair follicle</span>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 border-2 border-dashed border-primary rounded-lg p-3 text-center">
        <p className="text-sm font-semibold">
          🎁 Order by Oct. 28th for guaranteed FREE Gifts
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Quantity:</h3>
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
                      <p className="text-sm text-muted-foreground">Save {pkg.discount}</p>
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
          Add to Cart
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          3ML = 30 APPLICATIONS, THAT'S ONLY $0.10/APPLICATION
        </p>
      </div>

      <div className="bg-secondary rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-center">EXCLUSIVE SALE! FREE Gifts With Your First Order</h4>
        <div className="grid grid-cols-4 gap-2">
          {["FREE $10", "FREE $6", "FREE $19", "FREE $25"].map((gift, idx) => (
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
