import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.string().max(10)
}).strict();
export const dictArticlesCreateManyDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesCreateManyDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateManyDictLanguagesInput>;
export const dictArticlesCreateManyDictLanguagesInputObjectZodSchema = makeSchema();
