"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const PasswordStep = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          Create a strong password
        </h1>
        <p className="text-gray-600">
          Create a strong password with letters, numbers.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Input placeholder="Password" className="h-12 text-base pr-10" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-12 w-10"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Input placeholder="Confirm" className="h-12 text-base" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="show-password" />
          <Label className="text-sm text-gray-600 cursor-pointer">
            Show password
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-gray-400 hover:bg-gray-500 text-white"
        >
          {"Let's Go"}
        </Button>
      </form>

      <div className="text-center">
        <span className="text-gray-600">Already have an account? </span>
        <Link href="/signin" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
};
