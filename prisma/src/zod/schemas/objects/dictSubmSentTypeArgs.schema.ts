import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './dictSubmSentTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictSubmSentTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictSubmSentTypeIncludeObjectSchema).optional()
}).strict();
export const dictSubmSentTypeArgsObjectSchema = makeSchema();
export const dictSubmSentTypeArgsObjectZodSchema = makeSchema();
