import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesSelectObjectSchema as tblSeriesSelectObjectSchema } from './tblSeriesSelect.schema';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './tblSeriesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblSeriesSelectObjectSchema).optional(),
  include: z.lazy(() => tblSeriesIncludeObjectSchema).optional()
}).strict();
export const tblSeriesArgsObjectSchema = makeSchema();
export const tblSeriesArgsObjectZodSchema = makeSchema();
