"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailStep } from "@/components/auth/EmailStep";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-start">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>  
        <EmailStep />
      </div>
    </div>
  );
}
