"use client";

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/utils";

const passwordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Please enter 6 characters long password")
    .required("Please must enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please must enter your password"),
});

type PasswordFormData = yup.InferType<typeof passwordSchema>;

export const PasswordStep = ({ emailData }: { emailData: string }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: yupResolver(passwordSchema),
    mode: "onChange",
  });

  const onSubmit = async (passwordData: PasswordFormData) => {
    try {
      const user = {
        email: emailData,
        password: passwordData.confirmPassword,
      };
      const response = await axios.post(`${apiUrl}/user/signUp`, user);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

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

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                {...register("password")}
                placeholder="Password"
                className="h-12 text-base pr-10"
                type={showPassword ? "text" : "password"}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-12 w-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeClosed className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register("confirmPassword")}
              placeholder="Confirm"
              className="h-12 text-base"
              type={showPassword ? "text" : "password"}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-password"
            checked={showPassword}
            onCheckedChange={() => setShowPassword(!showPassword)}
          />
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
