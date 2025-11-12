import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-serif font-bold text-primary">Espaço Zen</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("agendamento")}
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow"
            >
              Agendar Sessão
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("agendamento")}
                className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow"
              >
                Agendar Sessão
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
