import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  CustID: z.boolean().optional(),
  Login: z.boolean().optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblCustUsersSelectObjectSchema: z.ZodType<Prisma.tblCustUsersSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersSelect>;
export const tblCustUsersSelectObjectZodSchema = makeSchema();
