import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesSelectObjectSchema as dictArticlesSelectObjectSchema } from './dictArticlesSelect.schema';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './dictArticlesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictArticlesSelectObjectSchema).optional(),
  include: z.lazy(() => dictArticlesIncludeObjectSchema).optional()
}).strict();
export const dictArticlesArgsObjectSchema = makeSchema();
export const dictArticlesArgsObjectZodSchema = makeSchema();
