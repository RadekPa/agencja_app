import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictMissRoyExcludeReasonCountOrderByAggregateInputObjectSchema as dictMissRoyExcludeReasonCountOrderByAggregateInputObjectSchema } from './dictMissRoyExcludeReasonCountOrderByAggregateInput.schema';
import { dictMissRoyExcludeReasonAvgOrderByAggregateInputObjectSchema as dictMissRoyExcludeReasonAvgOrderByAggregateInputObjectSchema } from './dictMissRoyExcludeReasonAvgOrderByAggregateInput.schema';
import { dictMissRoyExcludeReasonMaxOrderByAggregateInputObjectSchema as dictMissRoyExcludeReasonMaxOrderByAggregateInputObjectSchema } from './dictMissRoyExcludeReasonMaxOrderByAggregateInput.schema';
import { dictMissRoyExcludeReasonMinOrderByAggregateInputObjectSchema as dictMissRoyExcludeReasonMinOrderByAggregateInputObjectSchema } from './dictMissRoyExcludeReasonMinOrderByAggregateInput.schema';
import { dictMissRoyExcludeReasonSumOrderByAggregateInputObjectSchema as dictMissRoyExcludeReasonSumOrderByAggregateInputObjectSchema } from './dictMissRoyExcludeReasonSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ExcludeReasonDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictMissRoyExcludeReasonCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictMissRoyExcludeReasonAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictMissRoyExcludeReasonMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictMissRoyExcludeReasonMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictMissRoyExcludeReasonSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictMissRoyExcludeReasonOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonOrderByWithAggregationInput>;
export const dictMissRoyExcludeReasonOrderByWithAggregationInputObjectZodSchema = makeSchema();
