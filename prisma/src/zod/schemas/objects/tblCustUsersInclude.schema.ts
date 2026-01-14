import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblCustUsersIncludeObjectSchema: z.ZodType<Prisma.tblCustUsersInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersInclude>;
export const tblCustUsersIncludeObjectZodSchema = makeSchema();
