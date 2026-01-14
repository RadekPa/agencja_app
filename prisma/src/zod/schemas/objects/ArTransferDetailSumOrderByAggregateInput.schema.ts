import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransferID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  AmtWired: SortOrderSchema.optional()
}).strict();
export const ArTransferDetailSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailSumOrderByAggregateInput>;
export const ArTransferDetailSumOrderByAggregateInputObjectZodSchema = makeSchema();
