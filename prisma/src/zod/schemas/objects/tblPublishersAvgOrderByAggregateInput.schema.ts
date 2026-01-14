import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  ParentPubID: SortOrderSchema.optional()
}).strict();
export const tblPublishersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPublishersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersAvgOrderByAggregateInput>;
export const tblPublishersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
