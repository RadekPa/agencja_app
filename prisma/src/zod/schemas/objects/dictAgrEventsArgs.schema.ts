import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsSelectObjectSchema as dictAgrEventsSelectObjectSchema } from './dictAgrEventsSelect.schema';
import { dictAgrEventsIncludeObjectSchema as dictAgrEventsIncludeObjectSchema } from './dictAgrEventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictAgrEventsSelectObjectSchema).optional(),
  include: z.lazy(() => dictAgrEventsIncludeObjectSchema).optional()
}).strict();
export const dictAgrEventsArgsObjectSchema = makeSchema();
export const dictAgrEventsArgsObjectZodSchema = makeSchema();
