import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustUsersOrderByRelationAggregateInputObjectSchema as tblCustUsersOrderByRelationAggregateInputObjectSchema } from './tblCustUsersOrderByRelationAggregateInput.schema';
import { tblUserAccessOrderByRelationAggregateInputObjectSchema as tblUserAccessOrderByRelationAggregateInputObjectSchema } from './tblUserAccessOrderByRelationAggregateInput.schema';
import { tblUserParamsOrderByRelationAggregateInputObjectSchema as tblUserParamsOrderByRelationAggregateInputObjectSchema } from './tblUserParamsOrderByRelationAggregateInput.schema'

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
  tblCustUsers: z.lazy(() => tblCustUsersOrderByRelationAggregateInputObjectSchema).optional(),
  tblUserAccess: z.lazy(() => tblUserAccessOrderByRelationAggregateInputObjectSchema).optional(),
  tblUserParams: z.lazy(() => tblUserParamsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblUsersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblUsersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersOrderByWithRelationInput>;
export const tblUsersOrderByWithRelationInputObjectZodSchema = makeSchema();
