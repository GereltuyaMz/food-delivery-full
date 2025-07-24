"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/utils";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please must enter your email"),
  password: yup
    .string()
    .min(6, "Please enter 6 characters long password")
    .required("Please must enter your password"),
});

type SignInFormData = yup.InferType<typeof signInSchema>;

export function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: SignInFormData) => {
    try {
      const response = await axios.post(`${apiUrl}/user/logIn`, formData);
      localStorage.setItem("email", response.data.user?.email);
      router.push("/");
      return response.data.user;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Log in</CardTitle>
        <CardDescription className="text-muted-foreground">
          Log in to enjoy your favorite dishes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={`${errors.email ? "border-red-400" : ""}`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div className="flex justify-start">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password ?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            {"Let's Go"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
