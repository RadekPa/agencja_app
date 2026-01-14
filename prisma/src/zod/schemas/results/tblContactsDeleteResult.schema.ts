import * as z from 'zod';
export const tblContactsDeleteResultSchema = z.nullable(z.object({
  ContactID: z.number().int(),
  PhoneNumber: z.string().optional(),
  FirstName: z.string().optional(),
  MiddleName: z.string().optional(),
  LastName: z.string().optional(),
  Informal: z.number().int(),
  Fax: z.string().optional(),
  Email: z.string().optional(),
  UserMod: z.string(),
  DateMod: z.date(),
  ContactPosition: z.string().optional(),
  Accountant: z.number().int().optional(),
  tblCustContacts: z.array(z.unknown())
}));