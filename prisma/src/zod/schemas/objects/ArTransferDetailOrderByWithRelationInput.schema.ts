import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionOrderByWithRelationInputObjectSchema as ArTransactionOrderByWithRelationInputObjectSchema } from './ArTransactionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  TransferID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  AmtWired: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTransaction: z.lazy(() => ArTransactionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ArTransferDetailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArTransferDetailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailOrderByWithRelationInput>;
export const ArTransferDetailOrderByWithRelationInputObjectZodSchema = makeSchema();
