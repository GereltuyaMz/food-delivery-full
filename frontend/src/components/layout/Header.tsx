"use client";

import { MapPin, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-lg font-bold">
              Nom<span className="text-red-500">Nom</span>
            </h1>
            <p className="text-xs text-gray-400">Swift delivery</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="bg-white text-gray-900 border-white hover:bg-gray-100 px-4 py-2 rounded-full text-sm"
          >
            <MapPin className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-red-500">Delivery address:</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white text-gray-900 border-white hover:bg-gray-100 rounded-full relative"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-red-500 text-white border-red-500 hover:bg-red-600 rounded-full"
              >
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-white border border-gray-200 shadow-lg"
            >
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Account</p>
                  <p className="text-xs leading-none text-gray-500"></p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
