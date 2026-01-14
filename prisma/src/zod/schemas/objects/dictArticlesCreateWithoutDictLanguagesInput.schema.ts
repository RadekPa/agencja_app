import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.string().max(10)
}).strict();
export const dictArticlesCreateWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesCreateWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateWithoutDictLanguagesInput>;
export const dictArticlesCreateWithoutDictLanguagesInputObjectZodSchema = makeSchema();
