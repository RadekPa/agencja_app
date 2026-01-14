import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransferID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  AmtWired: SortOrderSchema.optional(),
  Notes: SortOrderSchema.optional()
}).strict();
export const ArTransferDetailMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailMaxOrderByAggregateInput>;
export const ArTransferDetailMaxOrderByAggregateInputObjectZodSchema = makeSchema();
