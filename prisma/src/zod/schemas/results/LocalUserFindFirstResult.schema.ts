import * as z from 'zod';
export const LocalUserFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string().optional(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string(),
  permissions: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  locale: z.string()
}));