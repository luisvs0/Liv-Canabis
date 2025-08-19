import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Leaf, Award } from "lucide-react";
import cannabisHero from "@/assets/cannabis-hero.jpg";

interface ProductOption {
  weight: string;
  price: number;
  originalPrice?: number;
  description: string;
}

const productOptions: ProductOption[] = [
  { 
    weight: "12g", 
    price: 150, 
    originalPrice: 180,
    description: "Ideal para tratamentos iniciais ou de manutenção"
  },
  { 
    weight: "20g", 
    price: 240, 
    originalPrice: 300,
    description: "Opção mais popular para tratamentos regulares"
  },
  { 
    weight: "40g", 
    price: 450, 
    originalPrice: 580,
    description: "Melhor custo-benefício para tratamentos intensivos"
  }
];

const Products = () => {
  const handlePurchase = (option: ProductOption) => {
    // TODO: Check if user is logged in
    // If not logged in, redirect to login
    // If logged in, proceed with purchase
    console.log('Attempting to purchase', option);
    alert('Para realizar a compra, você precisa estar logado. Conecte o Supabase para ativar esta funcionalidade.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Products Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Cannabis Medicinal Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Escolha a quantidade ideal para seu tratamento. Todas as opções 
            são testadas em laboratório e certificadas.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {productOptions.map((option, index) => {
            const savings = option.originalPrice ? option.originalPrice - option.price : 0;
            const savingsPercent = option.originalPrice ? Math.round((savings / option.originalPrice) * 100) : 0;

            return (
              <Card key={index} className="overflow-hidden bg-gradient-card shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center">
                    <img 
                      src={cannabisHero} 
                      alt={`Cannabis Medicinal ${option.weight}`}
                      className="w-full max-w-[200px] h-auto object-contain"
                    />
                    {option.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          -{savingsPercent}%
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      Cannabis Medicinal {option.weight}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Certificado e Legal</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Leaf className="h-4 w-4 text-primary" />
                      <span>100% Natural</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Testado em Laboratório</span>
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      R$ {option.price}
                    </div>
                    {option.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        R$ {option.originalPrice}
                      </div>
                    )}
                    {savings > 0 && (
                      <div className="text-sm text-primary font-medium">
                        Economia de R$ {savings}
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={() => handlePurchase(option)}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Comprar {option.weight}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Product Info */}
        <div className="bg-accent/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
            Informações do Produto
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Especificações Técnicas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• THC: Concentração controlada conforme legislação</li>
                <li>• CBD: Alto teor para uso medicinal</li>
                <li>• Pureza: Testado e certificado em laboratório</li>
                <li>• Origem: Cultivo controlado e regulamentado</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Como Funciona a Entrega</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Após o pagamento, você recebe o endereço de retirada</li>
                <li>• Local seguro na sua cidade</li>
                <li>• Retirada no mesmo dia ou próximo útil</li>
                <li>• Produto embalado de forma discreta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;