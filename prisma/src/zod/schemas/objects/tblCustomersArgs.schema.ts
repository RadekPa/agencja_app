import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersSelectObjectSchema as tblCustomersSelectObjectSchema } from './tblCustomersSelect.schema';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './tblCustomersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCustomersSelectObjectSchema).optional(),
  include: z.lazy(() => tblCustomersIncludeObjectSchema).optional()
}).strict();
export const tblCustomersArgsObjectSchema = makeSchema();
export const tblCustomersArgsObjectZodSchema = makeSchema();
