import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.boolean().optional(),
  Date: z.boolean().optional(),
  PayType: z.boolean().optional(),
  Nasz_inv: z.boolean().optional(),
  Waluta: z.boolean().optional(),
  Kwota_wp_ywu: z.boolean().optional(),
  Kwota_inv: z.boolean().optional(),
  Tax_10_: z.boolean().optional(),
  Tax: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  AUTOR: z.boolean().optional(),
  Title: z.boolean().optional(),
  WYD: z.boolean().optional(),
  OWNAB: z.boolean().optional(),
  GRAAL_INCOME: z.boolean().optional(),
  Transfer: z.boolean().optional()
}).strict();
export const pdxTRANSFERSelectObjectSchema: z.ZodType<Prisma.pdxTRANSFERSelect> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFERSelect>;
export const pdxTRANSFERSelectObjectZodSchema = makeSchema();
