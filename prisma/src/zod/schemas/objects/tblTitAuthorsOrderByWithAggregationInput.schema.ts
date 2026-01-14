import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitAuthorsCountOrderByAggregateInputObjectSchema as tblTitAuthorsCountOrderByAggregateInputObjectSchema } from './tblTitAuthorsCountOrderByAggregateInput.schema';
import { tblTitAuthorsAvgOrderByAggregateInputObjectSchema as tblTitAuthorsAvgOrderByAggregateInputObjectSchema } from './tblTitAuthorsAvgOrderByAggregateInput.schema';
import { tblTitAuthorsMaxOrderByAggregateInputObjectSchema as tblTitAuthorsMaxOrderByAggregateInputObjectSchema } from './tblTitAuthorsMaxOrderByAggregateInput.schema';
import { tblTitAuthorsMinOrderByAggregateInputObjectSchema as tblTitAuthorsMinOrderByAggregateInputObjectSchema } from './tblTitAuthorsMinOrderByAggregateInput.schema';
import { tblTitAuthorsSumOrderByAggregateInputObjectSchema as tblTitAuthorsSumOrderByAggregateInputObjectSchema } from './tblTitAuthorsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  Main: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Lp: SortOrderSchema.optional(),
  _count: z.lazy(() => tblTitAuthorsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTitAuthorsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTitAuthorsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTitAuthorsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTitAuthorsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTitAuthorsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsOrderByWithAggregationInput>;
export const tblTitAuthorsOrderByWithAggregationInputObjectZodSchema = makeSchema();
