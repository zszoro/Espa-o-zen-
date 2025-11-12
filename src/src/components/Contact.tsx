import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Estamos aqui para te acolher e responder suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Localização</h3>
                <p className="text-foreground/70">
                  Rua da Harmonia, 123 - Jardim Zen<br />
                  São Paulo, SP - 01234-567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-secondary/20 p-4 rounded-lg group-hover:bg-secondary/30 transition-colors">
                <Phone className="text-secondary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                <p className="text-foreground/70">(11) 98765-4321</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-accent/20 p-4 rounded-lg group-hover:bg-accent/30 transition-colors">
                <Mail className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                <p className="text-foreground/70">contato@espacozen.com.br</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-secondary/30 hover:bg-secondary/10"
                  asChild
                >
                  <a href="https://instagram.com/espacozen" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2" size={20} />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-soft h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.096854998308!2d-46.65442332378426!3d-23.561414778792787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Espaço Zen"
            ></iframe>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Horário de Funcionamento</h3>
          <div className="text-foreground/70 space-y-2">
            <p>Segunda a Sexta: 9h às 19h</p>
            <p>Sábado: 9h às 15h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
