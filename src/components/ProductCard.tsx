import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, QrCode, Shield, Truck } from "lucide-react";
import cannabisHero from "@/assets/cannabis-hero.jpg";

interface ProductOption {
  weight: string;
  price: number;
  originalPrice?: number;
}

const productOptions: ProductOption[] = [
  { weight: "12g", price: 150, originalPrice: 180 },
  { weight: "20g", price: 240, originalPrice: 300 },
  { weight: "40g", price: 450, originalPrice: 580 }
];

export const ProductCard = () => {
  const [selectedOption, setSelectedOption] = useState<ProductOption>(productOptions[1]);
  // Removido: const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');

  const handlePurchase = () => {
    // TODO: Implement payment logic
    console.log('Purchasing', selectedOption);
  };

  const savings = selectedOption.originalPrice ? selectedOption.originalPrice - selectedOption.price : 0;
  const savingsPercent = selectedOption.originalPrice ? Math.round((savings / selectedOption.originalPrice) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden bg-gradient-card shadow-strong">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center">
            <img 
              src={cannabisHero} 
              alt="Cannabis Medicinal Liv" 
              className="w-full max-w-sm h-auto object-contain animate-float"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Cannabis Medicinal
              </Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 gradient-text">
                Cannabis Medicinal Premium
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Produto de alta qualidade para uso medicinal. Testado em laboratório, 
                com certificação de pureza e potência garantida.
              </p>
            </div>

            {/* Weight Options */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Escolha a quantidade:</label>
              <div className="grid grid-cols-3 gap-2">
                {productOptions.map((option) => (
                  <button
                    key={option.weight}
                    onClick={() => setSelectedOption(option)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      selectedOption.weight === option.weight
                        ? 'border-primary bg-primary/5 shadow-glow'
                        : 'border-border hover:border-primary/30 hover:bg-accent/50'
                    }`}
                  >
                    <div className="font-semibold">{option.weight}</div>
                    <div className="text-sm text-muted-foreground">
                      R$ {option.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-accent/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Quantidade selecionada:</span>
                <span className="font-semibold">{selectedOption.weight}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Total:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    R$ {selectedOption.price}
                  </div>
                  {selectedOption.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      R$ {selectedOption.originalPrice}
                    </div>
                  )}
                </div>
              </div>
              {savings > 0 && (
                <div className="text-right mt-1">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Economia de {savingsPercent}%
                  </Badge>
                </div>
              )}
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Método de pagamento:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                    paymentMethod === 'pix'
                      ? 'border-primary bg-primary/5 shadow-glow'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <QrCode className="h-4 w-4" />
                  <span className="font-medium">PIX</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary/5 shadow-glow'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  <span className="font-medium">Cartão</span>
                </button>
              </div>
            </div>

            {/* Purchase Button */}
            <Button 
              onClick={handlePurchase}
              variant="hero"
              size="xl"
              className="w-full animate-pulse-glow"
            >
              Comprar Agora
            </Button>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>Retirada Local</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};