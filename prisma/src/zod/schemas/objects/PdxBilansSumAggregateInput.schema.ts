import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.literal(true).optional(),
  Wyci_g: z.literal(true).optional(),
  Nasz_inv: z.literal(true).optional(),
  Kwota_wp_ywu: z.literal(true).optional(),
  Graal_perc: z.literal(true).optional(),
  Kwota_wyp_aty: z.literal(true).optional(),
  Kwota_inv: z.literal(true).optional(),
  TaxPerc: z.literal(true).optional(),
  Tax: z.literal(true).optional(),
  Wyd_Debit: z.literal(true).optional(),
  Extra_Bank: z.literal(true).optional(),
  Transfer: z.literal(true).optional(),
  AGNR: z.literal(true).optional(),
  RIGHT: z.literal(true).optional(),
  Sum: z.literal(true).optional(),
  SumPLN: z.literal(true).optional(),
  GRAAL_INCOME: z.literal(true).optional(),
  Kurs: z.literal(true).optional(),
  GraalPLN: z.literal(true).optional()
}).strict();
export const PdxBilansSumAggregateInputObjectSchema: z.ZodType<Prisma.PdxBilansSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PdxBilansSumAggregateInputType>;
export const PdxBilansSumAggregateInputObjectZodSchema = makeSchema();
