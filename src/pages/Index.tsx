import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79999999999', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue to-white font-open-sans">
      {/* Hero Section */}
      <section className="relative px-4 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight font-montserrat text-gray-900 sm:text-5xl lg:text-6xl">
              Бережная работа с{' '}
              <span className="text-primary">вашим уникальным</span>{' '}
              жизненным узором
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Индивидуальная психотерапия в гештальт-подходе для улучшения качества жизни, 
              понимания себя и построения здоровых отношений.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={handleWhatsAppClick}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 animate-scale-in">
            <div className="relative">
              <img
                src="/img/f144882b-ecaf-4207-adba-ba6019af59cb.jpg"
                alt="Психотерапевт Алёна Чернова"
                className="rounded-2xl shadow-2xl max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Icon name="Heart" className="text-primary" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-montserrat text-gray-900 sm:text-4xl">
              Услуги и цены
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Профессиональная психотерапевтическая помощь в удобном формате
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat text-gray-900">
                      Очная консультация
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Индивидуальная сессия в офисе
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Длительность</span>
                    <span className="font-semibold text-gray-900">50 минут</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Стоимость</span>
                    <span className="text-2xl font-bold text-primary">5500 ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Предоплата</span>
                    <span className="font-semibold text-gray-900">1000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Icon name="Video" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat text-gray-900">
                      Онлайн консультация
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Сессия в видео-формате
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Длительность</span>
                    <span className="font-semibold text-gray-900">50 минут</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Стоимость</span>
                    <span className="text-2xl font-bold text-secondary">5000 ₽</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Предоплата</span>
                    <span className="font-semibold text-gray-900">1000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <Icon name="Calendar" className="inline mr-2" size={16} />
              Регулярность встреч: 1 раз в неделю (может быть изменена по запросу)
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-montserrat text-gray-900 sm:text-4xl">
                Чернова Алёна
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Психотерапевт, специалист по гештальт-подходу
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Образование</h3>
                    <p className="text-gray-600">РГГУ, специальность "Мировая экономика" (2013)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Психотерапевтическая подготовка</h3>
                    <p className="text-gray-600">
                      МИГИП (Московский институт гештальт-терапии и психологического консультирования)
                      <br />• 1 ступень - завершена
                      <br />• 2 ступень - в процессе с 2023 года
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Опыт работы</h3>
                    <p className="text-gray-600">
                      С 2014 года - опыт в бизнесе как личный ассистент, менеджер проектов
                      <br />С 2019 года - консультации по чакральной нумерологии
                      <br />3 года в личной терапии
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Специализация</h3>
                    <p className="text-gray-600">
                      Гештальт-подход, работа с МАК-картами как психотерапевтическим инструментом
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat text-gray-900">
                    С чем работаю
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Улучшение качества жизни
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Понимание себя
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Построение здоровых отношений
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Выход из разрушающих отношений
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Тревожные состояния
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" size={16} />
                      Работа со сновидениями
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight font-montserrat sm:text-4xl">
            Готовы начать работу над собой?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Запишитесь на консультацию, чтобы обсудить ваш запрос и найти путь к изменениям
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={handleWhatsAppClick}
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold font-montserrat">Чернова Алёна</h3>
            <p className="mt-2 text-gray-400">Психотерапевт • Гештальт-подход</p>
            <div className="mt-4 flex justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={handleWhatsAppClick}
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Phone" size={20} />
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              © 2024 Чернова Алёна. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}