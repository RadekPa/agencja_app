import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Wyci_g: SortOrderSchema.optional(),
  Nasz_inv: SortOrderSchema.optional(),
  Kwota_wp_ywu: SortOrderSchema.optional(),
  Graal_perc: SortOrderSchema.optional(),
  Kwota_wyp_aty: SortOrderSchema.optional(),
  Kwota_inv: SortOrderSchema.optional(),
  TaxPerc: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional(),
  Wyd_Debit: SortOrderSchema.optional(),
  Extra_Bank: SortOrderSchema.optional(),
  Transfer: SortOrderSchema.optional(),
  AGNR: SortOrderSchema.optional(),
  RIGHT: SortOrderSchema.optional(),
  Sum: SortOrderSchema.optional(),
  SumPLN: SortOrderSchema.optional(),
  GRAAL_INCOME: SortOrderSchema.optional(),
  Kurs: SortOrderSchema.optional(),
  GraalPLN: SortOrderSchema.optional()
}).strict();
export const pdxBilansSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.pdxBilansSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansSumOrderByAggregateInput>;
export const pdxBilansSumOrderByAggregateInputObjectZodSchema = makeSchema();
