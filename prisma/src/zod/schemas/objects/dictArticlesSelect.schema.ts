import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesArgsObjectSchema as dictLanguagesArgsObjectSchema } from './dictLanguagesArgs.schema'

const makeSchema = () => z.object({
  Article: z.boolean().optional(),
  LangAbb: z.boolean().optional(),
  dictLanguages: z.union([z.boolean(), z.lazy(() => dictLanguagesArgsObjectSchema)]).optional()
}).strict();
export const dictArticlesSelectObjectSchema: z.ZodType<Prisma.dictArticlesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesSelect>;
export const dictArticlesSelectObjectZodSchema = makeSchema();
