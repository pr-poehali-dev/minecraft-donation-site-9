import { useState } from "react";
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

interface DonatePackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  category: string;
}

const donatePackages: DonatePackage[] = [
  {
    id: "vip",
    name: "VIP",
    price: 199,
    originalPrice: 299,
    description: "Базовый VIP статус с основными привилегиями",
    features: [
      "Приоритетный вход на сервер",
      "Доступ к VIP зоне",
      "Уникальный префикс в чате",
      "Команда /fly на 1 час в день",
      "Защита от гриферов",
    ],
    icon: "⭐",
    category: "ranks",
  },
  {
    id: "premium",
    name: "Premium",
    price: 399,
    originalPrice: 599,
    description: "Продвинутый статус с расширенными возможностями",
    features: [
      "Все привилегии VIP",
      "Команда /fly без ограничений",
      "Доступ к Premium зоне",
      "Уникальные эффекты частиц",
      "Приоритетная поддержка",
      "Скидка 10% в магазине",
    ],
    popular: true,
    icon: "💎",
    category: "ranks",
  },
  {
    id: "legendary",
    name: "Legendary",
    price: 799,
    originalPrice: 1199,
    description: "Максимальный статус с эксклюзивными привилегиями",
    features: [
      "Все привилегии Premium",
      "Эксклюзивный доступ к бета-тестам",
      "Персональная поддержка",
      "Уникальные команды",
      "Скидка 25% в магазине",
      "Вечный статус",
    ],
    icon: "👑",
    category: "ranks",
  },
  {
    id: "resources_small",
    name: "Стартовый набор",
    price: 99,
    description: "Базовые ресурсы для быстрого старта",
    features: [
      "64 алмаза",
      "Набор железных инструментов",
      "16 золотых яблок",
      "Стартовая броня",
    ],
    icon: "⛏️",
    category: "resources",
  },
  {
    id: "resources_medium",
    name: "Набор строителя",
    price: 199,
    description: "Ресурсы для масштабных построек",
    features: [
      "1000 блоков камня",
      "500 блоков дерева",
      "200 стеклянных блоков",
      "Набор редких блоков",
      "Инструменты с зачарованиями",
    ],
    icon: "🏗️",
    category: "resources",
  },
  {
    id: "cosmetics_pets",
    name: "Питомцы",
    price: 149,
    description: "Уникальные питомцы-компаньоны",
    features: [
      "Выбор из 5 видов питомцев",
      "Уникальные способности",
      "Система прокачки",
      "Кастомизация внешнего вида",
    ],
    icon: "🐺",
    category: "cosmetics",
  },
];

const categories = [
  { id: "all", name: "Все товары", icon: "Package" },
  { id: "ranks", name: "Привилегии", icon: "Crown" },
  { id: "resources", name: "Ресурсы", icon: "Pickaxe" },
  { id: "cosmetics", name: "Косметика", icon: "Sparkles" },
];

export default function DonateShop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPackages =
    selectedCategory === "all"
      ? donatePackages
      : donatePackages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <section className="py-16 bg-minecraft-dirt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Донат магазин
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Поддержи сервер и получи уникальные привилегии и предметы!
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                border-2 border-black text-lg px-6 py-3 h-auto
                ${
                  selectedCategory === category.id
                    ? "bg-minecraft-grass text-white"
                    : "bg-minecraft-cobblestone text-white hover:bg-minecraft-grass"
                }
              `}
            >
              <Icon name={category.icon as any} size={20} className="mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Товары */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="bg-minecraft-cobblestone border-4 border-black relative overflow-hidden"
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-minecraft-grass text-white border-2 border-black">
                    Популярное
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <CardTitle className="text-2xl text-white">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {pkg.description}
                </CardDescription>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <span className="text-3xl font-bold text-minecraft-grass">
                    {pkg.price}₽
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {pkg.originalPrice}₽
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-minecraft-grass mt-1 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-minecraft-grass hover:bg-minecraft-emerald text-white border-2 border-black text-lg py-3 h-auto">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Информация об оплате */}
        <div className="mt-16 bg-minecraft-stone border-4 border-black p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Способы оплаты
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl mb-2">💳</div>
              <p className="text-sm">Банковские карты</p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm">Мобильные платежи</p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🥇</div>
              <p className="text-sm">Криптовалюта</p>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-sm">Электронные кошельки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
