import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const packages = [
  {
    id: 1,
    name: "Новичок",
    price: 299,
    color: "minecraft-iron",
    emoji: "🥉",
    features: [
      "Приватная территория 50x50",
      "Базовый набор инструментов",
      "10 алмазов в подарок",
      "Доступ к /home",
      "Защита от гриферов",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Воин",
    price: 599,
    color: "minecraft-gold",
    emoji: "🥈",
    features: [
      "Приватная территория 100x100",
      "Зачарованные инструменты",
      "25 алмазов в подарок",
      "Доступ к /sethome (3 дома)",
      "Кит с броней",
      "Цветной ник в чате",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Король",
    price: 999,
    color: "minecraft-diamond",
    emoji: "🥇",
    features: [
      "Приватная территория 200x200",
      "Полный набор незеритовых инструментов",
      "50 алмазов в подарок",
      "Доступ к /sethome (10 домов)",
      "Уникальная броня",
      "Приоритет в очереди",
      "Доступ к креативу на участке",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "Император",
    price: 1999,
    color: "minecraft-emerald",
    emoji: "👑",
    features: [
      "Приватная территория 500x500",
      "Все возможности предыдущих рангов",
      "100 алмазов в подарок",
      "Неограниченные /sethome",
      "Уникальные эффекты частиц",
      "Персональный NPC торговец",
      "Доступ к эксклюзивным мирам",
    ],
    popular: false,
  },
];

export default function DonationPackages() {
  return (
    <section className="bg-minecraft-dirt py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Донат Пакеты
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Поддержи сервер и получи уникальные возможности! Все средства идут
            на развитие сервера.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative border-4 border-black bg-${pkg.color}/90 hover:scale-105 transition-transform duration-200 ${pkg.popular ? "ring-4 ring-yellow-400" : ""}`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black border-2 border-black px-4 py-1">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-3">{pkg.emoji}</div>
                <CardTitle className="text-2xl font-bold text-white">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-white">
                  {pkg.price} ₽
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-white text-sm"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-minecraft-grass hover:bg-minecraft-emerald text-white border-2 border-black font-bold">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-sm">
            💳 Принимаем к оплате: Банковские карты, СБП, ЮMoney, QIWI
          </p>
        </div>
      </div>
    </section>
  );
}
