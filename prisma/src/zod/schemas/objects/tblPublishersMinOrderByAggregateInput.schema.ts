import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubName: SortOrderSchema.optional(),
  PubAbb: SortOrderSchema.optional(),
  ParentPubID: SortOrderSchema.optional()
}).strict();
export const tblPublishersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPublishersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersMinOrderByAggregateInput>;
export const tblPublishersMinOrderByAggregateInputObjectZodSchema = makeSchema();
