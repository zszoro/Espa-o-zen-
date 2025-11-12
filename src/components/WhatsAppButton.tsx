import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5511987654321";
  const message = "Olá! Gostaria de agendar uma sessão no Espaço Zen.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-glow bg-[#25D366] hover:bg-[#20BA5A] text-white p-0"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
