import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.literal(true).optional(),
  PhoneNumber: z.literal(true).optional(),
  FirstName: z.literal(true).optional(),
  MiddleName: z.literal(true).optional(),
  LastName: z.literal(true).optional(),
  Informal: z.literal(true).optional(),
  Fax: z.literal(true).optional(),
  Email: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  ContactPosition: z.literal(true).optional(),
  Accountant: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblContactsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblContactsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblContactsCountAggregateInputType>;
export const TblContactsCountAggregateInputObjectZodSchema = makeSchema();
