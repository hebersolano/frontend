import { z } from "zod";

export const userDataSchema = z.object({
  user: z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    documentId: z.string(),
  }),
  jwt: z.string(),
});

export type UserData = z.infer<typeof userDataSchema>;
