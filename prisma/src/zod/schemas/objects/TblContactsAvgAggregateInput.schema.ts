import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.literal(true).optional(),
  Informal: z.literal(true).optional(),
  Accountant: z.literal(true).optional()
}).strict();
export const TblContactsAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblContactsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblContactsAvgAggregateInputType>;
export const TblContactsAvgAggregateInputObjectZodSchema = makeSchema();
