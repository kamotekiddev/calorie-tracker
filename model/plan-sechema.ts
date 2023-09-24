import * as z from 'zod';

export const PlanSchema = z.object({
    target_calories: z.coerce.number().positive(),
    name: z.string().nonempty(),
});

export type PlanFields = z.infer<typeof PlanSchema>;
