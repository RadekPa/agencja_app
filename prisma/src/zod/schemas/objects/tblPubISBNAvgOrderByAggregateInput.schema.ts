import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional()
}).strict();
export const tblPubISBNAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPubISBNAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNAvgOrderByAggregateInput>;
export const tblPubISBNAvgOrderByAggregateInputObjectZodSchema = makeSchema();
