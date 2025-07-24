"use client";

import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export const FoodDetailModal = () => {
  return (
    <Dialog>
      <DialogContent className="max-w-md mx-auto bg-white rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="p-0">
          <DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
              <Image
                src="/images/foodDetail.png"
                alt="name"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-red-500">name</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              quidem?
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">
                Total price
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">0</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">$20</div>
          </div>

          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-2xl text-lg font-medium">
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
