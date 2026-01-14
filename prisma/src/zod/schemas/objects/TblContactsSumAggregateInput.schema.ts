import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.literal(true).optional(),
  Informal: z.literal(true).optional(),
  Accountant: z.literal(true).optional()
}).strict();
export const TblContactsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblContactsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblContactsSumAggregateInputType>;
export const TblContactsSumAggregateInputObjectZodSchema = makeSchema();
