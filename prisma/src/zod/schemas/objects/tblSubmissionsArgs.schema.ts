import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsSelectObjectSchema as tblSubmissionsSelectObjectSchema } from './tblSubmissionsSelect.schema';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './tblSubmissionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblSubmissionsSelectObjectSchema).optional(),
  include: z.lazy(() => tblSubmissionsIncludeObjectSchema).optional()
}).strict();
export const tblSubmissionsArgsObjectSchema = makeSchema();
export const tblSubmissionsArgsObjectZodSchema = makeSchema();
