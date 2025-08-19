import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

export const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleYes = () => {
    setShowAnimation(true);
    setTimeout(() => {
      onVerified();
    }, 600);
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className={`fixed inset-0 z-50 bg-[#7ED957] flex items-center justify-center p-4 transition-all duration-600 ${showAnimation ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} animate-zoom-in animate-fade-in-up`}>
      <Card className="w-full max-w-md p-10 md:p-12 text-center bg-white/90 shadow-2xl rounded-3xl border-2 border-primary/20 animate-fade-in-up animate-slide-in-down animate-delay-200 backdrop-blur-md">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="p-4 bg-primary/10 rounded-full animate-bounce shadow-md">
            <Leaf className="h-14 w-14 text-primary drop-shadow-lg" />
          </div>
          <span className="text-xs text-primary/80 font-semibold tracking-widest uppercase">Acesso restrito</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">Bem-vindo à Liv</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
          Para acessar nossa plataforma de cannabis medicinal, confirme que você tem mais de 18 anos. Isso garante segurança e responsabilidade para todos.
        </p>
        <div className="flex flex-col gap-4">
          <Button 
            onClick={handleYes}
            variant="hero"
            size="lg"
            className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-glow focus:ring-2 focus:ring-primary/40 focus:outline-none text-lg font-bold py-3 rounded-xl"
          >
            Sim, tenho mais de 18 anos
          </Button>
          <Button 
            onClick={handleNo}
            variant="outline"
            size="lg"
            className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-glow focus:ring-2 focus:ring-primary/20 focus:outline-none text-lg font-bold py-3 rounded-xl"
          >
            Não, tenho menos de 18 anos
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-8 italic">
          Esta plataforma destina-se exclusivamente ao uso medicinal de cannabis. O acesso é restrito a maiores de 18 anos conforme legislação vigente.
        </p>
      </Card>
    </div>
  );
};