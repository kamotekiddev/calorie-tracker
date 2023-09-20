import * as z from "zod";
export const SignUpFormSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(4).nonempty(),
    password: z.string().nonempty(),
    confirm_password: z.string().nonempty(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password)
      ctx.addIssue({
        code: "custom",
        message: "Password does not match",
        path: ["confirm_password"],
      });
  });
