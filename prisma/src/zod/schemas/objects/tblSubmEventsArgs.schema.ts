import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsSelectObjectSchema as tblSubmEventsSelectObjectSchema } from './tblSubmEventsSelect.schema';
import { tblSubmEventsIncludeObjectSchema as tblSubmEventsIncludeObjectSchema } from './tblSubmEventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblSubmEventsSelectObjectSchema).optional(),
  include: z.lazy(() => tblSubmEventsIncludeObjectSchema).optional()
}).strict();
export const tblSubmEventsArgsObjectSchema = makeSchema();
export const tblSubmEventsArgsObjectZodSchema = makeSchema();
