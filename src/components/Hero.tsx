import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-minecraft-stone to-minecraft-dirt min-h-[600px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-0 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-gray-700 aspect-square"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
              BEDROCK
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-minecraft-grass">
              WORLD
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Поддержи развитие сервера и получи уникальные привилегии! Все
              средства идут на улучшение игрового процесса.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-minecraft-grass hover:bg-minecraft-emerald text-white border-4 border-black text-xl px-8 py-4 h-auto">
              <Icon name="Play" size={24} className="mr-3" />
              Начать играть
            </Button>
            <Button
              variant="outline"
              className="border-4 border-white text-white hover:bg-white hover:text-minecraft-stone text-xl px-8 py-4 h-auto"
            >
              <Icon name="ShoppingBag" size={24} className="mr-3" />
              Донат магазин
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-minecraft-cobblestone/80 border-4 border-black p-6 text-center">
              <div className="text-4xl mb-2">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">
                VIP Привилегии
              </h3>
              <p className="text-gray-300">Получи уникальные возможности</p>
            </div>
            <div className="bg-minecraft-cobblestone/80 border-4 border-black p-6 text-center">
              <div className="text-4xl mb-2">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Премиум товары
              </h3>
              <p className="text-gray-300">Эксклюзивные предметы и ресурсы</p>
            </div>
            <div className="bg-minecraft-cobblestone/80 border-4 border-black p-6 text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">Косметика</h3>
              <p className="text-gray-300">Уникальный внешний вид</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
