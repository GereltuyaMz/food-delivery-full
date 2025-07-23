"use client";

import { FoodCard } from "@/components/home/FoodCard";

export default function FoodMenuPage() {
  const foodItems = [
    {
      id: "1",
      title: "Finger food",
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      price: 12.99,
      image: "/images/food1.png",
    },
    {
      id: "2",
      title: "Gourmet Burger",
      description:
        "Juicy beef patty with fresh lettuce, tomatoes, and special sauce.",
      price: 15.99,
      image: "/images/food2.png",
    },
    {
      id: "3",
      title: "Caesar Salad",
      description:
        "Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing.",
      price: 9.99,
      image: "/images/food3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {foodItems.map((item) => (
            <FoodCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
