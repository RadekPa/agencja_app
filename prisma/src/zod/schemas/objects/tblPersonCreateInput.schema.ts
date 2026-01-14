import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.number().int(),
  LastName: z.string().max(50),
  FirstName: z.string().max(50),
  MiddleName: z.string().max(50).optional().nullable(),
  BirthDate: z.coerce.date().optional().nullable(),
  PESEL: z.string().max(11).optional().nullable(),
  Status: z.string().max(1).optional().nullable(),
  Address1: z.string().max(50).optional().nullable(),
  Address2: z.string().max(50).optional().nullable(),
  Zip: z.string().max(20).optional().nullable(),
  City: z.string().max(50).optional().nullable(),
  Country: z.string().max(50).optional().nullable(),
  MobileGRAAL: z.string().max(50).optional().nullable(),
  MobilePrivate: z.string().max(50).optional().nullable(),
  ExtGRAAL: z.string().max(2).optional().nullable(),
  emailGraal: z.string().max(50).optional().nullable(),
  emailPriv: z.string().max(50).optional().nullable()
}).strict();
export const tblPersonCreateInputObjectSchema: z.ZodType<Prisma.tblPersonCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonCreateInput>;
export const tblPersonCreateInputObjectZodSchema = makeSchema();
