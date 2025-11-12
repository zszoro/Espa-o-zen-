import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import oilImage from "@/assets/product-oil-lavender.jpg";
import diffuserImage from "@/assets/product-diffuser.jpg";
import crystalsImage from "@/assets/product-crystals.jpg";

const products = [
  {
    id: 1,
    title: "Óleo Essencial de Lavanda",
    description: "Óleo puro 100% natural, ideal para relaxamento e alívio do estresse. 10ml",
    price: 45.00,
    image: oilImage,
  },
  {
    id: 2,
    title: "Difusor Ultrassônico",
    description: "Difusor moderno com luz LED, capacidade 300ml. Aromaterize seu ambiente.",
    price: 120.00,
    image: diffuserImage,
  },
  {
    id: 3,
    title: "Kit Pedras Energéticas",
    description: "Conjunto de cristais: ametista, quartzo rosa e quartzo transparente.",
    price: 80.00,
    image: crystalsImage,
  },
  {
    id: 4,
    title: "Óleo Essencial de Eucalipto",
    description: "Refrescante e purificador, perfeito para vias respiratórias. 10ml",
    price: 40.00,
    image: oilImage,
  },
];

const Shop = () => {
  const [cart, setCart] = useState<typeof products>([]);

  const addToCart = (product: typeof products[0]) => {
    setCart([...cart, product]);
    toast.success("Produto adicionado ao carrinho!", {
      description: product.title,
    });
  };

  const getTotalItems = () => cart.length;
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Loja de Produtos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Óleos essenciais, difusores e cristais para continuar seu autocuidado em casa
          </p>
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="mb-8 p-6 bg-primary/10 rounded-xl max-w-md mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ShoppingCart className="text-primary" />
              <h3 className="text-xl font-semibold">Carrinho</h3>
            </div>
            <p className="text-foreground/70">
              {getTotalItems()} {getTotalItems() === 1 ? "item" : "itens"} - R$ {getTotalPrice()}
            </p>
            <Button className="mt-4 bg-primary hover:bg-primary-light text-primary-foreground">
              Finalizar Compra
            </Button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-lift border-border/50 bg-card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-serif">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">
                  R$ {product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
