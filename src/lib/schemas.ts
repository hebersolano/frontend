import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5).max(50),
  message: z.string(),
});

export { ContactFormSchema };
