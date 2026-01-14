import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassSelectObjectSchema as dictTitMainClassSelectObjectSchema } from './dictTitMainClassSelect.schema';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './dictTitMainClassInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictTitMainClassSelectObjectSchema).optional(),
  include: z.lazy(() => dictTitMainClassIncludeObjectSchema).optional()
}).strict();
export const dictTitMainClassArgsObjectSchema = makeSchema();
export const dictTitMainClassArgsObjectZodSchema = makeSchema();
