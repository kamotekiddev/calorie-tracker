import * as z from "zod";

export const CalorieIntakeSchema = z.object({
  calories: z.coerce.number().positive(),
  description: z.string().nonempty(),
});

export type CalorieIntakeFields = z.infer<typeof CalorieIntakeSchema>;
