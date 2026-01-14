import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPersonCountOrderByAggregateInputObjectSchema as tblPersonCountOrderByAggregateInputObjectSchema } from './tblPersonCountOrderByAggregateInput.schema';
import { tblPersonAvgOrderByAggregateInputObjectSchema as tblPersonAvgOrderByAggregateInputObjectSchema } from './tblPersonAvgOrderByAggregateInput.schema';
import { tblPersonMaxOrderByAggregateInputObjectSchema as tblPersonMaxOrderByAggregateInputObjectSchema } from './tblPersonMaxOrderByAggregateInput.schema';
import { tblPersonMinOrderByAggregateInputObjectSchema as tblPersonMinOrderByAggregateInputObjectSchema } from './tblPersonMinOrderByAggregateInput.schema';
import { tblPersonSumOrderByAggregateInputObjectSchema as tblPersonSumOrderByAggregateInputObjectSchema } from './tblPersonSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  LastName: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  BirthDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PESEL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address1: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Zip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  City: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MobileGRAAL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MobilePrivate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ExtGRAAL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailGraal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailPriv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPersonCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPersonAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPersonMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPersonMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPersonSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPersonOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPersonOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonOrderByWithAggregationInput>;
export const tblPersonOrderByWithAggregationInputObjectZodSchema = makeSchema();
