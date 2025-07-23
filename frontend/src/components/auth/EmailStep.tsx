"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const emailSchema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please must enter your email"),
});

type EmailFormData = yup.InferType<typeof emailSchema>;

export const EmailStep = ({
  handleNext,
}: {
  handleNext: (email: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: yupResolver(emailSchema),
    mode: "onChange",
  });

  const onSubmit = (emailData: EmailFormData) => {
    handleNext(emailData.email);
  };

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

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className="h-12 text-base"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
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
