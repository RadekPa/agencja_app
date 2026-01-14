import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesSelectObjectSchema as dictLanguagesSelectObjectSchema } from './dictLanguagesSelect.schema';
import { dictLanguagesIncludeObjectSchema as dictLanguagesIncludeObjectSchema } from './dictLanguagesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictLanguagesSelectObjectSchema).optional(),
  include: z.lazy(() => dictLanguagesIncludeObjectSchema).optional()
}).strict();
export const dictLanguagesArgsObjectSchema = makeSchema();
export const dictLanguagesArgsObjectZodSchema = makeSchema();
