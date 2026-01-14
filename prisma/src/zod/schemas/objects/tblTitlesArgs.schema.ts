import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesSelectObjectSchema as tblTitlesSelectObjectSchema } from './tblTitlesSelect.schema';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './tblTitlesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTitlesSelectObjectSchema).optional(),
  include: z.lazy(() => tblTitlesIncludeObjectSchema).optional()
}).strict();
export const tblTitlesArgsObjectSchema = makeSchema();
export const tblTitlesArgsObjectZodSchema = makeSchema();
