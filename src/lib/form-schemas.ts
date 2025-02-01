import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(50),
  message: z.string(),
});
export type ContactFormTypes = z.infer<typeof ContactFormSchema>;

const name = z
  .string()
  .max(30)
  .regex(/^[a-zA-Z]+$/, "No numbers or special characters allowed")
  .optional(); // for first name and last name

const username = z
  .string()
  .min(2)
  .max(25)
  .regex(/^[a-z0-9_]+$/, "No special or uppercase characters allowed");

const password = z
  .string()
  .min(8)
  .regex(/[a-z]/, "Must contain at least one lowercase character")
  .regex(/[A-Z]/, "Must contain at least one uppercase character")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(
    /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/,
    "Must contain at least one special character",
  );

export const SignupFormSchema = z
  .object({
    username,
    email: z.string().email(),
    password,
    validatePassword: password,
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


export const authFormSchemas = {
  signup: SignupFormSchema,
  login: LoginFormSchema,
};
export type AuthFormType = SignupFormTypes | LoginFormTypes;

export const profileFormSchema = z.object({
  firstName: name,
  lastName: name,
  username,
  email: z.string().email(),
  address: z.string().max(160).min(4).optional(),
});
export type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Change Password Schemas
export const changePasswordSchema = z
  .object({
    currentPassword: password,
    password: password,
    passwordConfirmation: password,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password must match",
    path: ["validatePassword"],
  });
export type ChangePasswordTypes = z.infer<typeof changePasswordSchema>;
