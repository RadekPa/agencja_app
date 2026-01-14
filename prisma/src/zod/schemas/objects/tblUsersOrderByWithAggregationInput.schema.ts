import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblUsersCountOrderByAggregateInputObjectSchema as tblUsersCountOrderByAggregateInputObjectSchema } from './tblUsersCountOrderByAggregateInput.schema';
import { tblUsersAvgOrderByAggregateInputObjectSchema as tblUsersAvgOrderByAggregateInputObjectSchema } from './tblUsersAvgOrderByAggregateInput.schema';
import { tblUsersMaxOrderByAggregateInputObjectSchema as tblUsersMaxOrderByAggregateInputObjectSchema } from './tblUsersMaxOrderByAggregateInput.schema';
import { tblUsersMinOrderByAggregateInputObjectSchema as tblUsersMinOrderByAggregateInputObjectSchema } from './tblUsersMinOrderByAggregateInput.schema';
import { tblUsersSumOrderByAggregateInputObjectSchema as tblUsersSumOrderByAggregateInputObjectSchema } from './tblUsersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LastName: SortOrderSchema.optional(),
  CompanyPosition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Birthday: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: SortOrderSchema.optional(),
  Initials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MobilePhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Sex: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Street: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ZipCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  City: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Nameday: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PersonID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblUsersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblUsersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblUsersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblUsersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblUsersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblUsersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblUsersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersOrderByWithAggregationInput>;
export const tblUsersOrderByWithAggregationInputObjectZodSchema = makeSchema();
