import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  ParentPubID: SortOrderSchema.optional()
}).strict();
export const tblPublishersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPublishersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersSumOrderByAggregateInput>;
export const tblPublishersSumOrderByAggregateInputObjectZodSchema = makeSchema();
