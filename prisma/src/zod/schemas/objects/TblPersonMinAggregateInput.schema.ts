import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional(),
  LastName: z.literal(true).optional(),
  FirstName: z.literal(true).optional(),
  MiddleName: z.literal(true).optional(),
  BirthDate: z.literal(true).optional(),
  PESEL: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  Address1: z.literal(true).optional(),
  Address2: z.literal(true).optional(),
  Zip: z.literal(true).optional(),
  City: z.literal(true).optional(),
  Country: z.literal(true).optional(),
  MobileGRAAL: z.literal(true).optional(),
  MobilePrivate: z.literal(true).optional(),
  ExtGRAAL: z.literal(true).optional(),
  emailGraal: z.literal(true).optional(),
  emailPriv: z.literal(true).optional()
}).strict();
export const TblPersonMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonMinAggregateInputType>;
export const TblPersonMinAggregateInputObjectZodSchema = makeSchema();
