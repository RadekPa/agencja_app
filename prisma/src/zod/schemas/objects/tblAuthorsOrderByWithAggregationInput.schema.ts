import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAuthorsCountOrderByAggregateInputObjectSchema as tblAuthorsCountOrderByAggregateInputObjectSchema } from './tblAuthorsCountOrderByAggregateInput.schema';
import { tblAuthorsAvgOrderByAggregateInputObjectSchema as tblAuthorsAvgOrderByAggregateInputObjectSchema } from './tblAuthorsAvgOrderByAggregateInput.schema';
import { tblAuthorsMaxOrderByAggregateInputObjectSchema as tblAuthorsMaxOrderByAggregateInputObjectSchema } from './tblAuthorsMaxOrderByAggregateInput.schema';
import { tblAuthorsMinOrderByAggregateInputObjectSchema as tblAuthorsMinOrderByAggregateInputObjectSchema } from './tblAuthorsMinOrderByAggregateInput.schema';
import { tblAuthorsSumOrderByAggregateInputObjectSchema as tblAuthorsSumOrderByAggregateInputObjectSchema } from './tblAuthorsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  FullName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FirstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Suffix: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PenName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblAuthorsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblAuthorsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblAuthorsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblAuthorsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblAuthorsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblAuthorsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblAuthorsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsOrderByWithAggregationInput>;
export const tblAuthorsOrderByWithAggregationInputObjectZodSchema = makeSchema();
