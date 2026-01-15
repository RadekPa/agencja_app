import * as z from 'zod';
export const ContactFindManyResultSchema = z.object({
  data: z.array(z.object({
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