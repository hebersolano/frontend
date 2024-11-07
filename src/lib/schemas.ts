import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(50),
  message: z.string(),
});

export type ContactFormTypes = z.infer<typeof ContactFormSchema>;
