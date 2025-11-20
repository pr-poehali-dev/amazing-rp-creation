import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">AMAZING RP</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              AMAZING RP
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Выбери свой путь от бомжа до миллионера
            </p>
          </div>
          <Button 
            onClick={() => scrollToSection('about')} 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
          >
            Начать путь
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">О проекте</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Gamepad2" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Свобода выбора</h3>
                <p className="text-muted-foreground leading-relaxed">
                  В AMAZING RP ты сам выбираешь свой путь. Начни с нуля и прокачай персонажа до миллионера. Работай, зарабатывай, инвестируй — реши сам, кем ты станешь.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="mb-4 text-secondary">
                  <Icon name="Briefcase" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Работа и карьера</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Устройся на работу в любой сфере: от простого работника до владельца бизнеса. Развивай навыки, зарабатывай деньги и строй карьеру своей мечты.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <Icon name="Home" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Недвижимость</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Покупай дома, квартиры и гаражи. Создай свою империю недвижимости и стань настоящим магнатом в мире AMAZING RP.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <div className="mb-4 text-secondary">
                  <Icon name="Car" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Личный транспорт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Собери коллекцию личных машин. От старого авто до роскошных суперкаров — выбор за тобой. Открой счёт в банке и управляй своими финансами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Галерея</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Card key={item} className="overflow-hidden group cursor-pointer border-border hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 relative aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon name="Image" size={64} className="text-muted-foreground/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-lg font-semibold">Игровой момент #{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">AMAZING RP</h2>
          <p className="text-muted-foreground mb-6">Твоя история начинается здесь</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Users" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Globe" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
