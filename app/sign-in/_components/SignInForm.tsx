"use client";

import * as z from "zod";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-elements/FormInput";
import Link from "next/link";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
});

type SignInFormField = z.infer<typeof signInFormSchema>;

const defaultValues: SignInFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const form = useForm<SignInFormField>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = (values: SignInFormField) => {
    console.log(values);
  };

  const loginWithGoogle = () => signIn("google", { callbackUrl: "/dashboard" });

  return (
    <Form {...form}>
      <Card className="max-w-[400px] w-full">
        <CardHeader>
          <CardTitle className="text-xl font-extrabold text-center">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="email" label="Email" control={form.control} />
            <FormInput
              name="password"
              label="Password"
              control={form.control}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button
              onClick={loginWithGoogle}
              variant="outline"
              className="w-full"
              type="button"
            >
              Continue with Google
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm w-full text-center">
            Need an account?{" "}
            <Link
              href="/"
              className="text-primary hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </Form>
  );
}

export default SignInForm;
