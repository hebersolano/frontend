import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(50),
  message: z.string(),
});

export type ContactFormTypes = z.infer<typeof ContactFormSchema>;

export const SignupFormSchema = z
  .object({
    username: z
      .string()
      .min(2)
      .max(25)
      .regex(/^[a-z0-9_]+$/, "No special or uppercase characters allowed"),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[a-z]/, "Must contain at least one lowercase character")
      .regex(/[A-Z]/, "Must contain at least one uppercase character")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(
        /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/,
        "Must contain at least one special character",
      ),
    validatePassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.validatePassword, {
    message: "Password must match",
    path: ["validatePassword"],
  });

export type SignupFormTypes = z.infer<typeof SignupFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginFormTypes = z.infer<typeof LoginFormSchema>;

export type AuthFormType = SignupFormTypes | LoginFormTypes;

export const authFormSchemas = {
  signup: SignupFormSchema,
  login: LoginFormSchema,
};

export const profileFormSchema = z.object({
  firstName: z.string().max(30).optional(),
  lastName: z.string().max(30).optional(),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z.string().email(),
  address: z.string().max(160).min(4),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
