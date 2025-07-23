"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailStep } from "@/components/auth/EmailStep";
import { PasswordStep } from "@/components/auth/PasswordStep";
import { useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [emailData, setEmailData] = useState("");

  const handleBack = () => {
    setStep(1);
  };

  const handleNext = (email: string) => {
    setEmailData(email);
    setStep(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-start">
          <Button
            onClick={handleBack}
            variant="outline"
            size="icon"
            className="h-10 w-10 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        {step === 1 && <EmailStep handleNext={handleNext} />}
        {step === 2 && <PasswordStep emailData={emailData} />}
      </div>
    </div>
  );
}
