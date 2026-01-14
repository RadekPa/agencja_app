import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesArgsObjectSchema as dictLanguagesArgsObjectSchema } from './dictLanguagesArgs.schema'

const makeSchema = () => z.object({
  dictLanguages: z.union([z.boolean(), z.lazy(() => dictLanguagesArgsObjectSchema)]).optional()
}).strict();
export const dictArticlesIncludeObjectSchema: z.ZodType<Prisma.dictArticlesInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesInclude>;
export const dictArticlesIncludeObjectZodSchema = makeSchema();
