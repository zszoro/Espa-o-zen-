import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">Espaço Zen</h3>
            <p className="text-foreground/70 mb-4">
              Seu refúgio de paz e harmonia. Terapias holísticas para corpo, mente e espírito.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>Feito com</span>
              <Heart className="fill-accent text-accent" size={16} />
              <span>para seu bem-estar</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <button onClick={() => scrollToSection("inicio")} className="hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sobre")} className="hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("produtos")} className="hover:text-primary transition-colors">
                  Produtos
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>(11) 98765-4321</li>
              <li>contato@espacozen.com.br</li>
              <li>Rua da Harmonia, 123</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Espaço Zen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
