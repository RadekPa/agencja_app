import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './dictStatesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictStatesSelectObjectSchema).optional(),
  include: z.lazy(() => dictStatesIncludeObjectSchema).optional()
}).strict();
export const dictStatesArgsObjectSchema = makeSchema();
export const dictStatesArgsObjectZodSchema = makeSchema();
