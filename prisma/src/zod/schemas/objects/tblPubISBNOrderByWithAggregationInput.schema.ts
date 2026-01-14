import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblPubISBNCountOrderByAggregateInputObjectSchema as tblPubISBNCountOrderByAggregateInputObjectSchema } from './tblPubISBNCountOrderByAggregateInput.schema';
import { tblPubISBNAvgOrderByAggregateInputObjectSchema as tblPubISBNAvgOrderByAggregateInputObjectSchema } from './tblPubISBNAvgOrderByAggregateInput.schema';
import { tblPubISBNMaxOrderByAggregateInputObjectSchema as tblPubISBNMaxOrderByAggregateInputObjectSchema } from './tblPubISBNMaxOrderByAggregateInput.schema';
import { tblPubISBNMinOrderByAggregateInputObjectSchema as tblPubISBNMinOrderByAggregateInputObjectSchema } from './tblPubISBNMinOrderByAggregateInput.schema';
import { tblPubISBNSumOrderByAggregateInputObjectSchema as tblPubISBNSumOrderByAggregateInputObjectSchema } from './tblPubISBNSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubISBN1: SortOrderSchema.optional(),
  PubISBN2: SortOrderSchema.optional(),
  _count: z.lazy(() => tblPubISBNCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPubISBNAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPubISBNMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPubISBNMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPubISBNSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPubISBNOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPubISBNOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNOrderByWithAggregationInput>;
export const tblPubISBNOrderByWithAggregationInputObjectZodSchema = makeSchema();
