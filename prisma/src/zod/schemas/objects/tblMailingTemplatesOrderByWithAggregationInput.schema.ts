import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblMailingTemplatesCountOrderByAggregateInputObjectSchema as tblMailingTemplatesCountOrderByAggregateInputObjectSchema } from './tblMailingTemplatesCountOrderByAggregateInput.schema';
import { tblMailingTemplatesAvgOrderByAggregateInputObjectSchema as tblMailingTemplatesAvgOrderByAggregateInputObjectSchema } from './tblMailingTemplatesAvgOrderByAggregateInput.schema';
import { tblMailingTemplatesMaxOrderByAggregateInputObjectSchema as tblMailingTemplatesMaxOrderByAggregateInputObjectSchema } from './tblMailingTemplatesMaxOrderByAggregateInput.schema';
import { tblMailingTemplatesMinOrderByAggregateInputObjectSchema as tblMailingTemplatesMinOrderByAggregateInputObjectSchema } from './tblMailingTemplatesMinOrderByAggregateInput.schema';
import { tblMailingTemplatesSumOrderByAggregateInputObjectSchema as tblMailingTemplatesSumOrderByAggregateInputObjectSchema } from './tblMailingTemplatesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TempID: SortOrderSchema.optional(),
  TempName: SortOrderSchema.optional(),
  TempPath: SortOrderSchema.optional(),
  TempSubject: SortOrderSchema.optional(),
  _count: z.lazy(() => tblMailingTemplatesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblMailingTemplatesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblMailingTemplatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblMailingTemplatesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblMailingTemplatesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblMailingTemplatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesOrderByWithAggregationInput>;
export const tblMailingTemplatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
