import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-minecraft-stone border-b-4 border-minecraft-cobblestone px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-minecraft-grass border-2 border-black flex items-center justify-center">
            <span className="text-2xl">🏰</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Bedrock World</h1>
            <p className="text-gray-300 text-sm">Ванилла с модами</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Button
            variant="ghost"
            className="text-white hover:bg-minecraft-cobblestone border-2 border-transparent hover:border-black"
          >
            Главная
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-minecraft-cobblestone border-2 border-transparent hover:border-black"
          >
            Магазин
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-minecraft-cobblestone border-2 border-transparent hover:border-black"
          >
            О сервере
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-minecraft-cobblestone border-2 border-transparent hover:border-black"
          >
            Статистика
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-minecraft-cobblestone border-2 border-transparent hover:border-black"
          >
            Поддержка
          </Button>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="text-white text-sm hidden sm:block">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>124 игроков онлайн</span>
            </div>
          </div>
          <Button className="bg-minecraft-grass hover:bg-minecraft-emerald text-white border-2 border-black">
            <Icon name="Play" size={16} className="mr-2" />
            Играть
          </Button>
        </div>
      </div>
    </header>
  );
}
