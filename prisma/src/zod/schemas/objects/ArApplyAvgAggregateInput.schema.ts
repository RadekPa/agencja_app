import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ApplyID: z.literal(true).optional(),
  DebitID: z.literal(true).optional(),
  CreditID: z.literal(true).optional(),
  TaxPerc: z.literal(true).optional(),
  TaxAmt: z.literal(true).optional(),
  AmtApplied: z.literal(true).optional(),
  GraalPerc: z.literal(true).optional(),
  GraalAmt: z.literal(true).optional()
}).strict();
export const ArApplyAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArApplyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyAvgAggregateInputType>;
export const ArApplyAvgAggregateInputObjectZodSchema = makeSchema();
