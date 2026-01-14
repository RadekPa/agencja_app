import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.literal(true).optional(),
  Date: z.literal(true).optional(),
  PayType: z.literal(true).optional(),
  Nasz_inv: z.literal(true).optional(),
  Waluta: z.literal(true).optional(),
  Kwota_wp_ywu: z.literal(true).optional(),
  Kwota_inv: z.literal(true).optional(),
  Tax_10_: z.literal(true).optional(),
  Tax: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AUTOR: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  WYD: z.literal(true).optional(),
  OWNAB: z.literal(true).optional(),
  GRAAL_INCOME: z.literal(true).optional(),
  Transfer: z.literal(true).optional()
}).strict();
export const PdxTRANSFERMinAggregateInputObjectSchema: z.ZodType<Prisma.PdxTRANSFERMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PdxTRANSFERMinAggregateInputType>;
export const PdxTRANSFERMinAggregateInputObjectZodSchema = makeSchema();
