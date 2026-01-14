import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersSelectObjectSchema as tblUsersSelectObjectSchema } from './tblUsersSelect.schema';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './tblUsersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblUsersSelectObjectSchema).optional(),
  include: z.lazy(() => tblUsersIncludeObjectSchema).optional()
}).strict();
export const tblUsersArgsObjectSchema = makeSchema();
export const tblUsersArgsObjectZodSchema = makeSchema();
