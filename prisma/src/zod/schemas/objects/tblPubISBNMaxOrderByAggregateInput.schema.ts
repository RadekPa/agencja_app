import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubISBN1: SortOrderSchema.optional(),
  PubISBN2: SortOrderSchema.optional()
}).strict();
export const tblPubISBNMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPubISBNMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNMaxOrderByAggregateInput>;
export const tblPubISBNMaxOrderByAggregateInputObjectZodSchema = makeSchema();
