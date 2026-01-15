import * as z from 'zod';
export const ContactDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  phoneNumber: z.string().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  informal: z.number().int(),
  fax: z.string().optional(),
  email: z.string().optional(),
  userMod: z.string(),
  dateMod: z.date(),
  contactPosition: z.string().optional(),
  accountant: z.number().int().optional(),
  tblCustContacts: z.array(z.unknown())
}));