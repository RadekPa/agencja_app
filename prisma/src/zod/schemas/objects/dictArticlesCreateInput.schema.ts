import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateNestedOneWithoutDictArticlesInputObjectSchema as dictLanguagesCreateNestedOneWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateNestedOneWithoutDictArticlesInput.schema'

const makeSchema = () => z.object({
  Article: z.string().max(10),
  dictLanguages: z.lazy(() => dictLanguagesCreateNestedOneWithoutDictArticlesInputObjectSchema).optional()
}).strict();
export const dictArticlesCreateInputObjectSchema: z.ZodType<Prisma.dictArticlesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateInput>;
export const dictArticlesCreateInputObjectZodSchema = makeSchema();
