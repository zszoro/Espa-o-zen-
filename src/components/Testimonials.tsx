import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Silva",
    text: "Experiência transformadora! O Reiki me trouxe paz interior e equilíbrio que eu buscava há tempos. A terapeuta é extremamente profissional e acolhedora.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    text: "As massagens relaxantes são incríveis. Saio de cada sessão completamente renovado. O ambiente é perfeito para relaxar e se desconectar do estresse.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    text: "Os óleos essenciais são de altíssima qualidade. Uso diariamente em casa e sinto a diferença na minha energia e bem-estar. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    text: "A ventosaterapia aliviou completamente minhas dores nas costas. Profissional dedicada e espaço muito acolhedor. Voltarei sempre!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gradient-zen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover-lift"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
