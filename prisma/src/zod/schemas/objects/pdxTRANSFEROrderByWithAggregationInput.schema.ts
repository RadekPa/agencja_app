import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { pdxTRANSFERCountOrderByAggregateInputObjectSchema as pdxTRANSFERCountOrderByAggregateInputObjectSchema } from './pdxTRANSFERCountOrderByAggregateInput.schema';
import { pdxTRANSFERAvgOrderByAggregateInputObjectSchema as pdxTRANSFERAvgOrderByAggregateInputObjectSchema } from './pdxTRANSFERAvgOrderByAggregateInput.schema';
import { pdxTRANSFERMaxOrderByAggregateInputObjectSchema as pdxTRANSFERMaxOrderByAggregateInputObjectSchema } from './pdxTRANSFERMaxOrderByAggregateInput.schema';
import { pdxTRANSFERMinOrderByAggregateInputObjectSchema as pdxTRANSFERMinOrderByAggregateInputObjectSchema } from './pdxTRANSFERMinOrderByAggregateInput.schema';
import { pdxTRANSFERSumOrderByAggregateInputObjectSchema as pdxTRANSFERSumOrderByAggregateInputObjectSchema } from './pdxTRANSFERSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PayType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Nasz_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Waluta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_wp_ywu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax_10_: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AUTOR: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  WYD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OWNAB: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GRAAL_INCOME: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Transfer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => pdxTRANSFERCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => pdxTRANSFERAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => pdxTRANSFERMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => pdxTRANSFERMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => pdxTRANSFERSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const pdxTRANSFEROrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.pdxTRANSFEROrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFEROrderByWithAggregationInput>;
export const pdxTRANSFEROrderByWithAggregationInputObjectZodSchema = makeSchema();
