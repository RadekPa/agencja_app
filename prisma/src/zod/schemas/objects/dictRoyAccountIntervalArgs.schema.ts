import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalSelectObjectSchema as dictRoyAccountIntervalSelectObjectSchema } from './dictRoyAccountIntervalSelect.schema';
import { dictRoyAccountIntervalIncludeObjectSchema as dictRoyAccountIntervalIncludeObjectSchema } from './dictRoyAccountIntervalInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictRoyAccountIntervalSelectObjectSchema).optional(),
  include: z.lazy(() => dictRoyAccountIntervalIncludeObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalArgsObjectSchema = makeSchema();
export const dictRoyAccountIntervalArgsObjectZodSchema = makeSchema();
