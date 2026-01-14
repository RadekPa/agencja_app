import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceSelectObjectSchema as tblAdvanceSelectObjectSchema } from './tblAdvanceSelect.schema';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './tblAdvanceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblAdvanceSelectObjectSchema).optional(),
  include: z.lazy(() => tblAdvanceIncludeObjectSchema).optional()
}).strict();
export const tblAdvanceArgsObjectSchema = makeSchema();
export const tblAdvanceArgsObjectZodSchema = makeSchema();
