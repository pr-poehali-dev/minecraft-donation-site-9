import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    title: "Игроков онлайн",
    value: "124",
    max: "200",
    percentage: 62,
    emoji: "👥",
    color: "minecraft-grass",
  },
  {
    title: "Время работы",
    value: "99.8%",
    subtitle: "за месяц",
    percentage: 99.8,
    emoji: "⚡",
    color: "minecraft-gold",
  },
  {
    title: "Построек создано",
    value: "15,847",
    subtitle: "всего",
    percentage: 85,
    emoji: "🏗️",
    color: "minecraft-iron",
  },
  {
    title: "TPS сервера",
    value: "19.8",
    max: "20.0",
    percentage: 99,
    emoji: "⚙️",
    color: "minecraft-redstone",
  },
];

const recentActivity = [
  {
    player: "Steve_2023",
    action: "построил замок",
    time: "2 мин назад",
    emoji: "🏰",
  },
  {
    player: "Alex_Pro",
    action: "нашел алмазы",
    time: "5 мин назад",
    emoji: "💎",
  },
  {
    player: "Creeper_Hunter",
    action: "победил дракона",
    time: "12 мин назад",
    emoji: "🐲",
  },
  {
    player: "BlockMaster",
    action: "создал ферму",
    time: "18 мин назад",
    emoji: "🌾",
  },
  {
    player: "RedstoneKing",
    action: "построил механизм",
    time: "25 мин назад",
    emoji: "🔧",
  },
];

export default function ServerStats() {
  return (
    <section className="bg-minecraft-stone py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Статистика Сервера
          </h2>
          <p className="text-xl text-gray-300">
            Следи за состоянием сервера в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`border-4 border-black bg-${stat.color}/20 hover:bg-${stat.color}/30 transition-colors`}
            >
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <CardTitle className="text-lg font-bold text-white">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                  {stat.max && (
                    <span className="text-lg text-gray-300">/{stat.max}</span>
                  )}
                </div>
                {stat.subtitle && (
                  <p className="text-sm text-gray-300">{stat.subtitle}</p>
                )}
                <Progress value={stat.percentage} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-4 border-black bg-minecraft-cobblestone/80">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <span className="text-2xl mr-2">📊</span>
                Активность сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-white">
                  <span>Новых игроков:</span>
                  <span className="font-bold text-minecraft-grass">+12</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Построек создано:</span>
                  <span className="font-bold text-minecraft-gold">+47</span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Блоков размещено:</span>
                  <span className="font-bold text-minecraft-diamond">
                    +8,432
                  </span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span>Мобов убито:</span>
                  <span className="font-bold text-minecraft-redstone">
                    +1,247
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-4 border-black bg-minecraft-cobblestone/80">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <span className="text-2xl mr-2">🕐</span>
                Последняя активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-white"
                  >
                    <span className="text-xl">{activity.emoji}</span>
                    <div className="flex-1">
                      <span className="font-bold text-minecraft-grass">
                        {activity.player}
                      </span>
                      <span className="text-gray-300"> {activity.action}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
