import * as z from 'zod';
export const tblPersonUpsertResultSchema = z.object({
  PersonID: z.number().int(),
  LastName: z.string(),
  FirstName: z.string(),
  MiddleName: z.string().optional(),
  BirthDate: z.date().optional(),
  PESEL: z.string().optional(),
  Status: z.string().optional(),
  Address1: z.string().optional(),
  Address2: z.string().optional(),
  Zip: z.string().optional(),
  City: z.string().optional(),
  Country: z.string().optional(),
  MobileGRAAL: z.string().optional(),
  MobilePrivate: z.string().optional(),
  ExtGRAAL: z.string().optional(),
  emailGraal: z.string().optional(),
  emailPriv: z.string().optional()
});