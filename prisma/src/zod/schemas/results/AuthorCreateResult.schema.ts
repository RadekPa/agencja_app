import * as z from 'zod';
export const AuthorCreateResultSchema = z.object({
  id: z.number().int(),
  fullName: z.string().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  suffix: z.string().optional(),
  penName: z.string().optional(),
  userMod: z.string(),
  dateMod: z.date(),
  remarks: z.string().optional()
});