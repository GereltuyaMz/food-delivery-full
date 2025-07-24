"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";

type FoodCardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export function FoodCard({
  title,
  description,
  price,
  image,
  setOpenModal,
}: FoodCardProps) {
  return (
    <Card
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden py-0"
      onClick={() => setOpenModal(true)}
    >
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <Button
          size="icon"
          className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white hover:bg-gray-50 text-red-500 hover:text-red-600 shadow-md cursor-pointer"
          variant="outline"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <CardContent className="px-6 pb-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-red-500">{title}</h3>
          <span className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
