import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";

const paymentLabels: Record<string, string> = {
  pix: "PIX",
  cartao: "Cartão de Crédito",
};

const PIX_QR_VALUE = "00020126360014BR.GOV.BCB.PIX0114+5511999999995204000053039865405100.005802BR5920NOME DO RECEBEDOR6009Sao Paulo62070503***6304B14F";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const payment = location.state?.payment;

  const [showPix, setShowPix] = useState(payment === "pix");
  const [processing, setProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
  const [cardForm, setCardForm] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [processingCard, setProcessingCard] = useState(false);

  useEffect(() => {
    if (showPix && timeLeft > 0 && !processing) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [showPix, timeLeft, processing]);

  const handleFinish = () => {
    setShowPix(false);
    setProcessing(true);
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value });
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingCard(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-card rounded-lg shadow-strong p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 gradient-text">Pagamento</h1>
          {payment ? (
            <>
              <p className="text-lg mb-6">Você escolheu a forma de pagamento:</p>
              <div className="text-2xl font-bold text-primary mb-8">
                {paymentLabels[payment] || payment}
              </div>
              {payment === "pix" && showPix && !processing && (
                <>
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <QRCodeSVG value={PIX_QR_VALUE} size={180} />
                    <div className="text-sm text-muted-foreground">Escaneie o QR Code para pagar via Pix</div>
                    <div className="font-mono text-lg text-primary">Tempo restante: {formatTime(timeLeft)}</div>
                  </div>
                  <Button onClick={handleFinish} className="w-full text-lg font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-transform">Finalizar pedido</Button>
                </>
              )}
              {payment === "cartao" && !processingCard && (
                <form className="space-y-4 mb-6" onSubmit={handleCardSubmit} autoComplete="off">
                  <input
                    type="text"
                    name="number"
                    value={cardForm.number}
                    onChange={handleCardChange}
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                    placeholder="Número do cartão"
                    maxLength={19}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    value={cardForm.name}
                    onChange={handleCardChange}
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                    placeholder="Nome impresso no cartão"
                    required
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="expiry"
                      value={cardForm.expiry}
                      onChange={handleCardChange}
                      className="w-1/2 border rounded-lg p-2 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                      placeholder="Validade (MM/AA)"
                      maxLength={5}
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={cardForm.cvv}
                      onChange={handleCardChange}
                      className="w-1/2 border rounded-lg p-2 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                      placeholder="CVV"
                      maxLength={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-transform">Finalizar compra</Button>
                </form>
              )}
              {payment === "cartao" && processingCard && (
                <div className="mt-8">
                  <div className="text-lg font-semibold text-primary mb-4">Processando pagamento...</div>
                </div>
              )}
              {payment !== "pix" && (
                <Button onClick={() => navigate("/produtos")}>Voltar para produtos</Button>
              )}
            </>
          ) : (
            <>
              <p className="text-lg mb-6 text-destructive">Forma de pagamento não informada.</p>
              <Button onClick={() => navigate("/produtos")}>Voltar</Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}