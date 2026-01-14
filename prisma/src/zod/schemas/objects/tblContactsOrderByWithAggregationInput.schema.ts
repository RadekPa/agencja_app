import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblContactsCountOrderByAggregateInputObjectSchema as tblContactsCountOrderByAggregateInputObjectSchema } from './tblContactsCountOrderByAggregateInput.schema';
import { tblContactsAvgOrderByAggregateInputObjectSchema as tblContactsAvgOrderByAggregateInputObjectSchema } from './tblContactsAvgOrderByAggregateInput.schema';
import { tblContactsMaxOrderByAggregateInputObjectSchema as tblContactsMaxOrderByAggregateInputObjectSchema } from './tblContactsMaxOrderByAggregateInput.schema';
import { tblContactsMinOrderByAggregateInputObjectSchema as tblContactsMinOrderByAggregateInputObjectSchema } from './tblContactsMinOrderByAggregateInput.schema';
import { tblContactsSumOrderByAggregateInputObjectSchema as tblContactsSumOrderByAggregateInputObjectSchema } from './tblContactsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  PhoneNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FirstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Informal: SortOrderSchema.optional(),
  Fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ContactPosition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Accountant: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblContactsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblContactsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblContactsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblContactsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblContactsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblContactsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblContactsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsOrderByWithAggregationInput>;
export const tblContactsOrderByWithAggregationInputObjectZodSchema = makeSchema();
