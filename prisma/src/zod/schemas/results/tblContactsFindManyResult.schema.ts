import * as z from 'zod';
export const tblContactsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});