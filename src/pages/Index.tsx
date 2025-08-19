import { useState } from "react";
import { AgeVerification } from "@/components/AgeVerification";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Truck, Clock } from "lucide-react";

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  if (!isAgeVerified) {
    return <AgeVerification onVerified={() => setIsAgeVerified(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="w-full relative overflow-hidden">
        <img 
          src="/banner.png" 
          alt="Banner - Participe! Venha fazer parte!" 
          className="w-full object-cover max-h-[500px] md:max-h-[600px] mt-8 transition-transform duration-700 hover:scale-105 animate-fade-in-up"
        />
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Tratamento de Qualidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cannabis medicinal certificada, testada em laboratório e com 
            garantia de pureza para seu tratamento.
          </p>
        </div>

        {/* Product Section */}
        <div className="mb-16">
          <ProductCard />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "100% Legal",
              description: "Produto certificado e regulamentado"
            },
            {
              icon: Leaf,
              title: "Alta Qualidade",
              description: "Testado em laboratório"
            },
            {
              icon: Truck,
              title: "Retirada Local",
              description: "Endereço na sua cidade"
            },
            {
              icon: Clock,
              title: "Entrega Rápida",
              description: "Mesmo dia ou próximo útil"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-medium animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: 'both' }}
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-accent/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Compromisso com a Segurança
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Todos os nossos produtos passam por rigorosos controles de qualidade e 
            testes laboratoriais. Garantimos a pureza, potência e segurança de cada 
            produto, seguindo as mais altas normas regulamentares para cannabis medicinal.
          </p>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
