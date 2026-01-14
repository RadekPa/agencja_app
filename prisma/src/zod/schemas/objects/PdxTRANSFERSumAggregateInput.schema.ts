import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.literal(true).optional(),
  Nasz_inv: z.literal(true).optional(),
  Kwota_wp_ywu: z.literal(true).optional(),
  Kwota_inv: z.literal(true).optional(),
  Tax: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  GRAAL_INCOME: z.literal(true).optional(),
  Transfer: z.literal(true).optional()
}).strict();
export const PdxTRANSFERSumAggregateInputObjectSchema: z.ZodType<Prisma.PdxTRANSFERSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PdxTRANSFERSumAggregateInputType>;
export const PdxTRANSFERSumAggregateInputObjectZodSchema = makeSchema();
