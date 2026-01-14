import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Date: SortOrderSchema.optional(),
  PayType: SortOrderSchema.optional(),
  Nasz_inv: SortOrderSchema.optional(),
  Waluta: SortOrderSchema.optional(),
  Kwota_wp_ywu: SortOrderSchema.optional(),
  Kwota_inv: SortOrderSchema.optional(),
  Tax_10_: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AUTOR: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  WYD: SortOrderSchema.optional(),
  OWNAB: SortOrderSchema.optional(),
  GRAAL_INCOME: SortOrderSchema.optional(),
  Transfer: SortOrderSchema.optional()
}).strict();
export const pdxTRANSFERMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFERMaxOrderByAggregateInput>;
export const pdxTRANSFERMaxOrderByAggregateInputObjectZodSchema = makeSchema();
