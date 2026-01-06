import * as z from 'zod';
export const AuthorCreateResultSchema = z.object({
  id: z.number().int(),
  phoneNumber: z.string().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  informal: z.number().int(),
  fax: z.string().optional(),
  email: z.string().optional(),
  userMod: z.string(),
  dateMod: z.date(),
  contactPosition: z.string().optional(),
  accountant: z.number().int().optional()
});