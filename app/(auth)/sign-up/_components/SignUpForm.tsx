"use client";

import * as z from "zod";
import Link from "next/link";
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

import { SignUpFormSchema } from "@/model/user-schema";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-elements/FormInput";

type SignUpFormField = z.infer<typeof SignUpFormSchema>;

const defaultValues: SignUpFormField = {
  email: "",
  password: "",
  name: "",
  confirm_password: "",
};

function SignUpForm() {
  const form = useForm<SignUpFormField>({
    defaultValues,
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (values: SignUpFormField) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <Card className="max-w-[400px] w-full">
        <CardHeader>
          <CardTitle className="text-xl font-extrabold text-center">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput name="email" label="Email" control={form.control} />
            <FormInput name="name" label="Name" control={form.control} />
            <FormInput
              name="password"
              label="Password"
              type="password"
              control={form.control}
            />
            <FormInput
              name="confirm_password"
              label="Confirm Passowrd"
              type="password"
              control={form.control}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm w-full text-center">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-primary hover:underline font-semibold"
            >
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </Form>
  );
}

export default SignUpForm;
