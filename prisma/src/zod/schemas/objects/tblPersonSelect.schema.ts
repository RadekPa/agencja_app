import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.boolean().optional(),
  LastName: z.boolean().optional(),
  FirstName: z.boolean().optional(),
  MiddleName: z.boolean().optional(),
  BirthDate: z.boolean().optional(),
  PESEL: z.boolean().optional(),
  Status: z.boolean().optional(),
  Address1: z.boolean().optional(),
  Address2: z.boolean().optional(),
  Zip: z.boolean().optional(),
  City: z.boolean().optional(),
  Country: z.boolean().optional(),
  MobileGRAAL: z.boolean().optional(),
  MobilePrivate: z.boolean().optional(),
  ExtGRAAL: z.boolean().optional(),
  emailGraal: z.boolean().optional(),
  emailPriv: z.boolean().optional()
}).strict();
export const tblPersonSelectObjectSchema: z.ZodType<Prisma.tblPersonSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonSelect>;
export const tblPersonSelectObjectZodSchema = makeSchema();
