import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-zen.jpg";

const Hero = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById("agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in text-balance">
          Bem-vindo ao Espaço Zen
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in font-light text-balance">
          Encontre equilíbrio, paz interior e renovação através de terapias holísticas
        </p>
        <Button
          onClick={scrollToAgendamento}
          size="lg"
          className="bg-primary hover:bg-primary-light text-primary-foreground text-lg px-10 py-6 shadow-glow animate-fade-in hover:scale-105 transition-transform"
        >
          Agendar Sessão
        </Button>
      </div>
    </section>
  );
};

export default Hero;
