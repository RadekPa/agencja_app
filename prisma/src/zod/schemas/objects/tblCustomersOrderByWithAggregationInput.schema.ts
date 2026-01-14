import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustomersCountOrderByAggregateInputObjectSchema as tblCustomersCountOrderByAggregateInputObjectSchema } from './tblCustomersCountOrderByAggregateInput.schema';
import { tblCustomersAvgOrderByAggregateInputObjectSchema as tblCustomersAvgOrderByAggregateInputObjectSchema } from './tblCustomersAvgOrderByAggregateInput.schema';
import { tblCustomersMaxOrderByAggregateInputObjectSchema as tblCustomersMaxOrderByAggregateInputObjectSchema } from './tblCustomersMaxOrderByAggregateInput.schema';
import { tblCustomersMinOrderByAggregateInputObjectSchema as tblCustomersMinOrderByAggregateInputObjectSchema } from './tblCustomersMinOrderByAggregateInput.schema';
import { tblCustomersSumOrderByAggregateInputObjectSchema as tblCustomersSumOrderByAggregateInputObjectSchema } from './tblCustomersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Account: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address1: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  City: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Zip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  StateAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultFax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultWWW: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ParentCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VATID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RepModeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefAgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Jurisdiction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionForeign: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblCustomersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCustomersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCustomersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCustomersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCustomersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCustomersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCustomersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersOrderByWithAggregationInput>;
export const tblCustomersOrderByWithAggregationInputObjectZodSchema = makeSchema();
