import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustContactsCountOrderByAggregateInputObjectSchema as tblCustContactsCountOrderByAggregateInputObjectSchema } from './tblCustContactsCountOrderByAggregateInput.schema';
import { tblCustContactsAvgOrderByAggregateInputObjectSchema as tblCustContactsAvgOrderByAggregateInputObjectSchema } from './tblCustContactsAvgOrderByAggregateInput.schema';
import { tblCustContactsMaxOrderByAggregateInputObjectSchema as tblCustContactsMaxOrderByAggregateInputObjectSchema } from './tblCustContactsMaxOrderByAggregateInput.schema';
import { tblCustContactsMinOrderByAggregateInputObjectSchema as tblCustContactsMinOrderByAggregateInputObjectSchema } from './tblCustContactsMinOrderByAggregateInput.schema';
import { tblCustContactsSumOrderByAggregateInputObjectSchema as tblCustContactsSumOrderByAggregateInputObjectSchema } from './tblCustContactsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  DefaultContact: SortOrderSchema.optional(),
  TypeOfContact: SortOrderSchema.optional(),
  Phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CellPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsSameAsClient: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblCustContactsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCustContactsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCustContactsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCustContactsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCustContactsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCustContactsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCustContactsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsOrderByWithAggregationInput>;
export const tblCustContactsOrderByWithAggregationInputObjectZodSchema = makeSchema();
