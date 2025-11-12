import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import reikiImage from "@/assets/service-reiki.jpg";
import massageImage from "@/assets/service-massage.jpg";
import aromatherapyImage from "@/assets/service-aromatherapy.jpg";
import cuppingImage from "@/assets/service-cupping.jpg";
import reflexologyImage from "@/assets/service-reflexology.jpg";

const services = [
  {
    title: "Reiki Tradicional",
    description: "Terapia energética milenar que promove equilíbrio e bem-estar através da canalização de energia vital.",
    price: "R$ 120,00",
    image: reikiImage,
  },
  {
    title: "Massagem Relaxante",
    description: "Técnicas suaves que aliviam tensões musculares, reduzem o estresse e promovem relaxamento profundo.",
    price: "R$ 150,00",
    image: massageImage,
  },
  {
    title: "Aromaterapia",
    description: "Uso terapêutico de óleos essenciais puros para harmonizar corpo, mente e emoções.",
    price: "R$ 100,00",
    image: aromatherapyImage,
  },
  {
    title: "Ventosaterapia",
    description: "Terapia com ventosas que estimula a circulação, alivia dores e elimina toxinas do organismo.",
    price: "R$ 130,00",
    image: cuppingImage,
  },
  {
    title: "Reflexologia",
    description: "Massagem terapêutica nos pés que estimula pontos reflexos correspondentes a todo o corpo.",
    price: "R$ 110,00",
    image: reflexologyImage,
  },
];

const Services = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById("agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubra terapias holísticas cuidadosamente selecionadas para promover seu equilíbrio e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border-border/50 bg-card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToAgendamento}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground"
                >
                  Agendar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
