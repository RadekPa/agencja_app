import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblTitSubClassCountOrderByAggregateInputObjectSchema as tblTitSubClassCountOrderByAggregateInputObjectSchema } from './tblTitSubClassCountOrderByAggregateInput.schema';
import { tblTitSubClassAvgOrderByAggregateInputObjectSchema as tblTitSubClassAvgOrderByAggregateInputObjectSchema } from './tblTitSubClassAvgOrderByAggregateInput.schema';
import { tblTitSubClassMaxOrderByAggregateInputObjectSchema as tblTitSubClassMaxOrderByAggregateInputObjectSchema } from './tblTitSubClassMaxOrderByAggregateInput.schema';
import { tblTitSubClassMinOrderByAggregateInputObjectSchema as tblTitSubClassMinOrderByAggregateInputObjectSchema } from './tblTitSubClassMinOrderByAggregateInput.schema';
import { tblTitSubClassSumOrderByAggregateInputObjectSchema as tblTitSubClassSumOrderByAggregateInputObjectSchema } from './tblTitSubClassSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  _count: z.lazy(() => tblTitSubClassCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTitSubClassAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTitSubClassMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTitSubClassMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTitSubClassSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTitSubClassOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTitSubClassOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassOrderByWithAggregationInput>;
export const tblTitSubClassOrderByWithAggregationInputObjectZodSchema = makeSchema();
