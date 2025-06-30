import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: number;
}

const paymentMethods = [
  {
    id: "card",
    name: "Банковская карта",
    icon: "CreditCard",
    description: "Visa, MasterCard, МИР",
  },
  {
    id: "qiwi",
    name: "QIWI",
    icon: "Smartphone",
    description: "Оплата через QIWI кошелек",
  },
  {
    id: "yandex",
    name: "ЮMoney",
    icon: "Wallet",
    description: "Яндекс.Деньги",
  },
  {
    id: "crypto",
    name: "Криптовалюта",
    icon: "Bitcoin",
    description: "BTC, ETH, USDT",
  },
];

export default function PaymentModal({
  isOpen,
  onClose,
  packageName,
  packagePrice,
}: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика оплаты
    alert(
      `Оплата ${packageName} на сумму ${packagePrice}₽ для игрока ${nickname}`,
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-minecraft-stone border-4 border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Оформление покупки
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-minecraft-cobblestone"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Информация о товаре */}
            <Card className="bg-minecraft-cobblestone border-2 border-black">
              <CardHeader>
                <CardTitle className="text-white">Товар к покупке</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{packageName}</span>
                  <span className="text-2xl font-bold text-minecraft-grass">
                    {packagePrice}₽
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Данные игрока */}
            <Card className="bg-minecraft-cobblestone border-2 border-black">
              <CardHeader>
                <CardTitle className="text-white">Данные игрока</CardTitle>
                <CardDescription className="text-gray-300">
                  Укажите ваш игровой ник и email для связи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="nickname" className="text-white">
                    Игровой ник *
                  </Label>
                  <Input
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Введите ваш ник в игре"
                    required
                    className="bg-minecraft-dirt border-2 border-black text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="bg-minecraft-dirt border-2 border-black text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="comment" className="text-white">
                    Комментарий (необязательно)
                  </Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Дополнительная информация..."
                    className="bg-minecraft-dirt border-2 border-black text-white placeholder-gray-400"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Способ оплаты */}
            <Card className="bg-minecraft-cobblestone border-2 border-black">
              <CardHeader>
                <CardTitle className="text-white">Способ оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center space-x-3 p-3 border-2 border-gray-600 rounded hover:border-minecraft-grass"
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Icon
                          name={method.icon as any}
                          size={24}
                          className="text-white"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={method.id}
                            className="text-white font-medium cursor-pointer"
                          >
                            {method.name}
                          </Label>
                          <p className="text-gray-400 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Кнопки */}
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-2 border-white text-white hover:bg-white hover:text-minecraft-stone"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={!nickname || !email}
                className="flex-1 bg-minecraft-grass hover:bg-minecraft-emerald text-white border-2 border-black"
              >
                <Icon name="CreditCard" size={20} className="mr-2" />
                Перейти к оплате
              </Button>
            </div>
          </form>

          {/* Безопасность */}
          <div className="mt-6 p-4 bg-minecraft-dirt border-2 border-black rounded">
            <div className="flex items-center space-x-2 text-green-400 mb-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm font-medium">Безопасная оплата</span>
            </div>
            <p className="text-gray-400 text-xs">
              Все транзакции защищены SSL-шифрованием. Мы не храним данные ваших
              карт.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
