import { z } from "zod";

export const UserDataSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  username: z.string(),
  email: z.string(),
  info: z
    .object({
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
      address: z.string().nullable(),
      details: z.string().nullable(),
    })
    .nullable(),
  profile: z
    .object({
      id: z.number(),
      documentId: z.string(),
      width: z.number(),
      height: z.number(),
      url: z.string(),
    })
    .nullable(),
});

export type UserData = z.infer<typeof UserDataSchema>;
