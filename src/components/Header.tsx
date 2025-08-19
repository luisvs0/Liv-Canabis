import { Leaf, MessageCircle, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={"/Liv.png"} 
                alt="Liv Cannabis" 
                className="h-10 w-10"
              />
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold gradient-text">Liv</h1>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                  Medicinal
                </Badge>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Início
            </a>
            <a 
              href="/produtos" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/produtos' ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Produtos
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>100% Legal e Seguro</span>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden sm:flex"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">Ajuda</span>
            </Button>
            
            <Button 
              variant="minimal" 
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.location.href = '/login'}
            >
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Entrar</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Badge component inline since it's simple
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${className}`}>
    {children}
  </span>
);