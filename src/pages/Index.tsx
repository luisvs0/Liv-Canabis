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
          className="w-full object-cover max-h-[500px] md:max-h-[600px] mt-8 transition-transform duration-1000 hover:scale-110 animate-slide-in-down shadow-2xl rounded-3xl border-4 border-primary/60"
        />
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 animate-slide-in-left" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
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
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30 hover:border-primary/80 transition-all hover:shadow-glow animate-zoom-in"
              style={{ animationDelay: `${0.7 + index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 animate-bounce">
                <feature.icon className="h-8 w-8 text-primary drop-shadow-lg" />
              </div>
              <h3 className="font-extrabold mb-2 text-lg animate-pulse text-primary">{feature.title}</h3>
              <p className="text-base text-muted-foreground animate-fade-in-up">{feature.description}</p>
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
