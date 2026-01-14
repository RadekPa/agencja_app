import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Waluta: SortOrderSchema.optional(),
  Wyci_g: SortOrderSchema.optional(),
  Data_wyc: SortOrderSchema.optional(),
  Nasz_inv: SortOrderSchema.optional(),
  Type: SortOrderSchema.optional(),
  Kwota_wp_ywu: SortOrderSchema.optional(),
  PayType: SortOrderSchema.optional(),
  Graal_perc: SortOrderSchema.optional(),
  Kwota_wyp_aty: SortOrderSchema.optional(),
  Kwota_inv: SortOrderSchema.optional(),
  Tax_10_: SortOrderSchema.optional(),
  TaxPerc: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional(),
  Wyd_Debit: SortOrderSchema.optional(),
  Extra_Bank: SortOrderSchema.optional(),
  Transfer: SortOrderSchema.optional(),
  AGNR: SortOrderSchema.optional(),
  RIGHT: SortOrderSchema.optional(),
  AUTOR: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  WYDAB: SortOrderSchema.optional(),
  WYD: SortOrderSchema.optional(),
  OWNAB: SortOrderSchema.optional(),
  OWNER: SortOrderSchema.optional(),
  Sum: SortOrderSchema.optional(),
  SumPLN: SortOrderSchema.optional(),
  GRAAL_INCOME: SortOrderSchema.optional(),
  Kurs: SortOrderSchema.optional(),
  GraalPLN: SortOrderSchema.optional(),
  Notes: SortOrderSchema.optional()
}).strict();
export const pdxBilansMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.pdxBilansMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansMinOrderByAggregateInput>;
export const pdxBilansMinOrderByAggregateInputObjectZodSchema = makeSchema();
