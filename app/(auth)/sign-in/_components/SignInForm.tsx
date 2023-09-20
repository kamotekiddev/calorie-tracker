"use client";

import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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
import { useToast } from "@/components/ui/use-toast";
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
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<SignInFormField>({
    defaultValues,
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = (values: SignInFormField) =>
    signIn("credentials", { ...values, redirect: false }).then((res) => {
      if (!res?.ok || res?.error)
        toast({
          title: "Error Occured",
          description: "Error signing in",
          variant: "destructive",
        });
      router.replace("/dashboard");
    });

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
              type="password"
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
              href="/sign-up"
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
