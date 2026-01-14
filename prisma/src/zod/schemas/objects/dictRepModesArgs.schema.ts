import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './dictRepModesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictRepModesSelectObjectSchema).optional(),
  include: z.lazy(() => dictRepModesIncludeObjectSchema).optional()
}).strict();
export const dictRepModesArgsObjectSchema = makeSchema();
export const dictRepModesArgsObjectZodSchema = makeSchema();
