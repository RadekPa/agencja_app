import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsSelectObjectSchema as dictEventsSelectObjectSchema } from './dictEventsSelect.schema';
import { dictEventsIncludeObjectSchema as dictEventsIncludeObjectSchema } from './dictEventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictEventsSelectObjectSchema).optional(),
  include: z.lazy(() => dictEventsIncludeObjectSchema).optional()
}).strict();
export const dictEventsArgsObjectSchema = makeSchema();
export const dictEventsArgsObjectZodSchema = makeSchema();
