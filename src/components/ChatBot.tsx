import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

const FAQ_RESPONSES = {
  "como usar": "O cannabis medicinal deve ser usado conforme orientação médica. Recomendamos sempre consultar um profissional de saúde.",
  "retirada": "Após a confirmação do pagamento, você receberá um endereço para retirada em sua cidade. O local será enviado em até 2 horas.",
  "legal": "Nossos produtos são 100% legais e regulamentados. Possuímos todas as certificações necessárias para comercialização.",
  "pagamento": "Aceitamos PIX (desconto instantâneo) e cartão de crédito. O pagamento é processado de forma segura.",
  "qualidade": "Todos os produtos passam por rigorosos testes de qualidade e laboratório para garantir pureza e potência.",
  "prazo": "Após a confirmação do pagamento, o produto fica disponível para retirada no mesmo dia ou próximo dia útil."
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Como posso ajudar com suas dúvidas sobre cannabis medicinal?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input }]);

    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let response = "Obrigado pela sua pergunta! Para dúvidas específicas, nossa equipe está disponível de segunda a sexta, das 9h às 18h.";

    for (const [keyword, botResponse] of Object.entries(FAQ_RESPONSES)) {
      if (lowerInput.includes(keyword)) {
        response = botResponse;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInput('');
  };

  const suggestedQuestions = [
    "Como usar cannabis medicinal?",
    "Como funciona a retirada?",
    "É legal?",
    "Métodos de pagamento"
  ];

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-strong animate-pulse-glow"
        variant="hero"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-strong bg-gradient-card border-primary/20">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-semibold">Assistente Liv</h3>
                <p className="text-xs text-muted-foreground">Cannabis medicinal</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Perguntas frequentes:</p>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="block w-full text-left p-2 text-xs bg-accent/50 hover:bg-accent rounded border border-border hover:border-primary/30 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"
                />
                <Button onClick={handleSend} size="sm" variant="default">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};