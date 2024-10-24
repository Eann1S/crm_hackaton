import { object, string } from "zod";
import z from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(4, "Password must be more than 4 characters")
    .max(32, "Password must be less than 32 characters"),
});
export const registerSchema = signInSchema.extend({
  repeat: string({
    required_error: "Password confirmation is required",
  }).min(1, "Password confirmation is required"),
}).refine((data) => data.password === data.repeat, {
  message: "Passwords do not match",
  path: ["repeat"],
});

export type SignInSchema = z.infer<typeof signInSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
