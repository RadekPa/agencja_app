import * as z from 'zod';
export const tblCustContactsUpsertResultSchema = z.object({
  ContactID: z.number().int(),
  CustID: z.number().int(),
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().optional(),
  CellPhone: z.string().optional(),
  Fax: z.string().optional(),
  Email: z.string().optional(),
  IsSameAsClient: z.boolean().optional(),
  tblCustomers: z.unknown(),
  tblContacts: z.unknown()
});