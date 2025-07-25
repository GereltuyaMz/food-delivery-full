"use client";

import { Header } from "@/components/layout";
import { useEffect, useState } from "react";
import { FoodCard, FoodDetailModal } from "@/components/home";
import axios from "axios";
import { apiUrl } from "@/lib/utils";
import { Food } from "@/lib/types";

export default function FoodMenuPage() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<Food[]>([
    {
      _id: "",
      foodName: "",
      price: 0,
      ingredients: "",
      image: "",
    },
  ]);
  const [food, setFood] = useState<Food>({
    foodName: "",
    price: 0,
    ingredients: "",
    image: "",
  });

  const getFoodData = async () => {
    const response = await axios.get(`${apiUrl}/food`);
    setData(response.data.data);
  };

  useEffect(() => {
    getFoodData();
  }, []);

  const handleClose = () => {
    setOpenModal(false);
  };

  const selectFood = async (foodId: string) => {
    const response = await axios.get(`${apiUrl}/food/${foodId}`);
    setFood(response.data.data);
    setOpenModal(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Our Menu
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.map((item) => (
              <FoodCard
                key={item._id}
                id={item._id || ""}
                title={item.foodName}
                description={item.ingredients}
                price={item.price}
                image={item.image}
                selectFood={selectFood}
              />
            ))}
          </div>
          <FoodDetailModal
            openModal={openModal}
            closeModal={handleClose}
            food={food}
          />
        </div>
      </div>
    </>
  );
}
