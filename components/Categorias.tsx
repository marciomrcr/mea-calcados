"use client";

import { Clock, Heart, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type TabId = "Casual" | "Run" | "Gym" | "Sport" | "Mocassim";

type TabColor = "pink" | "orange" | "yellow" | "purple" | "green";

interface Tab {
  id: TabId;
  name: string;
  emoji: string;
  color: TabColor;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  rating: number;
  time: string;
}

type MenuItems = Record<TabId, MenuItem[]>;

export const Categorias: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("Casual");

  const tabs: Tab[] = [
    { id: "Casual", name: "Casual", emoji: "🍬", color: "pink" },
    { id: "Run", name: "Corrida", emoji: "🎂", color: "orange" },
    { id: "Gym", name: "Academia", emoji: "🥟", color: "yellow" },
    { id: "Sport", name: "Esporte", emoji: "🥧", color: "purple" },
    { id: "Mocassim", name: "Mocassim", emoji: "✨", color: "green" },
  ];

  const menuItems: MenuItems = {
    Casual: [
      {
        name: "Brigadeiro Gourmet",
        description:
          "Brigadeiros especiais com chocolate belga e coberturas variadas",
        price: "R$ 3,50",
        image: "/femininos/img6.webp",
        popular: true,
        rating: 4.9,
        time: "30 min",
      },
      {
        name: "Beijinho Premium",
        description: "Beijinhos com coco fresco e leite condensado artesanal",
        price: "R$ 3,00",
        image: "/femininos/img2.webp",
        rating: 4.8,
        time: "25 min",
      },
      {
        name: "Casadinho Especial",
        description: "Metade chocolate, metade coco - uma combinação perfeita",
        price: "R$ 3,25",
        image: "/femininos/img1.webp",
        rating: 4.7,
        time: "35 min",
      },
      {
        name: "Bem Casado",
        description: "Biscoito amanteigado recheado com doce de leite caseiro",
        price: "R$ 4,50",
        image: "/femininos/img5.webp",
        rating: 4.9,
        time: "40 min",
      },
    ],
    Run: [
      {
        name: "Bolo de Chocolate Duplo",
        description: "Massa de chocolate com recheio e cobertura de ganache",
        price: "R$ 65,00",
        image: "/femininos/img1.webp",
        popular: true,
        rating: 4.9,
        time: "2h",
      },
      {
        name: "Bolo Red Velvet",
        description:
          "Massa vermelha aveludada com cream cheese e frutas vermelhas",
        price: "R$ 75,00",
        image: "/femininos/img4.webp",
        rating: 4.8,
        time: "2h 30min",
      },
      {
        name: "Bolo de Cenoura com Chocolate",
        description:
          "Tradicional bolo de cenoura com cobertura cremosa de chocolate",
        price: "R$ 45,00",
        image: "/femininos/img1.webp",
        rating: 4.7,
        time: "1h 45min",
      },
      {
        name: "Bolo Personalizado",
        description: "Bolo customizado com tema e sabor de sua escolha",
        price: "A partir de R$ 85,00",
        image: "/femininos/img2.webp",
        rating: 5.0,
        time: "24h",
      },
    ],
    Gym: [
      {
        name: "Coxinha Tradicional",
        description:
          "Coxinha recheada com frango desfiado e temperos especiais",
        price: "R$ 4,50",
        image: "/femininos/img3.webp",
        popular: true,
        rating: 4.8,
        time: "15 min",
      },
      {
        name: "Pão de Açúcar",
        description:
          "Salgadinho doce com queijo e presunto, levemente adocicado",
        price: "R$ 3,75",
        image: "/femininos/img4.webp",
        rating: 4.6,
        time: "20 min",
      },
      {
        name: "Pastel Assado",
        description: "Pastel de forno recheado com queijo, presunto ou carne",
        price: "R$ 5,00",
        image: "/femininos/img5.webp",
        rating: 4.7,
        time: "25 min",
      },
      {
        name: "Empada Gourmet",
        description:
          "Empada artesanal com recheios variados e massa amanteigada",
        price: "R$ 6,50",
        image: "/femininos/img6.webp",
        rating: 4.9,
        time: "30 min",
      },
    ],
    Sport: [
      {
        name: "Torta de Limão",
        description: "Base crocante com creme de limão e merengue dourado",
        price: "R$ 55,00",
        image: "/tutor1.png",
        popular: true,
        rating: 4.9,
        time: "1h 30min",
      },
      {
        name: "Torta de Morango",
        description: "Torta cremosa com morangos frescos e Chantilly",
        price: "R$ 65,00",
        image: "/tutor2.png",
        rating: 4.8,
        time: "1h 45min",
      },
      {
        name: "Torta Holandesa",
        description: "Clássica torta com creme e cobertura de chocolate",
        price: "R$ 58,00",
        image: "/golden.png",
        rating: 4.7,
        time: "2h",
      },
      {
        name: "Torta Banoffee",
        description: "Torta inglesa com banana, doce de leite e Chantilly",
        price: "R$ 62,00",
        image: "/royal.png",
        rating: 4.8,
        time: "1h 50min",
      },
    ],
    Mocassim: [
      {
        name: "Kit Aniversário Premium",
        description: "Bolo + 50 docinhos + decoração completa para festa",
        price: "R$ 185,00",
        image: "/femininos/img1.webp",
        popular: true,
        rating: 5.0,
        time: "48h",
      },
      {
        name: "Mesa de Café da Manhã",
        description: "Seleção de doces e salgados para café especial",
        price: "R$ 120,00",
        image: "/femininos/img2.webp",
        rating: 4.9,
        time: "24h",
      },
      {
        name: "Cesta Presente",
        description: "Cesta personalizada com variedade de doces finos",
        price: "R$ 95,00",
        image: "/femininos/img3.webp",
        rating: 4.8,
        time: "12h",
      },
      {
        name: "Doces para Casamento",
        description: "Pacotes especiais para cerimônias e celebrações",
        price: "A partir de R$ 280,00",
        image: "/femininos/img4.webp",
        rating: 5.0,
        time: "72h",
      },
    ],
  };

  const getTabColor = (color: TabColor, isActive: boolean): string => {
    const colors: Record<TabColor, string> = {
      pink: isActive
        ? "bg-pink-500 text-white"
        : "bg-pink-100 text-pink-700 hover:bg-pink-200",
      orange: isActive
        ? "bg-orange-500 text-white"
        : "bg-orange-100 text-orange-700 hover:bg-orange-200",
      yellow: isActive
        ? "bg-yellow-500 text-white"
        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
      purple: isActive
        ? "bg-purple-500 text-white"
        : "bg-purple-100 text-purple-700 hover:bg-purple-200",
      green: isActive
        ? "bg-green-500 text-white"
        : "bg-green-100 text-green-700 hover:bg-green-200",
    };
    return colors[color];
  };

  const handleWhatsAppOrder = (itemName: string, price: string): void => {
    const message = `Olá! Gostaria de encomendar:\n🎂 ${itemName}\n💰 ${price}\n\nPoderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-pink-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl animate-pulse">🍰</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce delay-1000">
          🧁
        </div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-pulse delay-2000">
          🍪
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full mb-6 font-bold">
            📋 Todas as categoria
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
            Descubra o poder da tecnologia em cada passo em nossos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent block sm:inline sm:ml-4">
              Calçados
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de <span className="font-bold text-pink-600">100 opções</span>{" "}
            organizadas por categoria.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${getTabColor(
                tab.color,
                activeTab === tab.id
              )}`}
            >
              <span className="text-2xl mr-3">{tab.emoji}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {menuItems[activeTab].map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 hover:-translate-y-2">
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 POPULAR
                  </div>
                )}

                {/* Item Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating heart */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-6 h-6 text-pink-500 animate-bounce" />
                  </div>
                </div>

                {/* Item Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Rating and Time */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{item.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-2xl font-black text-green-600">
                      {item.price}
                    </div>
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(item.name, item.price)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 group shadow-lg"
                  >
                    <div className="flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span>Pedir Agora</span>
                    </div>
                  </button>

                  {/* Additional info */}
                  <div className="text-center text-xs text-gray-500 mt-2">
                    💳 PIX, Cartão ou Dinheiro
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Não achou o que procurava?
            </h3>
            <p className="text-xl mb-6">Entre em contato conosco!</p>
            <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:scale-105 transform">
              <MessageCircle className="w-6 h-6 inline mr-2" />
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
