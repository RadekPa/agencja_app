import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RightFormID: SortOrderSchema.optional(),
  RightFormDesc: SortOrderSchema.optional(),
  RightFormPL: SortOrderSchema.optional(),
  RightFormAbbPL: SortOrderSchema.optional(),
  RightFormAbbEN: SortOrderSchema.optional()
}).strict();
export const dictRightsFormCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictRightsFormCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormCountOrderByAggregateInput>;
export const dictRightsFormCountOrderByAggregateInputObjectZodSchema = makeSchema();
