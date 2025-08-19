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
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center p-4 transition-all duration-600 ${showAnimation ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <Card className="w-full max-w-md p-8 text-center bg-gradient-card shadow-strong animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Leaf className="h-12 w-12 text-primary animate-float" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 gradient-text">
          Bem-vindo à Liv
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Para acessar nossa plataforma de cannabis medicinal, você deve confirmar que tem mais de 18 anos.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={handleYes}
            variant="hero"
            size="lg"
            className="w-full"
          >
            Sim, tenho mais de 18 anos
          </Button>
          
          <Button 
            onClick={handleNo}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Não, tenho menos de 18 anos
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6">
          Esta plataforma destina-se exclusivamente ao uso medicinal de cannabis.
        </p>
      </Card>
    </div>
  );
};