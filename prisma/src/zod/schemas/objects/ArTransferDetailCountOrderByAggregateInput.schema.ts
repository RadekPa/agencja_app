import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransferID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  AmtWired: SortOrderSchema.optional(),
  Notes: SortOrderSchema.optional()
}).strict();
export const ArTransferDetailCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCountOrderByAggregateInput>;
export const ArTransferDetailCountOrderByAggregateInputObjectZodSchema = makeSchema();
