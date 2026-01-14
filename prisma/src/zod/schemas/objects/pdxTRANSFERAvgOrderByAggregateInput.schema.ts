import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Nasz_inv: SortOrderSchema.optional(),
  Kwota_wp_ywu: SortOrderSchema.optional(),
  Kwota_inv: SortOrderSchema.optional(),
  Tax: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  GRAAL_INCOME: SortOrderSchema.optional(),
  Transfer: SortOrderSchema.optional()
}).strict();
export const pdxTRANSFERAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFERAvgOrderByAggregateInput>;
export const pdxTRANSFERAvgOrderByAggregateInputObjectZodSchema = makeSchema();
