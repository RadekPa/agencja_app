import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubName: SortOrderSchema.optional(),
  PubAbb: SortOrderSchema.optional(),
  ParentPubID: SortOrderSchema.optional()
}).strict();
export const tblPublishersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPublishersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersMaxOrderByAggregateInput>;
export const tblPublishersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
