import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsSelectObjectSchema as tblAgrEventsSelectObjectSchema } from './tblAgrEventsSelect.schema';
import { tblAgrEventsIncludeObjectSchema as tblAgrEventsIncludeObjectSchema } from './tblAgrEventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblAgrEventsSelectObjectSchema).optional(),
  include: z.lazy(() => tblAgrEventsIncludeObjectSchema).optional()
}).strict();
export const tblAgrEventsArgsObjectSchema = makeSchema();
export const tblAgrEventsArgsObjectZodSchema = makeSchema();
