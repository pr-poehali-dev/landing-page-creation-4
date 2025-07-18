import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79999999999', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-24 mx-auto max-w-6xl lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-light tracking-tight font-montserrat text-gray-900 sm:text-7xl lg:text-8xl mb-8">
            Алёна Чернова
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Психотерапевт • Гештальт-подход • Индивидуальная работа
          </p>
        </div>
        
        <div className="relative max-w-sm mx-auto mb-20">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src="/img/b9b5bf00-aaba-4fb0-a58a-d925e42ea2fe.jpg"
              alt="Алёна Чернова"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6 font-montserrat">
            Бережная работа с вашим уникальным жизненным узором
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Индивидуальная психотерапия в гештальт-подходе для улучшения качества жизни, 
            понимания себя и построения здоровых отношений.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-lg font-light rounded-full transition-all duration-300"
            onClick={handleWhatsAppClick}
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight font-montserrat text-gray-900 mb-6">
              Услуги
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-4 font-montserrat">
                  Очная консультация
                </h3>
                <p className="text-gray-600 mb-8">Индивидуальная сессия в офисе</p>
                <div className="text-4xl font-light text-gray-900 mb-2">5500 ₽</div>
                <p className="text-gray-500 mb-8">50 минут • Предоплата 1000 ₽</p>
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full font-light"
                  onClick={handleWhatsAppClick}
                >
                  Записаться
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-4 font-montserrat">
                  Онлайн консультация
                </h3>
                <p className="text-gray-600 mb-8">Сессия в видео-формате</p>
                <div className="text-4xl font-light text-gray-900 mb-2">5000 ₽</div>
                <p className="text-gray-500 mb-8">50 минут • Предоплата 1000 ₽</p>
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full font-light"
                  onClick={handleWhatsAppClick}
                >
                  Записаться
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 font-light">
              Регулярность встреч: 1 раз в неделю
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight font-montserrat text-gray-900 mb-6">
              О специалисте
            </h2>
          </div>
          
          <div className="grid gap-16 lg:grid-cols-2 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-montserrat">Образование</h3>
                <p className="text-gray-600 leading-relaxed">РГГУ, специальность "Мировая экономика" (2013)</p>
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-montserrat">Психотерапевтическая подготовка</h3>
                <p className="text-gray-600 leading-relaxed">
                  МИГИП (Московский институт гештальт-терапии и психологического консультирования)
                  <br />• 1 ступень - завершена
                  <br />• 2 ступень - в процессе с 2023 года
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-3 font-montserrat">Опыт работы</h3>
                <p className="text-gray-600 leading-relaxed">
                  С 2014 года - опыт в бизнесе как личный ассистент, менеджер проектов
                  <br />С 2019 года - консультации по чакральной нумерологии
                  <br />3 года в личной терапии
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-8 font-montserrat">С чем работаю</h3>
              <div className="space-y-4">
                <div className="text-gray-600">Улучшение качества жизни</div>
                <div className="text-gray-600">Понимание себя</div>
                <div className="text-gray-600">Построение здоровых отношений</div>
                <div className="text-gray-600">Выход из разрушающих отношений</div>
                <div className="text-gray-600">Тревожные состояния</div>
                <div className="text-gray-600">Работа со сновидениями</div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-light text-gray-900 mb-3 font-montserrat">Специализация</h4>
                <p className="text-gray-600 leading-relaxed">
                  Гештальт-подход, работа с МАК-картами как психотерапевтическим инструментом
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light tracking-tight font-montserrat text-gray-900 mb-8">
            Готовы начать работу над собой?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Запишитесь на консультацию, чтобы обсудить ваш запрос и найти путь к изменениям
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-lg font-light rounded-full transition-all duration-300"
            onClick={handleWhatsAppClick}
          >
            Написать в WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light font-montserrat text-gray-900 mb-2">Чернова Алёна</h3>
            <p className="text-gray-500 font-light mb-8">Психотерапевт • Гештальт-подход</p>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-500 hover:text-gray-900 font-light"
              onClick={handleWhatsAppClick}
            >
              WhatsApp
            </Button>
            <p className="mt-8 text-sm text-gray-400 font-light">
              © 2024 Чернова Алёна
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}