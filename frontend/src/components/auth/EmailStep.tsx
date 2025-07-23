"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EmailStep = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          Create your account
        </h1>
        <p className="text-gray-600">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="h-12 text-base"
          />
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
