import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPubLocalCountOrderByAggregateInputObjectSchema as tblPubLocalCountOrderByAggregateInputObjectSchema } from './tblPubLocalCountOrderByAggregateInput.schema';
import { tblPubLocalAvgOrderByAggregateInputObjectSchema as tblPubLocalAvgOrderByAggregateInputObjectSchema } from './tblPubLocalAvgOrderByAggregateInput.schema';
import { tblPubLocalMaxOrderByAggregateInputObjectSchema as tblPubLocalMaxOrderByAggregateInputObjectSchema } from './tblPubLocalMaxOrderByAggregateInput.schema';
import { tblPubLocalMinOrderByAggregateInputObjectSchema as tblPubLocalMinOrderByAggregateInputObjectSchema } from './tblPubLocalMinOrderByAggregateInput.schema';
import { tblPubLocalSumOrderByAggregateInputObjectSchema as tblPubLocalSumOrderByAggregateInputObjectSchema } from './tblPubLocalSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PubLocalID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Printrun: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalEdition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPubLocalCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPubLocalAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPubLocalMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPubLocalMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPubLocalSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPubLocalOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPubLocalOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalOrderByWithAggregationInput>;
export const tblPubLocalOrderByWithAggregationInputObjectZodSchema = makeSchema();
