import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPdoxInvMatCountOrderByAggregateInputObjectSchema as tblPdoxInvMatCountOrderByAggregateInputObjectSchema } from './tblPdoxInvMatCountOrderByAggregateInput.schema';
import { tblPdoxInvMatAvgOrderByAggregateInputObjectSchema as tblPdoxInvMatAvgOrderByAggregateInputObjectSchema } from './tblPdoxInvMatAvgOrderByAggregateInput.schema';
import { tblPdoxInvMatMaxOrderByAggregateInputObjectSchema as tblPdoxInvMatMaxOrderByAggregateInputObjectSchema } from './tblPdoxInvMatMaxOrderByAggregateInput.schema';
import { tblPdoxInvMatMinOrderByAggregateInputObjectSchema as tblPdoxInvMatMinOrderByAggregateInputObjectSchema } from './tblPdoxInvMatMinOrderByAggregateInput.schema';
import { tblPdoxInvMatSumOrderByAggregateInputObjectSchema as tblPdoxInvMatSumOrderByAggregateInputObjectSchema } from './tblPdoxInvMatSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPdoxInvMatCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPdoxInvMatAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPdoxInvMatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPdoxInvMatMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPdoxInvMatSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPdoxInvMatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatOrderByWithAggregationInput>;
export const tblPdoxInvMatOrderByWithAggregationInputObjectZodSchema = makeSchema();
