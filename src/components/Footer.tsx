import { Heart, Shield, Lock, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold gradient-text">Sobre a Liv</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma especializada em cannabis medicinal, comprometida com a 
              qualidade, segurança e bem-estar dos nossos pacientes.
            </p>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h3 className="font-semibold">Segurança & Legalidade</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Certificado e regulamentado</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                <span>Dados criptografados (LGPD)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-primary" />
                <span>Uso exclusivamente medicinal</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Atendimento</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Segunda a sexta: 9h às 18h</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dúvidas sobre produtos, retirada ou uso medicinal
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Liv Cannabis Medicinal. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Produto destinado a maiores de 18 anos para uso medicinal
          </p>
        </div>
      </div>
    </footer>
  );
};