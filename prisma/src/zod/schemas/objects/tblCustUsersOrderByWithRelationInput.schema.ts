import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { tblUsersOrderByWithRelationInputObjectSchema as tblUsersOrderByWithRelationInputObjectSchema } from './tblUsersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  tblUsers: z.lazy(() => tblUsersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblCustUsersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCustUsersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersOrderByWithRelationInput>;
export const tblCustUsersOrderByWithRelationInputObjectZodSchema = makeSchema();
