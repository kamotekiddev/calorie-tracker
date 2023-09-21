"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/form-elements/FormInput";
import { Form } from "@/components/ui/form";
import { PlanFields, PlanSchema } from "@/model/plan-sechema";
import useCreatePlan from "@/hooks/usePlan";

const defaultValues: PlanFields = {
  target_calories: 1500,
  name: "",
};

function CreatePlan() {
  const router = useRouter();
  const createPlan = useCreatePlan();

  const form = useForm<PlanFields>({
    defaultValues,
    resolver: zodResolver(PlanSchema),
  });

  const onSubmit = async (values: PlanFields) => {
    try {
      await createPlan.mutateAsync(values);
      router.replace("/dashboard");
    } catch (error) {}
  };

  return (
    <main className="p-4 h-screen grid place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle className="font-extrabold">Create Plan</CardTitle>
              <CardDescription>
                Fill the details of your current plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormInput label="Plan Name" name="name" control={form.control} />
              <FormInput
                label="Target Calorie"
                name="target_calories"
                control={form.control}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button disabled={createPlan.isLoading} type="submit">
                Create Plan
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}

export default CreatePlan;
