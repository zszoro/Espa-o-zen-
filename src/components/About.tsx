import { Leaf, Heart, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-space.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-zen">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={aboutImage}
              alt="Espaço terapêutico acolhedor"
              className="rounded-2xl shadow-soft w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Sobre Nós
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              No Espaço Zen, acreditamos que o verdadeiro bem-estar nasce do equilíbrio entre corpo, mente e espírito. 
              Nosso espaço foi criado para ser um refúgio de paz e harmonia, onde você pode se reconectar consigo mesmo 
              e despertar sua energia vital.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Combinamos terapias milenares como Reiki, massagens relaxantes e aromaterapia com óleos essenciais 
              naturais para proporcionar uma experiência holística de cura e transformação.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Terapias Naturais</h3>
                  <p className="text-foreground/70">Métodos holísticos respeitando a sabedoria ancestral</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Heart className="text-secondary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Atendimento Personalizado</h3>
                  <p className="text-foreground/70">Cada sessão adaptada às suas necessidades únicas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Sparkles className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ambiente Harmonioso</h3>
                  <p className="text-foreground/70">Espaço cuidadosamente preparado para seu relaxamento</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 mt-8">
              "A cura não vem de fora, ela desperta de dentro. Nós apenas facilitamos essa jornada."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
