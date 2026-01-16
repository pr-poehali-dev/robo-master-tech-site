import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Bot" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                РобоМастер
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#achievements" className="hover:text-primary transition-colors">Достижения</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button asChild className="animate-glow">
              <a href="#register">Записаться</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 text-sm" variant="outline">
            <Icon name="Zap" size={16} className="mr-1" />
            Технологии будущего уже сегодня
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Творческая мастерская
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              робототехники
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Обучаем детей LEGO-конструированию и программированию роботов. 
            Развиваем креативность, логику и навыки будущего.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild className="animate-scale-in">
              <a href="#register">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать обучение
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#gallery">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть проекты
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">
                <Icon name="User" size={16} className="mr-1" />
                Педагог
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Александр Иванов
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Сертифицированный преподаватель робототехники с 8-летним опытом работы с детьми.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Образование</p>
                    <p className="text-muted-foreground">МГТУ им. Баумана, Робототехника</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Trophy" className="text-secondary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Достижения учеников</p>
                    <p className="text-muted-foreground">15 призовых мест на соревнованиях</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Подход</p>
                    <p className="text-muted-foreground">Индивидуальный подход к каждому ребёнку</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-96">
              <img 
                src="https://cdn.poehali.dev/projects/ef2d2f98-a731-4f6a-856c-ae7ba774a4aa/files/734450e1-f645-4b65-95a8-90352f4785b1.jpg"
                alt="Александр Иванов - преподаватель робототехники"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Calendar" size={16} className="mr-1" />
              Расписание
            </Badge>
            <h2 className="text-4xl font-bold mb-4">График занятий</h2>
            <p className="text-muted-foreground">Выберите удобное время для занятий</p>
          </div>
          <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Начинающие</TabsTrigger>
              <TabsTrigger value="intermediate">Продвинутые</TabsTrigger>
              <TabsTrigger value="advanced">Эксперты</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Понедельник, Среда
                  </CardTitle>
                  <CardDescription>16:00 - 17:30 | Возраст: 6-8 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Основы LEGO-конструирования, простые механизмы</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Суббота
                  </CardTitle>
                  <CardDescription>10:00 - 11:30 | Возраст: 6-8 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Основы LEGO-конструирования, простые механизмы</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="intermediate" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-secondary" />
                    Вторник, Четверг
                  </CardTitle>
                  <CardDescription>16:00 - 17:30 | Возраст: 9-11 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Программирование роботов, датчики и моторы</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-secondary" />
                    Суббота
                  </CardTitle>
                  <CardDescription>12:00 - 13:30 | Возраст: 9-11 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Программирование роботов, датчики и моторы</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" />
                    Пятница
                  </CardTitle>
                  <CardDescription>17:00 - 19:00 | Возраст: 12-15 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Сложные проекты, подготовка к соревнованиям</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" />
                    Воскресенье
                  </CardTitle>
                  <CardDescription>14:00 - 16:00 | Возраст: 12-15 лет</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Сложные проекты, подготовка к соревнованиям</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Image" size={16} className="mr-1" />
              Галерея
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Проекты наших учеников</h2>
            <p className="text-muted-foreground">Творческие работы детей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Робот-манипулятор', author: 'Максим, 10 лет', category: 'LEGO Mindstorms' },
              { title: 'Умный дом', author: 'Софья, 12 лет', category: 'Arduino' },
              { title: 'Следящий робот', author: 'Артём, 9 лет', category: 'LEGO WeDo' },
              { title: 'Сортировщик цветов', author: 'Даша, 11 лет', category: 'LEGO EV3' },
              { title: 'Робот-футболист', author: 'Иван, 13 лет', category: 'Соревнования' },
              { title: 'Автопилот машины', author: 'Миша, 14 лет', category: 'Raspberry Pi' },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/ef2d2f98-a731-4f6a-856c-ae7ba774a4aa/files/19e042fa-feb9-446d-a936-8223f49e48c8.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Автор: {project.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{project.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="Trophy" size={16} className="mr-1" />
              Достижения
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Награды учеников</h2>
            <p className="text-muted-foreground">Наши победы на соревнованиях</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Medal', title: '1-е место', event: 'Робофест 2024', color: 'text-yellow-400' },
              { icon: 'Award', title: '2-е место', event: 'WRO Russia 2024', color: 'text-gray-300' },
              { icon: 'Star', title: '3-е место', event: 'Robocode 2023', color: 'text-orange-400' },
              { icon: 'Trophy', title: 'Гран-при', event: 'Юный техник 2023', color: 'text-primary' },
            ].map((achievement, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Icon name={achievement.icon as any} size={60} className={achievement.color} />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.event}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="MessageSquare" size={16} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят родители</h2>
            <p className="text-muted-foreground">Реальные отзывы о нашей студии</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Елена Смирнова',
                text: 'Сын занимается уже год. Стал более усидчивым, появился интерес к технике. Спасибо педагогу!',
                rating: 5,
              },
              {
                name: 'Дмитрий Петров',
                text: 'Отличная студия! Дочь в восторге от занятий, постоянно показывает свои проекты дома.',
                rating: 5,
              },
              {
                name: 'Анна Ковалёва',
                text: 'Профессиональный подход к обучению. Ребёнок уже выиграл своё первое соревнование!',
                rating: 5,
              },
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="HelpCircle" size={16} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>С какого возраста можно начинать?</AccordionTrigger>
              <AccordionContent>
                Мы принимаем детей от 6 лет. Для каждой возрастной группы разработана своя программа обучения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Нужно ли покупать конструкторы?</AccordionTrigger>
              <AccordionContent>
                Нет, все необходимое оборудование предоставляется студией. У нас есть полный набор LEGO и другой техники.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Сколько детей в группе?</AccordionTrigger>
              <AccordionContent>
                В группе максимум 8 человек. Это позволяет педагогу уделить внимание каждому ребёнку.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Можно ли посетить пробное занятие?</AccordionTrigger>
              <AccordionContent>
                Да, первое занятие бесплатное! Это позволит ребёнку познакомиться с форматом и принять решение.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Участвуют ли дети в соревнованиях?</AccordionTrigger>
              <AccordionContent>
                Обязательно! Мы регулярно участвуем в городских и всероссийских соревнованиях по робототехнике.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Icon name="UserPlus" size={16} className="mr-1" />
              Регистрация
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Записаться на занятия</h2>
            <p className="text-muted-foreground">Заполните форму, и мы свяжемся с вами</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя ребёнка</label>
                  <Input
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Возраст</label>
                  <Input
                    type="number"
                    placeholder="Введите возраст"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон родителя</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Bot" className="text-primary" size={24} />
            <span className="text-xl font-bold">РобоМастер</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Творческая мастерская робототехники для детей
          </p>
          <div className="flex gap-4 justify-center mb-4">
            <Icon name="MapPin" size={20} className="text-primary" />
            <span>г. Москва, ул. Примерная, д. 10</span>
          </div>
          <div className="flex gap-4 justify-center mb-4">
            <Icon name="Phone" size={20} className="text-primary" />
            <span>+7 (495) 123-45-67</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Icon name="Mail" size={20} className="text-primary" />
            <span>info@robomaster.ru</span>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 РобоМастер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;