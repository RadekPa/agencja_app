import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './tblCustUsersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCustUsersSelectObjectSchema).optional(),
  include: z.lazy(() => tblCustUsersIncludeObjectSchema).optional()
}).strict();
export const tblCustUsersArgsObjectSchema = makeSchema();
export const tblCustUsersArgsObjectZodSchema = makeSchema();
