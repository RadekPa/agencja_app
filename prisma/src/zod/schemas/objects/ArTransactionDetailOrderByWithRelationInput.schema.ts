import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionOrderByWithRelationInputObjectSchema as ArTransactionOrderByWithRelationInputObjectSchema } from './ArTransactionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  ItemID: SortOrderSchema.optional(),
  TransactionID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTransaction: z.lazy(() => ArTransactionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ArTransactionDetailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailOrderByWithRelationInput>;
export const ArTransactionDetailOrderByWithRelationInputObjectZodSchema = makeSchema();
